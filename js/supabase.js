/**
 * HELL'S KITCHEN - CLIENTE DE SINCRONIZACIÓN SUPABASE (NUBE EN TIEMPO REAL)
 * Maneja la sincronización bidireccional entre la app y PostgreSQL en Supabase.
 */

const SUPABASE_STORAGE_KEY = 'hells_kitchen_supabase_config';

let supabaseClient = null;
let isSupabaseConnected = false;

function getSupabaseConfig() {
  try {
    const raw = localStorage.getItem(SUPABASE_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return {
    url: '',
    anonKey: '',
    enabled: false
  };
}

function saveSupabaseConfig(url, anonKey, enabled = true) {
  const config = { url: url.trim(), anonKey: anonKey.trim(), enabled };
  localStorage.setItem(SUPABASE_STORAGE_KEY, JSON.stringify(config));
  initSupabase();
}

function initSupabase() {
  const config = getSupabaseConfig();
  if (!config.url || !config.anonKey || !config.enabled) {
    isSupabaseConnected = false;
    updateSupabaseStatusIndicator();
    return;
  }

  if (typeof window.supabase === 'undefined' || typeof window.supabase.createClient !== 'function') {
    console.warn("Librería de Supabase no cargada en window.");
    isSupabaseConnected = false;
    updateSupabaseStatusIndicator();
    return;
  }

  try {
    supabaseClient = window.supabase.createClient(config.url, config.anonKey);
    isSupabaseConnected = true;
    console.log("🟢 Conectado a Supabase Cloud DB:", config.url);
    updateSupabaseStatusIndicator();
    subscribeToRealtime();
    syncFromSupabase();
  } catch (e) {
    console.error("Error al inicializar cliente Supabase:", e);
    isSupabaseConnected = false;
    updateSupabaseStatusIndicator();
  }
}

function updateSupabaseStatusIndicator() {
  const badge = document.getElementById('supabaseStatusBadge');
  if (!badge) return;

  const config = getSupabaseConfig();
  if (isSupabaseConnected) {
    badge.innerHTML = '🟢 <span style="font-size:0.75rem; color:#6ee7b7; font-weight:700;">Nube Conectada</span>';
    badge.title = 'Base de datos Supabase en vivo y sincronizada';
  } else if (config.url) {
    badge.innerHTML = '🟡 <span style="font-size:0.75rem; color:#fde047; font-weight:700;">Nube Desconectada</span>';
    badge.title = 'Error de conexión con Supabase';
  } else {
    badge.innerHTML = '☁️ <span style="font-size:0.75rem; color:var(--text-dim); font-weight:600;">Modo Local</span>';
    badge.title = 'Guardando en navegador local (Click para conectar Supabase)';
  }
}

// Sincronizar datos desde Supabase al iniciar
async function syncFromSupabase() {
  if (!supabaseClient || !isSupabaseConnected) return;

  try {
    // 1. Cargar Usuarios
    const { data: users, error: errU } = await supabaseClient.from('kitchen_users').select('*');
    if (!errU && users && users.length > 0) {
      appState.users = users;
    }

    // 2. Cargar Catálogo Maestro de Insumos
    const { data: masterIngs, error: errM } = await supabaseClient.from('master_ingredients').select('*');
    if (!errM && masterIngs && masterIngs.length > 0) {
      if (typeof MASTER_PANTRY_CATALOG !== 'undefined') {
        masterIngs.forEach(item => {
          const idx = MASTER_PANTRY_CATALOG.findIndex(m => m.name.toLowerCase() === item.name.toLowerCase());
          if (idx !== -1) {
            MASTER_PANTRY_CATALOG[idx] = { ...MASTER_PANTRY_CATALOG[idx], ...item };
          } else {
            MASTER_PANTRY_CATALOG.push({ ...item, qty: 0 });
          }
        });
      }
    }

    // 3. Cargar Recetas con Comentarios
    const { data: recipes, error: errR } = await supabaseClient.from('recipes').select('*').order('created_at', { ascending: false });
    if (!errR && recipes) {
      // Cargar comentarios
      const { data: comments } = await supabaseClient.from('recipe_comments').select('*').order('created_at', { ascending: true });
      const { data: replies } = await supabaseClient.from('recipe_replies').select('*').order('created_at', { ascending: true });

      const commentsMap = {};
      (comments || []).forEach(c => {
        commentsMap[c.id] = {
          id: c.id,
          userId: c.user_id,
          userName: c.user_name,
          userAvatar: c.user_avatar,
          text: c.text,
          date: new Date(c.created_at).toLocaleDateString('es-AR'),
          replies: []
        };
      });

      (replies || []).forEach(rep => {
        if (commentsMap[rep.comment_id]) {
          commentsMap[rep.comment_id].replies.push({
            id: rep.id,
            userId: rep.user_id,
            userName: rep.user_name,
            userAvatar: rep.user_avatar,
            isAuthor: rep.is_author,
            text: rep.text,
            date: new Date(rep.created_at).toLocaleDateString('es-AR')
          });
        }
      });

      appState.recipes = recipes.map(r => {
        const rComments = (comments || [])
          .filter(c => c.recipe_id === r.id)
          .map(c => commentsMap[c.id])
          .filter(Boolean);

        return {
          id: r.id,
          title: r.title,
          authorId: r.author_id,
          authorName: r.author_name,
          authorAvatar: r.author_avatar,
          isPrivate: r.is_private,
          category: r.category,
          time: r.time,
          portions: r.portions,
          difficulty: r.difficulty,
          rating: r.rating,
          image: r.image,
          description: r.description,
          pairing: r.pairing,
          chefTip: r.chef_tip,
          ingredients: r.ingredients || [],
          steps: r.steps || [],
          comments: rComments
        };
      });
    }

    // 4. Cargar Alacenas por Usuario
    const { data: pantries, error: errP } = await supabaseClient.from('user_pantries').select('*, master_ingredients(*)');
    if (!errP && pantries) {
      if (!appState.pantries) appState.pantries = {};
      appState.users.forEach(u => {
        if (!appState.pantries[u.id]) {
          appState.pantries[u.id] = (typeof createEmptyUserPantry === 'function') ? createEmptyUserPantry() : [];
        }
      });

      pantries.forEach(p => {
        const uPantry = appState.pantries[p.user_id];
        if (uPantry) {
          const ing = uPantry.find(item => item.id === p.ingredient_id || (p.master_ingredients && item.name.toLowerCase() === p.master_ingredients.name.toLowerCase()));
          if (ing) {
            ing.qty = p.qty;
            ing.unit = p.unit || ing.unit;
          } else if (p.master_ingredients) {
            uPantry.push({
              id: p.ingredient_id,
              name: p.master_ingredients.name,
              category: p.master_ingredients.category,
              unit: p.unit || p.master_ingredients.unit,
              minQty: p.master_ingredients.min_qty,
              icon: p.master_ingredients.icon,
              qty: p.qty
            });
          }
        }
      });
    }

    // 5. Cargar Listas de Compras
    const { data: shopping, error: errS } = await supabaseClient.from('user_shopping_lists').select('*').order('created_at', { ascending: true });
    if (!errS && shopping) {
      if (!appState.shoppingLists) appState.shoppingLists = {};
      appState.users.forEach(u => {
        appState.shoppingLists[u.id] = [];
      });

      shopping.forEach(s => {
        if (!appState.shoppingLists[s.user_id]) appState.shoppingLists[s.user_id] = [];
        appState.shoppingLists[s.user_id].push({
          id: s.id,
          name: s.name,
          qty: s.qty,
          unit: s.unit,
          checked: s.checked,
          note: s.note,
          canonicalId: s.canonical_id
        });
      });
    }

    saveState();
    updateHeaderBadges();
    updateHeaderUserBadge();
    updateMasterIngredientsDatalist();

    if (currentTab === 'matcher') renderSmartMatcher();
    if (currentTab === 'recetas') renderRecipesView();
    if (currentTab === 'alacena') renderPantryView();
    if (currentTab === 'compras') renderShoppingView();

    console.log("✅ Sincronización completa desde Supabase!");
  } catch (err) {
    console.error("Error durante syncFromSupabase:", err);
  }
}

// Suscribirse a cambios en tiempo real
function subscribeToRealtime() {
  if (!supabaseClient || !isSupabaseConnected) return;

  supabaseClient
    .channel('kitchen-realtime')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'recipes' }, payload => {
      console.log('⚡ Cambio en Recetas:', payload);
      syncFromSupabase();
    })
    .on('postgres_changes', { event: '*', schema: 'public', table: 'recipe_comments' }, payload => {
      console.log('⚡ Nuevo Comentario:', payload);
      syncFromSupabase();
    })
    .on('postgres_changes', { event: '*', schema: 'public', table: 'recipe_replies' }, payload => {
      console.log('⚡ Nueva Respuesta:', payload);
      syncFromSupabase();
    })
    .on('postgres_changes', { event: '*', schema: 'public', table: 'master_ingredients' }, payload => {
      console.log('⚡ Nuevo Insumo Global:', payload);
      syncFromSupabase();
    })
    .subscribe();
}

