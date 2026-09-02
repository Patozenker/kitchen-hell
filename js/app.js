/**
 * PATO'S KITCHEN - MOTOR PRINCIPAL DE LA APLICACIÓN
 * Alacena Inteligente, Smart Matcher de Recetas, Modo Cocina con Timers y WakeLock,
 * Lista de Compras y Persistencia Local.
 */

// =========================================================
// 1. ESTADO & PERSISTENCIA (HELL'S KITCHEN LOCALSTORAGE)
// =========================================================
const STORAGE_KEY = 'hells_kitchen_store_v2';
const LEGACY_STORAGE_KEY = 'patos_kitchen_store_v1';

let appState = {
  users: [],
  currentUser: 'user-pato',
  pantry: [],
  recipes: [],
  shoppingList: [],
  history: []
};

function loadState() {
  try {
    let raw = localStorage.getItem(STORAGE_KEY);
    let parsed = null;

    if (raw) {
      parsed = JSON.parse(raw);
    } else {
      // Migración desde versión previa patos_kitchen_store_v1
      const legacyRaw = localStorage.getItem(LEGACY_STORAGE_KEY);
      if (legacyRaw) {
        const legacyParsed = JSON.parse(legacyRaw);
        if (legacyParsed && Array.isArray(legacyParsed.pantry)) {
          parsed = {
            users: (typeof DEFAULT_FAMILY_USERS !== 'undefined') ? JSON.parse(JSON.stringify(DEFAULT_FAMILY_USERS)) : [
              { id: 'user-pato', name: 'Chef Pato', avatar: '👨‍🍳', role: 'admin' },
              { id: 'user-mama', name: 'Mamá', avatar: '👩‍🍳', role: 'member' },
              { id: 'user-hermano', name: 'Hermano', avatar: '🧑‍🍳', role: 'member' }
            ],
            currentUser: 'user-pato',
            pantry: legacyParsed.pantry || [],
            recipes: (legacyParsed.recipes || []).map(r => ({
              ...r,
              authorId: r.authorId || 'user-pato',
              authorName: r.authorName || 'Chef Pato',
              authorAvatar: r.authorAvatar || '👨‍🍳',
              isPrivate: r.isPrivate === true ? true : false
            })),
            shoppingList: legacyParsed.shoppingList || [],
            history: legacyParsed.history || []
          };
        }
      }
    }

    if (parsed && Array.isArray(parsed.pantry) && Array.isArray(parsed.recipes)) {
      appState = parsed;

      // Asegurar usuarios mínimos
      if (!Array.isArray(appState.users) || appState.users.length === 0) {
        appState.users = (typeof DEFAULT_FAMILY_USERS !== 'undefined') ? JSON.parse(JSON.stringify(DEFAULT_FAMILY_USERS)) : [
          { id: 'user-pato', name: 'Chef Pato', avatar: '👨‍🍳', role: 'admin' }
        ];
      }
      if (!appState.currentUser || !appState.users.some(u => u.id === appState.currentUser)) {
        appState.currentUser = appState.users[0]?.id || 'user-pato';
      }

      // Asegurar autoría y privacidad en todas las recetas existentes
      appState.recipes.forEach(r => {
        if (!r.authorId) r.authorId = 'user-pato';
        if (!r.authorName) r.authorName = 'Chef Pato';
        if (!r.authorAvatar) r.authorAvatar = '👨‍🍳';
        if (r.isPrivate === undefined) r.isPrivate = false;
      });

      // Sincronizar con el catálogo maestro para asegurar que todos los ingredientes existan (incluso con stock 0)
      if (typeof MASTER_PANTRY_CATALOG !== 'undefined' && Array.isArray(MASTER_PANTRY_CATALOG)) {
        const pantryMap = new Map();
        appState.pantry.forEach(p => pantryMap.set(p.id, p));

        MASTER_PANTRY_CATALOG.forEach(masterItem => {
          if (!pantryMap.has(masterItem.id)) {
            const existingByName = appState.pantry.find(p => p.name.toLowerCase() === masterItem.name.toLowerCase());
            if (!existingByName) {
              appState.pantry.push({
                ...masterItem,
                qty: 0 // Si no estaba registrado previamente, se incorpora con stock 0
              });
            }
          }
        });
      }

      updateMasterIngredientsDatalist();
      updateHeaderUserBadge();
      updateAuthorFilterDropdown();
      if (typeof window !== 'undefined') window.appState = appState;
      return;
    }
  } catch (e) {
    console.warn("Usando datos por defecto:", e);
  }

  // Semilla inicial
  appState = JSON.parse(JSON.stringify(DEFAULT_KITCHEN_DATA));
  saveState();
  updateMasterIngredientsDatalist();
  updateHeaderUserBadge();
  updateAuthorFilterDropdown();
  if (typeof window !== 'undefined') window.appState = appState;
}

// =========================================================
// 1.1 GESTIÓN DE USUARIOS Y SESIÓN FAMILIAR
// =========================================================

function getCurrentUser() {
  if (!appState.users || appState.users.length === 0) {
    return { id: 'user-pato', name: 'Chef Pato', avatar: '👨‍🍳', role: 'admin' };
  }
  return appState.users.find(u => u.id === appState.currentUser) || appState.users[0];
}

function updateHeaderUserBadge() {
  const user = getCurrentUser();
  const avatarEl = document.getElementById('headerUserAvatar');
  const nameEl = document.getElementById('headerUserName');
  const greetingEl = document.getElementById('heroGreeting');

  if (avatarEl) avatarEl.innerText = user.avatar || '👨‍🍳';
  if (nameEl) nameEl.innerText = user.name || 'Chef';
  if (greetingEl) greetingEl.innerText = `¿Qué cocinamos hoy, ${user.name}? 🔥`;
}

function openUserProfileModal() {
  const modal = document.getElementById('userProfileModal');
  const grid = document.getElementById('familyMembersGrid');
  if (!modal || !grid) return;

  grid.innerHTML = (appState.users || []).map(u => {
    const isActive = u.id === appState.currentUser;
    return `
      <div class="family-member-card ${isActive ? 'active' : ''}" onclick="switchUser('${u.id}')">
        ${isActive ? '<span class="family-card-check">✓</span>' : ''}
        <span class="family-card-avatar">${u.avatar || '👨‍🍳'}</span>
        <div class="family-card-name">${escapeAttr(u.name)}</div>
        <div class="family-card-role">${u.role === 'admin' ? '👑 Chef Principal' : '👨‍🍳 Chef Familiar'}</div>
      </div>
    `;
  }).join('');

  modal.style.display = 'flex';
}

function closeUserProfileModal() {
  const modal = document.getElementById('userProfileModal');
  if (modal) modal.style.display = 'none';
}

function switchUser(userId) {
  const user = appState.users.find(u => u.id === userId);
  if (!user) return;

  appState.currentUser = userId;
  saveState();
  updateHeaderUserBadge();
  closeUserProfileModal();

  if (currentTab === 'matcher') renderSmartMatcher();
  if (currentTab === 'recetas') renderRecipesView();

  showToast(`👨‍🍳 Sesión activa: ¡Bienvenido/a, ${user.name}!`, 'success');
}

function handleCreateFamilyMember(e) {
  if (e) e.preventDefault();

  const nameInp = document.getElementById('inpNewUserName');
  const avatarInp = document.getElementById('inpNewUserAvatar');
  const name = nameInp?.value.trim();
  const avatar = avatarInp?.value || '👨‍🍳';

  if (!name) return;

  const newUser = {
    id: `user-${Date.now()}`,
    name,
    avatar,
    role: 'member'
  };

  appState.users.push(newUser);
  appState.currentUser = newUser.id;
  saveState();

  if (nameInp) nameInp.value = '';

  updateHeaderUserBadge();
  updateAuthorFilterDropdown();
  closeUserProfileModal();

  if (currentTab === 'matcher') renderSmartMatcher();
  if (currentTab === 'recetas') renderRecipesView();

  showToast(`🎉 ¡${name} se unió a la familia Hell's Kitchen!`, 'success');
}

function updateMasterIngredientsDatalist() {
  const dl = document.getElementById('masterIngredientsList');
  if (!dl || !appState.pantry) return;

  const sorted = [...appState.pantry].sort((a, b) => a.name.localeCompare(b.name, 'es'));
  dl.innerHTML = sorted.map(item => `
    <option value="${escapeAttr(item.name)}">${item.icon || '📦'} ${escapeAttr(item.name)} (${getCategoryName(item.category)}) - Unidad: ${escapeAttr(item.unit)}</option>
  `).join('');
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    if (typeof window !== 'undefined') window.appState = appState;
  } catch (e) {
    console.error("Error al guardar estado:", e);
  }
}

// Variables de vista activa y modo cocina
let currentTab = 'matcher'; // 'matcher' | 'recetas' | 'alacena' | 'compras'
let currentPortionMultiplier = 1;
let currentActiveRecipeForCooking = null;
let activeTimers = {}; // { timerId: { interval, remainingSeconds, isRunning } }
let wakeLockSentinel = null;

// =========================================================
// 2. SMART MATCHING ENGINE ("¿QUÉ COCINO HOY?")
// =========================================================
function calculateRecipeMatch(recipe) {
  if (!recipe.ingredients || recipe.ingredients.length === 0) return { pct: 100, missing: [], available: [] };

  const pantryMap = {};
  appState.pantry.forEach(p => {
    pantryMap[p.id] = p;
  });

  let totalItems = recipe.ingredients.length;
  let availableItems = 0;
  const missing = [];
  const available = [];

  recipe.ingredients.forEach(req => {
    let inPantry = null;
    if (req.requiredId && pantryMap[req.requiredId]) {
      inPantry = pantryMap[req.requiredId];
    } else {
      // Búsqueda por similitud de nombre
      inPantry = appState.pantry.find(p => p.name.toLowerCase().includes(req.name.toLowerCase()) || req.name.toLowerCase().includes(p.name.toLowerCase()));
    }

    if (inPantry && parseFloat(inPantry.qty) > 0) {
      availableItems++;
      available.push({ required: req, pantry: inPantry });
    } else {
      missing.push(req);
    }
  });

  const pct = Math.round((availableItems / totalItems) * 100);
  return { pct, missing, available, availableItems, totalItems };
}

// =========================================================
// 3. RENDERIZADO DE VISTAS
// =========================================================

function switchTab(tabName) {
  currentTab = tabName;
  
  // Actualizar botones del dock
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });

  // Mostrar la solapa correspondiente
  document.querySelectorAll('.tab-view').forEach(view => {
    view.style.display = 'none';
  });

  const target = document.getElementById(`view-${tabName}`);
  if (target) target.style.display = 'block';

  // Renderizar contenido
  if (tabName === 'matcher') renderSmartMatcher();
  if (tabName === 'recetas') renderRecipesView();
  if (tabName === 'alacena') renderPantryView();
  if (tabName === 'compras') renderShoppingView();

  updateHeaderBadges();
}

function updateHeaderBadges() {
  const pantryCountEl = document.getElementById('badgePantryCount');
  const recipesCountEl = document.getElementById('badgeRecipesCount');
  const shopCountEl = document.getElementById('badgeShopCount');

  if (pantryCountEl) pantryCountEl.innerText = appState.pantry.length;
  if (recipesCountEl) recipesCountEl.innerText = appState.recipes.length;
  
  const pendingShop = appState.shoppingList.filter(s => !s.checked).length;
  if (shopCountEl) {
    shopCountEl.innerText = pendingShop;
    shopCountEl.style.display = pendingShop > 0 ? 'inline-block' : 'none';
  }

  // Hero Stats
  const statReadyEl = document.getElementById('heroStatReady');
  if (statReadyEl) {
    const readyCount = appState.recipes.filter(r => calculateRecipeMatch(r).pct === 100).length;
    statReadyEl.innerText = readyCount;
  }
}

