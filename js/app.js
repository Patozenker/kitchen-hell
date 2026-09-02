/**
 * HELL'S KITCHEN - MOTOR PRINCIPAL DE LA APLICACIÓN
 * Alacenas y Listas de Compras Individuales por Usuario,
 * Catálogo de Insumos Global Compartido,
 * Smart Matcher de Recetas, Modo Cocina con Timers y WakeLock,
 * Sistema de Comentarios & Respuestas del Autor,
 * y Persistencia Local.
 */

// =========================================================
// 1. ESTADO & PERSISTENCIA (HELL'S KITCHEN LOCALSTORAGE)
// =========================================================
const STORAGE_KEY = 'hells_kitchen_store_v2';
const LEGACY_STORAGE_KEY = 'patos_kitchen_store_v1';

let appState = {
  users: [],
  currentUser: 'user-pato',
  pantries: {},       // { 'user-pato': [...], 'user-mama': [...], 'user-hermano': [...] }
  shoppingLists: {},  // { 'user-pato': [...], 'user-mama': [...], 'user-hermano': [...] }
  recipes: [],
  history: []
};

// =========================================================
// 1.1 HELPERS DE ACCESO POR USUARIO
// =========================================================

function getCurrentUserId() {
  return appState.currentUser || 'user-pato';
}

function getCurrentUser() {
  if (!appState.currentUser) return null;
  return (appState.users || []).find(u => u.id === appState.currentUser) || null;
}

function getCurrentPantry() {
  const uid = getCurrentUserId();
  if (!appState.pantries) appState.pantries = {};
  if (!Array.isArray(appState.pantries[uid])) {
    appState.pantries[uid] = (typeof createEmptyUserPantry === 'function')
      ? createEmptyUserPantry()
      : ((typeof MASTER_PANTRY_CATALOG !== 'undefined') ? MASTER_PANTRY_CATALOG.map(i => ({ ...i, qty: 0 })) : []);
  }
  return appState.pantries[uid];
}

function getCurrentShoppingList() {
  const uid = getCurrentUserId();
  if (!appState.shoppingLists) appState.shoppingLists = {};
  if (!Array.isArray(appState.shoppingLists[uid])) {
    appState.shoppingLists[uid] = [];
  }
  return appState.shoppingLists[uid];
}

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
        if (legacyParsed) {
          parsed = {
            users: (typeof DEFAULT_USERS !== 'undefined') ? JSON.parse(JSON.stringify(DEFAULT_USERS)) : [
              { id: 'user-pato', name: 'Chef Pato', avatar: '👨‍🍳', role: 'user' }
            ],
            currentUser: 'user-pato',
            pantries: {
              'user-pato': legacyParsed.pantry || (typeof MASTER_PANTRY_CATALOG !== 'undefined' ? JSON.parse(JSON.stringify(MASTER_PANTRY_CATALOG)) : [])
            },
            shoppingLists: {
              'user-pato': legacyParsed.shoppingList || []
            },
            recipes: (legacyParsed.recipes || []).map(r => ({
              ...r,
              authorId: r.authorId || 'user-pato',
              authorName: r.authorName || 'Chef Pato',
              authorAvatar: r.authorAvatar || '👨‍🍳',
              isPrivate: r.isPrivate === true ? true : false,
              comments: r.comments || []
            })),
            history: legacyParsed.history || []
          };
        }
      }
    }

    if (parsed) {
      appState = parsed;

      // Asegurar usuarios mínimos y purgar usuarios legacy
      if (Array.isArray(appState.users)) {
        appState.users = appState.users.filter(u => u.id !== 'user-mama' && u.id !== 'user-hermano');
      }
      if (appState.pantries) {
        delete appState.pantries['user-mama'];
        delete appState.pantries['user-hermano'];
      }
      if (appState.shoppingLists) {
        delete appState.shoppingLists['user-mama'];
        delete appState.shoppingLists['user-hermano'];
      }

      if (!Array.isArray(appState.users) || appState.users.length === 0) {
        appState.users = (typeof DEFAULT_USERS !== 'undefined') ? JSON.parse(JSON.stringify(DEFAULT_USERS)) : [
          { id: 'user-pato', name: 'Chef Pato', email: 'pato@hellskitchen.com', profession: 'Chef Ejecutivo / Creador', password: 'pato', avatar: '👨‍🍳', role: 'admin' }
        ];
      }

      // Asegurar que Chef Pato y los usuarios tengan email y profesión
      appState.users.forEach(u => {
        if (u.id === 'user-pato') {
          if (!u.email) u.email = 'pato@hellskitchen.com';
          if (!u.profession) u.profession = 'Chef Ejecutivo / Creador';
          if (!u.password) u.password = 'pato';
        } else {
          if (!u.profession) u.profession = 'Cocinero/a Aficionado/a';
        }
      });

      const activeSession = localStorage.getItem(AUTH_SESSION_KEY);
      if (activeSession && appState.users.some(u => u.id === activeSession)) {
        appState.currentUser = activeSession;
      } else {
        appState.currentUser = null;
      }

      // Migración si existía 'pantry' o 'shoppingList' planos
      if (!appState.pantries || typeof appState.pantries !== 'object') {
        appState.pantries = {};
        if (Array.isArray(parsed.pantry)) {
          appState.pantries['user-pato'] = parsed.pantry;
        }
      }
      if (!appState.shoppingLists || typeof appState.shoppingLists !== 'object') {
        appState.shoppingLists = {};
        if (Array.isArray(parsed.shoppingList)) {
          appState.shoppingLists['user-pato'] = parsed.shoppingList;
        }
      }

      // Asegurar que cada usuario registrado tenga su alacena y su lista de compras
      appState.users.forEach(u => {
        if (!Array.isArray(appState.pantries[u.id])) {
          appState.pantries[u.id] = (typeof createEmptyUserPantry === 'function')
            ? createEmptyUserPantry()
            : ((typeof MASTER_PANTRY_CATALOG !== 'undefined') ? MASTER_PANTRY_CATALOG.map(i => ({ ...i, qty: 0 })) : []);
        }
        if (!Array.isArray(appState.shoppingLists[u.id])) {
          appState.shoppingLists[u.id] = [];
        }

        // Sincronizar con el catálogo maestro para asegurar que todos los ingredientes existan
        if (typeof MASTER_PANTRY_CATALOG !== 'undefined' && Array.isArray(MASTER_PANTRY_CATALOG)) {
          const userPantry = appState.pantries[u.id];
          const pantryMap = new Map();
          userPantry.forEach(p => pantryMap.set(p.id, p));

          MASTER_PANTRY_CATALOG.forEach(masterItem => {
            if (!pantryMap.has(masterItem.id)) {
              const existingByName = userPantry.find(p => p.name.toLowerCase() === masterItem.name.toLowerCase());
              if (!existingByName) {
                userPantry.push({
                  ...masterItem,
                  qty: 0
                });
              }
            }
          });
        }
      });

      // Asegurar autoría, comentarios y privacidad en todas las recetas
      if (Array.isArray(appState.recipes)) {
        appState.recipes.forEach(r => {
          if (!r.authorId) r.authorId = 'user-pato';
          if (!r.authorName) r.authorName = 'Chef Pato';
          if (!r.authorAvatar) r.authorAvatar = '👨‍🍳';
          if (r.isPrivate === undefined) r.isPrivate = false;
          if (!Array.isArray(r.comments)) r.comments = [];
        });
      } else {
        appState.recipes = JSON.parse(JSON.stringify(DEFAULT_KITCHEN_DATA.recipes));
      }

      updateMasterIngredientsDatalist();
      updateHeaderUserBadge();
      updateDynamicUserTitles();
      updateAuthorFilterDropdown();
      if (typeof window !== 'undefined') window.appState = appState;
      return;
    }
  } catch (e) {
    console.warn("Usando datos por defecto:", e);
  }

  // Semilla inicial
  const defaultData = (typeof DEFAULT_KITCHEN_DATA !== 'undefined') ? DEFAULT_KITCHEN_DATA : (typeof window !== 'undefined' && window.DEFAULT_KITCHEN_DATA ? window.DEFAULT_KITCHEN_DATA : (typeof global !== 'undefined' && global.DEFAULT_KITCHEN_DATA ? global.DEFAULT_KITCHEN_DATA : {}));
  appState = JSON.parse(JSON.stringify(defaultData));
  if (!Array.isArray(appState.users) || appState.users.length === 0) {
    appState.users = (typeof DEFAULT_USERS !== 'undefined') ? JSON.parse(JSON.stringify(DEFAULT_USERS)) : [
      { id: 'user-pato', name: 'Chef Pato', email: 'pato@hellskitchen.com', profession: 'Chef Ejecutivo / Creador', password: 'pato', avatar: '👨‍🍳', role: 'admin' }
    ];
  }
  appState.users.forEach(u => {
    if (u.id === 'user-pato') {
      if (!u.email) u.email = 'pato@hellskitchen.com';
      if (!u.profession) u.profession = 'Chef Ejecutivo / Creador';
      if (!u.password) u.password = 'pato';
    } else {
      if (!u.profession) u.profession = 'Cocinero/a Aficionado/a';
    }
  });
  saveState();
  updateMasterIngredientsDatalist();
  updateHeaderUserBadge();
  updateDynamicUserTitles();
  updateAuthorFilterDropdown();
  if (typeof window !== 'undefined') window.appState = appState;
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    if (typeof window !== 'undefined') window.appState = appState;
  } catch (e) {
    console.error("Error al guardar estado:", e);
  }
}

// =========================================================
// 1.2 REGISTRO GLOBAL DE INSUMOS (CATÁLOGO COMPARTIDO)
// =========================================================

