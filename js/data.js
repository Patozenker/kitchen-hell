/**
 * PATO'S KITCHEN - CATÁLOGO Y SEMILLA DE DATOS INICIALES
 * Alacena, Heladera, Cava, Recetas de Autor y Técnicas de Cocina.
 */

const MASTER_PANTRY_CATALOG = [
  // 🥩 Carnes, Aves & Pescados
  { id: 'ing-1', name: 'Pechuga de Pollo', category: 'carnes', qty: 600, unit: 'g', minQty: 300, icon: '🍗' },
  { id: 'ing-2', name: 'Ojo de Bife / Bife de Chorizo', category: 'carnes', qty: 800, unit: 'g', minQty: 400, icon: '🥩' },
  { id: 'ing-33', name: 'Pata Muslo de Pollo', category: 'carnes', qty: 0, unit: 'un', minQty: 2, icon: '🍗' },
  { id: 'ing-34', name: 'Lomo Vacuno', category: 'carnes', qty: 0, unit: 'g', minQty: 500, icon: '🥩' },
  { id: 'ing-35', name: 'Bondiola de Cerdo', category: 'carnes', qty: 0, unit: 'g', minQty: 500, icon: '🥩' },
  { id: 'ing-36', name: 'Panceta Ahumada', category: 'carnes', qty: 0, unit: 'g', minQty: 150, icon: '🥓' },
  { id: 'ing-37', name: 'Carne Picada Especial', category: 'carnes', qty: 0, unit: 'g', minQty: 500, icon: '🥩' },
  { id: 'ing-38', name: 'Salmón Rosado', category: 'carnes', qty: 0, unit: 'g', minQty: 300, icon: '🐟' },
  { id: 'ing-39', name: 'Filet de Merluza', category: 'carnes', qty: 0, unit: 'g', minQty: 500, icon: '🐟' },
  { id: 'ing-40', name: 'Langostinos Pelados', category: 'carnes', qty: 0, unit: 'g', minQty: 250, icon: '🦐' },

  // ❄️ Heladera, Frescos & Verduras
  { id: 'ing-3', name: 'Cebolla', category: 'heladera', qty: 4, unit: 'un', minQty: 2, icon: '🧅' },
  { id: 'ing-4', name: 'Cebolla de Verdeo', category: 'heladera', qty: 3, unit: 'un', minQty: 1, icon: '🌱' },
  { id: 'ing-41', name: 'Cebolla Morada', category: 'heladera', qty: 0, unit: 'un', minQty: 2, icon: '🧅' },
  { id: 'ing-42', name: 'Puerro', category: 'heladera', qty: 0, unit: 'un', minQty: 1, icon: '🎋' },
  { id: 'ing-5', name: 'Ajo', category: 'heladera', qty: 6, unit: 'dientes', minQty: 2, icon: '🧄' },
  { id: 'ing-6', name: 'Papas medianas', category: 'heladera', qty: 5, unit: 'un', minQty: 2, icon: '🥔' },
  { id: 'ing-43', name: 'Batata / Camote', category: 'heladera', qty: 0, unit: 'un', minQty: 2, icon: '🍠' },
  { id: 'ing-44', name: 'Zanahoria', category: 'heladera', qty: 0, unit: 'un', minQty: 2, icon: '🥕' },
  { id: 'ing-11', name: 'Morrón Rojo', category: 'heladera', qty: 2, unit: 'un', minQty: 1, icon: '🫑' },
  { id: 'ing-45', name: 'Morrón Verde', category: 'heladera', qty: 0, unit: 'un', minQty: 1, icon: '🫑' },
  { id: 'ing-46', name: 'Tomates frescos', category: 'heladera', qty: 0, unit: 'un', minQty: 3, icon: '🍅' },
  { id: 'ing-47', name: 'Tomates Cherry', category: 'heladera', qty: 0, unit: 'g', minQty: 200, icon: '🍅' },
  { id: 'ing-48', name: 'Espinaca fresca', category: 'heladera', qty: 0, unit: 'atado', minQty: 1, icon: '🥬' },
  { id: 'ing-49', name: 'Rúcula fresca', category: 'heladera', qty: 0, unit: 'atado', minQty: 1, icon: '🥗' },
  { id: 'ing-50', name: 'Palta', category: 'heladera', qty: 0, unit: 'un', minQty: 1, icon: '🥑' },
  { id: 'ing-51', name: 'Zucchini', category: 'heladera', qty: 0, unit: 'un', minQty: 1, icon: '🥒' },
  { id: 'ing-52', name: 'Berenjena', category: 'heladera', qty: 0, unit: 'un', minQty: 1, icon: '🍆' },
  { id: 'ing-53', name: 'Choclo / Maíz', category: 'heladera', qty: 0, unit: 'un', minQty: 2, icon: '🌽' },
  { id: 'ing-12', name: 'Limón / Lima', category: 'heladera', qty: 3, unit: 'un', minQty: 1, icon: '🍋' },
  { id: 'ing-54', name: 'Naranja', category: 'heladera', qty: 0, unit: 'un', minQty: 2, icon: '🍊' },
  { id: 'ing-55', name: 'Manzana', category: 'heladera', qty: 0, unit: 'un', minQty: 2, icon: '🍎' },
  { id: 'ing-56', name: 'Banana', category: 'heladera', qty: 0, unit: 'un', minQty: 3, icon: '🍌' },

  // 🧀 Lácteos & Huevos
  { id: 'ing-7', name: 'Huevos de campo', category: 'heladera', qty: 6, unit: 'un', minQty: 3, icon: '🥚' },
  { id: 'ing-10', name: 'Manteca', category: 'heladera', qty: 100, unit: 'g', minQty: 50, icon: '🧈' },
  { id: 'ing-8', name: 'Crema de Leche', category: 'heladera', qty: 250, unit: 'ml', minQty: 200, icon: '🥛' },
  { id: 'ing-57', name: 'Leche entera', category: 'heladera', qty: 0, unit: 'ml', minQty: 500, icon: '🥛' },
  { id: 'ing-9', name: 'Queso Parmesano / Reggianito', category: 'heladera', qty: 150, unit: 'g', minQty: 50, icon: '🧀' },
  { id: 'ing-58', name: 'Queso Mozzarella', category: 'heladera', qty: 0, unit: 'g', minQty: 300, icon: '🧀' },
  { id: 'ing-59', name: 'Queso Crema', category: 'heladera', qty: 0, unit: 'g', minQty: 200, icon: '🧀' },
  { id: 'ing-60', name: 'Queso Azul / Roquefort', category: 'heladera', qty: 0, unit: 'g', minQty: 100, icon: '🧀' },
  { id: 'ing-61', name: 'Ricotta fresca', category: 'heladera', qty: 0, unit: 'g', minQty: 250, icon: '🧀' },

  // 🥫 Alacena, Secos, Legumbres & Harinas
  { id: 'ing-13', name: 'Arroz Basmati / Jazmín', category: 'alacena', qty: 500, unit: 'g', minQty: 200, icon: '🍚' },
  { id: 'ing-14', name: 'Arroz Carnaroli / Arborio (p/ Risotto)', category: 'alacena', qty: 400, unit: 'g', minQty: 200, icon: '🌾' },
  { id: 'ing-62', name: 'Arroz Doble Carolina / Largo Fino', category: 'alacena', qty: 0, unit: 'g', minQty: 500, icon: '🌾' },
  { id: 'ing-15', name: 'Pasta Seca (Spaghetti / Penne)', category: 'alacena', qty: 500, unit: 'g', minQty: 250, icon: '🍝' },
  { id: 'ing-63', name: 'Fideos de Arroz / Ramen', category: 'alacena', qty: 0, unit: 'g', minQty: 200, icon: '🍜' },
  { id: 'ing-16', name: 'Harina 0000', category: 'alacena', qty: 1000, unit: 'g', minQty: 500, icon: '🌾' },
  { id: 'ing-64', name: 'Harina Leudante', category: 'alacena', qty: 0, unit: 'g', minQty: 500, icon: '🌾' },
  { id: 'ing-65', name: 'Pan Rallado / Panko', category: 'alacena', qty: 0, unit: 'g', minQty: 300, icon: '🥖' },
  { id: 'ing-66', name: 'Avena arrollada', category: 'alacena', qty: 0, unit: 'g', minQty: 250, icon: '🥣' },
  { id: 'ing-67', name: 'Lentejas secas / lata', category: 'alacena', qty: 0, unit: 'g', minQty: 300, icon: '🍲' },
  { id: 'ing-68', name: 'Garbanzos secos / lata', category: 'alacena', qty: 0, unit: 'g', minQty: 300, icon: '🍲' },
  { id: 'ing-17', name: 'Leche de Coco', category: 'alacena', qty: 1, unit: 'lata (400ml)', minQty: 1, icon: '🥥' },
  { id: 'ing-18', name: 'Hongos Secos de Pino / Portobello', category: 'alacena', qty: 40, unit: 'g', minQty: 20, icon: '🍄' },
  { id: 'ing-19', name: 'Tomates triturados / Perita', category: 'alacena', qty: 2, unit: 'latas', minQty: 1, icon: '🥫' },
  { id: 'ing-69', name: 'Extracto de Tomate', category: 'alacena', qty: 0, unit: 'cucharadas', minQty: 2, icon: '🥫' },
  { id: 'ing-70', name: 'Caldo de Verduras / Carne', category: 'alacena', qty: 0, unit: 'cubos/litros', minQty: 2, icon: '🍲' },
  { id: 'ing-71', name: 'Atún en lata', category: 'alacena', qty: 0, unit: 'latas', minQty: 2, icon: '🐟' },
  { id: 'ing-20', name: 'Nueces o Almendras', category: 'alacena', qty: 100, unit: 'g', minQty: 50, icon: '🥜' },
  { id: 'ing-21', name: 'Chocolate Semiamargo 70%', category: 'alacena', qty: 150, unit: 'g', minQty: 100, icon: '🍫' },
  { id: 'ing-72', name: 'Cacao Amargo en polvo', category: 'alacena', qty: 0, unit: 'g', minQty: 100, icon: '🍫' },
  { id: 'ing-22', name: 'Azúcar mascabo / común', category: 'alacena', qty: 300, unit: 'g', minQty: 100, icon: '🍬' },
  { id: 'ing-73', name: 'Polvo para Hornear', category: 'alacena', qty: 0, unit: 'g', minQty: 50, icon: '🧁' },
  { id: 'ing-74', name: 'Esencia de Vainilla', category: 'alacena', qty: 0, unit: 'ml', minQty: 50, icon: '✨' },
  { id: 'ing-75', name: 'Dulce de Leche', category: 'alacena', qty: 0, unit: 'g', minQty: 250, icon: '🍯' },

  // 🌿 Condimentos, Especias, Hierbas & Aceites
  { id: 'ing-23', name: 'Aceite de Oliva Extra Virgen', category: 'especias', qty: 400, unit: 'ml', minQty: 150, icon: '🫒' },
  { id: 'ing-76', name: 'Aceite de Girasol / Maíz', category: 'especias', qty: 0, unit: 'ml', minQty: 500, icon: '🌻' },
  { id: 'ing-77', name: 'Aceto Balsámico', category: 'especias', qty: 0, unit: 'ml', minQty: 100, icon: '🍾' },
  { id: 'ing-78', name: 'Vinagre de Manzana / Alcohol', category: 'especias', qty: 0, unit: 'ml', minQty: 200, icon: '🍶' },
  { id: 'ing-28', name: 'Sal Entrefina / Marina & Pimienta Negra', category: 'especias', qty: 1, unit: 'molinillo', minQty: 1, icon: '🧂' },
  { id: 'ing-79', name: 'Pimentón Dulce / Ahumado', category: 'especias', qty: 0, unit: 'g', minQty: 30, icon: '🌶️' },
  { id: 'ing-80', name: 'Ají Molido', category: 'especias', qty: 0, unit: 'g', minQty: 20, icon: '🌶️' },
  { id: 'ing-81', name: 'Comino molido', category: 'especias', qty: 0, unit: 'g', minQty: 20, icon: '🌿' },
  { id: 'ing-24', name: 'Curry en polvo / Garam Masala', category: 'especias', qty: 50, unit: 'g', minQty: 20, icon: '🌶️' },
  { id: 'ing-82', name: 'Orégano seco', category: 'especias', qty: 0, unit: 'g', minQty: 30, icon: '🌿' },
  { id: 'ing-25', name: 'Romero fresco / seco', category: 'especias', qty: 1, unit: 'atado', minQty: 1, icon: '🌿' },
  { id: 'ing-83', name: 'Tomillo fresco', category: 'especias', qty: 0, unit: 'atado', minQty: 1, icon: '🌿' },
  { id: 'ing-26', name: 'Albahaca fresca', category: 'especias', qty: 1, unit: 'planta/atado', minQty: 1, icon: '🍃' },
  { id: 'ing-84', name: 'Perejil fresco', category: 'especias', qty: 0, unit: 'atado', minQty: 1, icon: '🌿' },
  { id: 'ing-85', name: 'Cilantro fresco', category: 'especias', qty: 0, unit: 'atado', minQty: 1, icon: '🌿' },
  { id: 'ing-86', name: 'Hojas de Laurel', category: 'especias', qty: 0, unit: 'hojas', minQty: 5, icon: '🍃' },
  { id: 'ing-27', name: 'Salsa de Soja', category: 'especias', qty: 200, unit: 'ml', minQty: 50, icon: '🍶' },
  { id: 'ing-87', name: 'Salsa Inglesa / Worcestershire', category: 'especias', qty: 0, unit: 'ml', minQty: 50, icon: '🍶' },
  { id: 'ing-88', name: 'Salsa Picante (Sriracha / Tabasco)', category: 'especias', qty: 0, unit: 'ml', minQty: 50, icon: '🌶️' },
  { id: 'ing-29', name: 'Mostaza Dijon / Antigua', category: 'especias', qty: 100, unit: 'g', minQty: 50, icon: '🍯' },
  { id: 'ing-30', name: 'Miel pura', category: 'especias', qty: 150, unit: 'g', minQty: 50, icon: '🍯' },

  // 🍷 Cava & Bebidas
  { id: 'ing-31', name: 'Vino Tinto Malbec / Cabernet', category: 'cava', qty: 2, unit: 'botellas', minQty: 1, icon: '🍷' },
  { id: 'ing-32', name: 'Vino Blanco Seco (Chardonnay/Sauvignon)', category: 'cava', qty: 1, unit: 'botella', minQty: 1, icon: '🥂' },
  { id: 'ing-89', name: 'Vino Espumante Extra Brut', category: 'cava', qty: 0, unit: 'botella', minQty: 1, icon: '🍾' },
  { id: 'ing-90', name: 'Cerveza Rubia / IPA', category: 'cava', qty: 0, unit: 'latas', minQty: 2, icon: '🍺' }
];