// =========================================================
// 1.2 VISIBILIDAD, AUTORÍA Y PERMISOS DE RECETAS
// =========================================================

function canUserModifyRecipe(recipe) {
  if (!recipe) return false;
  const user = getCurrentUser();
  if (user.role === 'admin') return true;
  return recipe.authorId === user.id;
}

function getVisibleRecipes() {
  const currentUserId = appState.currentUser || 'user-pato';
  return (appState.recipes || []).filter(r => {
    // Si la receta no es privada, es pública para toda la familia
    if (!r.isPrivate) return true;
    // Si es privada, solo la ve quien la creó
    return r.authorId === currentUserId;
  });
}

let currentRecipeSearch = '';
let currentRecipeCategory = 'all';
let currentRecipeScope = 'all'; // 'all' | 'mine' | 'private'
let currentRecipeAuthorFilter = 'all';

function filterRecipesByScope(scope, btnEl) {
  currentRecipeScope = scope;
  document.querySelectorAll('#recipesScopePills .filter-pill').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  renderRecipesView();
}

function filterRecipesByAuthor(authorId) {
  currentRecipeAuthorFilter = authorId;
  renderRecipesView();
}

function updateAuthorFilterDropdown() {
  const sel = document.getElementById('recipeAuthorFilter');
  if (!sel) return;

  const users = appState.users || [];
  sel.innerHTML = `
    <option value="all">👥 Todos los Chefs</option>
    ${users.map(u => `
      <option value="${u.id}" ${currentRecipeAuthorFilter === u.id ? 'selected' : ''}>
        ${u.avatar || '👨‍🍳'} ${escapeAttr(u.name)}
      </option>
    `).join('')}
  `;
}

// Variables y toggles para visibilidad en modals
let addRecipeIsPrivate = false;
let editRecipeIsPrivate = false;

function setAddRecipeVisibility(isPrivate) {
  addRecipeIsPrivate = isPrivate;
  const radPub = document.getElementById('radAddPublic');
  const radPriv = document.getElementById('radAddPrivate');
  const lblPub = document.getElementById('lblAddPublic');
  const lblPriv = document.getElementById('lblAddPrivate');

  if (radPub) radPub.checked = !isPrivate;
  if (radPriv) radPriv.checked = isPrivate;
  if (lblPub) lblPub.classList.toggle('selected', !isPrivate);
  if (lblPriv) lblPriv.classList.toggle('selected', isPrivate);
}

function setEditRecipeVisibility(isPrivate) {
  editRecipeIsPrivate = isPrivate;
  const radPub = document.getElementById('radEditPublic');
  const radPriv = document.getElementById('radEditPrivate');
  const lblPub = document.getElementById('lblEditPublic');
  const lblPriv = document.getElementById('lblEditPrivate');

  if (radPub) radPub.checked = !isPrivate;
  if (radPriv) radPriv.checked = isPrivate;
  if (lblPub) lblPub.classList.toggle('selected', !isPrivate);
  if (lblPriv) lblPriv.classList.toggle('selected', isPrivate);
}