function registerGlobalIngredient({ name, category = 'alacena', unit = 'un', minQty = 1, icon = '📦', initialQtyForCurrent = 0 }) {
  const trimmedName = name.trim();
  if (!trimmedName) return null;

  const currentPantry = getCurrentPantry();
  let existing = currentPantry.find(p => p.name.toLowerCase() === trimmedName.toLowerCase());

  if (existing) {
    if (initialQtyForCurrent > 0) {
      existing.qty = Math.round(((parseFloat(existing.qty) || 0) + initialQtyForCurrent) * 100) / 100;
    }
    return existing;
  }

  const newIngId = `ing-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
  const masterItem = {
    id: newIngId,
    name: trimmedName,
    category: category || 'alacena',
    unit: unit || 'un',
    minQty: minQty || 1,
    icon: icon || '📦'
  };

  // 1. Registrar en catálogo maestro en memoria
  if (typeof MASTER_PANTRY_CATALOG !== 'undefined' && Array.isArray(MASTER_PANTRY_CATALOG)) {
    const inMaster = MASTER_PANTRY_CATALOG.find(p => p.name.toLowerCase() === trimmedName.toLowerCase());
    if (!inMaster) {
      MASTER_PANTRY_CATALOG.push({ ...masterItem, qty: 0 });
    }
  }

  // 2. Propagar a todas las alacenas de los usuarios
  const curUid = getCurrentUserId();
  (appState.users || []).forEach(u => {
    if (!appState.pantries[u.id]) appState.pantries[u.id] = [];
    const inUserPantry = appState.pantries[u.id].find(p => p.name.toLowerCase() === trimmedName.toLowerCase());
    if (!inUserPantry) {
      appState.pantries[u.id].push({
        ...masterItem,
        qty: (u.id === curUid) ? initialQtyForCurrent : 0
      });
    } else if (u.id === curUid && initialQtyForCurrent > 0) {
      inUserPantry.qty = Math.round(((parseFloat(inUserPantry.qty) || 0) + initialQtyForCurrent) * 100) / 100;
    }
  });

  // 3. Sincronizar nuevo insumo global con Supabase Cloud
  if (typeof pushMasterIngredientToSupabase === 'function') {
    pushMasterIngredientToSupabase(masterItem);
  } else if (typeof window !== 'undefined' && typeof window.pushMasterIngredientToSupabase === 'function') {
    window.pushMasterIngredientToSupabase(masterItem);
  }

  updateMasterIngredientsDatalist();
  return currentPantry.find(p => p.id === newIngId) || masterItem;
}

function getCategoryName(category) {
  switch (category) {
    case 'carnes': return '🥩 Carnes & Pescados';
    case 'heladera': return '🥦 Frescos & Lácteos';
    case 'alacena': return '🥫 Despensa & Limpieza';
    case 'especias': return '🌿 Condimentos & Salsas';
    case 'cava': return '🍷 Bebidas & Cava';
    default: return '📦 General';
  }
}

function updateMasterIngredientsDatalist() {
  const dl = document.getElementById('masterIngredientsList');
  const pantry = getCurrentPantry();
  if (!dl || !pantry) return;

  const sorted = [...pantry].sort((a, b) => a.name.localeCompare(b.name, 'es'));
  dl.innerHTML = sorted.map(item => `
    <option value="${escapeAttr(item.name)}">${item.icon || '📦'} ${escapeAttr(item.name)} (${getCategoryName(item.category)}) - Unidad: ${escapeAttr(item.unit)}</option>
  `).join('');
}

// =========================================================
// 1.3 GESTIÓN DE USUARIOS, AUTENTICACIÓN & LEADS (MARKETING)
// =========================================================

const AUTH_SESSION_KEY = 'hells_kitchen_session_user';

function initAuth() {
  const savedSessionId = localStorage.getItem(AUTH_SESSION_KEY);
  if (savedSessionId) {
    const user = (appState.users || []).find(u => u.id === savedSessionId || (u.email && u.email.toLowerCase() === savedSessionId.toLowerCase()));
    if (user) {
      appState.currentUser = user.id;
      updateHeaderUserBadge();
      return;
    }
  }

  // Si no hay sesión activa guardada, dejar currentUser en null y abrir modal de login
  appState.currentUser = null;
  updateHeaderUserBadge();
  openAuthModal('login');
}

function canCloseAuthModal() {
  const user = getCurrentUser();
  return !!(user && user.id);
}

function openAuthModal(defaultTab = 'login') {
  const modal = document.getElementById('authModal');
  if (!modal) return;
  switchAuthTab(defaultTab);
  modal.style.display = 'flex';
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) modal.style.display = 'none';
}

function switchAuthTab(tab) {
  const formLogin = document.getElementById('formLogin');
  const formRegister = document.getElementById('formRegister');
  const subtitle = document.getElementById('authModalSubtitle');

  if (tab === 'login') {
    if (subtitle) subtitle.innerText = 'Ingresá con tu usuario y contraseña';
    if (formLogin) formLogin.style.display = 'block';
    if (formRegister) formRegister.style.display = 'none';
    setTimeout(() => document.getElementById('inpLoginEmail')?.focus(), 50);
  } else {
    if (subtitle) subtitle.innerText = 'Creá tu cuenta de Chef y guardá tu alacena';
    if (formLogin) formLogin.style.display = 'none';
    if (formRegister) formRegister.style.display = 'block';
    setTimeout(() => document.getElementById('inpRegName')?.focus(), 50);
  }
}

async function handleLoginSubmit(e) {
  if (e) e.preventDefault();

  const emailOrUser = (document.getElementById('inpLoginEmail')?.value || '').trim().toLowerCase();
  const password = (document.getElementById('inpLoginPassword')?.value || '').trim();

  if (!emailOrUser || !password) {
    showToast('Por favor completá usuario/email y contraseña.', 'info');
    return;
  }

  // 1. Consultar a Supabase en tiempo real si está conectado
  if (typeof supabaseClient !== 'undefined' && supabaseClient && isSupabaseConnected) {
    try {
      const { data: remoteUsers, error } = await supabaseClient.from('kitchen_users').select('*');
      if (!error && remoteUsers && remoteUsers.length > 0) {
        if (!Array.isArray(appState.users)) appState.users = [];
        remoteUsers.forEach(ru => {
          const idx = appState.users.findIndex(u => u.id === ru.id);
          const mapped = {
            id: ru.id,
            name: ru.name,
            email: ru.email,
            profession: ru.profession || 'Cocinero/a Aficionado/a',
            password: ru.password,
            avatar: ru.avatar || '👨‍🍳',
            role: ru.role || 'chef',
            marketing_opt_in: ru.marketing_opt_in !== false
          };
          if (idx !== -1) {
            appState.users[idx] = { ...appState.users[idx], ...mapped };
          } else {
            appState.users.push(mapped);
          }
        });
      }
    } catch (err) {
      console.warn("Error consultando Supabase en login:", err);
    }
  }

  // 2. Buscar usuario por email, nombre o id
  let user = (appState.users || []).find(u => 
    (u.email && u.email.toLowerCase() === emailOrUser) || 
    (u.name && u.name.toLowerCase() === emailOrUser) ||
    (u.id && u.id.toLowerCase() === emailOrUser) ||
    (emailOrUser === 'pato' && (u.id === 'user-pato' || (u.name && u.name.toLowerCase().includes('pato'))))
  );

  // 3. Fallback para Chef Pato si es primera vez
  if (!user && (emailOrUser === 'pato' || emailOrUser === 'chef pato' || emailOrUser === 'pato@hellskitchen.com')) {
    user = {
      id: 'user-pato',
      name: 'Chef Pato',
      email: 'pato@hellskitchen.com',
      profession: 'Chef Ejecutivo / Creador',
      password: 'pato',
      avatar: '👨‍🍳',
      role: 'admin'
    };
    if (!appState.users.some(u => u.id === 'user-pato')) {
      appState.users.push(user);
    }
  }

  if (!user) {
    showToast(`❌ El usuario o email "${emailOrUser}" no está registrado. Verificalo o creá tu cuenta.`, 'error');
    switchAuthTab('register');
    const regEmail = document.getElementById('inpRegEmail');
    if (regEmail && emailOrUser.includes('@')) regEmail.value = emailOrUser;
    return;
  }

  // 4. Validar contraseña
  if (user.password && user.password !== password) {
    showToast(`❌ Contraseña incorrecta para ${user.name}. Verificala e intentá nuevamente.`, 'error');
    return;
  }

  // 5. Login exitoso
  appState.currentUser = user.id;
  localStorage.setItem(AUTH_SESSION_KEY, user.id);
  saveState();

  updateHeaderUserBadge();
  updateMasterIngredientsDatalist();
  updateHeaderBadges();
  closeAuthModal();

  if (currentTab === 'matcher') renderSmartMatcher();
  if (currentTab === 'recetas') renderRecipesView();
  if (currentTab === 'alacena') renderPantryView();
  if (currentTab === 'compras') renderShoppingView();

  showToast(`🔥 ¡Bienvenido/a de vuelta a la cocina, ${user.name}!`, 'success');
}

async function handleRegisterSubmit(e) {
  if (e) e.preventDefault();

  const name = document.getElementById('inpRegName')?.value.trim();
  const email = document.getElementById('inpRegEmail')?.value.trim().toLowerCase();
  const profession = document.getElementById('inpRegProfession')?.value || 'Cocinero/a Aficionado/a';
  const password = document.getElementById('inpRegPassword')?.value.trim();
  const avatar = document.getElementById('inpRegAvatar')?.value || '👨‍🍳';

  if (!name || !email || !password) {
    showToast('Por favor completá todos los campos requeridos.', 'info');
    return;
  }

  // Validar formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showToast('Por favor ingresá un correo electrónico válido.', 'error');
    return;
  }

  // Verificar si el email ya está registrado localmente o en Supabase
  const existingUser = (appState.users || []).find(u => u.email && u.email.toLowerCase() === email);
  if (existingUser) {
    showToast(`⚠️ El email "${email}" ya está registrado. Por favor iniciá sesión.`, 'info');
    switchAuthTab('login');
    const loginInp = document.getElementById('inpLoginEmail');
    if (loginInp) loginInp.value = email;
    return;
  }

  if (typeof supabaseClient !== 'undefined' && supabaseClient && isSupabaseConnected) {
    try {
      const { data: dbExisting } = await supabaseClient.from('kitchen_users').select('id').eq('email', email);
      if (dbExisting && dbExisting.length > 0) {
        showToast(`⚠️ El email "${email}" ya está registrado en Supabase. Por favor iniciá sesión.`, 'info');
        switchAuthTab('login');
        const loginInp = document.getElementById('inpLoginEmail');
        if (loginInp) loginInp.value = email;
        return;
      }
    } catch (err) {
      console.warn("Error verificando email duplicado en Supabase:", err);
    }
  }

  const newUserId = `usr-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
  const newUser = {
    id: newUserId,
    name,
    email,
    profession,
    password,
    avatar,
    role: 'chef',
    marketing_opt_in: true,
    createdAt: new Date().toISOString()
  };

  if (!Array.isArray(appState.users)) appState.users = [];
  appState.users.push(newUser);

  // Inicializar alacena y compras individuales
  if (!appState.pantries) appState.pantries = {};
  if (!appState.shoppingLists) appState.shoppingLists = {};
  appState.pantries[newUser.id] = (typeof createEmptyUserPantry === 'function')
    ? createEmptyUserPantry()
    : ((typeof MASTER_PANTRY_CATALOG !== 'undefined') ? MASTER_PANTRY_CATALOG.map(i => ({ ...i, qty: 0 })) : []);
  appState.shoppingLists[newUser.id] = [];

  appState.currentUser = newUser.id;
  localStorage.setItem(AUTH_SESSION_KEY, newUser.id);
  saveState();

  // Sincronizar nuevo usuario registrado en Supabase
  if (typeof pushUserToSupabase === 'function') {
    await pushUserToSupabase(newUser);
  } else if (typeof window !== 'undefined' && typeof window.pushUserToSupabase === 'function') {
    await window.pushUserToSupabase(newUser);
  }

  updateHeaderUserBadge();
  updateAuthorFilterDropdown();
  updateMasterIngredientsDatalist();
  updateHeaderBadges();
  closeAuthModal();

  if (currentTab === 'matcher') renderSmartMatcher();
  if (currentTab === 'recetas') renderRecipesView();
  if (currentTab === 'alacena') renderPantryView();
  if (currentTab === 'compras') renderShoppingView();

  showToast(`✨ ¡Cuenta creada con éxito! Bienvenido/a a Hell's Kitchen, ${newUser.name}.`, 'success');
}