// Modal de Configuración de Supabase
function openSupabaseModal() {
  const modal = document.getElementById('supabaseConfigModal');
  if (!modal) return;

  const config = getSupabaseConfig();
  const inpUrl = document.getElementById('inpSupabaseUrl');
  const inpKey = document.getElementById('inpSupabaseKey');

  if (inpUrl) inpUrl.value = config.url || '';
  if (inpKey) inpKey.value = config.anonKey || '';

  modal.style.display = 'flex';
}

function closeSupabaseModal() {
  const modal = document.getElementById('supabaseConfigModal');
  if (modal) modal.style.display = 'none';
}

function handleSaveSupabaseConfig(e) {
  if (e) e.preventDefault();

  const url = document.getElementById('inpSupabaseUrl')?.value.trim();
  const key = document.getElementById('inpSupabaseKey')?.value.trim();

  if (!url || !key) {
    saveSupabaseConfig('', '', false);
    showToast('☁️ Modo Local activado (Supabase deshabilitado)', 'info');
    closeSupabaseModal();
    return;
  }

  saveSupabaseConfig(url, key, true);
  closeSupabaseModal();
  showToast('🔄 Conectando y sincronizando con Supabase...', 'success');
}

// Exponer en window
window.getSupabaseConfig = getSupabaseConfig;
window.saveSupabaseConfig = saveSupabaseConfig;
window.initSupabase = initSupabase;
window.openSupabaseModal = openSupabaseModal;
window.closeSupabaseModal = closeSupabaseModal;
window.handleSaveSupabaseConfig = handleSaveSupabaseConfig;
window.syncFromSupabase = syncFromSupabase;