// =========================================================
// 4. VISTA: GENERADOR "¿QUÉ COCINO HOY?"
// =========================================================
function renderSmartMatcher() {
  const container = document.getElementById('matcherResultsGrid');
  if (!container) return;

  const filterTime = document.getElementById('matcherFilterTime')?.value || 'all';
  const filterCat = document.getElementById('matcherFilterCat')?.value || 'all';

  // Obtener solo las recetas visibles para el usuario actual (públicas de familia + privadas del usuario)
  const visibleRecipes = getVisibleRecipes();

  // Calcular score de cada receta
  const scored = visibleRecipes.map(rec => {
    const match = calculateRecipeMatch(rec);
    return { ...rec, match };
  });

  // Ordenar: primero las que tienen 100%, luego por score descendente
  scored.sort((a, b) => b.match.pct - a.match.pct);

  // Filtrado
  const filtered = scored.filter(r => {
    if (filterTime === 'fast' && r.time > 20) return false;
    if (filterTime === 'medium' && (r.time < 20 || r.time > 40)) return false;
    if (filterCat !== 'all' && r.category !== filterCat) return false;
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding: 40px 20px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border);">
        <span style="font-size: 3rem; display:block; margin-bottom:12px;">🍳</span>
        <h3 style="color:#ffffff; margin-bottom:8px;">No encontramos recetas con esos filtros</h3>
        <p style="color:var(--text-muted); font-size:0.9rem;">Probá cambiando el filtro de tiempo o agregando más ingredientes en tu alacena.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(r => {
    let matchClass = 'match-low';
    let matchText = `${r.match.pct}% Insumos`;
    let badgeIcon = '🥉';

    if (r.match.pct === 100) {
      matchClass = 'match-100';
      matchText = '¡Listo para Cocinar!';
      badgeIcon = '🥇 100%';
    } else if (r.match.pct >= 65) {
      matchClass = 'match-partial';
      matchText = `Faltan ${r.match.missing.length} insumo(s)`;
      badgeIcon = `🥈 ${r.match.pct}%`;
    }

    const canEdit = canUserModifyRecipe(r);

    return `
      <div class="recipe-card" onclick="openRecipeDetailModal('${r.id}')">
        <div class="recipe-img-container">
          <img src="${r.image}" alt="${escapeAttr(r.title)}" class="recipe-img" onerror="this.src='https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&auto=format&fit=crop&q=80'">
          <div class="recipe-match-badge ${matchClass}">
            <span>${badgeIcon}</span>
            <span>${matchText}</span>
          </div>
          <div class="recipe-time-tag">⏱️ ${r.time} min</div>
        </div>

        <div class="recipe-content">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:6px; margin-bottom:6px; flex-wrap:wrap;">
            <div class="recipe-category-tag">${getCategoryName(r.category)}</div>
            <div style="display:flex; gap:4px; align-items:center;">
              ${r.isPrivate ? '<span class="recipe-private-badge">🔒 Privada</span>' : '<span class="recipe-public-badge">🌐 Familia</span>'}
              <span class="recipe-author-badge">${r.authorAvatar || '👨‍🍳'} ${escapeAttr(r.authorName || 'Chef')}</span>
            </div>
          </div>

          <h3 class="recipe-card-title">${escapeAttr(r.title)}</h3>
          <p class="recipe-desc">${escapeAttr(r.description)}</p>

          ${r.match.missing.length > 0 ? `
            <div style="margin-bottom: 12px; background: rgba(0,0,0,0.25); border-radius: var(--radius-sm); padding: 8px 10px; font-size:0.78rem;">
              <span style="color:#fbbf24; font-weight:700;">⚠️ Te falta: </span>
              <span style="color:var(--text-muted);">${r.match.missing.map(m => escapeAttr(m.name)).join(', ')}</span>
            </div>
          ` : ''}

          <div class="recipe-meta-row" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
            <div style="display:flex; gap:10px; font-size:0.82rem; color:var(--text-muted);">
              <span>👥 ${r.portions}p</span>
              <span>⭐ ${r.difficulty}</span>
            </div>
            <div style="display:flex; gap:6px;">
              ${canEdit ? `
                <button class="btn btn-outline btn-sm" onclick="event.stopPropagation(); openEditRecipeModal('${r.id}')" title="Editar receta" style="padding:4px 8px;">✏️</button>
              ` : ''}
              <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); addRecipeToCartQuick('${r.id}')" title="Agregar insumos a la lista de compras">🛒 + Carrito</button>
              <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); startCookingMode('${r.id}')">🔥 Cocinar</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// =========================================================
// 5. VISTA: RECETARIO FAMILIAR & DE AUTOR
// =========================================================
function renderRecipesView() {
  const container = document.getElementById('recipesGridContainer');
  if (!container) return;

  const currentUserId = appState.currentUser || 'user-pato';
  const visibleRecipes = getVisibleRecipes();

  const filtered = visibleRecipes.filter(r => {
    // Filtro por categoría
    const matchCat = (currentRecipeCategory === 'all' || r.category === currentRecipeCategory);
    
    // Filtro por búsqueda
    const q = currentRecipeSearch.toLowerCase();
    const matchSearch = (!currentRecipeSearch || 
      r.title.toLowerCase().includes(q) || 
      r.description.toLowerCase().includes(q) ||
      (r.authorName && r.authorName.toLowerCase().includes(q))
    );

    // Filtro por Scope (Toda la familia, Mis recetas, Solo privadas)
    let matchScope = true;
    if (currentRecipeScope === 'mine') {
      matchScope = (r.authorId === currentUserId);
    } else if (currentRecipeScope === 'private') {
      matchScope = (r.isPrivate === true && r.authorId === currentUserId);
    }

    // Filtro por Autor
    let matchAuthor = true;
    if (currentRecipeAuthorFilter !== 'all') {
      matchAuthor = (r.authorId === currentRecipeAuthorFilter);
    }

    return matchCat && matchSearch && matchScope && matchAuthor;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding: 40px; background: var(--bg-card); border-radius: var(--radius-lg);">
        <h3 style="color:#ffffff;">No se encontraron recetas</h3>
        <p style="color:var(--text-muted);">Probá con otro término o creá tu propia receta con el botón "+ Nueva Receta".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(r => {
    const match = calculateRecipeMatch(r);
    const canEdit = canUserModifyRecipe(r);

    return `
      <div class="recipe-card" onclick="openRecipeDetailModal('${r.id}')">
        <div class="recipe-img-container">
          <img src="${r.image}" alt="${escapeAttr(r.title)}" class="recipe-img">
          <div class="recipe-time-tag">⏱️ ${r.time} min</div>
        </div>

        <div class="recipe-content">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:6px; margin-bottom:6px; flex-wrap:wrap;">
            <div class="recipe-category-tag">${getCategoryName(r.category)}</div>
            <div style="display:flex; gap:4px; align-items:center;">
              ${r.isPrivate ? '<span class="recipe-private-badge">🔒 Privada</span>' : '<span class="recipe-public-badge">🌐 Familia</span>'}
              <span class="recipe-author-badge">${r.authorAvatar || '👨‍🍳'} ${escapeAttr(r.authorName || 'Chef')}</span>
            </div>
          </div>

          <h3 class="recipe-card-title">${escapeAttr(r.title)}</h3>
          <p class="recipe-desc">${escapeAttr(r.description)}</p>

          <div class="recipe-meta-row" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
            <div style="display:flex; gap:10px; font-size:0.82rem; color:var(--text-muted);">
              <span>👥 ${r.portions}p</span>
              <span style="color:${match.pct === 100 ? '#34d399' : '#fbbf24'}; font-weight:700;">
                ${match.pct === 100 ? '✅ 100%' : `⚠️ ${match.pct}%`}
              </span>
            </div>
            <div style="display:flex; gap:6px;">
              ${canEdit ? `
                <button class="btn btn-outline btn-sm" onclick="event.stopPropagation(); openEditRecipeModal('${r.id}')" title="Editar receta" style="padding:4px 8px;">✏️</button>
              ` : ''}
              <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); addRecipeToCartQuick('${r.id}')" title="Agregar insumos a la lista de compras">🛒 + Carrito</button>
              <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); startCookingMode('${r.id}')">🔥 Cocinar</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterRecipesByCat(cat, btnEl) {
  currentRecipeCategory = cat;
  document.querySelectorAll('#recipesFilterPills .filter-pill').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  renderRecipesView();
}

function handleRecipeSearch(query) {
  currentRecipeSearch = query.trim();
  renderRecipesView();
}

// =========================================================
// 6. VISTA: MI ALACENA & HELADERA (INVENTARIO EN VIVO)
// =========================================================
let currentPantryCategory = 'all';
let currentPantryStockFilter = 'all'; // 'all' | 'in_stock' | 'out_of_stock'
let currentPantrySearch = '';

function renderPantryView() {
  const container = document.getElementById('pantrySectionsContainer');
  if (!container) return;

  const categories = [
    { id: 'carnes', title: '🥩 Carnes & Pescados', icon: '🥩' },
    { id: 'heladera', title: '❄️ Heladera & Frescos', icon: '🥦' },
    { id: 'alacena', title: '🥫 Alacena & Secos', icon: '🌾' },
    { id: 'especias', title: '🌿 Condimentos & Especias', icon: '🌶️' },
    { id: 'cava', title: '🍷 Cava & Bebidas', icon: '🍷' }
  ];

  let html = '';

  categories.forEach(cat => {
    if (currentPantryCategory !== 'all' && currentPantryCategory !== cat.id) return;

    let items = appState.pantry.filter(p => p.category === cat.id);

    // Filtro por búsqueda
    if (currentPantrySearch) {
      items = items.filter(p => p.name.toLowerCase().includes(currentPantrySearch.toLowerCase()));
    }

    // Filtro por nivel de stock
    if (currentPantryStockFilter === 'in_stock') {
      items = items.filter(p => parseFloat(p.qty) > 0);
    } else if (currentPantryStockFilter === 'out_of_stock') {
      items = items.filter(p => !parseFloat(p.qty) || parseFloat(p.qty) <= 0);
    }

    if (items.length === 0) return;

    html += `
      <div class="pantry-category-section">
        <div class="category-header">
          <h2 class="category-title">${cat.title} <span style="font-size:0.85rem; color:var(--text-dim); font-family:var(--font-mono);">(${items.length})</span></h2>
          <button class="btn btn-secondary btn-sm" onclick="openAddPantryModal('${cat.id}')">+ Nuevo Insumo</button>
        </div>

        <div class="pantry-grid">
          ${items.map(item => {
            const qty = parseFloat(item.qty) || 0;
            const isZero = qty <= 0;
            const isLow = !isZero && item.minQty && (qty <= parseFloat(item.minQty));

            return `
              <div class="pantry-card ${isZero ? 'out-of-stock-card' : ''}" style="${isZero ? 'opacity:0.85; border-color:rgba(239,68,68,0.25);' : ''}">
                <div class="pantry-card-top">
                  <span class="pantry-card-icon">${item.icon || '📦'}</span>
                  <div style="flex:1; min-width:0;">
                    <div class="pantry-item-name" style="font-weight:700; color:${isZero ? 'var(--text-muted)' : '#ffffff'};">${escapeAttr(item.name)}</div>
                    <div class="pantry-item-unit" style="font-size:0.75rem; color:var(--text-dim);">${escapeAttr(item.unit || '')}</div>
                  </div>
                  <button class="btn-icon btn-danger btn-sm" onclick="deletePantryItem('${item.id}')" title="Eliminar" style="width:28px; height:28px; font-size:0.75rem;">🗑️</button>
                </div>

                <div class="pantry-stock-row">
                  <button class="qty-control-btn" onclick="adjustPantryQty('${item.id}', -1)">-</button>
                  <span class="pantry-qty-display ${isZero ? 'low-stock' : isLow ? 'low-stock' : ''}" style="${isZero ? 'color:#f87171;' : ''}">
                    ${qty} <small style="font-size:0.7rem; color:var(--text-muted);">${item.unit}</small>
                  </span>
                  <button class="qty-control-btn" onclick="adjustPantryQty('${item.id}', 1)">+</button>
                </div>

                <div style="margin-top:8px; display:flex; justify-content:space-between; align-items:center;">
                  ${isZero ? `
                    <span style="font-size:0.72rem; color:#f87171; font-weight:700;">🔴 Sin Stock (0)</span>
                    <button class="btn btn-primary btn-sm" style="padding:3px 8px; font-size:0.72rem;" onclick="addPantryToShoppingList('${item.id}')">+ Comprar</button>
                  ` : isLow ? `
                    <span style="font-size:0.72rem; color:#fbbf24; font-weight:700;">⚠️ Stock Bajo</span>
                    <button class="btn btn-secondary btn-sm" style="padding:3px 8px; font-size:0.72rem;" onclick="addPantryToShoppingList('${item.id}')">+ Comprar</button>
                  ` : `
                    <span style="font-size:0.72rem; color:#34d399; font-weight:700;">🟢 En Stock</span>
                    <button class="btn btn-secondary btn-sm" style="padding:2px 6px; font-size:0.68rem; opacity:0.8;" onclick="addPantryToShoppingList('${item.id}')">+ Lista</button>
                  `}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  });

  if (!html) {
    html = `
      <div style="text-align:center; padding:50px 20px; background:var(--bg-card); border-radius:var(--radius-lg);">
        <span style="font-size:3rem;">📦</span>
        <h3 style="color:#ffffff; margin:10px 0;">No se encontraron insumos con esos filtros</h3>
        <p style="color:var(--text-muted);">Probá cambiando el filtro o buscando otro término.</p>
      </div>
    `;
  }

  container.innerHTML = html;
}

function filterPantryByStock(stockFilter, btnEl) {
  currentPantryStockFilter = stockFilter;
  document.querySelectorAll('#pantryStockFilterPills .filter-pill').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  renderPantryView();
}

function adjustPantryQty(id, delta) {
  const item = appState.pantry.find(p => p.id === id);
  if (!item) return;

  const current = parseFloat(item.qty) || 0;
  const isGrams = item.unit === 'g' || item.unit === 'ml';
  const step = isGrams ? (delta * 50) : (delta * 1);

  item.qty = Math.max(0, current + step);
  saveState();
  renderPantryView();
  updateHeaderBadges();
}

function deletePantryItem(id) {
  if (confirm("¿Deseas eliminar este insumo de tu alacena?")) {
    appState.pantry = appState.pantry.filter(p => p.id !== id);
    saveState();
    renderPantryView();
    updateHeaderBadges();
  }
}

// =========================================================
// MOTOR DE UNIFICACIÓN Y CONVERSIÓN DE MEDIDAS (UNIT ENGINE)
// =========================================================

const UNIT_CONVERSION_TABLE = {
  // Dimension: Masa / Peso (Base: gramos 'g')
  kg: { dim: 'weight', factor: 1000, base: 'g' },
  kilo: { dim: 'weight', factor: 1000, base: 'g' },
  kilos: { dim: 'weight', factor: 1000, base: 'g' },
  g: { dim: 'weight', factor: 1, base: 'g' },
  gr: { dim: 'weight', factor: 1, base: 'g' },
  grs: { dim: 'weight', factor: 1, base: 'g' },
  gramo: { dim: 'weight', factor: 1, base: 'g' },
  gramos: { dim: 'weight', factor: 1, base: 'g' },
  mg: { dim: 'weight', factor: 0.001, base: 'g' },
  lb: { dim: 'weight', factor: 453.59, base: 'g' },
  libra: { dim: 'weight', factor: 453.59, base: 'g' },
  libras: { dim: 'weight', factor: 453.59, base: 'g' },

  // Dimension: Volumen / Líquidos (Base: mililitros 'ml')
  l: { dim: 'volume', factor: 1000, base: 'ml' },
  lt: { dim: 'volume', factor: 1000, base: 'ml' },
  lts: { dim: 'volume', factor: 1000, base: 'ml' },
  litro: { dim: 'volume', factor: 1000, base: 'ml' },
  litros: { dim: 'volume', factor: 1000, base: 'ml' },
  ml: { dim: 'volume', factor: 1, base: 'ml' },
  cc: { dim: 'volume', factor: 1, base: 'ml' },
  cm3: { dim: 'volume', factor: 1, base: 'ml' },
  mililitro: { dim: 'volume', factor: 1, base: 'ml' },
  mililitros: { dim: 'volume', factor: 1, base: 'ml' },
  taza: { dim: 'volume', factor: 250, base: 'ml' },
  tazas: { dim: 'volume', factor: 250, base: 'ml' },
  cda: { dim: 'volume', factor: 15, base: 'ml' },
  cdas: { dim: 'volume', factor: 15, base: 'ml' },
  cucharada: { dim: 'volume', factor: 15, base: 'ml' },
  cucharadas: { dim: 'volume', factor: 15, base: 'ml' },
  cdita: { dim: 'volume', factor: 5, base: 'ml' },
  cditas: { dim: 'volume', factor: 5, base: 'ml' },
  cucharadita: { dim: 'volume', factor: 5, base: 'ml' },
  cucharaditas: { dim: 'volume', factor: 5, base: 'ml' },

  // Dimension: Conteo / Unidades (Base: unidades 'un')
  un: { dim: 'count', factor: 1, base: 'un' },
  u: { dim: 'count', factor: 1, base: 'un' },
  unidad: { dim: 'count', factor: 1, base: 'un' },
  unidades: { dim: 'count', factor: 1, base: 'un' },
  uni: { dim: 'count', factor: 1, base: 'un' },
  docena: { dim: 'count', factor: 12, base: 'un' },
  docenas: { dim: 'count', factor: 12, base: 'un' },
  maple: { dim: 'count', factor: 30, base: 'un' },

  // Dimension: Insumos específicos / envases
  diente: { dim: 'dientes', factor: 1, base: 'dientes' },
  dientes: { dim: 'dientes', factor: 1, base: 'dientes' },
  cabeza: { dim: 'dientes', factor: 8, base: 'dientes' },
  cabezas: { dim: 'dientes', factor: 8, base: 'dientes' },
  lata: { dim: 'latas', factor: 1, base: 'latas' },
  latas: { dim: 'latas', factor: 1, base: 'latas' },
  atado: { dim: 'atados', factor: 1, base: 'atados' },
  atados: { dim: 'atados', factor: 1, base: 'atados' },
  planta: { dim: 'atados', factor: 1, base: 'atados' },
  plantas: { dim: 'atados', factor: 1, base: 'atados' },
  ramita: { dim: 'atados', factor: 1, base: 'atados' },
  ramitas: { dim: 'atados', factor: 1, base: 'atados' },
  botella: { dim: 'botellas', factor: 1, base: 'botellas' },
  botellas: { dim: 'botellas', factor: 1, base: 'botellas' },
  sobre: { dim: 'sobres', factor: 1, base: 'sobres' },
  sobres: { dim: 'sobres', factor: 1, base: 'sobres' },
  pizca: { dim: 'pizca', factor: 1, base: 'pizca' },
  pizcas: { dim: 'pizca', factor: 1, base: 'pizca' }
};

function parseQuantityAndUnit(rawQty, rawUnit = '') {
  let combined = `${rawQty !== undefined && rawQty !== null ? rawQty : ''} ${rawUnit || ''}`.trim().toLowerCase();
  combined = combined.replace(/,/g, '.');

  // Evaluar fracciones simples como "1/2", "1/4", "3/4"
  const fractionMatch = combined.match(/^(\d+)?\s*(\d+)\/(\d+)\s*(.*)$/);
  let numVal = 0;
  let unitText = '';

  if (fractionMatch) {
    const whole = fractionMatch[1] ? parseFloat(fractionMatch[1]) : 0;
    const num = parseFloat(fractionMatch[2]);
    const den = parseFloat(fractionMatch[3]) || 1;
    numVal = whole + (num / den);
    unitText = fractionMatch[4].trim();
  } else {
    const numMatch = combined.match(/^([0-9]*\.?[0-9]+)\s*(.*)$/);
    if (numMatch) {
      numVal = parseFloat(numMatch[1]);
      unitText = numMatch[2].trim();
    } else {
      numVal = typeof rawQty === 'number' ? rawQty : 1;
      unitText = (rawUnit || combined).trim();
    }
  }

  // Quitar notas entre paréntesis (ej: "g (fría en cubos)" -> "g")
  unitText = unitText.replace(/\(.*?\)/g, '').trim();

  // Buscar en la tabla de conversión
  const lookupKey = unitText.toLowerCase();
  const conv = UNIT_CONVERSION_TABLE[lookupKey];

  if (conv) {
    return {
      isValid: true,
      rawQty: numVal,
      dim: conv.dim,
      baseQty: numVal * conv.factor,
      baseUnit: conv.base,
      originalUnit: unitText
    };
  }

  return {
    isValid: true,
    rawQty: numVal,
    dim: unitText || 'un',
    baseQty: numVal,
    baseUnit: unitText || 'un',
    originalUnit: unitText || 'un'
  };
}

function formatBaseQuantity(baseQty, dim, baseUnit) {
  if (dim === 'weight') {
    if (baseQty >= 1000) {
      const kg = +(baseQty / 1000).toFixed(2);
      return `${kg} kg`;
    }
    return `${Math.round(baseQty)} g`;
  }

  if (dim === 'volume') {
    if (baseQty >= 1000) {
      const l = +(baseQty / 1000).toFixed(2);
      return `${l} L`;
    }
    return `${Math.round(baseQty)} ml`;
  }

  if (dim === 'count') {
    const val = +(baseQty).toFixed(1).replace(/\.0$/, '');
    return `${val} un`;
  }

  const cleanVal = +(baseQty).toFixed(1).replace(/\.0$/, '');
  if (cleanVal === 1) {
    const singularMap = {
      dientes: 'diente',
      latas: 'lata',
      atados: 'atado',
      botellas: 'botella',
      sobres: 'sobre',
      pizca: 'pizca'
    };
    return `1 ${singularMap[baseUnit] || baseUnit}`;
  }
  return `${cleanVal} ${baseUnit}`;
}

function addOrMergeShoppingItem({ name, qty, unit = '', note = '', canonicalId = null }) {
  const parsed = parseQuantityAndUnit(qty, unit);
  const cleanName = name.trim();
  const lowerName = cleanName.toLowerCase();

  // Buscar si ya existe un elemento sin tachar para este ingrediente
  const existing = appState.shoppingList.find(item => {
    if (item.checked) return false;
    if (canonicalId && item.canonicalId && item.canonicalId === canonicalId) return true;
    return item.name.toLowerCase() === lowerName;
  });

  if (existing) {
    const existingParsed = parseQuantityAndUnit(existing.qty || '1', '');
    
    // Si tienen la misma dimensión, sumamos matemáticamente
    if (existingParsed.dim === parsed.dim) {
      const totalBase = existingParsed.baseQty + parsed.baseQty;
      existing.qty = formatBaseQuantity(totalBase, parsed.dim, parsed.baseUnit);
      
      if (note && (!existing.note || !existing.note.includes(note))) {
        existing.note = existing.note ? `${existing.note} + ${note}` : note;
      }
      return { merged: true, item: existing };
    } else {
      // Dimensiones distintas pero mismo producto (ej: 2 latas + 500g)
      existing.qty = `${existing.qty} + ${formatBaseQuantity(parsed.baseQty, parsed.dim, parsed.baseUnit)}`;
      if (note && (!existing.note || !existing.note.includes(note))) {
        existing.note = existing.note ? `${existing.note} + ${note}` : note;
      }
      return { merged: true, item: existing };
    }
  }

  // Si no existe, crear nuevo item
  const newItem = {
    id: `shop-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    name: cleanName,
    canonicalId: canonicalId,
    qty: formatBaseQuantity(parsed.baseQty, parsed.dim, parsed.baseUnit),
    checked: false,
    note: note || ''
  };
  appState.shoppingList.push(newItem);
  return { merged: false, item: newItem };
}

function consolidateShoppingList() {
  if (!appState.shoppingList || appState.shoppingList.length === 0) {
    showToast('La lista de compras está vacía.', 'info');
    return;
  }

  const oldList = [...appState.shoppingList];
  const checkedItems = oldList.filter(item => item.checked);
  const unCheckedItems = oldList.filter(item => !item.checked);

  appState.shoppingList = [];

  unCheckedItems.forEach(item => {
    addOrMergeShoppingItem({
      name: item.name,
      qty: item.qty,
      unit: '',
      note: item.note,
      canonicalId: item.canonicalId
    });
  });

  checkedItems.forEach(item => appState.shoppingList.push(item));

  saveState();
  renderShoppingView();
  updateHeaderBadges();

  showToast('⚡ ¡Lista unificada y cantidades sumadas con éxito!', 'success');
}

function addPantryToShoppingList(pantryId) {
  const p = appState.pantry.find(item => item.id === pantryId);
  if (!p) return;

  const res = addOrMergeShoppingItem({
    name: p.name,
    qty: p.minQty || 1,
    unit: p.unit || '',
    note: 'Reponer stock de alacena',
    canonicalId: p.id
  });

  saveState();
  updateHeaderBadges();
  if (currentTab === 'compras') renderShoppingView();

  if (res.merged) {
    showToast(`🛒 ¡Sumado a tu lista: ${p.name} (Total: ${res.item.qty})!`, 'success');
  } else {
    showToast(`🛒 Agregado a compras: ${p.name}!`, 'success');
  }
}

function filterPantryByCat(cat, btnEl) {
  currentPantryCategory = cat;
  document.querySelectorAll('#pantryFilterPills .filter-pill').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  renderPantryView();
}

function handlePantrySearch(query) {
  currentPantrySearch = query.trim();
  renderPantryView();
}

// =========================================================
// 7. VISTA: LISTA DE COMPRAS & EXPORTACIÓN WHATSAPP
// =========================================================
function renderShoppingView() {
  const container = document.getElementById('shoppingListContainer');
  if (!container) return;

  if (appState.shoppingList.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:50px 20px; background:var(--bg-card); border-radius:var(--radius-lg);">
        <span style="font-size:3rem;">🛒</span>
        <h3 style="color:#ffffff; margin:10px 0;">Tu lista de compras está vacía</h3>
        <p style="color:var(--text-muted);">Agregá lo que te falte para tus recetas o compras del súper.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = appState.shoppingList.map((item, idx) => `
    <div class="shopping-card ${item.checked ? 'checked' : ''}">
      <div style="display:flex; align-items:center; gap:12px; flex:1;">
        <button class="custom-checkbox ${item.checked ? 'active' : ''}" onclick="toggleShoppingItem(${idx})">
          ${item.checked ? '✓' : ''}
        </button>
        <div>
          <strong style="color:#ffffff; font-size:0.95rem;">${escapeAttr(item.name)}</strong>
          <div style="font-size:0.8rem; color:var(--text-muted);">
            ${item.qty ? `<span style="color:var(--primary-light); font-weight:700;">${escapeAttr(item.qty)}</span>` : ''}
            ${item.note ? ` • <em>${escapeAttr(item.note)}</em>` : ''}
          </div>
        </div>
      </div>
      <button class="btn-icon btn-danger btn-sm" onclick="deleteShoppingItem(${idx})">🗑️</button>
    </div>
  `).join('');
}

function toggleShoppingItem(idx) {
  if (appState.shoppingList[idx]) {
    appState.shoppingList[idx].checked = !appState.shoppingList[idx].checked;
    saveState();
    renderShoppingView();
    updateHeaderBadges();
  }
}

function deleteShoppingItem(idx) {
  appState.shoppingList.splice(idx, 1);
  saveState();
  renderShoppingView();
  updateHeaderBadges();
}

function addShoppingItemManual() {
  const name = prompt("Nombre del producto a comprar:");
  if (!name || !name.trim()) return;

  const qty = prompt("Cantidad estimada (ej: 500g, 1.5 kg, 2 paquetes, 1 botella):", "1 un");

  addOrMergeShoppingItem({
    name: name.trim(),
    qty: qty ? qty.trim() : '1 un',
    unit: '',
    note: 'Carga manual'
  });

  saveState();
  renderShoppingView();
  updateHeaderBadges();
  showToast(`🛒 Agregado a la lista: ${name.trim()}`, 'success');
}

function compartirListaComprasWhatsApp() {
  const pendientes = appState.shoppingList.filter(s => !s.checked);
  if (pendientes.length === 0) {
    return alert("No hay productos pendientes en la lista de compras.");
  }

  let msg = `🛒 *LISTA DE COMPRAS - PATO'S KITCHEN*\n`;
  msg += `📅 Fecha: ${new Date().toLocaleDateString('es-AR')}\n\n`;

  pendientes.forEach(item => {
    msg += `• *${item.name}* ${item.qty ? `(${item.qty})` : ''} ${item.note ? `_${item.note}_` : ''}\n`;
  });

  msg += `\n¡Gracias! 👨‍🍳`;

  const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

function clearCheckedShopping() {
  appState.shoppingList = appState.shoppingList.filter(s => !s.checked);
  saveState();
  renderShoppingView();
  updateHeaderBadges();
}

// =========================================================
// 8. MODAL DE DETALLE DE RECETA & ESCALADO DE PORCIONES
// =========================================================
let currentDetailRecipe = null;

function openRecipeDetailModal(recipeId) {
  const recipe = appState.recipes.find(r => r.id === recipeId);
  if (!recipe) return;

  currentDetailRecipe = recipe;
  currentPortionMultiplier = 1;

  const modal = document.getElementById('recipeDetailModal');
  if (!modal) return;

  renderRecipeDetailModalContent();
  modal.style.display = 'flex';
}

function closeRecipeDetailModal() {
  const modal = document.getElementById('recipeDetailModal');
  if (modal) modal.style.display = 'none';
}

function setPortionMultiplier(multiplier) {
  currentPortionMultiplier = multiplier;
  renderRecipeDetailModalContent();
}

function renderRecipeDetailModalContent() {
  const r = currentDetailRecipe;
  if (!r) return;

  const mult = currentPortionMultiplier;
  const scaledPortions = Math.round(r.portions * mult);
  const match = calculateRecipeMatch(r);

  const canEdit = canUserModifyRecipe(r);

  document.getElementById('modalRecipeTitle').innerText = r.title;
  document.getElementById('modalRecipeImg').src = r.image;
  
  const catEl = document.getElementById('modalRecipeCategory');
  if (catEl) {
    catEl.innerHTML = `
      <span>${getCategoryName(r.category)}</span>
      <span style="opacity:0.6;">•</span>
      <span>${r.authorAvatar || '👨‍🍳'} ${escapeAttr(r.authorName || 'Chef')}</span>
      ${r.isPrivate ? '<span style="background:rgba(239,68,68,0.4); padding:1px 6px; border-radius:10px; font-size:0.7rem; color:#fff; font-weight:700;">🔒 Privada</span>' : '<span style="background:rgba(16,185,129,0.3); padding:1px 6px; border-radius:10px; font-size:0.7rem; color:#fff; font-weight:700;">🌐 Familiar</span>'}
    `;
  }

  document.getElementById('modalRecipeTime').innerText = `⏱️ ${r.time} min`;
  document.getElementById('modalRecipePortionsText').innerText = `👥 ${scaledPortions} porciones`;
  document.getElementById('modalRecipeDesc').innerText = r.description;
  document.getElementById('modalRecipePairing').innerText = r.pairing || 'Vino Tinto / Blanco a elección';
  document.getElementById('modalRecipeChefTip').innerText = r.chefTip || 'Cociná con pasión y paciencia.';

  // Renderizar Porciones Buttons
  const portionBtnsContainer = document.getElementById('modalPortionButtons');
  if (portionBtnsContainer) {
    portionBtnsContainer.innerHTML = [1, 2, 4, 6].map(m => `
      <button class="portion-btn ${mult === m ? 'active' : ''}" onclick="setPortionMultiplier(${m})">${m * r.portions}p (${m}x)</button>
    `).join('');
  }

  // Renderizar Ingredientes Escalados
  const ingsContainer = document.getElementById('modalRecipeIngredientsList');
  if (ingsContainer) {
    ingsContainer.innerHTML = r.ingredients.map(ing => {
      const scaledQty = typeof ing.qty === 'number' ? (ing.qty * mult) : ing.qty;
      const inPantry = appState.pantry.find(p => p.id === ing.requiredId || p.name.toLowerCase().includes(ing.name.toLowerCase()));
      const hasStock = inPantry && parseFloat(inPantry.qty) > 0;

      return `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 10px; border-bottom:1px solid var(--border); font-size:0.9rem;">
          <div style="display:flex; align-items:center; gap:8px;">
            <span>${hasStock ? '🟢' : '🔴'}</span>
            <span style="color:#ffffff; font-weight:600;">${escapeAttr(ing.name)}</span>
          </div>
          <div style="display:flex; align-items:center; gap:10px;">
            <strong style="font-family:var(--font-mono); color:var(--primary-light);">${scaledQty} ${escapeAttr(ing.unit || '')}</strong>
            ${!hasStock ? `
              <button class="btn btn-outline btn-sm" style="padding:2px 6px; font-size:0.7rem; border-color:var(--border);" onclick="addMissingToShopping('${escapeAttr(ing.name)}', '${scaledQty} ${escapeAttr(ing.unit)}')">+ Comprar</button>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');
  }

  // Renderizar Pasos
  const stepsContainer = document.getElementById('modalRecipeStepsList');
  if (stepsContainer) {
    stepsContainer.innerHTML = r.steps.map(step => `
      <div style="margin-bottom:14px; background:var(--bg-main); border:1px solid var(--border); border-radius:var(--radius-md); padding:14px;">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
          <span style="background:var(--primary); color:#ffffff; font-weight:800; width:24px; height:24px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.8rem;">${step.stepNumber}</span>
          <strong style="color:#ffffff;">${escapeAttr(step.title)}</strong>
          ${step.timerMinutes ? `<span style="font-size:0.75rem; background:rgba(245,158,11,0.15); color:var(--accent-gold); padding:2px 8px; border-radius:var(--radius-full); font-weight:700;">⏱️ ${step.timerMinutes} min</span>` : ''}
        </div>
        <p style="font-size:0.92rem; color:var(--text-muted); line-height:1.5;">${escapeAttr(step.text)}</p>
      </div>
    `).join('');
  }

  // Configurar botones de acción
  const startBtn = document.getElementById('modalBtnStartCooking');
  if (startBtn) {
    startBtn.onclick = () => {
      closeRecipeDetailModal();
      startCookingMode(r.id);
    };
  }

  const addToCartBtn = document.getElementById('modalBtnAddToCart');
  if (addToCartBtn) {
    if (match.missing.length > 0) {
      addToCartBtn.innerHTML = `🛒 Agregar Faltantes (${match.missing.length}) al Carrito`;
    } else {
      addToCartBtn.innerHTML = `🛒 Agregar Ingredientes (${scaledPortions}p) al Carrito`;
    }
    addToCartBtn.onclick = () => addCurrentRecipeToCart();
  }
}

// Agregar ingredientes de la receta abierta al carrito
function addCurrentRecipeToCart(onlyMissing = null) {
  const r = currentDetailRecipe;
  if (!r) return;

  const mult = currentPortionMultiplier || 1;
  const scaledPortions = Math.round(r.portions * mult);
  const match = calculateRecipeMatch(r);

  let itemsToProcess = [];
  let isMissingOnly = false;

  if (onlyMissing === true || (onlyMissing === null && match.missing.length > 0)) {
    itemsToProcess = match.missing.map(m => {
      const orig = r.ingredients.find(i => i.name.toLowerCase() === m.name.toLowerCase()) || m;
      return orig;
    });
    isMissingOnly = true;
  } else {
    itemsToProcess = r.ingredients;
    isMissingOnly = false;
  }

  if (itemsToProcess.length === 0) {
    showToast(`✅ Ya tenés todos los ingredientes para "${r.title}".`, 'info');
    return;
  }

  let mergedCount = 0;
  itemsToProcess.forEach(ing => {
    const scaledQty = typeof ing.qty === 'number' ? (ing.qty * mult) : (ing.qty || 1);
    const res = addOrMergeShoppingItem({
      name: ing.name,
      qty: scaledQty,
      unit: ing.unit || '',
      note: isMissingOnly ? `Faltante para ${r.title} (${scaledPortions}p)` : `Para ${r.title} (${scaledPortions}p)`,
      canonicalId: ing.requiredId || null
    });
    if (res.merged) mergedCount++;
  });

  saveState();
  updateHeaderBadges();
  if (currentTab === 'compras') renderShoppingView();

  const count = itemsToProcess.length;
  if (mergedCount > 0) {
    showToast(`🛒 ¡${count} insumos procesados (${mergedCount} sumados y unificados con tu lista)!`, 'success');
  } else {
    showToast(`🛒 Se agregaron ${count} ingrediente${count > 1 ? 's' : ''} al carrito`, 'success');
  }
}

// Botón rápido en la tarjeta de receta
function addRecipeToCartQuick(recipeId) {
  const r = appState.recipes.find(rec => rec.id === recipeId);
  if (!r) return;

  const match = calculateRecipeMatch(r);
  let itemsToProcess = [];
  let isMissingOnly = false;

  if (match.missing.length > 0) {
    itemsToProcess = match.missing.map(m => {
      const orig = r.ingredients.find(i => i.name.toLowerCase() === m.name.toLowerCase()) || m;
      return orig;
    });
    isMissingOnly = true;
  } else {
    itemsToProcess = r.ingredients;
    isMissingOnly = false;
  }

  let mergedCount = 0;
  itemsToProcess.forEach(ing => {
    const qty = typeof ing.qty === 'number' ? ing.qty : (ing.qty || 1);
    const res = addOrMergeShoppingItem({
      name: ing.name,
      qty: qty,
      unit: ing.unit || '',
      note: isMissingOnly ? `Faltante para ${r.title}` : `Para ${r.title}`,
      canonicalId: ing.requiredId || null
    });
    if (res.merged) mergedCount++;
  });

  saveState();
  updateHeaderBadges();
  if (currentTab === 'compras') renderShoppingView();

  const count = itemsToProcess.length;
  if (mergedCount > 0) {
    showToast(`🛒 ¡${count} insumos de "${r.title}" sumados y unificados a tu carrito!`, 'success');
  } else {
    showToast(`🛒 ¡${count} ingredientes de "${r.title}" agregados al carrito!`, 'success');
  }
}

function addMissingToShopping(name, qty) {
  const res = addOrMergeShoppingItem({
    name,
    qty,
    unit: '',
    note: `Para receta: ${currentDetailRecipe?.title || ''}`,
    canonicalId: null
  });
  saveState();
  updateHeaderBadges();
  if (currentTab === 'compras') renderShoppingView();
  showToast(`🛒 ${res.merged ? 'Sumado a la lista existente' : 'Agregado a la lista'}: ${name} (${res.item.qty})`, 'success');
}

// Sistema de Notificaciones Toast Moderno
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) {
    alert(message);
    return;
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'success' ? 'toast-success' : ''}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '🛒' : type === 'info' ? 'ℹ️' : '🔔'}</span>
    <span>${escapeAttr(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    if (toast && toast.classList) toast.classList.add('toast-fadeout');
    setTimeout(() => {
      if (toast && toast.parentNode) toast.parentNode.removeChild(toast);
    }, 260);
  }, 3000);
}

// =========================================================
// 9. MODO COCINA EN VIVO (LIVE COOKING COMPANION & TIMERS)
// =========================================================
function startCookingMode(recipeId) {
  const recipe = appState.recipes.find(r => r.id === recipeId);
  if (!recipe) return;

  currentActiveRecipeForCooking = recipe;
  const overlay = document.getElementById('cookingModeOverlay');
  if (!overlay) return;

  // Activar Wake Lock (para que la pantalla no se apague en la cocina)
  requestWakeLock();

  document.getElementById('cookingRecipeTitle').innerText = recipe.title;
  
  const container = document.getElementById('cookingStepsContainer');
  if (container) {
    container.innerHTML = recipe.steps.map(step => {
      const timerId = `timer-${step.stepNumber}`;
      return `
        <div class="step-card" id="stepCard-${step.stepNumber}">
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div class="step-number-badge">${step.stepNumber}</div>
            <button class="btn btn-secondary btn-sm" onclick="toggleStepComplete(${step.stepNumber})">
              ✓ Marcar Paso Listo
            </button>
          </div>

          <h3 class="step-card-title">${escapeAttr(step.title)}</h3>
          <p class="step-card-text">${escapeAttr(step.text)}</p>

          ${step.timerMinutes ? `
            <div class="step-timer-box">
              <div style="display:flex; align-items:center; gap:8px;">
                <span style="font-size:1.4rem;">⏱️</span>
                <div>
                  <div style="font-size:0.75rem; color:var(--text-muted); font-weight:700; text-transform:uppercase;">Temporizador de Paso:</div>
                  <div class="timer-countdown" id="timerDisplay-${step.stepNumber}">${formatTimer(step.timerMinutes * 60)}</div>
                </div>
              </div>

              <div style="display:flex; gap:8px;">
                <button class="btn btn-primary btn-sm" id="btnTimerStart-${step.stepNumber}" onclick="startStepTimer(${step.stepNumber}, ${step.timerMinutes * 60})">▶ Iniciar</button>
                <button class="btn btn-secondary btn-sm" onclick="resetStepTimer(${step.stepNumber}, ${step.timerMinutes * 60})">↺ Reiniciar</button>
              </div>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');
  }

  overlay.style.display = 'flex';
}

function closeCookingMode() {
  const overlay = document.getElementById('cookingModeOverlay');
  if (overlay) overlay.style.display = 'none';

  // Detener todos los timers
  Object.keys(activeTimers).forEach(tId => {
    if (activeTimers[tId].interval) clearInterval(activeTimers[tId].interval);
  });
  activeTimers = {};

  // Liberar WakeLock
  releaseWakeLock();
}

function toggleStepComplete(stepNum) {
  const card = document.getElementById(`stepCard-${stepNum}`);
  if (card) {
    card.classList.toggle('completed');
  }
}

function startStepTimer(stepNum, totalSeconds) {
  const timerId = `step-${stepNum}`;
  const displayEl = document.getElementById(`timerDisplay-${stepNum}`);
  const btnStart = document.getElementById(`btnTimerStart-${stepNum}`);

  if (!activeTimers[timerId]) {
    activeTimers[timerId] = {
      remainingSeconds: totalSeconds,
      interval: null,
      isRunning: false
    };
  }

  const timer = activeTimers[timerId];

  if (timer.isRunning) {
    // Pausar
    clearInterval(timer.interval);
    timer.isRunning = false;
    if (btnStart) btnStart.innerText = "▶ Continuar";
    if (displayEl) displayEl.classList.remove('running');
  } else {
    // Iniciar
    timer.isRunning = true;
    if (btnStart) btnStart.innerText = "⏸ Pausar";
    if (displayEl) displayEl.classList.add('running');

    timer.interval = setInterval(() => {
      timer.remainingSeconds--;
      if (displayEl) displayEl.innerText = formatTimer(timer.remainingSeconds);

      if (timer.remainingSeconds <= 0) {
        clearInterval(timer.interval);
        timer.isRunning = false;
        if (displayEl) {
          displayEl.innerText = "¡TIEMPO!";
          displayEl.classList.remove('running');
        }
        if (btnStart) btnStart.innerText = "✓ Listo";
        playBeepAlarm();
        alert(`🔔 ¡Temporizador del Paso ${stepNum} finalizado!`);
      }
    }, 1000);
  }
}

function resetStepTimer(stepNum, totalSeconds) {
  const timerId = `step-${stepNum}`;
  if (activeTimers[timerId]) {
    if (activeTimers[timerId].interval) clearInterval(activeTimers[timerId].interval);
    delete activeTimers[timerId];
  }
  const displayEl = document.getElementById(`timerDisplay-${stepNum}`);
  const btnStart = document.getElementById(`btnTimerStart-${stepNum}`);
  if (displayEl) {
    displayEl.innerText = formatTimer(totalSeconds);
    displayEl.classList.remove('running');
  }
  if (btnStart) btnStart.innerText = "▶ Iniciar";
}

function formatTimer(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// Alarma Sonora con Web Audio API (Sin archivos externos)
function playBeepAlarm() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime); // Nota La
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 1.2);
  } catch(e) {}
}

// Wake Lock API para mantener pantalla encendida
async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator) {
      wakeLockSentinel = await navigator.wakeLock.request('screen');
      console.log('✅ Pantalla bloqueada contra apagado automático (WakeLock activo)');
    }
  } catch(e) {}
}