function logoutUser() {
  localStorage.removeItem(AUTH_SESSION_KEY);
  appState.currentUser = null;
  saveState();
  closeUserProfileModal();
  updateHeaderUserBadge();
  openAuthModal('login');
  showToast('🚪 Has cerrado sesión.', 'info');
}

function updateHeaderUserBadge() {
  const user = getCurrentUser();
  const avatarEl = document.getElementById('headerUserAvatar');
  const nameEl = document.getElementById('headerUserName');
  const greetingEl = document.getElementById('heroGreeting');

  if (!user) {
    if (avatarEl) avatarEl.innerText = '👤';
    if (nameEl) nameEl.innerHTML = `<span>Iniciar Sesión</span>`;
    if (greetingEl) greetingEl.innerText = `¿Qué cocinamos hoy? 🔥`;
    updateDynamicUserTitles();
    return;
  }

  if (avatarEl) avatarEl.innerText = user.avatar || '👨‍🍳';
  if (nameEl) {
    nameEl.innerHTML = `<span>${escapeAttr(user.name || 'Chef')}</span>`;
  }
  if (greetingEl) greetingEl.innerText = `¿Qué cocinamos hoy, ${user.name}? 🔥`;
  updateDynamicUserTitles();
}

function updateDynamicUserTitles() {
  const user = getCurrentUser();
  const pantryTitleEl = document.getElementById('pantrySectionTitle');
  const pantrySubtitleEl = document.getElementById('pantrySectionSubtitle');
  const shoppingTitleEl = document.getElementById('shoppingSectionTitle');
  const shoppingSubtitleEl = document.getElementById('shoppingSectionSubtitle');

  const userName = user ? user.name : 'tu Cocina';
  if (pantryTitleEl) pantryTitleEl.innerText = `🥫 Alacena de ${userName}`;
  if (pantrySubtitleEl) pantrySubtitleEl.innerText = `Tu inventario personal de heladera, carnes y secos en Hell's Kitchen.`;
  if (shoppingTitleEl) shoppingTitleEl.innerText = `🛒 Lista de Compras de ${userName}`;
  if (shoppingSubtitleEl) shoppingSubtitleEl.innerText = `Tu lista personalizada para el supermercado y faltantes de recetas.`;
}