// 👥 Usuarios por Defecto (Hell's Kitchen Community)
const DEFAULT_USERS = [
  { id: 'user-pato', name: 'Chef Pato', avatar: '👨‍🍳', role: 'user' }
];
const DEFAULT_FAMILY_USERS = DEFAULT_USERS; // Alias de compatibilidad

// Helper para crear alacena vacía (stock 0) para nuevos usuarios
function createEmptyUserPantry() {
  return MASTER_PANTRY_CATALOG.map(item => ({
    ...item,
    qty: 0
  }));
}

const DEFAULT_KITCHEN_DATA = {
  // 0. USUARIOS & SESIÓN
  users: DEFAULT_USERS,
  currentUser: 'user-pato',

  // 1. ALACENAS INDIVIDUALES POR USUARIO
  pantries: {
    'user-pato': JSON.parse(JSON.stringify(MASTER_PANTRY_CATALOG))
  },

  // 2. LISTAS DE COMPRAS INDIVIDUALES POR USUARIO
  shoppingLists: {
    'user-pato': []
  },

  // 3. RECETARIO (PÚBLICAS Y PRIVADAS)
  recipes: [
    {
      id: 'rec-1',
      title: 'Pollo al Curry Aromático con Leche de Coco & Basmati',
      authorId: 'user-pato',
      authorName: 'Chef Pato',
      authorAvatar: '👨‍🍳',
      isPrivate: false,
      category: 'rapidas',
      time: 25,
      portions: 2,
      difficulty: 'Fácil',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&auto=format&fit=crop&q=80',
      description: 'Cremoso, especiado y con el perfume inconfundible de la leche de coco y el arroz basmati al vapor.',
      pairing: 'Vino Blanco Torrontés o Chardonnay fresco / Cerveza IPA',
      chefTip: 'Dorar el pollo en tandas para que tome color dorado y no hierva. Tostar el curry 30 segundos en el aceite antes de verter los líquidos para despertar los aceites esenciales.',
      ingredients: [
        { name: 'Pechuga de Pollo', qty: 400, unit: 'g', requiredId: 'ing-1' },
        { name: 'Cebolla', qty: 1, unit: 'un', requiredId: 'ing-3' },
        { name: 'Ajo', qty: 2, unit: 'dientes', requiredId: 'ing-5' },
        { name: 'Leche de Coco', qty: 1, unit: 'lata (400ml)', requiredId: 'ing-17' },
        { name: 'Curry en polvo / Garam Masala', qty: 2, unit: 'cucharadas', requiredId: 'ing-24' },
        { name: 'Arroz Basmati / Jazmín', qty: 200, unit: 'g', requiredId: 'ing-13' },
        { name: 'Aceite de Oliva Extra Virgen', qty: 20, unit: 'ml', requiredId: 'ing-23' },
        { name: 'Cebolla de Verdeo', qty: 1, unit: 'un', requiredId: 'ing-4' },
        { name: 'Sal Entrefina / Marina & Pimienta Negra', qty: 1, unit: 'pizca', requiredId: 'ing-28' }
      ],
      steps: [
        {
          stepNumber: 1,
          title: 'Arroz Basmati al Vapor',
          text: 'Lavar el arroz basmati con agua fría 2 veces. En una cacerola, poner 1 taza de arroz por 1.5 tazas de agua con una pizca de sal. Hervir a fuego suave tapado durante 11 minutos. Apagar el fuego y dejar reposar 5 minutos tapado sin tocar.',
          timerMinutes: 11
        },
        {
          stepNumber: 2,
          title: 'Sellado del Pollo',
          text: 'Cortar las pechugas en cubos de 2.5 cm. Salpimentar. En un wok o sartén grande con aceite de oliva bien caliente, dorar el pollo a fuego fuerte por 4 minutos sin mover demasiado.',
          timerMinutes: 4
        },
        {
          stepNumber: 3,
          title: 'Sofrito Aromático & Especias',
          text: 'Bajar el fuego, sumar la cebolla picada fina y los ajos rallados. Saltear 3 minutos hasta transparentar. Espolvorear las 2 cucharadas de curry y tostar 30 segundos removiendo.',
          timerMinutes: 3
        },
        {
          stepNumber: 4,
          title: 'Emulsión de Coco y Reducción',
          text: 'Verter toda la leche de coco. Mezclar raspando el fondo para levantar los sabores glaseados. Cocinar a fuego medio-bajo por 8 minutos hasta que la salsa espese y tome textura aterciopelada.',
          timerMinutes: 8
        },
        {
          stepNumber: 5,
          title: 'Emplatado Chef',
          text: 'Servir en plato hondo con base de arroz basmati suelto, el pollo con abundante salsa de curry y terminar por encima con verdeo fresco cortado al sesgo y unas gotas de limón/lima.'
        }
      ]
    },
    {
      id: 'rec-2',
      title: 'Ojo de Bife Sellado a la Sartén de Hierro con Papas Rústicas al Romero',
      authorId: 'user-pato',
      authorName: 'Chef Pato',
      authorAvatar: '👨‍🍳',
      isPrivate: false,
      category: 'carnes',
      time: 35,
      portions: 2,
      difficulty: 'Media',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80',
      description: 'Costra crocante perfecta por fuera, tierno y jugoso por dentro con aroma a romero fresco, manteca avellanada y ajo machacado.',
      pairing: 'Vino Tinto Malbec de Guarda o Cabernet Franc con cuerpo',
      chefTip: 'Sacar la carne de la heladera 30 minutos antes para que tome temperatura ambiente. Secarla muy bien con papel absorbente antes de salar para garantizar una reacción de Maillard (costra dorada) suprema.',
      ingredients: [
        { name: 'Ojo de Bife / Bife de Chorizo', qty: 600, unit: 'g (2 bifes gruesos)', requiredId: 'ing-2' },
        { name: 'Papas medianas', qty: 4, unit: 'un', requiredId: 'ing-6' },
        { name: 'Romero fresco / seco', qty: 1, unit: 'ramita generosa', requiredId: 'ing-25' },
        { name: 'Ajo', qty: 3, unit: 'dientes en camisa', requiredId: 'ing-5' },
        { name: 'Manteca', qty: 40, unit: 'g', requiredId: 'ing-10' },
        { name: 'Aceite de Oliva Extra Virgen', qty: 30, unit: 'ml', requiredId: 'ing-23' },
        { name: 'Sal Entrefina / Marina & Pimienta Negra', qty: 1, unit: 'al gusto', requiredId: 'ing-28' }
      ],
      steps: [
        {
          stepNumber: 1,
          title: 'Papas Rústicas Crocantes',
          text: 'Lavar bien las papas y cortarlas en gajos con piel. Hervir en agua con sal por 6 minutos (que queden firmes). Escurrir, sacudir en la olla para romper bordes (clave para que queden crujientes), mezclar con aceite de oliva, romero y sal entrefina. Llevar a horno fuerte a 210°C por 20 minutos hasta dorar.',
          timerMinutes: 20
        },
        {
          stepNumber: 2,
          title: 'Calentamiento de Sartén de Hierro',
          text: 'Poner la sartén de hierro a fuego máximo hasta que empiece a humear apenas. Añadir un hilo de aceite de oliva.',
          timerMinutes: 3
        },
        {
          stepNumber: 3,
          title: 'Sellado & Costra',
          text: 'Salar la carne generosamente justo antes de entrar a la sartén. Colocar los bifes y sellar 3 minutos sin tocarlos para crear la costra.',
          timerMinutes: 3
        },
        {
          stepNumber: 4,
          title: 'Arrosé (Baño en Manteca, Ajo y Romero)',
          text: 'Dar vuelta la carne. Bajar a fuego medio. Agregar la manteca, los ajos machacados y el romero. Con una cuchara, bañar continuamente la parte superior del bife con la manteca espumosa aromatizada durante 2.5 minutos.',
          timerMinutes: 3
        },
        {
          stepNumber: 5,
          title: 'Reposo Esencial',
          text: 'Retirar el bife a una tabla y dejar reposar 4 minutos para que los jugos se redistribuyan antes de cortar. Servir con las papas rústicas calientes.',
          timerMinutes: 4
        }
      ]
    },
    {
      id: 'rec-3',
      title: 'Risotto Cremoso de Hongos de Pino, Verdeo & Parmesano',
      authorId: 'user-pato',
      authorName: 'Chef Pato',
      authorAvatar: '👨‍🍳',
      isPrivate: false,
      category: 'pastas',
      time: 30,
      portions: 2,
      difficulty: 'Media',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=600&auto=format&fit=crop&q=80',
      description: 'El clásico italiano por excelencia: arroz nacarado al dente con el fondo terroso de los hongos hidratados y la mantecatura final.',
      pairing: 'Vino Pinot Noir o Chardonnay con paso por roble',
      chefTip: 'Nunca laves el arroz para risotto porque perderías el almidón que da la cremosidad. El caldo siempre debe estar hirviendo al lado al momento de agregarlo al arroz.',
      ingredients: [
        { name: 'Arroz Carnaroli / Arborio (p/ Risotto)', qty: 200, unit: 'g', requiredId: 'ing-14' },
        { name: 'Hongos Secos de Pino / Portobello', qty: 30, unit: 'g', requiredId: 'ing-18' },
        { name: 'Cebolla', qty: 1, unit: 'un', requiredId: 'ing-3' },
        { name: 'Cebolla de Verdeo', qty: 2, unit: 'un', requiredId: 'ing-4' },
        { name: 'Ajo', qty: 1, unit: 'diente', requiredId: 'ing-5' },
        { name: 'Vino Blanco Seco (Chardonnay/Sauvignon)', qty: 100, unit: 'ml', requiredId: 'ing-32' },
        { name: 'Manteca', qty: 50, unit: 'g (fría en cubos)', requiredId: 'ing-10' },
        { name: 'Queso Parmesano / Reggianito', qty: 80, unit: 'g', requiredId: 'ing-9' },
        { name: 'Aceite de Oliva Extra Virgen', qty: 20, unit: 'ml', requiredId: 'ing-23' }
      ],
      steps: [
        {
          stepNumber: 1,
          title: 'Hidratación de Hongos',
          text: 'Poner los hongos secos en un bol con 2 tazas de agua caliente o té negro durante 15 minutos. Colar reservando el líquido (será parte de nuestro caldo) y picar los hongos.',
          timerMinutes: 15
        },
        {
          stepNumber: 2,
          title: 'Nacarado del Arroz',
          text: 'En una cacerola amplia, calentar aceite de oliva con la cebolla y el blanco del verdeo picados muy finos. Cuando transparente, agregar el arroz y nacarar 2 minutos hasta que los granos se vuelvan translúcidos.',
          timerMinutes: 2
        },
        {
          stepNumber: 3,
          title: 'Desglasado con Vino Blanco',
          text: 'Verter el vino blanco frío. Dejar evaporar el alcohol por completo a fuego vivo mientras se remueve suavemente.',
          timerMinutes: 2
        },
        {
          stepNumber: 4,
          title: 'Cocción Gradual con Caldo',
          text: 'Sumar los hongos picados. Ir agregando el caldo caliente de a cucharones, esperando que el arroz lo absorba antes de agregar el siguiente. Remover suavemente en forma de ocho. Tiempo total: 16 minutos.',
          timerMinutes: 16
        },
        {
          stepNumber: 5,
          title: 'Mantecatura All\'Onda',
          text: 'Apagar el fuego. Agregar los cubos de manteca bien fría y el parmesano rallado. Batir vigorosamente con cuchara de madera para emulsionar. Dejar reposar tapado 2 minutos y servir con verdeo verde picado.'
        }
      ]
    },
    {
      id: 'rec-4',
      title: 'Spaghetti al Pesto Genovés Auténtico de Albahaca, Parmesano y Nueces',
      authorId: 'user-pato',
      authorName: 'Chef Pato',
      authorAvatar: '👨‍🍳',
      isPrivate: false,
      category: 'pastas',
      time: 18,
      portions: 2,
      difficulty: 'Fácil',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80',
      description: 'Fresco, vibrante y aromático. El calor de la pasta recién colada despierta los perfumes de la albahaca recién procesada.',
      pairing: 'Vino Blanco Sauvignon Blanc o Torrontés',
      chefTip: 'Nunca cocines el pesto al fuego directo. Se mezcla en crudo en el bol con una o dos cucharadas del agua de cocción de la pasta (rica en almidón) para crear una salsa cremosa.',
      ingredients: [
        { name: 'Pasta Seca (Spaghetti / Penne)', qty: 250, unit: 'g', requiredId: 'ing-15' },
        { name: 'Albahaca fresca', qty: 1, unit: 'atado grande (hojas lavadas y secas)', requiredId: 'ing-26' },
        { name: 'Nueces o Almendras', qty: 40, unit: 'g (tostadas)', requiredId: 'ing-20' },
        { name: 'Queso Parmesano / Reggianito', qty: 60, unit: 'g rallado fino', requiredId: 'ing-9' },
        { name: 'Ajo', qty: 1, unit: 'diente sin el brote central', requiredId: 'ing-5' },
        { name: 'Aceite de Oliva Extra Virgen', qty: 70, unit: 'ml', requiredId: 'ing-23' },
        { name: 'Sal Entrefina / Marina & Pimienta Negra', qty: 1, unit: 'pizca', requiredId: 'ing-28' }
      ],
      steps: [
        {
          stepNumber: 1,
          title: 'Hervor de la Pasta',
          text: 'Poner a hervir abundante agua con sal gruesa (10g de sal por cada litro). Cuando rompa hervor fuerte, echar los spaghetti y cocinar 8 minutos (al dente).',
          timerMinutes: 8
        },
        {
          stepNumber: 2,
          title: 'Procesado del Pesto',
          text: 'En mortero o procesadora, colocar las hojas de albahaca bien secas, las nueces tostadas, el diente de ajo y una pizca de sal. Procesar a pulsos agregando el aceite de oliva en hilo continuo.',
          timerMinutes: 2
        },
        {
          stepNumber: 3,
          title: 'Integración de Quesos',
          text: 'Pasar la pasta verde a un bol y mezclar a mano con el parmesano rallado.'
        },
        {
          stepNumber: 4,
          title: 'Emulsión & Emplatado',
          text: 'Separar media taza del agua de cocción. Colar la pasta, verterla inmediatamente sobre el bol con el pesto, sumar 3 cucharadas del agua caliente y mezclar con pinzas. Servir con lluvia de queso y un hilo de oliva.'
        }
      ]
    },
    {
      id: 'rec-5',
      title: 'Volcán de Chocolate Fondant con Centro Líquido',
      authorId: 'user-pato',
      authorName: 'Chef Pato',
      authorAvatar: '👨‍🍳',
      isPrivate: false,
      category: 'postres',
      time: 20,
      portions: 2,
      difficulty: 'Media',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80',
      description: 'El postre insignia de la cocina francesa. Bizcocho tibio por fuera que al cortar con la cuchara libera lava de chocolate fundido.',
      pairing: 'Café Espresso o Copa de Oporto / Vino Dulce Tardío',
      chefTip: 'El secreto absoluto es la temperatura y el tiempo exacto de horno: 11 minutos a 200°C. Si te pasás 2 minutos se convierte en bizcochuelo.',
      ingredients: [
        { name: 'Chocolate Semiamargo 70%', qty: 110, unit: 'g', requiredId: 'ing-21' },
        { name: 'Manteca', qty: 70, unit: 'g', requiredId: 'ing-10' },
        { name: 'Huevos de campo', qty: 2, unit: 'un', requiredId: 'ing-7' },
        { name: 'Azúcar mascabo / común', qty: 50, unit: 'g', requiredId: 'ing-22' },
        { name: 'Harina 0000', qty: 25, unit: 'g (2 cucharadas)', requiredId: 'ing-16' }
      ],
      steps: [
        {
          stepNumber: 1,
          title: 'Derretido Suave',
          text: 'Picar el chocolate y la manteca. Fundir a baño maría o en microondas en tandas de 30 segundos removiendo hasta que quede liso y brillante.',
          timerMinutes: 2
        },
        {
          stepNumber: 2,
          title: 'Batido Espumoso',
          text: 'En otro bol, batir los huevos con el azúcar durante 2 minutos hasta que tomen color claro y espumen.',
          timerMinutes: 2
        },
        {
          stepNumber: 3,
          title: 'Integración de Mezcla',
          text: 'Verter el chocolate fundido sobre los huevos batidos con movimientos envolventes. Incorporar la harina tamizada con espátula.'
        },
        {
          stepNumber: 4,
          title: 'Moldeado & Horneado de Precisión',
          text: 'Enmantecar y espolvorear con cacao dos moldes de soufflé o flaneras. Llenar a 3/4. Llevar a horno precalentado a 200°C durante exactamente 11 minutos.',
          timerMinutes: 11
        },
        {
          stepNumber: 5,
          title: 'Desmolde Magia',
          text: 'Dejar reposar 1 minuto. Pasar un cuchillito fino por el borde, desmoldar directo en el plato y servir con una bocha de helado de crema o frutos rojos.'
        }
      ]
    },
    {
      id: 'rec-6',
      title: 'Wok Expres de Pollo, Morrón, Verdeo & Soja',
      authorId: 'user-pato',
      authorName: 'Chef Pato',
      authorAvatar: '👨‍🍳',
      isPrivate: false,
      category: 'rapidas',
      time: 15,
      portions: 2,
      difficulty: 'Fácil',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80',
      description: 'Crocante, saludable y con sabor oriental. Ideal para resolver una cena de diez puntos en solo quince minutos.',
      pairing: 'Cerveza rubia helada o Vino Blanco fresco',
      chefTip: 'Mantener el wok al máximo de temperatura en todo momento. Los vegetales deben quedar crocantes al dente, nunca blandos ni hervidos.',
      ingredients: [
        { name: 'Pechuga de Pollo', qty: 300, unit: 'g en tiras', requiredId: 'ing-1' },
        { name: 'Morrón Rojo', qty: 1, unit: 'un en juliana', requiredId: 'ing-11' },
        { name: 'Cebolla', qty: 1, unit: 'un en pluma', requiredId: 'ing-3' },
        { name: 'Cebolla de Verdeo', qty: 2, unit: 'un', requiredId: 'ing-4' },
        { name: 'Ajo', qty: 2, unit: 'dientes laminados', requiredId: 'ing-5' },
        { name: 'Salsa de Soja', qty: 30, unit: 'ml', requiredId: 'ing-27' },
        { name: 'Aceite de Oliva Extra Virgen', qty: 20, unit: 'ml', requiredId: 'ing-23' },
        { name: 'Arroz Basmati / Jazmín', qty: 150, unit: 'g', requiredId: 'ing-13' }
      ],
      steps: [
        {
          stepNumber: 1,
          title: 'Fuego Vivo en Wok',
          text: 'Calentar el wok hasta que humee. Agregar 1 cucharada de aceite y saltear el pollo en tiras 3 minutos hasta dorar. Retirar y reservar.',
          timerMinutes: 3
        },
        {
          stepNumber: 2,
          title: 'Vegetales al Dente',
          text: 'En el mismo wok con otro hilo de aceite, saltear a fuego máximo la cebolla, el morrón y el ajo por 3 minutos moviendo constantemente.',
          timerMinutes: 3
        },
        {
          stepNumber: 3,
          title: 'Glaseado con Soja & Emplatado',
          text: 'Reincorporar el pollo, verter la salsa de soja y el verdeo. Saltear 1 minuto más para que todo se unifique y caramelice. Servir sobre arroz basmati caliente.',
          timerMinutes: 1
        }
      ]
    }
  ],

  // 3. LISTA DE COMPRAS
  shoppingList: [
    { id: 'shop-1', name: 'Queso Reggianito para rallar', qty: '200g', checked: false, note: 'Para pastas y risottos' },
    { id: 'shop-2', name: 'Vino Malbec de Guarda', qty: '2 botellas', checked: false, note: 'Para asado / fin de semana' }
  ],

  // 4. HISTORIAL DE RECETAS COCINADAS & NOTAS PERSONALES
  history: [
    {
      id: 'hist-1',
      date: '2026-08-30',
      recipeId: 'rec-2',
      recipeTitle: 'Ojo de Bife Sellado con Papas Rústicas',
      portions: 2,
      note: 'Salió en el punto justo jugoso. Probar la próxima ponerle 1 ramita de tomillo además de romero.'
    }
  ]
};

if (typeof window !== 'undefined') {
  window.MASTER_PANTRY_CATALOG = MASTER_PANTRY_CATALOG;
  window.createEmptyUserPantry = createEmptyUserPantry;
  window.DEFAULT_USERS = DEFAULT_USERS;
  window.DEFAULT_FAMILY_USERS = DEFAULT_USERS;
  window.DEFAULT_KITCHEN_DATA = DEFAULT_KITCHEN_DATA;
}