function releaseWakeLock() {
  if (wakeLockSentinel) {
    wakeLockSentinel.release().then(() => {
      wakeLockSentinel = null;
    });
  }
}

function finishPlatoCocinado() {
  if (!currentActiveRecipeForCooking) return;

  const note = prompt("¿Cómo salió el plato? Guardá una nota para la próxima (ej: 'Le faltó 1 min de horno / El punto estuvo perfecto'):", "");

  appState.history.push({
    id: `hist-${Date.now()}`,
    date: new Date().toISOString().split('T')[0],
    recipeId: currentActiveRecipeForCooking.id,
    recipeTitle: currentActiveRecipeForCooking.title,
    portions: currentActiveRecipeForCooking.portions,
    note: note || 'Preparado con éxito.'
  });

  saveState();
  closeCookingMode();
  showToast("🎉 ¡Felicitaciones Chef! Plato completado y guardado en tu historial.", 'success');
}

// =========================================================
// 10. MODALES PARA CREAR INGREDIENTES Y RECETAS
// =========================================================
function openAddPantryModal(defaultCategory = 'heladera') {
  const modal = document.getElementById('addPantryModal');
  if (!modal) return;
  const catSelect = document.getElementById('inpPantryCategory');
  if (catSelect) catSelect.value = defaultCategory;
  modal.style.display = 'flex';
}