function openUserProfileModal() {
  const user = getCurrentUser();
  if (!user) {
    openAuthModal('login');
    return;
  }

  const modal = document.getElementById('userProfileModal');
  const card = document.getElementById('currentUserProfileCard');
  const grid = document.getElementById('familyMembersGrid');
  if (!modal) return;

  const curUser = user;

  if (card) {
    card.innerHTML = `
      <div style="font-size:2.8rem; line-height:1;">${curUser.avatar || '👨‍🍳'}</div>
      <div style="flex:1;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h4 style="color:#ffffff; margin:0; font-size:1.15rem; font-family:var(--font-serif);">${escapeAttr(curUser.name)}</h4>
          <span style="background:rgba(234,88,12,0.2); color:var(--primary-light); font-size:0.7rem; font-weight:800; padding:2px 8px; border-radius:10px; text-transform:uppercase;">${curUser.role === 'admin' ? '👑 Admin' : '👨‍🍳 Chef'}</span>
        </div>
        <div style="font-size:0.86rem; color:var(--text-main); margin-top:3px; font-weight:600;">
          💼 ${escapeAttr(curUser.profession || 'Cocinero/a Aficionado/a')}
        </div>
        <div style="font-size:0.8rem; color:var(--text-muted); margin-top:2px;">
          📧 ${escapeAttr(curUser.email || 'Sin correo asociado')}
        </div>
      </div>
    `;
  }

  if (grid) {
    const otherUsers = (appState.users || []).filter(u => u.id !== curUser.id);
    if (otherUsers.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align:center; padding:12px; color:var(--text-muted); font-size:0.82rem;">
          No hay otros usuarios registrados en este dispositivo.
        </div>
      `;
    } else {
      grid.innerHTML = otherUsers.map(u => `
        <div class="family-member-card" onclick="switchUser('${u.id}')">
          <span class="family-card-avatar">${u.avatar || '👨‍🍳'}</span>
          <div class="family-card-name">${escapeAttr(u.name)}</div>
          <div style="font-size:0.72rem; color:var(--text-muted); margin-top:2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeAttr(u.profession || 'Chef')}</div>
        </div>
      `).join('');
    }
  }

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
  localStorage.setItem(AUTH_SESSION_KEY, userId);
  saveState();

  updateHeaderUserBadge();
  updateMasterIngredientsDatalist();
  updateHeaderBadges();
  closeUserProfileModal();

  if (currentTab === 'matcher') renderSmartMatcher();
  if (currentTab === 'recetas') renderRecipesView();
  if (currentTab === 'alacena') renderPantryView();
  if (currentTab === 'compras') renderShoppingView();

  showToast(`👨‍🍳 Sesión activa: ¡Bienvenido/a, ${user.name}!`, 'success');
}

// =========================================================
// 1.4 PANEL DE BASE DE DATOS DE USUARIOS & LEADS (MARKETING)
// =========================================================

// =========================================================
// 1.4 PANEL DE BASE DE DATOS DE USUARIOS & LEADS (MARKETING)
// =========================================================

function openUserLeadsModal() {
  const user = getCurrentUser();
  if (!user || user.role !== 'admin') {
    showToast('🔒 Esta base de datos es privada y exclusiva del Administrador.', 'error');
    return;
  }
  const modal = document.getElementById('userLeadsModal');
  if (!modal) return;
  populateProfessionFilterOptions();
  renderLeadsTable();
  modal.style.display = 'flex';
}

function closeUserLeadsModal() {
  const modal = document.getElementById('userLeadsModal');
  if (modal) modal.style.display = 'none';
}

function populateProfessionFilterOptions() {
  const select = document.getElementById('selLeadsFilterProfession');
  if (!select) return;

  const currentSelection = select.value || 'all';
  const allUsers = Array.isArray(appState.users) ? appState.users : [];
  
  // Contar frecuencias de cada profesión
  const profCounts = {};
  allUsers.forEach(u => {
    const prof = (u.profession || 'Sin profesión').trim();
    profCounts[prof] = (profCounts[prof] || 0) + 1;
  });

  const sortedProfessions = Object.keys(profCounts).sort((a, b) => a.localeCompare(b, 'es'));

  let optionsHtml = `<option value="all">Todas las Profesiones (${allUsers.length})</option>`;
  sortedProfessions.forEach(prof => {
    const isSelected = prof === currentSelection ? 'selected' : '';
    optionsHtml += `<option value="${escapeAttr(prof)}" ${isSelected}>${escapeAttr(prof)} (${profCounts[prof]})</option>`;
  });

  select.innerHTML = optionsHtml;
}

function getFilteredLeadsUsers() {
  const searchInp = document.getElementById('inpLeadsSearch');
  const filterSel = document.getElementById('selLeadsFilterProfession');
  
  const searchVal = (searchInp?.value || '').trim().toLowerCase();
  const filterVal = filterSel?.value || 'all';

  let users = Array.isArray(appState.users) ? [...appState.users] : [];

  // Filtro por dropdown de profesión
  if (filterVal !== 'all') {
    users = users.filter(u => (u.profession || '').toLowerCase() === filterVal.toLowerCase());
  }

  // Filtro por búsqueda de texto (busca en profesión, nombre o email)
  if (searchVal) {
    users = users.filter(u => 
      (u.profession && u.profession.toLowerCase().includes(searchVal)) ||
      (u.name && u.name.toLowerCase().includes(searchVal)) ||
      (u.email && u.email.toLowerCase().includes(searchVal))
    );
  }

  return users;
}

function renderLeadsTable() {
  const tbody = document.getElementById('leadsTableBody');
  const countEl = document.getElementById('leadsUsersCount');
  const summaryEl = document.getElementById('leadsActiveFilterSummary');
  const btnCopy = document.getElementById('btnCopyFilteredEmails');
  const btnExport = document.getElementById('btnExportFilteredCSV');

  if (!tbody) return;

  const filteredUsers = getFilteredLeadsUsers();
  const totalUsers = (appState.users || []).length;

  if (countEl) countEl.innerText = filteredUsers.length;

  // Actualizar resumen y botones dinámicos
  const filterSel = document.getElementById('selLeadsFilterProfession');
  const searchInp = document.getElementById('inpLeadsSearch');
  const searchVal = searchInp?.value?.trim();
  const filterVal = filterSel?.value;

  if (summaryEl) {
    if (searchVal) {
      summaryEl.innerHTML = `🔍 Búsqueda: <strong>"${escapeAttr(searchVal)}"</strong> — ${filteredUsers.length} de ${totalUsers} usuario(s)`;
    } else if (filterVal && filterVal !== 'all') {
      summaryEl.innerHTML = `🎯 Segmento: <strong>"${escapeAttr(filterVal)}"</strong> — ${filteredUsers.length} usuario(s)`;
    } else {
      summaryEl.innerHTML = `👥 Mostrando todos los usuarios registrados (${totalUsers})`;
    }
  }

  if (btnCopy) btnCopy.innerText = `📋 Copiar Mails (${filteredUsers.filter(u => u.email).length})`;
  if (btnExport) btnExport.innerText = `📥 Descargar CSV (${filteredUsers.length})`;

  if (filteredUsers.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center; padding:32px; color:var(--text-muted);">
          <div style="font-size:1.8rem; margin-bottom:8px;">🔍</div>
          <div>No se encontraron usuarios con la profesión o búsqueda ingresada.</div>
          <small style="color:var(--text-dim);">Probá con otro término o seleccioná "Todas las Profesiones".</small>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filteredUsers.map(u => {
    const userRecipesCount = (appState.recipes || []).filter(r => r.authorId === u.id).length;
    const dateFormatted = u.createdAt ? new Date(u.createdAt).toLocaleDateString('es-AR') : 'Reciente';
    const profName = u.profession || 'Cocinero/a Aficionado/a';
    
    // Asignar colores por tipo de profesión
    const lowerProf = profName.toLowerCase();
    let profBadgeColor = 'background:rgba(59, 130, 246, 0.15); border:1px solid rgba(59, 130, 246, 0.4); color:#93c5fd;'; // default azul
    if (lowerProf.includes('arquitect')) profBadgeColor = 'background:rgba(14, 165, 233, 0.2); border:1px solid rgba(14, 165, 233, 0.5); color:#7dd3fc;'; // celeste
    else if (lowerProf.includes('abogad') || lowerProf.includes('ley')) profBadgeColor = 'background:rgba(234, 179, 8, 0.2); border:1px solid rgba(234, 179, 8, 0.5); color:#fde047;'; // dorado
    else if (lowerProf.includes('médic') || lowerProf.includes('medic') || lowerProf.includes('salud') || lowerProf.includes('nutri')) profBadgeColor = 'background:rgba(16, 185, 129, 0.2); border:1px solid rgba(16, 185, 129, 0.5); color:#6ee7b7;'; // verde
    else if (lowerProf.includes('chef') || lowerProf.includes('gastro')) profBadgeColor = 'background:rgba(245, 158, 11, 0.2); border:1px solid rgba(245, 158, 11, 0.5); color:#fcd34d;'; // naranja
    else if (lowerProf.includes('diseñ') || lowerProf.includes('arte') || lowerProf.includes('foto')) profBadgeColor = 'background:rgba(236, 72, 153, 0.2); border:1px solid rgba(236, 72, 153, 0.5); color:#f472b6;'; // rosa
    else if (lowerProf.includes('ingeni') || lowerProf.includes('program') || lowerProf.includes('it') || lowerProf.includes('tech')) profBadgeColor = 'background:rgba(168, 85, 247, 0.2); border:1px solid rgba(168, 85, 247, 0.5); color:#d8b4fe;'; // violeta

    return `
      <tr>
        <td>
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="font-size:1.3rem;">${u.avatar || '👨‍🍳'}</span>
            <div>
              <strong style="color:#ffffff; display:block;">${escapeAttr(u.name)}</strong>
              <small style="color:var(--text-dim); font-size:0.75rem;">${userRecipesCount} receta(s)</small>
            </div>
          </div>
        </td>
        <td>
          <div style="display:flex; align-items:center; gap:6px;">
            <span style="font-family:var(--font-mono); font-size:0.84rem; color:var(--text-main);">${escapeAttr(u.email || 'Sin email')}</span>
            ${u.email ? `<button type="button" class="copy-email-btn" onclick="copySingleEmail('${escapeAttr(u.email)}')" title="Copiar email">📋</button>` : ''}
          </div>
        </td>
        <td>
          <span style="display:inline-flex; align-items:center; gap:5px; padding:3px 10px; border-radius:var(--radius-full); font-size:0.78rem; font-weight:700; ${profBadgeColor}">
            💼 ${escapeAttr(profName)}
          </span>
        </td>
        <td style="color:var(--text-muted); font-size:0.82rem;">
          📅 ${dateFormatted}
        </td>
        <td>
          <span style="font-size:0.75rem; padding:2px 8px; border-radius:var(--radius-full); font-weight:700; ${u.role === 'admin' ? 'background:rgba(245,158,11,0.2); color:#fcd34d;' : 'background:rgba(107,114,128,0.2); color:#9ca3af;'}">
            ${u.role === 'admin' ? '👑 Admin' : '👤 Chef'}
          </span>
        </td>
      </tr>
    `;
  }).join('');
}

function copySingleEmail(email) {
  if (!email) return;
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(email).then(() => {
      showToast(`📋 Email copiado: ${email}`, 'success');
    }).catch(() => {
      showToast(`Email: ${email}`, 'info');
    });
  } else {
    showToast(`Email: ${email}`, 'info');
  }
}

function copyAllEmailsToClipboard() {
  const filteredUsers = getFilteredLeadsUsers();
  const emails = filteredUsers.map(u => u.email).filter(e => e && e.includes('@'));
  
  if (emails.length === 0) {
    showToast('No hay emails en el segmento seleccionado para copiar.', 'info');
    return;
  }

  const filterSel = document.getElementById('selLeadsFilterProfession');
  const searchInp = document.getElementById('inpLeadsSearch');
  const segmentName = searchInp?.value?.trim() || filterSel?.value || 'Todos';

  const emailsString = emails.join(', ');
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(emailsString).then(() => {
      showToast(`📋 ¡${emails.length} emails copiados al portapapeles (Segmento: ${segmentName})!`, 'success');
    }).catch(() => {
      prompt('Copiá los emails para tu campaña:', emailsString);
    });
  } else {
    prompt('Copiá los emails para tu campaña:', emailsString);
  }
}

function exportUsersToCSV() {
  const filteredUsers = getFilteredLeadsUsers();
  if (filteredUsers.length === 0) {
    showToast('No hay usuarios en la selección actual para exportar.', 'info');
    return;
  }

  const filterSel = document.getElementById('selLeadsFilterProfession');
  const searchInp = document.getElementById('inpLeadsSearch');
  const rawSegment = searchInp?.value?.trim() || filterSel?.value || 'todos';
  const cleanSegment = rawSegment.toLowerCase().replace(/[^a-z0-9]/g, '_');

  let csvContent = "\uFEFF"; // UTF-8 BOM para soporte de tildes en Excel y Sheets
  csvContent += "ID,Nombre,Email,Profesion,Rol,Fecha_Registro,Recetas_Publicadas\n";

  filteredUsers.forEach(u => {
    const userRecipesCount = (appState.recipes || []).filter(r => r.authorId === u.id).length;
    const dateFormatted = u.createdAt ? new Date(u.createdAt).toLocaleDateString('es-AR') : '';
    const safeName = `"${(u.name || '').replace(/"/g, '""')}"`;
    const safeEmail = `"${(u.email || '').replace(/"/g, '""')}"`;
    const safeProf = `"${(u.profession || 'Cocinero/a Aficionado/a').replace(/"/g, '""')}"`;
    const safeRole = `"${(u.role || 'chef').replace(/"/g, '""')}"`;

    csvContent += `${u.id},${safeName},${safeEmail},${safeProf},${safeRole},"${dateFormatted}",${userRecipesCount}\n`;
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `hells_kitchen_leads_${cleanSegment}_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast(`📥 ¡Base de datos de ${filteredUsers.length} usuario(s) exportada a CSV con éxito!`, 'success');
}


// =========================================================
// 1.5 VISIBILIDAD, AUTORÍA Y PERMISOS DE RECETAS
// =========================================================
function canUserModifyRecipe(recipe) {
  if (!recipe) return false;
  const user = getCurrentUser();
  if (user.role === 'admin') return true;
  return recipe.authorId === user.id;
}

function getVisibleRecipes() {
  const currentUserId = getCurrentUserId();
  return (appState.recipes || []).filter(r => {
    // Si la receta no es privada, es pública para toda la comunidad
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

  const pantry = getCurrentPantry();
  const pantryMap = {};
  pantry.forEach(p => {
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
      inPantry = pantry.find(p => p.name.toLowerCase().includes(req.name.toLowerCase()) || req.name.toLowerCase().includes(p.name.toLowerCase()));
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
  const pantry = getCurrentPantry();
  const shoppingList = getCurrentShoppingList();

  const pantryCountEl = document.getElementById('badgePantryCount');
  const recipesCountEl = document.getElementById('badgeRecipesCount');
  const shopCountEl = document.getElementById('badgeShopCount');

  const inStockCount = pantry.filter(p => parseFloat(p.qty) > 0).length;
  if (pantryCountEl) pantryCountEl.innerText = inStockCount;
  if (recipesCountEl) recipesCountEl.innerText = getVisibleRecipes().length;
  
  const pendingShop = shoppingList.filter(s => !s.checked).length;
  if (shopCountEl) {
    shopCountEl.innerText = pendingShop;
    shopCountEl.style.display = pendingShop > 0 ? 'inline-block' : 'none';
  }

  // Hero Stats
  const statReadyEl = document.getElementById('heroStatReady');
  if (statReadyEl) {
    const readyCount = getVisibleRecipes().filter(r => calculateRecipeMatch(r).pct === 100).length;
    statReadyEl.innerText = readyCount;
  }
}

// =========================================================
// 4. VISTA: GENERADOR "¿QUÉ COCINO HOY?"
// =========================================================
function renderSmartMatcher() {
  const container = document.getElementById('matcherResultsGrid');
  if (!container) return;

  const filterTime = document.getElementById('matcherFilterTime')?.value || 'all';
  const filterCat = document.getElementById('matcherFilterCat')?.value || 'all';

  // Obtener solo las recetas visibles para el usuario actual (públicas + privadas del usuario)
  const visibleRecipes = getVisibleRecipes();

  // Calcular score de cada receta contra la alacena personal del usuario
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
    const commentsCount = Array.isArray(r.comments) ? r.comments.length : 0;
    const ratings = calculateRecipeRatings(r);

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
              ${r.isPrivate ? '<span class="recipe-private-badge">🔒 Privada</span>' : '<span class="recipe-public-badge">🌐 Pública</span>'}
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

          <div class="recipe-meta-row" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-top:auto; padding-top:12px; border-top:1px solid var(--border);">
            <div style="display:flex; gap:8px; font-size:0.82rem; color:var(--text-muted); align-items:center; flex-wrap:wrap;">
              <span>👥 ${r.portions}p</span>
              <span>⭐ ${r.difficulty || 'Media'}</span>
              <span style="color:var(--accent-gold); font-weight:700;">⭐ ${ratings.general} <span style="font-size:0.73rem; opacity:0.85;">(😋 ${ratings.taste} · ⚡ ${ratings.ease})</span></span>
              ${commentsCount > 0 ? `<span>💬 ${commentsCount}</span>` : ''}
            </div>
            <div style="display:flex; gap:6px; align-items:center;">
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
// 5. VISTA: RECETARIO PÚBLICO & DE AUTOR
// =========================================================
function renderRecipesView() {
  const container = document.getElementById('recipesGridContainer');
  if (!container) return;

  const currentUserId = getCurrentUserId();
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

    // Filtro por Scope (Toda la comunidad, Mis recetas, Solo privadas)
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
    const commentsCount = Array.isArray(r.comments) ? r.comments.length : 0;
    const ratings = calculateRecipeRatings(r);

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
              ${r.isPrivate ? '<span class="recipe-private-badge">🔒 Privada</span>' : '<span class="recipe-public-badge">🌐 Pública</span>'}
              <span class="recipe-author-badge">${r.authorAvatar || '👨‍🍳'} ${escapeAttr(r.authorName || 'Chef')}</span>
            </div>
          </div>

          <h3 class="recipe-card-title">${escapeAttr(r.title)}</h3>
          <p class="recipe-desc">${escapeAttr(r.description)}</p>

          <div class="recipe-meta-row" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-top:auto; padding-top:12px; border-top:1px solid var(--border);">
            <div style="display:flex; gap:8px; font-size:0.82rem; color:var(--text-muted); align-items:center; flex-wrap:wrap;">
              <span>👥 ${r.portions}p</span>
              <span style="color:${match.pct === 100 ? '#34d399' : '#fbbf24'}; font-weight:700;">
                ${match.pct === 100 ? '✅ 100%' : `⚠️ ${match.pct}%`}
              </span>
              <span style="color:var(--accent-gold); font-weight:700;">⭐ ${ratings.general} <span style="font-size:0.73rem; opacity:0.85;">(😋 ${ratings.taste} · ⚡ ${ratings.ease})</span></span>
              ${commentsCount > 0 ? `<span>💬 ${commentsCount}</span>` : ''}
            </div>
            <div style="display:flex; gap:6px; align-items:center;">
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
// 6. VISTA: MI ALACENA & HELADERA (POR USUARIO)
// =========================================================
let currentPantryCategory = 'all';
let currentPantryStockFilter = 'all'; // 'all' | 'in_stock' | 'out_of_stock'
let currentPantrySearch = '';

function renderPantryView() {
  const container = document.getElementById('pantrySectionsContainer');
  if (!container) return;

  const pantry = getCurrentPantry();

  const categories = [
    { id: 'carnes', title: '🥩 Carnes, Aves, Cerdo & Pescadería', icon: '🥩' },
    { id: 'heladera', title: '🥦 Frescos, Verdulería, Frutas & Lácteos', icon: '🥦' },
    { id: 'alacena', title: '🥫 Despensa, Secos, Congelados & Limpieza', icon: '🌾' },
    { id: 'especias', title: '🌿 Condimentos, Especias, Aceites & Salsas', icon: '🌶️' },
    { id: 'cava', title: '🍷 Bebidas, Cava & Refrescos', icon: '🍷' }
  ];

  let html = '';

  categories.forEach(cat => {
    if (currentPantryCategory !== 'all' && currentPantryCategory !== cat.id) return;

    let items = pantry.filter(p => p.category === cat.id);

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
        </div>

        <div class="pantry-grid">
          ${items.map(item => {
            const qty = parseFloat(item.qty) || 0;
            const isZero = qty <= 0;
            const isLow = !isZero && item.minQty && (qty <= parseFloat(item.minQty));

            return `
              <div class="pantry-card ${isZero ? 'out-of-stock-card' : ''}" style="${isZero ? 'opacity:0.88; border-color:rgba(239,68,68,0.3);' : ''}">
                <div class="pantry-card-top">
                  <span class="pantry-card-icon">${item.icon || '📦'}</span>
                  <div style="flex:1; min-width:0;">
                    <div class="pantry-item-name" style="font-weight:700; color:${isZero ? 'var(--text-muted)' : '#ffffff'};">${escapeAttr(item.name)}</div>
                    <div class="pantry-item-unit" style="font-size:0.75rem; color:var(--text-dim);">${escapeAttr(item.unit || '')}</div>
                  </div>
                  <button class="btn-icon btn-danger btn-sm" onclick="deletePantryItem('${item.id}')" title="Eliminar insumo" style="width:28px; height:28px; font-size:0.75rem;">🗑️</button>
                </div>

                <!-- Control Numérico Directo & Flechas +/- -->
                <div class="pantry-stock-row">
                  <button class="qty-control-btn" onclick="stepPantryQty('${item.id}', -1)" title="Restar stock">-</button>
                  <div class="pantry-input-wrapper">
                    <input type="number" class="pantry-direct-input" value="${qty}" min="0" step="any"
                           onchange="setDirectPantryQty('${item.id}', this.value)"
                           onkeydown="if(event.key==='Enter') this.blur();"
                           title="Escribí directamente la cantidad con el teclado">
                    <span class="pantry-input-unit">${escapeAttr(item.unit || '')}</span>
                  </div>
                  <button class="qty-control-btn" onclick="stepPantryQty('${item.id}', 1)" title="Sumar stock">+</button>
                </div>

                <!-- Estado & Botón + Carrito Estilo Mercado Libre -->
                <div class="pantry-card-bottom-actions">
                  <div class="pantry-status-pill ${isZero ? 'status-zero' : isLow ? 'status-low' : 'status-ok'}">
                    ${isZero ? '🔴 Sin Stock' : isLow ? '⚠️ Poco Stock' : '🟢 En Stock'}
                  </div>
                  <button class="btn-cart-action" onclick="openAddToCartModal('${item.id}')" title="Agregar a la Lista de Compras">
                    🛒 + Carrito
                  </button>
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

function openAddPantryModal(defaultCategory = 'heladera') {
  const modal = document.getElementById('addPantryModal');
  const inpCat = document.getElementById('inpPantryCategory');
  const inpName = document.getElementById('inpPantryName');
  const inpQty = document.getElementById('inpPantryQty');
  const inpUnit = document.getElementById('inpPantryUnit');
  const inpIcon = document.getElementById('inpPantryIcon');

  if (inpCat && defaultCategory) inpCat.value = defaultCategory;
  if (inpName) inpName.value = '';
  if (inpQty) inpQty.value = '1';
  if (inpUnit) inpUnit.value = 'un';
  if (inpIcon) inpIcon.value = '🥘';

  updateMasterIngredientsDatalist();
  if (modal) modal.style.display = 'flex';
}

function closeAddPantryModal() {
  const modal = document.getElementById('addPantryModal');
  if (modal) modal.style.display = 'none';
}

function handleAddPantrySubmit(e) {
  if (e) e.preventDefault();
  const name = document.getElementById('inpPantryName')?.value.trim();
  const category = document.getElementById('inpPantryCategory')?.value || 'alacena';
  const qty = parseFloat(document.getElementById('inpPantryQty')?.value) || 1;
  const unit = document.getElementById('inpPantryUnit')?.value.trim() || 'un';
  const icon = document.getElementById('inpPantryIcon')?.value.trim() || '🥘';

  if (!name) return;

  const item = registerGlobalIngredient({
    name,
    category,
    unit,
    icon,
    initialQtyForCurrent: qty
  });

  saveState();
  renderPantryView();
  updateHeaderBadges();
  closeAddPantryModal();

  if (typeof pushUserPantryToSupabase === 'function') pushUserPantryToSupabase();
  showToast(`✨ Insumo agregado y compartido con todos: ${name} (${qty} ${unit})`, 'success');
}

function stepPantryQty(id, delta) {
  const pantry = getCurrentPantry();
  const item = pantry.find(p => p.id === id);
  if (!item) return;

  const current = parseFloat(item.qty) || 0;
  const u = (item.unit || '').toLowerCase();
  let step = 1;
  if (u === 'g' || u === 'gr' || u === 'gramos' || u === 'ml' || u === 'cm3' || u === 'cc') {
    step = 50;
  } else if (u === 'kg' || u === 'kilo' || u === 'kilos' || u === 'l' || u === 'lt' || u === 'litro' || u === 'litros') {
    step = 0.5;
  }

  item.qty = Math.max(0, Math.round((current + (delta * step)) * 100) / 100);
  saveState();
  renderPantryView();
  updateHeaderBadges();
  if (currentTab === 'matcher') renderSmartMatcher();
  if (typeof pushUserPantryToSupabase === 'function') pushUserPantryToSupabase();
}

function adjustPantryQty(id, delta) {
  stepPantryQty(id, delta);
}

function setDirectPantryQty(id, rawVal) {
  const pantry = getCurrentPantry();
  const item = pantry.find(p => p.id === id);
  if (!item) return;

  let val = parseFloat(rawVal);
  if (isNaN(val) || val < 0) val = 0;
  item.qty = Math.round(val * 100) / 100;
  saveState();
  renderPantryView();
  updateHeaderBadges();
  if (currentTab === 'matcher') renderSmartMatcher();
  if (typeof pushUserPantryToSupabase === 'function') pushUserPantryToSupabase();
  showToast(`🥫 Stock actualizado: ${item.name} (${item.qty} ${item.unit})`, 'info');
}

function openAddToCartModal(pantryId) {
  const pantry = getCurrentPantry();
  const item = pantry.find(i => i.id === pantryId);
  if (!item) return;

  const modal = document.getElementById('addToCartModal');
  const info = document.getElementById('addToCartProductInfo');
  const inpId = document.getElementById('inpCartPantryId');
  const inpName = document.getElementById('inpCartProductName');
  const inpQty = document.getElementById('inpCartQty');
  const inpUnit = document.getElementById('inpCartUnit');
  const inpNote = document.getElementById('inpCartNote');

  if (inpId) inpId.value = item.id;
  if (inpName) inpName.value = item.name;
  if (inpQty) inpQty.value = item.minQty || (item.unit === 'g' || item.unit === 'ml' ? 500 : 1);
  if (inpUnit) inpUnit.value = item.unit || 'un';
  if (inpNote) inpNote.value = '';

  if (info) {
    info.innerHTML = `
      <span style="font-size:2.2rem; line-height:1;">${item.icon || '📦'}</span>
      <div style="flex:1;">
        <h4 style="color:#ffffff; margin:0; font-size:1.1rem; font-family:var(--font-serif);">${escapeAttr(item.name)}</h4>
        <span style="font-size:0.75rem; color:var(--text-muted);">${getCategoryName(item.category)} • Stock en casa: <strong>${item.qty} ${item.unit}</strong></span>
      </div>
    `;
  }

  if (modal) modal.style.display = 'flex';
}

function closeAddToCartModal() {
  const modal = document.getElementById('addToCartModal');
  if (modal) modal.style.display = 'none';
}

function handleConfirmAddToCart(e) {
  if (e) e.preventDefault();
  const id = document.getElementById('inpCartPantryId')?.value;
  const name = document.getElementById('inpCartProductName')?.value;
  const qty = parseFloat(document.getElementById('inpCartQty')?.value) || 1;
  const unit = document.getElementById('inpCartUnit')?.value || 'un';
  const note = document.getElementById('inpCartNote')?.value.trim() || '';

  if (!name) return;

  const res = addOrMergeShoppingItem({
    name: name,
    qty: qty,
    unit: unit,
    note: note,
    canonicalId: id
  });

  saveState();
  updateHeaderBadges();
  closeAddToCartModal();

  if (currentTab === 'compras') renderShoppingView();
  showToast(`🛒 ¡Sumado a tu lista de compras: ${name} (${qty} ${unit})!`, 'success');
}

function deletePantryItem(id) {
  const pantry = getCurrentPantry();
  const item = pantry.find(p => p.id === id);
  if (!item) return;

  if (confirm(`¿Deseas eliminar "${item.name}" de tu alacena?`)) {
    const uid = getCurrentUserId();
    appState.pantries[uid] = pantry.filter(p => p.id !== id);
    saveState();
    renderPantryView();
    updateHeaderBadges();
    showToast(`🗑️ Eliminado de tu alacena: ${item.name}`, 'info');
  }
}

// =========================================================
// MOTOR DE UNIFICACIÓN Y CONVERSIÓN DE MEDIDAS (UNIT ENGINE)
// =========================================================

const UNIT_CONVERSION_TABLE = {
  // Masa / Peso (Base: gramos 'g')
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

  // Volumen / Líquidos (Base: mililitros 'ml')
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

  // Conteo / Unidades (Base: unidades 'un')
  un: { dim: 'count', factor: 1, base: 'un' },
  u: { dim: 'count', factor: 1, base: 'un' },
  unidad: { dim: 'count', factor: 1, base: 'un' },
  unidades: { dim: 'count', factor: 1, base: 'un' },
  uni: { dim: 'count', factor: 1, base: 'un' },
  docena: { dim: 'count', factor: 12, base: 'un' },
  docenas: { dim: 'count', factor: 12, base: 'un' },
  media_docena: { dim: 'count', factor: 6, base: 'un' },
  par: { dim: 'count', factor: 2, base: 'un' },
  pares: { dim: 'count', factor: 2, base: 'un' },

  // Envases / Paquetes
  lata: { dim: 'package', factor: 1, base: 'latas' },
  latas: { dim: 'package', factor: 1, base: 'latas' },
  paquete: { dim: 'package', factor: 1, base: 'paquetes' },
  paquetes: { dim: 'package', factor: 1, base: 'paquetes' },
  pqt: { dim: 'package', factor: 1, base: 'paquetes' },
  diente: { dim: 'package', factor: 1, base: 'dientes' },
  dientes: { dim: 'package', factor: 1, base: 'dientes' },
  cabeza: { dim: 'package', factor: 1, base: 'cabezas' },
  cabezas: { dim: 'package', factor: 1, base: 'cabezas' },
  botella: { dim: 'package', factor: 1, base: 'botellas' },
  botellas: { dim: 'package', factor: 1, base: 'botellas' },
  atado: { dim: 'package', factor: 1, base: 'atados' },
  atados: { dim: 'package', factor: 1, base: 'atados' },
  pote: { dim: 'package', factor: 1, base: 'potes' },
  potes: { dim: 'package', factor: 1, base: 'potes' },
  sobre: { dim: 'package', factor: 1, base: 'sobres' },
  sobres: { dim: 'package', factor: 1, base: 'sobres' }
};

function parseQuantityAndUnit(rawQty, rawUnit = '') {
  if (typeof rawQty === 'number') {
    const cleanU = (rawUnit || '').trim().toLowerCase();
    const info = UNIT_CONVERSION_TABLE[cleanU];
    if (info) {
      return {
        numericQty: rawQty,
        baseQty: rawQty * info.factor,
        unitCategory: info.dim,
        baseUnit: info.base,
        unitName: cleanU
      };
    }
    return {
      numericQty: rawQty,
      baseQty: rawQty,
      unitCategory: 'count',
      baseUnit: cleanU || 'un',
      unitName: cleanU || 'un'
    };
  }

  const str = String(rawQty || '').trim().toLowerCase();
  const match = str.match(/^([\d.,]+)\s*([a-zA-ZáéíóúÁÉÍÓÚ3_]*)/);
  if (!match) {
    return {
      numericQty: 1,
      baseQty: 1,
      unitCategory: 'unknown',
      baseUnit: str || 'un',
      unitName: str || 'un'
    };
  }

  let numStr = match[1].replace(',', '.');
  let num = parseFloat(numStr);
  if (isNaN(num)) num = 1;

  let unitStr = match[2] ? match[2].trim() : (rawUnit ? rawUnit.trim().toLowerCase() : '');
  if (!unitStr && str.includes('/')) {
    unitStr = 'un';
  }

  const info = UNIT_CONVERSION_TABLE[unitStr];
  if (info) {
    return {
      numericQty: num,
      baseQty: num * info.factor,
      unitCategory: info.dim,
      baseUnit: info.base,
      unitName: unitStr
    };
  }

  return {
    numericQty: num,
    baseQty: num,
    unitCategory: 'count',
    baseUnit: unitStr || 'un',
    unitName: unitStr || 'un'
  };
}

function formatBaseQuantity(baseQty, category, preferredUnit = '') {
  if (category === 'weight') {
    if (baseQty >= 1000) {
      const kg = Math.round((baseQty / 1000) * 100) / 100;
      return { qty: kg, unit: 'kg' };
    }
    return { qty: Math.round(baseQty * 10) / 10, unit: 'g' };
  }

  if (category === 'volume') {
    if (baseQty >= 1000) {
      const l = Math.round((baseQty / 1000) * 100) / 100;
      return { qty: l, unit: 'l' };
    }
    return { qty: Math.round(baseQty), unit: 'ml' };
  }

  return {
    qty: Math.round(baseQty * 100) / 100,
    unit: preferredUnit || 'un'
  };
}

function addOrMergeShoppingItem(itemData) {
  const shoppingList = getCurrentShoppingList();
  const parsed = parseQuantityAndUnit(itemData.qty, itemData.unit);
  const normalizedName = itemData.name.trim().toLowerCase();

  // Buscar si ya existe
  const existing = shoppingList.find(item => {
    if (itemData.canonicalId && item.canonicalId && item.canonicalId === itemData.canonicalId) return true;
    return item.name.trim().toLowerCase() === normalizedName;
  });

  if (existing) {
    const existingParsed = parseQuantityAndUnit(existing.qty, existing.unit);
    if (parsed.unitCategory && existingParsed.unitCategory && parsed.unitCategory === existingParsed.unitCategory) {
      const sumBase = existingParsed.baseQty + parsed.baseQty;
      const formatted = formatBaseQuantity(sumBase, parsed.unitCategory, parsed.unitName);
      existing.qty = `${formatted.qty} ${formatted.unit}`.trim();
      existing.unit = formatted.unit;
      if (itemData.note && (!existing.note || !existing.note.includes(itemData.note))) {
        existing.note = existing.note ? `${existing.note} + ${itemData.note}` : itemData.note;
      }
      return { merged: true, item: existing };
    }
  }

  const newItem = {
    id: `shop-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    name: itemData.name.trim(),
    qty: itemData.qty ? (typeof itemData.qty === 'number' ? `${itemData.qty} ${itemData.unit || ''}`.trim() : itemData.qty.trim()) : '1 un',
    unit: itemData.unit || '',
    checked: false,
    note: itemData.note || '',
    canonicalId: itemData.canonicalId || ''
  };

  shoppingList.push(newItem);
  return { merged: false, item: newItem };
}

function consolidateShoppingList() {
  const uid = getCurrentUserId();
  const oldList = [...getCurrentShoppingList()];
  if (oldList.length === 0) {
    showToast('La lista de compras está vacía.', 'info');
    return;
  }

  const checkedItems = oldList.filter(item => item.checked);
  const unCheckedItems = oldList.filter(item => !item.checked);

  appState.shoppingLists[uid] = [];

  unCheckedItems.forEach(item => {
    addOrMergeShoppingItem({
      name: item.name,
      qty: item.qty,
      unit: '',
      note: item.note,
      canonicalId: item.canonicalId
    });
  });

  checkedItems.forEach(item => appState.shoppingLists[uid].push(item));

  saveState();
  renderShoppingView();
  updateHeaderBadges();

  showToast('⚡ ¡Lista unificada y cantidades sumadas con éxito!', 'success');
}

function addPantryToShoppingList(pantryId) {
  const p = getCurrentPantry().find(item => item.id === pantryId);
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

  const shoppingList = getCurrentShoppingList();

  if (shoppingList.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:50px 20px; background:var(--bg-card); border-radius:var(--radius-lg);">
        <span style="font-size:3rem;">🛒</span>
        <h3 style="color:#ffffff; margin:10px 0;">Tu lista de compras está vacía</h3>
        <p style="color:var(--text-muted);">Agregá lo que te falte para tus recetas o compras del súper.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = shoppingList.map((item, idx) => `
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
  const list = getCurrentShoppingList();
  if (list[idx]) {
    list[idx].checked = !list[idx].checked;
    saveState();
    renderShoppingView();
    updateHeaderBadges();
  }
}

function deleteShoppingItem(idx) {
  const list = getCurrentShoppingList();
  list.splice(idx, 1);
  saveState();
  renderShoppingView();
  updateHeaderBadges();
}

function addShoppingItemManual() {
  const modal = document.getElementById('addToCartModal');
  const info = document.getElementById('addToCartProductInfo');
  const inpId = document.getElementById('inpCartPantryId');
  const inpName = document.getElementById('inpCartProductName');
  const inpQty = document.getElementById('inpCartQty');
  const inpUnit = document.getElementById('inpCartUnit');
  const inpNote = document.getElementById('inpCartNote');

  if (inpId) inpId.value = '';
  if (inpName) inpName.value = '';
  if (inpQty) inpQty.value = '1';
  if (inpUnit) inpUnit.value = 'un';
  if (inpNote) inpNote.value = '';

  if (info) {
    info.innerHTML = `
      <div style="flex:1;">
        <label style="display:block; font-size:0.8rem; color:var(--text-muted); margin-bottom:6px;">Elegí o escribí cualquier producto del catálogo:</label>
        <input type="text" id="inpManualCartSelector" list="masterIngredientsList" placeholder="Escribí ej: Leche, Asado, Tomates, Detergente..." style="width:100%; font-size:0.95rem; font-weight:700;" oninput="handleManualCartSelector(this.value)" autocomplete="off">
      </div>
    `;
  }

  updateMasterIngredientsDatalist();
  if (modal) {
    modal.style.display = 'flex';
    setTimeout(() => {
      document.getElementById('inpManualCartSelector')?.focus();
    }, 100);
  }
}

function handleManualCartSelector(val) {
  const pantry = getCurrentPantry();
  const trimmed = val.trim();
  const found = pantry.find(p => p.name.toLowerCase() === trimmed.toLowerCase());

  const inpId = document.getElementById('inpCartPantryId');
  const inpName = document.getElementById('inpCartProductName');
  const inpQty = document.getElementById('inpCartQty');
  const inpUnit = document.getElementById('inpCartUnit');

  if (found) {
    if (inpId) inpId.value = found.id;
    if (inpName) inpName.value = found.name;
    if (inpUnit) inpUnit.value = found.unit || 'un';
    if (inpQty && (!inpQty.value || inpQty.value === '1')) {
      inpQty.value = found.minQty || (found.unit === 'g' || found.unit === 'ml' ? 500 : 1);
    }
  } else {
    if (inpId) inpId.value = '';
    if (inpName) inpName.value = trimmed;
  }
}

function finishShoppingAndAddToPantry() {
  const uid = getCurrentUserId();
  const shoppingList = getCurrentShoppingList();
  const checkedItems = shoppingList.filter(item => item.checked);

  if (checkedItems.length === 0) {
    showToast('⚠️ No seleccionaste ningún producto tildado [✓] para sumar a la Alacena.', 'info');
    return;
  }

  const pantry = getCurrentPantry();
  let addedCount = 0;

  checkedItems.forEach(cartItem => {
    const parsed = parseQuantityAndUnit(cartItem.qty, cartItem.unit);
    let pantryItem = pantry.find(p => (cartItem.canonicalId && p.id === cartItem.canonicalId) || p.name.toLowerCase() === cartItem.name.toLowerCase());

    if (!pantryItem) {
      pantryItem = registerGlobalIngredient({
        name: cartItem.name,
        category: 'alacena',
        unit: parsed.baseUnit || 'un',
        initialQtyForCurrent: parsed.numericQty
      });
      addedCount++;
    } else {
      const pParsed = parseQuantityAndUnit(pantryItem.qty, pantryItem.unit);
      if (parsed.unitCategory === pParsed.unitCategory) {
        const newBase = pParsed.baseQty + parsed.baseQty;
        const formatted = formatBaseQuantity(newBase, parsed.unitCategory, pantryItem.unit);
        pantryItem.qty = formatted.qty;
      } else {
        pantryItem.qty = Math.round(((parseFloat(pantryItem.qty) || 0) + parsed.numericQty) * 100) / 100;
      }
      addedCount++;
    }
  });

  // Eliminar los productos comprados de la lista de compras
  appState.shoppingLists[uid] = shoppingList.filter(item => !item.checked);

  saveState();
  updateHeaderBadges();
  renderShoppingView();
  if (currentTab === 'alacena') renderPantryView();
  if (typeof pushUserPantryToSupabase === 'function') pushUserPantryToSupabase();

  showToast(`🎉 ¡Excelente compra! Se sumaron ${addedCount} productos a tu Alacena.`, 'success');
}

function clearCheckedShopping() {
  const uid = getCurrentUserId();
  const list = getCurrentShoppingList();
  const checked = list.filter(i => i.checked);
  if (checked.length === 0) {
    showToast('No hay productos marcados como comprados para limpiar.', 'info');
    return;
  }
  if (confirm(`¿Limpiar ${checked.length} productos comprados de la lista?`)) {
    appState.shoppingLists[uid] = list.filter(i => !i.checked);
    saveState();
    renderShoppingView();
    updateHeaderBadges();
    showToast(`🧹 Se limpiaron ${checked.length} productos comprados.`, 'info');
  }
}

function compartirListaComprasWhatsApp() {
  const user = getCurrentUser();
  const pendientes = getCurrentShoppingList().filter(s => !s.checked);
  if (pendientes.length === 0) {
    return alert(`No hay productos pendientes en la lista de compras de ${user.name}.`);
  }

  let msg = `🛒 *LISTA DE COMPRAS DE ${user.name.toUpperCase()} - HELL'S KITCHEN*\n`;
  msg += `📅 Fecha: ${new Date().toLocaleDateString('es-AR')}\n\n`;

  pendientes.forEach(item => {
    msg += `• *${item.name}* ${item.qty ? `(${item.qty})` : ''} ${item.note ? `_${item.note}_` : ''}\n`;
  });

  msg += `\n¡Gracias! 🔥👨‍🍳`;

  const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

function clearCheckedShopping() {
  const uid = getCurrentUserId();
  appState.shoppingLists[uid] = (appState.shoppingLists[uid] || []).filter(s => !s.checked);
  saveState();
  renderShoppingView();
  updateHeaderBadges();
}

// =========================================================
// 8. MODAL DE DETALLE DE RECETA, PORCIONES & COMENTARIOS
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
  const pantry = getCurrentPantry();

  document.getElementById('modalRecipeTitle').innerText = r.title;
  document.getElementById('modalRecipeImg').src = r.image;
  
  const catEl = document.getElementById('modalRecipeCategory');
  if (catEl) {
    catEl.innerHTML = `
      <span>${getCategoryName(r.category)}</span>
      <span style="opacity:0.6;">•</span>
      <span>${r.authorAvatar || '👨‍🍳'} ${escapeAttr(r.authorName || 'Chef')}</span>
      ${r.isPrivate ? '<span style="background:rgba(239,68,68,0.4); padding:1px 6px; border-radius:10px; font-size:0.7rem; color:#fff; font-weight:700;">🔒 Privada</span>' : '<span style="background:rgba(16,185,129,0.3); padding:1px 6px; border-radius:10px; font-size:0.7rem; color:#fff; font-weight:700;">🌐 Pública</span>'}
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

  // Renderizar Ingredientes Escalados contra la alacena del usuario activo
  const ingsContainer = document.getElementById('modalRecipeIngredientsList');
  if (ingsContainer) {
    ingsContainer.innerHTML = r.ingredients.map(ing => {
      const scaledQty = typeof ing.qty === 'number' ? (ing.qty * mult) : ing.qty;
      const inPantry = pantry.find(p => p.id === ing.requiredId || p.name.toLowerCase().includes(ing.name.toLowerCase()));
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
      addToCartBtn.innerHTML = `🛒 Agregar Faltantes (${match.missing.length}) a mi Carrito`;
    } else {
      addToCartBtn.innerHTML = `🛒 Agregar Ingredientes (${scaledPortions}p) a mi Carrito`;
    }
    addToCartBtn.onclick = () => addCurrentRecipeToCart();
  }

  // Controlar visibilidad de botones de edición y borrado (solo autor/admin)
  const btnEdit = document.getElementById('modalBtnEditRecipe');
  const btnDelete = document.getElementById('modalBtnDeleteRecipe');
  if (btnEdit) btnEdit.style.display = canEdit ? 'flex' : 'none';
  if (btnDelete) btnDelete.style.display = canEdit ? 'flex' : 'none';

  // Renderizar sección de comentarios y respuestas
  renderRecipeComments(r);
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
    showToast(`🛒 Se agregaron ${count} ingrediente${count > 1 ? 's' : ''} a tu lista`, 'success');
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

  itemsToProcess.forEach(ing => {
    addOrMergeShoppingItem({
      name: ing.name,
      qty: ing.qty || 1,
      unit: ing.unit || '',
      note: isMissingOnly ? `Faltante para ${r.title}` : `Para ${r.title}`,
      canonicalId: ing.requiredId || null
    });
  });

  saveState();
  updateHeaderBadges();
  if (currentTab === 'compras') renderShoppingView();
  showToast(`🛒 ${itemsToProcess.length} ingrediente(s) sumados a tu lista de compras`, 'success');
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
  showToast(`🛒 ${res.merged ? 'Sumado a tu lista' : 'Agregado a compras'}: ${name} (${res.item.qty})`, 'success');
}

// =========================================================

// =========================================================
// 8.0 SISTEMA DE CALIFICACIÓN POR ESTRELLAS (SABOR, FACILIDAD, GENERAL)
// =========================================================

let currentFormRatings = {
  general: 5,
  taste: 5,
  ease: 5
};

function setFormRating(dimension, val) {
  currentFormRatings[dimension] = val;
  const groupMap = {
    general: 'starGroupGeneral',
    taste: 'starGroupTaste',
    ease: 'starGroupEase'
  };
  const group = document.getElementById(groupMap[dimension]);
  if (group) {
    Array.from(group.children).forEach(btn => {
      const bVal = parseInt(btn.dataset.val);
      btn.classList.toggle('active', bVal <= val);
    });
  }
}

function calculateRecipeRatings(recipe) {
  if (!recipe) return { general: '5.0', taste: '5.0', ease: '5.0', votesCount: 0 };
  const commentsWithRating = (recipe.comments || []).filter(c => c.ratingGeneral || c.ratingTaste || c.ratingEase);
  
  if (commentsWithRating.length === 0) {
    const baseGeneral = (typeof recipe.rating === 'number' ? recipe.rating : 5).toFixed(1);
    const baseTaste = (typeof recipe.ratingTaste === 'number' ? recipe.ratingTaste : 5).toFixed(1);
    const baseEase = (typeof recipe.ratingEase === 'number' ? recipe.ratingEase : 5).toFixed(1);
    return {
      general: baseGeneral,
      taste: baseTaste,
      ease: baseEase,
      votesCount: 0
    };
  }

  let sumGen = 0, sumTaste = 0, sumEase = 0;
  commentsWithRating.forEach(c => {
    sumGen += (c.ratingGeneral || 5);
    sumTaste += (c.ratingTaste || 5);
    sumEase += (c.ratingEase || 5);
  });

  const count = commentsWithRating.length;
  return {
    general: (sumGen / count).toFixed(1),
    taste: (sumTaste / count).toFixed(1),
    ease: (sumEase / count).toFixed(1),
    votesCount: count
  };
}

// 8.1 SISTEMA DE COMENTARIOS & RESPUESTAS DEL AUTOR
// =========================================================

let currentOpenReplyCommentId = null;

function renderRecipeComments(recipe) {
  const container = document.getElementById('modalCommentsList');
  const countEl = document.getElementById('modalCommentsCount');
  const avatarEl = document.getElementById('commentCurrentUserAvatar');
  const curUser = getCurrentUser();

  if (avatarEl) avatarEl.innerText = curUser.avatar || '👨‍🍳';
  if (!recipe) return;

  if (!Array.isArray(recipe.comments)) {
    recipe.comments = [];
  }

  // Actualizar Scoreboard de Calificaciones
  const ratings = calculateRecipeRatings(recipe);
  const scoreGenEl = document.getElementById('modalScoreGeneral');
  const scoreStarsEl = document.getElementById('modalScoreGeneralStars');
  const scoreTasteEl = document.getElementById('modalScoreTaste');
  const scoreEaseEl = document.getElementById('modalScoreEase');
  const scoreVotesEl = document.getElementById('modalScoreVotesCount');

  if (scoreGenEl) scoreGenEl.innerText = ratings.general;
  if (scoreStarsEl) {
    const fullStars = Math.round(parseFloat(ratings.general));
    scoreStarsEl.innerText = '★'.repeat(Math.min(5, fullStars)) + '☆'.repeat(Math.max(0, 5 - fullStars));
  }
  if (scoreTasteEl) scoreTasteEl.innerText = `${ratings.taste} ★`;
  if (scoreEaseEl) scoreEaseEl.innerText = `${ratings.ease} ★`;
  if (scoreVotesEl) scoreVotesEl.innerText = ratings.votesCount;

  // Resetear selectores de estrellas del formulario a 5
  setFormRating('general', 5);
  setFormRating('taste', 5);
  setFormRating('ease', 5);

  // Contar total comentarios + respuestas
  let totalCommentsCount = recipe.comments.length;
  recipe.comments.forEach(c => {
    if (Array.isArray(c.replies)) totalCommentsCount += c.replies.length;
  });

  if (countEl) countEl.innerText = totalCommentsCount;

  if (!container) return;

  if (recipe.comments.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:18px; background:var(--bg-main); border-radius:var(--radius-sm); border:1px dashed var(--border);">
        <p style="color:var(--text-muted); font-size:0.85rem; margin:0;">
          ⭐ ¡Sé el primero en calificar y dejar tu reseña sobre este plato!
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = recipe.comments.map(comment => {
    const isCommentAuthor = (comment.userId === recipe.authorId);
    const replies = Array.isArray(comment.replies) ? comment.replies : [];
    const isReplying = currentOpenReplyCommentId === comment.id;
    const rGen = comment.ratingGeneral || 5;
    const rTaste = comment.ratingTaste || 5;
    const rEase = comment.ratingEase || 5;

    return `
      <div class="comment-item" id="comment-${comment.id}">
        <div class="comment-header">
          <div class="comment-user-info">
            <span class="comment-avatar">${comment.userAvatar || '👨‍🍳'}</span>
            <span class="comment-author-name">${escapeAttr(comment.userName || 'Chef')}</span>
            ${isCommentAuthor ? '<span class="comment-author-badge">👑 Autor de la Receta</span>' : ''}
          </div>
          <span class="comment-date">${escapeAttr(comment.date || '')}</span>
        </div>

        <div class="comment-ratings-tags">
          <span class="comment-rating-pill">⭐ ${rGen}/5</span>
          <span class="comment-rating-pill">😋 Sabor: ${rTaste}★</span>
          <span class="comment-rating-pill">⚡ Fácil: ${rEase}★</span>
        </div>

        <div class="comment-text">${escapeAttr(comment.text || '')}</div>

        <div class="comment-actions">
          <button class="comment-reply-btn" onclick="toggleReplyInput('${comment.id}')">
            ${isReplying ? '✕ Cancelar' : '↩ Responder'}
          </button>
        </div>

        ${replies.length > 0 ? `
          <div class="replies-thread-list">
            ${replies.map(reply => {
              const isReplyAuthor = (reply.userId === recipe.authorId || reply.isAuthor);
              return `
                <div class="reply-item ${isReplyAuthor ? 'author-reply' : ''}">
                  <div class="comment-header" style="margin-bottom:4px;">
                    <div class="comment-user-info">
                      <span class="comment-avatar" style="font-size:1.1rem;">${reply.userAvatar || '👨‍🍳'}</span>
                      <span class="comment-author-name" style="font-size:0.84rem;">${escapeAttr(reply.userName || 'Chef')}</span>
                      ${isReplyAuthor ? '<span class="comment-author-badge">👑 Autor de la Receta</span>' : ''}
                    </div>
                    <span class="comment-date">${escapeAttr(reply.date || '')}</span>
                  </div>
                  <div class="comment-text" style="font-size:0.86rem;">${escapeAttr(reply.text || '')}</div>
                </div>
              `;
            }).join('')}
          </div>
        ` : ''}

        ${isReplying ? `
          <div class="reply-box-wrapper">
            <div style="display:flex; gap:8px; align-items:flex-start;">
              <span style="font-size:1.2rem;">${curUser.avatar || '👨‍🍳'}</span>
              <div style="flex:1;">
                <textarea id="inpReplyText-${comment.id}" rows="2" placeholder="Escribí tu respuesta como ${escapeAttr(curUser.name)}..." style="width:100%; background:var(--bg-main); border:1px solid var(--border); border-radius:var(--radius-sm); padding:8px 10px; color:#fff; font-size:0.85rem; resize:vertical;"></textarea>
                <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:6px;">
                  <button type="button" class="btn btn-secondary btn-sm" onclick="toggleReplyInput('${comment.id}')">Cancelar</button>
                  <button type="button" class="btn btn-primary btn-sm" onclick="handleSendReply('${comment.id}')">Enviar Respuesta</button>
                </div>
              </div>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

function handleAddRecipeComment() {
  if (!currentDetailRecipe) return;

  const inp = document.getElementById('inpNewCommentText');
  const text = inp?.value.trim();
  if (!text) {
    showToast('Por favor escribí un comentario o reseña.', 'info');
    return;
  }

  const curUser = getCurrentUser();
  const newComment = {
    id: `comm-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    userId: curUser.id,
    userName: curUser.name,
    userAvatar: curUser.avatar,
    text,
    ratingGeneral: currentFormRatings.general || 5,
    ratingTaste: currentFormRatings.taste || 5,
    ratingEase: currentFormRatings.ease || 5,
    date: new Date().toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
    replies: []
  };

  if (!Array.isArray(currentDetailRecipe.comments)) {
    currentDetailRecipe.comments = [];
  }
  currentDetailRecipe.comments.push(newComment);

  // Recalcular promedios en la receta
  const updatedRatings = calculateRecipeRatings(currentDetailRecipe);
  currentDetailRecipe.rating = parseFloat(updatedRatings.general);
  currentDetailRecipe.ratingTaste = parseFloat(updatedRatings.taste);
  currentDetailRecipe.ratingEase = parseFloat(updatedRatings.ease);

  // Guardar en la receta en appState
  const idx = appState.recipes.findIndex(r => r.id === currentDetailRecipe.id);
  if (idx !== -1) {
    appState.recipes[idx] = currentDetailRecipe;
  }

  saveState();
  if (typeof window !== 'undefined' && typeof window.pushCommentToSupabase === 'function') {
    window.pushCommentToSupabase(currentDetailRecipe.id, newComment);
  }
  if (typeof window !== 'undefined' && typeof window.pushRecipeToSupabase === 'function') {
    window.pushRecipeToSupabase(currentDetailRecipe);
  }

  if (inp) inp.value = '';
  renderRecipeComments(currentDetailRecipe);
  if (currentTab === 'recetas') renderRecipesView();
  if (currentTab === 'matcher') renderSmartMatcher();

  showToast(`⭐ ¡Reseña de ${curUser.name} publicada con éxito!`, 'success');
}

function toggleReplyInput(commentId) {
  if (currentOpenReplyCommentId === commentId) {
    currentOpenReplyCommentId = null;
  } else {
    currentOpenReplyCommentId = commentId;
  }
  renderRecipeComments(currentDetailRecipe);
  if (currentOpenReplyCommentId) {
    setTimeout(() => {
      document.getElementById(`inpReplyText-${commentId}`)?.focus();
    }, 50);
  }
}

function handleSendReply(commentId) {
  if (!currentDetailRecipe) return;

  const inp = document.getElementById(`inpReplyText-${commentId}`);
  const text = inp?.value.trim();
  if (!text) {
    showToast('Por favor escribí una respuesta.', 'info');
    return;
  }

  const comment = (currentDetailRecipe.comments || []).find(c => c.id === commentId);
  if (!comment) return;

  const curUser = getCurrentUser();
  const isAuthor = (curUser.id === currentDetailRecipe.authorId);

  const newReply = {
    id: `rep-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    userId: curUser.id,
    userName: curUser.name,
    userAvatar: curUser.avatar,
    isAuthor,
    text,
    date: new Date().toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  };

  if (!Array.isArray(comment.replies)) {
    comment.replies = [];
  }
  comment.replies.push(newReply);

  const idx = appState.recipes.findIndex(r => r.id === currentDetailRecipe.id);
  if (idx !== -1) {
    appState.recipes[idx] = currentDetailRecipe;
  }

  saveState();
  currentOpenReplyCommentId = null;
  renderRecipeComments(currentDetailRecipe);
  showToast(isAuthor ? '👑 ¡Respuesta del autor publicada!' : '💬 ¡Respuesta publicada!', 'success');
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

  // Activar Wake Lock
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
            <div class="timer-widget">
              <span class="timer-display" id="timerDisplay-${step.stepNumber}">
                ${formatTimer(step.timerMinutes * 60)}
              </span>
              <div style="display:flex; gap:8px;">
                <button class="btn btn-primary btn-sm" id="btnTimerStart-${step.stepNumber}" onclick="startStepTimer(${step.stepNumber}, ${step.timerMinutes * 60})">
                  ▶ Iniciar
                </button>
                <button class="btn btn-secondary btn-sm" onclick="resetStepTimer(${step.stepNumber}, ${step.timerMinutes * 60})">
                  ↺ Reset
                </button>
              </div>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');
  }

  overlay.style.display = 'block';
}

function closeCookingMode() {
  const overlay = document.getElementById('cookingModeOverlay');
  if (overlay) overlay.style.display = 'none';

  // Limpiar temporizadores activos
  Object.keys(activeTimers).forEach(id => {
    if (activeTimers[id].interval) clearInterval(activeTimers[id].interval);
  });
  activeTimers = {};

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

// Alarma Sonora
function playBeepAlarm() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 1.2);
  } catch(e) {}
}

// Wake Lock API
async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator) {
      wakeLockSentinel = await navigator.wakeLock.request('screen');
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

  // Registrar insumo en el catálogo global y sumarlo a la alacena del usuario activo
  registerGlobalIngredient({
    name,
    category,
    unit,
    minQty: Math.round(qty * 0.3) || 1,
    icon,
    initialQtyForCurrent: qty
  });

  saveState();
  closeAddPantryModal();
  renderPantryView();
  updateHeaderBadges();
  showToast(`✅ ¡Insumo registrado para todos y cargado a tu alacena: ${name}!`, 'success');
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
  if (typeof window !== 'undefined' && typeof window.deleteRecipeFromSupabase === 'function') {
    window.deleteRecipeFromSupabase(recipeId);
  }
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

  // Por defecto, nueva receta es pública para la comunidad
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
  const pantry = getCurrentPantry();
  if (name) {
    const found = pantry.find(p => p.name.toLowerCase() === name.toLowerCase());
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

  const pantry = getCurrentPantry();
  const match = pantry.find(p => p.name.toLowerCase() === val) || pantry.find(p => p.name.toLowerCase().startsWith(val));
  if (match) {
    inputEl.setAttribute('data-ing-id', match.id);
    const row = inputEl.closest('.new-recipe-ing-row, .edit-recipe-ing-row');
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
      // Registrar ingrediente globalmente si no existía
      const registered = registerGlobalIngredient({
        name,
        category: 'alacena',
        unit,
        minQty: 1,
        initialQtyForCurrent: 0
      });

      ingredients.push({
        name: registered.name,
        qty: isNaN(qtyVal) ? 1 : qtyVal,
        unit: unit || registered.unit,
        requiredId: registered.id
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
    steps,
    comments: []
  };

  appState.recipes.unshift(newRecipe);
  saveState();
  if (typeof window !== 'undefined' && typeof window.pushRecipeToSupabase === 'function') {
    window.pushRecipeToSupabase(newRecipe);
  }
  closeAddRecipeModal();
  updateHeaderBadges();
  updateMasterIngredientsDatalist();

  if (currentTab === 'recetas') renderRecipesView();
  if (currentTab === 'matcher') renderSmartMatcher();

  showToast(`🎉 ¡Receta "${title}" (${isPrivate ? '🔒 Privada' : '🌐 Pública'}) guardada con éxito!`, 'success');
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
  const pantry = getCurrentPantry();
  if (name) {
    const found = pantry.find(p => p.name.toLowerCase() === name.toLowerCase());
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
      const registered = registerGlobalIngredient({
        name,
        category: 'alacena',
        unit,
        minQty: 1,
        initialQtyForCurrent: 0
      });

      ingredients.push({
        name: registered.name,
        qty: isNaN(qtyVal) ? 1 : qtyVal,
        unit: unit || registered.unit,
        requiredId: registered.id
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
  if (typeof window !== 'undefined' && typeof window.pushRecipeToSupabase === 'function') {
    window.pushRecipeToSupabase(updatedRecipe);
  }
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

// Exponer explícitamente en el objeto global window
window.getCurrentUser = getCurrentUser;
window.getCurrentUserId = getCurrentUserId;
window.getCurrentPantry = getCurrentPantry;
window.getCurrentShoppingList = getCurrentShoppingList;
window.registerGlobalIngredient = registerGlobalIngredient;
window.updateHeaderUserBadge = updateHeaderUserBadge;
window.openUserProfileModal = openUserProfileModal;
window.closeUserProfileModal = closeUserProfileModal;
window.switchUser = switchUser;
window.initAuth = initAuth;
window.canCloseAuthModal = canCloseAuthModal;
window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;
window.switchAuthTab = switchAuthTab;
window.handleLoginSubmit = handleLoginSubmit;
window.handleRegisterSubmit = handleRegisterSubmit;
window.logoutUser = logoutUser;
window.openUserLeadsModal = openUserLeadsModal;
window.closeUserLeadsModal = closeUserLeadsModal;
window.populateProfessionFilterOptions = populateProfessionFilterOptions;
window.getFilteredLeadsUsers = getFilteredLeadsUsers;
window.renderLeadsTable = renderLeadsTable;
window.copySingleEmail = copySingleEmail;
window.copyAllEmailsToClipboard = copyAllEmailsToClipboard;
window.exportUsersToCSV = exportUsersToCSV;
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
window.setFormRating = setFormRating;
window.calculateRecipeRatings = calculateRecipeRatings;
window.renderRecipeComments = renderRecipeComments;
window.handleAddRecipeComment = handleAddRecipeComment;
window.toggleReplyInput = toggleReplyInput;
window.handleSendReply = handleSendReply;
window.loadState = loadState;
window.saveState = saveState;

// Inicialización de la Aplicación
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initAuth();
    switchTab('matcher');
  });
}