function closeAddPantryModal() {
  const modal = document.getElementById('addPantryModal');
  if (modal) modal.style.display = 'none';
}

function handleAddPantrySubmit(e) {
  if (e) e.preventDefault();
  const name = document.getElementById('inpPantryName')?.value.trim();
  const category = document.getElementById('inpPantryCategory')?.value || 'heladera';
  const qty = parseFloat(document.getElementById('inpPantryQty')?.value) || 1;
  const unit = document.getElementById('inpPantryUnit')?.value.trim() || 'un';
  const icon = document.getElementById('inpPantryIcon')?.value.trim() || '📦';

  if (!name) return alert("Por favor ingresá el nombre del ingrediente.");

  appState.pantry.push({
    id: `ing-${Date.now()}`,
    name,
    category,
    qty,
    unit,
    minQty: Math.round(qty * 0.3),
    icon
  });

  saveState();
  closeAddPantryModal();
  renderPantryView();
  updateHeaderBadges();
  showToast(`✅ ¡Ingrediente agregado a tu alacena: ${name}!`, 'success');
}

// =========================================================
// 11. GESTIÓN DE RECETAS (AGREGAR Y BORRAR RECETAS)
// =========================================================
function deleteCurrentRecipe() {
  if (!currentDetailRecipe) return;
  deleteRecipe(currentDetailRecipe.id);
}

function deleteRecipe(recipeId) {
  const recipe = appState.recipes.find(r => r.id === recipeId);
  if (!recipe) return;

  if (!canUserModifyRecipe(recipe)) {
    showToast(`⚠️ Esta receta pertenece a ${recipe.authorName || 'otro chef'}. Solo su autor puede eliminarla.`, 'info');
    return;
  }

  if (!confirm(`¿Estás seguro de que querés eliminar la receta "${recipe.title}"?`)) {
    return;
  }

  appState.recipes = appState.recipes.filter(r => r.id !== recipeId);
  saveState();
  closeRecipeDetailModal();
  updateHeaderBadges();

  if (currentTab === 'recetas') renderRecipesView();
  if (currentTab === 'matcher') renderSmartMatcher();

  showToast(`🗑️ Receta "${recipe.title}" eliminada`, 'info');
}

function openAddRecipeModal() {
  const modal = document.getElementById('addRecipeModal');
  if (!modal) return;

  // Reset form fields
  const titleEl = document.getElementById('inpRecTitle');
  if (titleEl) titleEl.value = '';
  const catEl = document.getElementById('inpRecCategory');
  if (catEl) catEl.value = 'rapidas';
  const diffEl = document.getElementById('inpRecDifficulty');
  if (diffEl) diffEl.value = 'Media';
  const timeEl = document.getElementById('inpRecTime');
  if (timeEl) timeEl.value = '25';
  const portEl = document.getElementById('inpRecPortions');
  if (portEl) portEl.value = '2';
  const imgEl = document.getElementById('inpRecImage');
  if (imgEl) imgEl.value = '';
  const descEl = document.getElementById('inpRecDesc');
  if (descEl) descEl.value = '';
  const pairEl = document.getElementById('inpRecPairing');
  if (pairEl) pairEl.value = '';
  const tipEl = document.getElementById('inpRecChefTip');
  if (tipEl) tipEl.value = '';

  // Por defecto, nueva receta es pública para la familia
  setAddRecipeVisibility(false);

  // Reset ingredients container with 2 default rows
  const ingsContainer = document.getElementById('newRecipeIngredientsContainer');
  if (ingsContainer) {
    ingsContainer.innerHTML = '';
    addRecipeIngredientRow('Pechuga de Pollo', '400', 'g');
    addRecipeIngredientRow('Cebolla', '1', 'un');
  }

  // Reset steps container with 2 default steps
  const stepsContainer = document.getElementById('newRecipeStepsContainer');
  if (stepsContainer) {
    stepsContainer.innerHTML = '';
    addRecipeStepRow('Mise en Place & Salteado', 'Picar los ingredientes y dorar en sartén caliente con aceite.', '5');
    addRecipeStepRow('Cocción & Emplatado', 'Cocinar a fuego suave y servir caliente con hierbas frescas.', '10');
  }

  updateMasterIngredientsDatalist();
  modal.style.display = 'flex';
}

function closeAddRecipeModal() {
  const modal = document.getElementById('addRecipeModal');
  if (modal) modal.style.display = 'none';
}

function addRecipeIngredientRow(name = '', qty = '', unit = '') {
  const container = document.getElementById('newRecipeIngredientsContainer');
  if (!container) return;

  let matchedUnit = unit;
  let matchedId = '';
  if (name) {
    const found = appState.pantry.find(p => p.name.toLowerCase() === name.toLowerCase());
    if (found) {
      matchedUnit = matchedUnit || found.unit;
      matchedId = found.id;
    }
  }

  const row = document.createElement('div');
  row.className = 'new-recipe-ing-row';
  row.style = 'display:grid; grid-template-columns: 2.2fr 1fr 1fr auto; gap:8px; align-items:center;';
  row.innerHTML = `
    <div style="position:relative; width:100%;">
      <input type="text" list="masterIngredientsList" class="rec-ing-name" placeholder="Buscar o escribir ingrediente..." value="${escapeAttr(name)}" data-ing-id="${matchedId}" oninput="handleIngredientSelection(this)" required style="width:100%; background:var(--bg-main); border:1px solid var(--border); border-radius:var(--radius-sm); padding:8px 10px; color:#fff; font-size:0.85rem;">
    </div>
    <input type="number" step="any" class="rec-ing-qty" placeholder="Cant." value="${escapeAttr(qty)}" required style="background:var(--bg-main); border:1px solid var(--border); border-radius:var(--radius-sm); padding:8px 10px; color:#fff; font-size:0.85rem;">
    <input type="text" class="rec-ing-unit" placeholder="g, un, ml" value="${escapeAttr(matchedUnit || 'g')}" required style="background:var(--bg-main); border:1px solid var(--border); border-radius:var(--radius-sm); padding:8px 10px; color:#fff; font-size:0.85rem;">
    <button type="button" class="btn-icon btn-danger btn-sm" onclick="this.parentElement.remove()" style="height:34px; width:34px;" title="Quitar ingrediente">✕</button>
  `;
  container.appendChild(row);
}

function handleIngredientSelection(inputEl) {
  const val = inputEl.value.trim().toLowerCase();
  if (!val) return;

  // Buscar si coincide exactamente o comienza igual
  const match = appState.pantry.find(p => p.name.toLowerCase() === val) || appState.pantry.find(p => p.name.toLowerCase().startsWith(val));
  if (match) {
    inputEl.setAttribute('data-ing-id', match.id);
    const row = inputEl.closest('.new-recipe-ing-row');
    if (row) {
      const unitInp = row.querySelector('.rec-ing-unit');
      if (unitInp && (!unitInp.value || unitInp.value === 'g' || unitInp.value === 'un')) {
        unitInp.value = match.unit;
      }
    }
  }
}

function addRecipeStepRow(title = '', text = '', timerMinutes = '') {
  const container = document.getElementById('newRecipeStepsContainer');
  if (!container) return;

  const stepCount = (container.children ? container.children.length : 0) + 1;
  const row = document.createElement('div');
  row.className = 'new-recipe-step-row';
  row.style = 'background:var(--bg-main); border:1px solid var(--border); border-radius:var(--radius-md); padding:12px; display:flex; flex-direction:column; gap:8px; position:relative;';
  row.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
      <div style="display:flex; align-items:center; gap:8px; flex:1;">
        <span class="step-num-badge" style="background:var(--primary); color:#fff; font-weight:800; width:22px; height:22px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.75rem;">${stepCount}</span>
        <input type="text" class="rec-step-title" placeholder="Título del paso (ej: Sellado, Salsa, Horno)" value="${escapeAttr(title)}" required style="background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-sm); padding:6px 10px; color:#fff; font-size:0.85rem; flex:1;">
      </div>
      <div style="display:flex; align-items:center; gap:6px;">
        <input type="number" min="0" class="rec-step-timer" placeholder="Min timer" value="${escapeAttr(timerMinutes)}" style="width:85px; background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-sm); padding:6px 8px; color:var(--accent-gold); font-size:0.82rem;" title="Minutos de temporizador (opcional)">
        <button type="button" class="btn-icon btn-danger btn-sm" onclick="this.closest('.new-recipe-step-row').remove(); renumberRecipeStepRows();" style="height:32px; width:32px;" title="Quitar paso">✕</button>
      </div>
    </div>
    <textarea class="rec-step-text" rows="2" placeholder="Instrucciones detalladas del paso..." required style="background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-sm); padding:8px 10px; color:var(--text-main); font-size:0.85rem; width:100%;">${escapeAttr(text)}</textarea>
  `;
  container.appendChild(row);
}

function renumberRecipeStepRows() {
  const container = document.getElementById('newRecipeStepsContainer');
  if (!container) return;
  Array.from(container.children).forEach((row, idx) => {
    const badge = row.querySelector('.step-num-badge');
    if (badge) badge.innerText = idx + 1;
  });
}

function handleAddRecipeSubmit(e) {
  if (e) e.preventDefault();

  const title = document.getElementById('inpRecTitle')?.value.trim();
  const category = document.getElementById('inpRecCategory')?.value || 'rapidas';
  const difficulty = document.getElementById('inpRecDifficulty')?.value || 'Media';
  const time = parseInt(document.getElementById('inpRecTime')?.value) || 30;
  const portions = parseInt(document.getElementById('inpRecPortions')?.value) || 2;
  let image = document.getElementById('inpRecImage')?.value.trim();
  const description = document.getElementById('inpRecDesc')?.value.trim() || 'Receta gourmet casera de autor.';
  const pairing = document.getElementById('inpRecPairing')?.value.trim() || 'Vino o bebida fresca a elección';
  const chefTip = document.getElementById('inpRecChefTip')?.value.trim() || 'Cocinar a fuego controlado y probar los sabores antes de servir.';

  if (!title) {
    showToast('Por favor completá el título de la receta.', 'info');
    return;
  }

  // Si no hay imagen, asignar una imagen según la categoría
  if (!image) {
    const defaultImgs = {
      carnes: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80',
      pastas: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281699?w=600&auto=format&fit=crop&q=80',
      postres: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80',
      rapidas: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80'
    };
    image = defaultImgs[category] || defaultImgs.rapidas;
  }

  // Recolectar ingredientes
  const ingRows = document.querySelectorAll('#newRecipeIngredientsContainer .new-recipe-ing-row');
  const ingredients = [];
  ingRows.forEach(row => {
    const nameInp = row.querySelector('.rec-ing-name');
    const name = nameInp?.value.trim();
    const qtyVal = parseFloat(row.querySelector('.rec-ing-qty')?.value);
    const unit = row.querySelector('.rec-ing-unit')?.value.trim() || 'un';

    if (name) {
      let linkedId = nameInp?.getAttribute('data-ing-id');
      let inPantry = null;

      if (linkedId) {
        inPantry = appState.pantry.find(p => p.id === linkedId);
      }
      if (!inPantry) {
        inPantry = appState.pantry.find(p => p.name.toLowerCase() === name.toLowerCase());
      }
      if (!inPantry) {
        inPantry = appState.pantry.find(p => p.name.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(p.name.toLowerCase()));
      }

      // Si es un ingrediente nuevo que no existía en el catálogo ni en la alacena, crearlo con stock 0
      if (!inPantry) {
        inPantry = {
          id: `ing-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
          name,
          category: 'alacena',
          qty: 0,
          unit,
          minQty: 1,
          icon: '🥘'
        };
        appState.pantry.push(inPantry);
      }

      ingredients.push({
        name: inPantry.name,
        qty: isNaN(qtyVal) ? 1 : qtyVal,
        unit: unit || inPantry.unit,
        requiredId: inPantry.id
      });
    }
  });

  if (ingredients.length === 0) {
    showToast('Por favor agregá al menos 1 ingrediente.', 'info');
    return;
  }

  // Recolectar pasos
  const stepRows = document.querySelectorAll('#newRecipeStepsContainer .new-recipe-step-row');
  const steps = [];
  stepRows.forEach((row, idx) => {
    const stepTitle = row.querySelector('.rec-step-title')?.value.trim() || `Paso ${idx + 1}`;
    const text = row.querySelector('.rec-step-text')?.value.trim();
    const timerVal = parseInt(row.querySelector('.rec-step-timer')?.value);
    if (text) {
      steps.push({
        stepNumber: idx + 1,
        title: stepTitle,
        text,
        timerMinutes: (!isNaN(timerVal) && timerVal > 0) ? timerVal : undefined
      });
    }
  });

  if (steps.length === 0) {
    showToast('Por favor agregá al menos 1 paso de preparación.', 'info');
    return;
  }

  const curUser = getCurrentUser();
  const isPrivate = !!addRecipeIsPrivate;

  const newRecipe = {
    id: `rec-${Date.now()}`,
    title,
    authorId: curUser.id,
    authorName: curUser.name,
    authorAvatar: curUser.avatar,
    isPrivate,
    category,
    time,
    portions,
    difficulty,
    rating: 5,
    image,
    description,
    pairing,
    chefTip,
    ingredients,
    steps
  };

  appState.recipes.unshift(newRecipe);
  saveState();
  closeAddRecipeModal();
  updateHeaderBadges();
  updateMasterIngredientsDatalist();

  if (currentTab === 'recetas') renderRecipesView();
  if (currentTab === 'matcher') renderSmartMatcher();

  showToast(`🎉 ¡Receta "${title}" (${isPrivate ? '🔒 Privada' : '🌐 Pública familiar'}) guardada con éxito!`, 'success');
}

// =========================================================
// 12. EDICIÓN DE RECETAS DE AUTOR (EDIT RECIPE MODAL)
// =========================================================

function openEditCurrentRecipeModal() {
  if (!currentDetailRecipe) return;
  openEditRecipeModal(currentDetailRecipe.id);
}

function openEditRecipeModal(recipeId) {
  const recipe = appState.recipes.find(r => r.id === recipeId);
  if (!recipe) {
    showToast('No se encontró la receta a editar.', 'info');
    return;
  }

  if (!canUserModifyRecipe(recipe)) {
    showToast(`⚠️ Esta receta fue creada por ${recipe.authorName || 'otro chef'}. Solo su autor puede modificarla.`, 'info');
    return;
  }

  const modal = document.getElementById('editRecipeModal');
  if (!modal) return;

  // Llenar campos con los valores actuales de la receta
  const idEl = document.getElementById('inpEditRecId');
  if (idEl) idEl.value = recipe.id;

  const titleEl = document.getElementById('inpEditRecTitle');
  if (titleEl) titleEl.value = recipe.title || '';

  // Configurar visibilidad actual
  setEditRecipeVisibility(!!recipe.isPrivate);

  const catEl = document.getElementById('inpEditRecCategory');
  if (catEl) catEl.value = recipe.category || 'rapidas';

  const diffEl = document.getElementById('inpEditRecDifficulty');
  if (diffEl) diffEl.value = recipe.difficulty || 'Media';

  const timeEl = document.getElementById('inpEditRecTime');
  if (timeEl) timeEl.value = recipe.time || 30;

  const portEl = document.getElementById('inpEditRecPortions');
  if (portEl) portEl.value = recipe.portions || 2;

  const imgEl = document.getElementById('inpEditRecImage');
  if (imgEl) imgEl.value = recipe.image || '';

  const descEl = document.getElementById('inpEditRecDesc');
  if (descEl) descEl.value = recipe.description || '';

  const pairEl = document.getElementById('inpEditRecPairing');
  if (pairEl) pairEl.value = recipe.pairing || '';

  const tipEl = document.getElementById('inpEditRecChefTip');
  if (tipEl) tipEl.value = recipe.chefTip || '';

  // Poblar contenedor de ingredientes
  const ingsContainer = document.getElementById('editRecipeIngredientsContainer');
  if (ingsContainer) {
    ingsContainer.innerHTML = '';
    if (Array.isArray(recipe.ingredients) && recipe.ingredients.length > 0) {
      recipe.ingredients.forEach(ing => {
        addEditRecipeIngredientRow(ing.name, ing.qty, ing.unit, ing.requiredId);
      });
    } else {
      addEditRecipeIngredientRow('Pechuga de Pollo', '400', 'g');
    }
  }

  // Poblar contenedor de pasos
  const stepsContainer = document.getElementById('editRecipeStepsContainer');
  if (stepsContainer) {
    stepsContainer.innerHTML = '';
    if (Array.isArray(recipe.steps) && recipe.steps.length > 0) {
      recipe.steps.forEach(step => {
        addEditRecipeStepRow(step.title, step.text, step.timerMinutes);
      });
    } else {
      addEditRecipeStepRow('Paso 1', 'Preparación de ingredientes.', '5');
    }
  }

  updateMasterIngredientsDatalist();
  modal.style.display = 'flex';
}

function closeEditRecipeModal() {
  const modal = document.getElementById('editRecipeModal');
  if (modal) modal.style.display = 'none';
}

function addEditRecipeIngredientRow(name = '', qty = '', unit = '', linkedId = '') {
  const container = document.getElementById('editRecipeIngredientsContainer');
  if (!container) return;

  let matchedUnit = unit;
  let matchedId = linkedId;
  if (name) {
    const found = appState.pantry.find(p => p.name.toLowerCase() === name.toLowerCase());
    if (found) {
      matchedUnit = matchedUnit || found.unit;
      matchedId = matchedId || found.id;
    }
  }

  const row = document.createElement('div');
  row.className = 'edit-recipe-ing-row';
  row.style = 'display:grid; grid-template-columns: 2.2fr 1fr 1fr auto; gap:8px; align-items:center;';
  row.innerHTML = `
    <div style="position:relative; width:100%;">
      <input type="text" list="masterIngredientsList" class="rec-ing-name" placeholder="Buscar o escribir ingrediente..." value="${escapeAttr(name)}" data-ing-id="${matchedId}" oninput="handleIngredientSelection(this)" required style="width:100%; background:var(--bg-main); border:1px solid var(--border); border-radius:var(--radius-sm); padding:8px 10px; color:#fff; font-size:0.85rem;">
    </div>
    <input type="number" step="any" class="rec-ing-qty" placeholder="Cant." value="${escapeAttr(qty)}" required style="background:var(--bg-main); border:1px solid var(--border); border-radius:var(--radius-sm); padding:8px 10px; color:#fff; font-size:0.85rem;">
    <input type="text" class="rec-ing-unit" placeholder="g, un, ml" value="${escapeAttr(matchedUnit || 'g')}" required style="background:var(--bg-main); border:1px solid var(--border); border-radius:var(--radius-sm); padding:8px 10px; color:#fff; font-size:0.85rem;">
    <button type="button" class="btn-icon btn-danger btn-sm" onclick="this.parentElement.remove()" style="height:34px; width:34px;" title="Quitar ingrediente">✕</button>
  `;
  container.appendChild(row);
}

function addEditRecipeStepRow(title = '', text = '', timerMinutes = '') {
  const container = document.getElementById('editRecipeStepsContainer');
  if (!container) return;

  const stepCount = (container.children ? container.children.length : 0) + 1;
  const row = document.createElement('div');
  row.className = 'edit-recipe-step-row';
  row.style = 'background:var(--bg-main); border:1px solid var(--border); border-radius:var(--radius-md); padding:12px; display:flex; flex-direction:column; gap:8px; position:relative;';
  row.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
      <div style="display:flex; align-items:center; gap:8px; flex:1;">
        <span class="step-num-badge" style="background:var(--primary); color:#fff; font-weight:800; width:22px; height:22px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.75rem;">${stepCount}</span>
        <input type="text" class="rec-step-title" placeholder="Título del paso (ej: Sellado, Salsa, Horno)" value="${escapeAttr(title)}" required style="background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-sm); padding:6px 10px; color:#fff; font-size:0.85rem; flex:1;">
      </div>
      <div style="display:flex; align-items:center; gap:6px;">
        <input type="number" min="0" class="rec-step-timer" placeholder="Min timer" value="${escapeAttr(timerMinutes || '')}" style="width:85px; background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-sm); padding:6px 8px; color:var(--accent-gold); font-size:0.82rem;" title="Minutos de temporizador (opcional)">
        <button type="button" class="btn-icon btn-danger btn-sm" onclick="this.closest('.edit-recipe-step-row').remove(); renumberEditRecipeStepRows();" style="height:32px; width:32px;" title="Quitar paso">✕</button>
      </div>
    </div>
    <textarea class="rec-step-text" rows="2" placeholder="Instrucciones detalladas del paso..." required style="background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-sm); padding:8px 10px; color:var(--text-main); font-size:0.85rem; width:100%;">${escapeAttr(text)}</textarea>
  `;
  container.appendChild(row);
}

function renumberEditRecipeStepRows() {
  const container = document.getElementById('editRecipeStepsContainer');
  if (!container) return;
  Array.from(container.children).forEach((row, idx) => {
    const badge = row.querySelector('.step-num-badge');
    if (badge) badge.innerText = idx + 1;
  });
}

function handleEditRecipeSubmit(e) {
  if (e) e.preventDefault();

  const recipeId = document.getElementById('inpEditRecId')?.value;
  if (!recipeId) return;

  const recipeIndex = appState.recipes.findIndex(r => r.id === recipeId);
  if (recipeIndex === -1) {
    showToast('Error: No se encontró la receta.', 'info');
    return;
  }

  const existingRecipe = appState.recipes[recipeIndex];
  if (!canUserModifyRecipe(existingRecipe)) {
    showToast('No tienes permisos para editar esta receta.', 'info');
    return;
  }

  const title = document.getElementById('inpEditRecTitle')?.value.trim();
  const category = document.getElementById('inpEditRecCategory')?.value || 'rapidas';
  const difficulty = document.getElementById('inpEditRecDifficulty')?.value || 'Media';
  const time = parseInt(document.getElementById('inpEditRecTime')?.value) || 30;
  const portions = parseInt(document.getElementById('inpEditRecPortions')?.value) || 2;
  let image = document.getElementById('inpEditRecImage')?.value.trim();
  const description = document.getElementById('inpEditRecDesc')?.value.trim() || 'Receta gourmet casera de autor.';
  const pairing = document.getElementById('inpEditRecPairing')?.value.trim() || '';
  const chefTip = document.getElementById('inpEditRecChefTip')?.value.trim() || '';
  const isPrivate = !!editRecipeIsPrivate;

  if (!title) {
    showToast('Por favor completá el título de la receta.', 'info');
    return;
  }

  if (!image) {
    image = existingRecipe.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80';
  }

  // Recolectar ingredientes
  const ingRows = document.querySelectorAll('#editRecipeIngredientsContainer .edit-recipe-ing-row');
  const ingredients = [];
  ingRows.forEach(row => {
    const nameInp = row.querySelector('.rec-ing-name');
    const name = nameInp?.value.trim();
    const qtyVal = parseFloat(row.querySelector('.rec-ing-qty')?.value);
    const unit = row.querySelector('.rec-ing-unit')?.value.trim() || 'un';

    if (name) {
      let linkedId = nameInp?.getAttribute('data-ing-id');
      let inPantry = null;

      if (linkedId) {
        inPantry = appState.pantry.find(p => p.id === linkedId);
      }
      if (!inPantry) {
        inPantry = appState.pantry.find(p => p.name.toLowerCase() === name.toLowerCase());
      }
      if (!inPantry) {
        inPantry = appState.pantry.find(p => p.name.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(p.name.toLowerCase()));
      }

      if (!inPantry) {
        inPantry = {
          id: `ing-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
          name,
          category: 'alacena',
          qty: 0,
          unit,
          minQty: 1,
          icon: '🥘'
        };
        appState.pantry.push(inPantry);
      }

      ingredients.push({
        name: inPantry.name,
        qty: isNaN(qtyVal) ? 1 : qtyVal,
        unit: unit || inPantry.unit,
        requiredId: inPantry.id
      });
    }
  });

  if (ingredients.length === 0) {
    showToast('Por favor agregá al menos 1 ingrediente.', 'info');
    return;
  }

  // Recolectar pasos
  const stepRows = document.querySelectorAll('#editRecipeStepsContainer .edit-recipe-step-row');
  const steps = [];
  stepRows.forEach((row, idx) => {
    const stepTitle = row.querySelector('.rec-step-title')?.value.trim() || `Paso ${idx + 1}`;
    const text = row.querySelector('.rec-step-text')?.value.trim();
    const timerVal = parseInt(row.querySelector('.rec-step-timer')?.value);
    if (text) {
      steps.push({
        stepNumber: idx + 1,
        title: stepTitle,
        text,
        timerMinutes: (!isNaN(timerVal) && timerVal > 0) ? timerVal : undefined
      });
    }
  });

  if (steps.length === 0) {
    showToast('Por favor agregá al menos 1 paso de preparación.', 'info');
    return;
  }

  // Actualizar receta
  const updatedRecipe = {
    ...existingRecipe,
    title,
    isPrivate,
    category,
    time,
    portions,
    difficulty,
    image,
    description,
    pairing,
    chefTip,
    ingredients,
    steps
  };

  appState.recipes[recipeIndex] = updatedRecipe;
  saveState();
  closeEditRecipeModal();
  updateHeaderBadges();
  updateMasterIngredientsDatalist();

  // Si el modal de detalle estaba abierto con esta receta, actualizarlo
  if (currentDetailRecipe && currentDetailRecipe.id === recipeId) {
    currentDetailRecipe = updatedRecipe;
    renderRecipeDetailModalContent();
  }

  if (currentTab === 'recetas') renderRecipesView();
  if (currentTab === 'matcher') renderSmartMatcher();

  showToast(`💾 ¡Receta "${title}" actualizada con éxito!`, 'success');
}

// Helpers
function getCategoryName(cat) {
  const map = {
    heladera: 'Frescos & Heladera',
    carnes: 'Carnes & Fuegos',
    alacena: 'Alacena & Secos',
    especias: 'Especias & Aromas',
    cava: 'Cava & Bebidas',
    rapidas: 'Rápidas de Semana',
    pastas: 'Pastas & Risottos',
    postres: 'Postres de Autor'
  };
  return map[cat] || cat;
}

function escapeAttr(str) {
  if (!str) return '';
  return String(str).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// Exponer explícitamente en el objeto global window
window.getCurrentUser = getCurrentUser;
window.updateHeaderUserBadge = updateHeaderUserBadge;
window.openUserProfileModal = openUserProfileModal;
window.closeUserProfileModal = closeUserProfileModal;
window.switchUser = switchUser;
window.handleCreateFamilyMember = handleCreateFamilyMember;
window.canUserModifyRecipe = canUserModifyRecipe;
window.getVisibleRecipes = getVisibleRecipes;
window.filterRecipesByScope = filterRecipesByScope;
window.filterRecipesByAuthor = filterRecipesByAuthor;
window.updateAuthorFilterDropdown = updateAuthorFilterDropdown;
window.setAddRecipeVisibility = setAddRecipeVisibility;
window.setEditRecipeVisibility = setEditRecipeVisibility;
window.openAddRecipeModal = openAddRecipeModal;
window.closeAddRecipeModal = closeAddRecipeModal;
window.openEditRecipeModal = openEditRecipeModal;
window.openEditCurrentRecipeModal = openEditCurrentRecipeModal;
window.closeEditRecipeModal = closeEditRecipeModal;
window.addEditRecipeIngredientRow = addEditRecipeIngredientRow;
window.addEditRecipeStepRow = addEditRecipeStepRow;
window.renumberEditRecipeStepRows = renumberEditRecipeStepRows;
window.handleEditRecipeSubmit = handleEditRecipeSubmit;
window.addRecipeIngredientRow = addRecipeIngredientRow;
window.handleIngredientSelection = handleIngredientSelection;
window.addRecipeStepRow = addRecipeStepRow;
window.renumberRecipeStepRows = renumberRecipeStepRows;
window.handleAddRecipeSubmit = handleAddRecipeSubmit;
window.deleteCurrentRecipe = deleteCurrentRecipe;
window.deleteRecipe = deleteRecipe;
window.addCurrentRecipeToCart = addCurrentRecipeToCart;
window.addRecipeToCartQuick = addRecipeToCartQuick;
window.showToast = showToast;
window.switchTab = switchTab;
window.openRecipeDetailModal = openRecipeDetailModal;
window.closeRecipeDetailModal = closeRecipeDetailModal;
window.setPortionMultiplier = setPortionMultiplier;
window.startCookingMode = startCookingMode;
window.closeCookingMode = closeCookingMode;
window.finishPlatoCocinado = finishPlatoCocinado;
window.openAddPantryModal = openAddPantryModal;
window.closeAddPantryModal = closeAddPantryModal;
window.handleAddPantrySubmit = handleAddPantrySubmit;
window.adjustPantryQty = adjustPantryQty;
window.deletePantryItem = deletePantryItem;
window.addPantryToShoppingList = addPantryToShoppingList;
window.filterPantryByCat = filterPantryByCat;
window.filterPantryByStock = filterPantryByStock;
window.handlePantrySearch = handlePantrySearch;
window.renderPantryView = renderPantryView;
window.renderSmartMatcher = renderSmartMatcher;
window.renderRecipesView = renderRecipesView;
window.filterRecipesByCat = filterRecipesByCat;
window.handleRecipeSearch = handleRecipeSearch;
window.toggleShoppingItem = toggleShoppingItem;
window.deleteShoppingItem = deleteShoppingItem;
window.addShoppingItemManual = addShoppingItemManual;
window.compartirListaComprasWhatsApp = compartirListaComprasWhatsApp;
window.clearCheckedShopping = clearCheckedShopping;
window.consolidateShoppingList = consolidateShoppingList;
window.addOrMergeShoppingItem = addOrMergeShoppingItem;
window.parseQuantityAndUnit = parseQuantityAndUnit;
window.formatBaseQuantity = formatBaseQuantity;
window.updateMasterIngredientsDatalist = updateMasterIngredientsDatalist;
window.loadState = loadState;
window.saveState = saveState;

// Inicialización de la Aplicación
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  switchTab('matcher');
});
