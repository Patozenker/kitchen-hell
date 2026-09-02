/**
 * PATO'S KITCHEN - CATÁLOGO Y SEMILLA DE DATOS INICIALES
 * Alacena, Heladera, Cava, Recetas de Autor y Técnicas de Cocina.
 */

const MASTER_PANTRY_CATALOG = [
  // ==========================================
  // 1. 🥩 CARNES, AVES, CERDO, PESCADOS & MARISCOS (category: 'carnes')
  // ==========================================
  { id: 'ing-1', name: 'Pechuga de Pollo', category: 'carnes', qty: 0, unit: 'g', minQty: 500, icon: '🍗' },
  { id: 'ing-33', name: 'Pata Muslo de Pollo', category: 'carnes', qty: 0, unit: 'un', minQty: 2, icon: '🍗' },
  { id: 'ing-101', name: 'Pollo Entero Limpio', category: 'carnes', qty: 0, unit: 'un', minQty: 1, icon: '🍗' },
  { id: 'ing-102', name: 'Milanesas de Pollo / Supremas', category: 'carnes', qty: 0, unit: 'g', minQty: 500, icon: '🍗' },
  { id: 'ing-103', name: 'Alitas de Pollo', category: 'carnes', qty: 0, unit: 'g', minQty: 500, icon: '🍗' },
  { id: 'ing-2', name: 'Ojo de Bife / Bife de Chorizo', category: 'carnes', qty: 0, unit: 'g', minQty: 500, icon: '🥩' },
  { id: 'ing-34', name: 'Lomo Vacuno', category: 'carnes', qty: 0, unit: 'g', minQty: 500, icon: '🥩' },
  { id: 'ing-104', name: 'Vacío Vacuno', category: 'carnes', qty: 0, unit: 'g', minQty: 1000, icon: '🥩' },
  { id: 'ing-105', name: 'Asado de Tira', category: 'carnes', qty: 0, unit: 'g', minQty: 1000, icon: '🥩' },
  { id: 'ing-106', name: 'Entraña Fina', category: 'carnes', qty: 0, unit: 'g', minQty: 500, icon: '🥩' },
  { id: 'ing-107', name: 'Matambre Vacuno', category: 'carnes', qty: 0, unit: 'g', minQty: 1000, icon: '🥩' },
  { id: 'ing-108', name: 'Peceto Vacuno', category: 'carnes', qty: 0, unit: 'g', minQty: 1000, icon: '🥩' },
  { id: 'ing-109', name: 'Colita de Cuadril', category: 'carnes', qty: 0, unit: 'g', minQty: 800, icon: '🥩' },
  { id: 'ing-110', name: 'Nalga / Bola de Lomo (p/ Milanesas)', category: 'carnes', qty: 0, unit: 'g', minQty: 500, icon: '🥩' },
  { id: 'ing-111', name: 'Milanesas de Carne preparadas', category: 'carnes', qty: 0, unit: 'g', minQty: 500, icon: '🥩' },
  { id: 'ing-37', name: 'Carne Picada Especial', category: 'carnes', qty: 0, unit: 'g', minQty: 500, icon: '🥩' },
  { id: 'ing-112', name: 'Ossobuco Vacuno', category: 'carnes', qty: 0, unit: 'g', minQty: 500, icon: '🥩' },
  { id: 'ing-35', name: 'Bondiola de Cerdo', category: 'carnes', qty: 0, unit: 'g', minQty: 500, icon: '🥩' },
  { id: 'ing-113', name: 'Costillitas / Pechito de Cerdo', category: 'carnes', qty: 0, unit: 'g', minQty: 500, icon: '🥩' },
  { id: 'ing-114', name: 'Matambre de Cerdo', category: 'carnes', qty: 0, unit: 'g', minQty: 600, icon: '🥩' },
  { id: 'ing-115', name: 'Solomillo de Cerdo', category: 'carnes', qty: 0, unit: 'g', minQty: 500, icon: '🥩' },
  { id: 'ing-36', name: 'Panceta Ahumada', category: 'carnes', qty: 0, unit: 'g', minQty: 150, icon: '🥓' },
  { id: 'ing-116', name: 'Chorizo Puro Cerdo', category: 'carnes', qty: 0, unit: 'un', minQty: 4, icon: '🌭' },
  { id: 'ing-117', name: 'Morcilla Bombón / Criolla', category: 'carnes', qty: 0, unit: 'un', minQty: 4, icon: '🌭' },
  { id: 'ing-38', name: 'Salmón Rosado Fresco', category: 'carnes', qty: 0, unit: 'g', minQty: 300, icon: '🐟' },
  { id: 'ing-39', name: 'Filet de Merluza fresca', category: 'carnes', qty: 0, unit: 'g', minQty: 500, icon: '🐟' },
  { id: 'ing-118', name: 'Filet de Abadejo / Lenguado', category: 'carnes', qty: 0, unit: 'g', minQty: 500, icon: '🐟' },
  { id: 'ing-40', name: 'Langostinos Pelados y Desvenados', category: 'carnes', qty: 0, unit: 'g', minQty: 250, icon: '🦐' },
  { id: 'ing-119', name: 'Tubos de Calamar / Rabas', category: 'carnes', qty: 0, unit: 'g', minQty: 400, icon: '🦑' },
  { id: 'ing-120', name: 'Mejillones Pelados', category: 'carnes', qty: 0, unit: 'g', minQty: 250, icon: '🦪' },

  // ==========================================
  // 2. 🥦 FRESCOS, VERDULERÍA & FRUTAS (category: 'heladera')
  // ==========================================
  { id: 'ing-3', name: 'Cebolla blanca', category: 'heladera', qty: 0, unit: 'un', minQty: 3, icon: '🧅' },
  { id: 'ing-41', name: 'Cebolla Morada', category: 'heladera', qty: 0, unit: 'un', minQty: 2, icon: '🧅' },
  { id: 'ing-4', name: 'Cebolla de Verdeo', category: 'heladera', qty: 0, unit: 'un', minQty: 2, icon: '🌱' },
  { id: 'ing-42', name: 'Puerro', category: 'heladera', qty: 0, unit: 'un', minQty: 2, icon: '🎋' },
  { id: 'ing-5', name: 'Ajo (Cabeza / Dientes)', category: 'heladera', qty: 0, unit: 'cabezas', minQty: 1, icon: '🧄' },
  { id: 'ing-6', name: 'Papas medianas', category: 'heladera', qty: 0, unit: 'kg', minQty: 1, icon: '🥔' },
  { id: 'ing-43', name: 'Batata / Camote', category: 'heladera', qty: 0, unit: 'kg', minQty: 1, icon: '🍠' },
  { id: 'ing-44', name: 'Zanahoria', category: 'heladera', qty: 0, unit: 'un', minQty: 3, icon: '🥕' },
  { id: 'ing-11', name: 'Morrón Rojo', category: 'heladera', qty: 0, unit: 'un', minQty: 2, icon: '🫑' },
  { id: 'ing-45', name: 'Morrón Verde', category: 'heladera', qty: 0, unit: 'un', minQty: 1, icon: '🫑' },
  { id: 'ing-121', name: 'Morrón Amarillo', category: 'heladera', qty: 0, unit: 'un', minQty: 1, icon: '🫑' },
  { id: 'ing-46', name: 'Tomates frescos redondos / perita', category: 'heladera', qty: 0, unit: 'kg', minQty: 1, icon: '🍅' },
  { id: 'ing-47', name: 'Tomates Cherry', category: 'heladera', qty: 0, unit: 'g', minQty: 250, icon: '🍅' },
  { id: 'ing-122', name: 'Lechuga Mantecosa / Criolla', category: 'heladera', qty: 0, unit: 'planta', minQty: 1, icon: '🥬' },
  { id: 'ing-49', name: 'Rúcula fresca', category: 'heladera', qty: 0, unit: 'atado', minQty: 1, icon: '🥗' },
  { id: 'ing-48', name: 'Espinaca fresca', category: 'heladera', qty: 0, unit: 'atado', minQty: 1, icon: '🥬' },
  { id: 'ing-123', name: 'Acelga fresca', category: 'heladera', qty: 0, unit: 'atado', minQty: 1, icon: '🥬' },
  { id: 'ing-50', name: 'Palta Hass', category: 'heladera', qty: 0, unit: 'un', minQty: 2, icon: '🥑' },
  { id: 'ing-51', name: 'Zucchini / Calabacín', category: 'heladera', qty: 0, unit: 'un', minQty: 2, icon: '🥒' },
  { id: 'ing-52', name: 'Berenjena', category: 'heladera', qty: 0, unit: 'un', minQty: 2, icon: '🍆' },
  { id: 'ing-124', name: 'Zapallito Verde / Redondo', category: 'heladera', qty: 0, unit: 'kg', minQty: 1, icon: '🥒' },
  { id: 'ing-125', name: 'Calabaza Anco / Butternut', category: 'heladera', qty: 0, unit: 'un', minQty: 1, icon: '🎃' },
  { id: 'ing-126', name: 'Brócoli fresco', category: 'heladera', qty: 0, unit: 'un', minQty: 1, icon: '🥦' },
  { id: 'ing-127', name: 'Coliflor fresco', category: 'heladera', qty: 0, unit: 'un', minQty: 1, icon: '🥦' },
  { id: 'ing-128', name: 'Pepino fresco', category: 'heladera', qty: 0, unit: 'un', minQty: 2, icon: '🥒' },
  { id: 'ing-129', name: 'Champiñones / Portobellos frescos', category: 'heladera', qty: 0, unit: 'g', minQty: 200, icon: '🍄' },
  { id: 'ing-53', name: 'Choclo fresco en mazorca', category: 'heladera', qty: 0, unit: 'un', minQty: 2, icon: '🌽' },
  { id: 'ing-130', name: 'Repollo blanco / colorado', category: 'heladera', qty: 0, unit: 'un', minQty: 1, icon: '🥬' },
  { id: 'ing-131', name: 'Espárragos frescos', category: 'heladera', qty: 0, unit: 'atado', minQty: 1, icon: '🎋' },
  { id: 'ing-132', name: 'Jengibre fresco raíz', category: 'heladera', qty: 0, unit: 'g', minQty: 50, icon: '🫚' },
  { id: 'ing-12', name: 'Limón / Lima', category: 'heladera', qty: 0, unit: 'un', minQty: 4, icon: '🍋' },
  { id: 'ing-54', name: 'Naranja para jugo / mesa', category: 'heladera', qty: 0, unit: 'kg', minQty: 1, icon: '🍊' },
  { id: 'ing-133', name: 'Pomelo rosado', category: 'heladera', qty: 0, unit: 'un', minQty: 2, icon: '🍊' },
  { id: 'ing-55', name: 'Manzana roja / verde', category: 'heladera', qty: 0, unit: 'kg', minQty: 1, icon: '🍎' },
  { id: 'ing-56', name: 'Banana', category: 'heladera', qty: 0, unit: 'kg', minQty: 1, icon: '🍌' },
  { id: 'ing-134', name: 'Frutillas frescas', category: 'heladera', qty: 0, unit: 'g', minQty: 250, icon: '🍓' },
  { id: 'ing-135', name: 'Arándanos frescos', category: 'heladera', qty: 0, unit: 'g', minQty: 125, icon: '🫐' },
  { id: 'ing-136', name: 'Duraznos / Pelones', category: 'heladera', qty: 0, unit: 'kg', minQty: 1, icon: '🍑' },
  { id: 'ing-137', name: 'Uvas sin semilla', category: 'heladera', qty: 0, unit: 'g', minQty: 500, icon: '🍇' },

  // ==========================================
  // 3. 🧀 LÁCTEOS, QUESERÍA & HUEVOS (category: 'heladera')
  // ==========================================
  { id: 'ing-7', name: 'Huevos de campo', category: 'heladera', qty: 0, unit: 'maple/docena', minQty: 6, icon: '🥚' },
  { id: 'ing-57', name: 'Leche entera / descremada', category: 'heladera', qty: 0, unit: 'sachet/litro', minQty: 1, icon: '🥛' },
  { id: 'ing-138', name: 'Leche vegetal (Almendras/Avena)', category: 'heladera', qty: 0, unit: 'litro', minQty: 1, icon: '🥛' },
  { id: 'ing-10', name: 'Manteca de primera calidad', category: 'heladera', qty: 0, unit: 'g', minQty: 200, icon: '🧈' },
  { id: 'ing-8', name: 'Crema de Leche', category: 'heladera', qty: 0, unit: 'ml', minQty: 250, icon: '🥛' },
  { id: 'ing-9', name: 'Queso Parmesano / Reggianito para rallar', category: 'heladera', qty: 0, unit: 'g', minQty: 200, icon: '🧀' },
  { id: 'ing-58', name: 'Queso Mozzarella', category: 'heladera', qty: 0, unit: 'g', minQty: 400, icon: '🧀' },
  { id: 'ing-59', name: 'Queso Crema / Untable (tipo Casancrem)', category: 'heladera', qty: 0, unit: 'pote (300g)', minQty: 1, icon: '🧀' },
  { id: 'ing-139', name: 'Queso Provolone / Provoleta', category: 'heladera', qty: 0, unit: 'g', minQty: 250, icon: '🧀' },
  { id: 'ing-60', name: 'Queso Azul / Roquefort', category: 'heladera', qty: 0, unit: 'g', minQty: 150, icon: '🧀' },
  { id: 'ing-140', name: 'Queso Gouda / Danbo en fetas', category: 'heladera', qty: 0, unit: 'g', minQty: 250, icon: '🧀' },
  { id: 'ing-141', name: 'Queso Cremoso / Cuartirolo', category: 'heladera', qty: 0, unit: 'g', minQty: 400, icon: '🧀' },
  { id: 'ing-61', name: 'Ricotta fresca magra', category: 'heladera', qty: 0, unit: 'g', minQty: 300, icon: '🧀' },
  { id: 'ing-142', name: 'Yogur Natural / Griego', category: 'heladera', qty: 0, unit: 'potes', minQty: 2, icon: '🥛' },
  { id: 'ing-75', name: 'Dulce de Leche Repostero / Colonial', category: 'heladera', qty: 0, unit: 'g', minQty: 400, icon: '🍯' },

  // ==========================================
  // 4. 🥫 ALACENA, DESPENSA, SECOS & HARINAS (category: 'alacena')
  // ==========================================
  { id: 'ing-13', name: 'Arroz Basmati / Jazmín', category: 'alacena', qty: 0, unit: 'g', minQty: 500, icon: '🍚' },
  { id: 'ing-14', name: 'Arroz Carnaroli / Arborio (p/ Risotto)', category: 'alacena', qty: 0, unit: 'g', minQty: 500, icon: '🌾' },
  { id: 'ing-62', name: 'Arroz Largo Fino / Doble Carolina', category: 'alacena', qty: 0, unit: 'kg', minQty: 1, icon: '🌾' },
  { id: 'ing-15', name: 'Fideos Spaghetti / Tallarines', category: 'alacena', qty: 0, unit: 'paquete (500g)', minQty: 1, icon: '🍝' },
  { id: 'ing-143', name: 'Fideos Cortos (Penne / Tirabuzón / Moñitos)', category: 'alacena', qty: 0, unit: 'paquete (500g)', minQty: 1, icon: '🍝' },
  { id: 'ing-144', name: 'Fideos para Sopa / Municiones', category: 'alacena', qty: 0, unit: 'paquete (500g)', minQty: 1, icon: '🍲' },
  { id: 'ing-63', name: 'Fideos de Arroz / Ramen', category: 'alacena', qty: 0, unit: 'paquete', minQty: 1, icon: '🍜' },
  { id: 'ing-16', name: 'Harina de Trigo 0000', category: 'alacena', qty: 0, unit: 'kg', minQty: 1, icon: '🌾' },
  { id: 'ing-145', name: 'Harina de Trigo 000', category: 'alacena', qty: 0, unit: 'kg', minQty: 1, icon: '🌾' },
  { id: 'ing-64', name: 'Harina Leudante', category: 'alacena', qty: 0, unit: 'kg', minQty: 1, icon: '🌾' },
  { id: 'ing-146', name: 'Harina Integral fina', category: 'alacena', qty: 0, unit: 'kg', minQty: 1, icon: '🌾' },
  { id: 'ing-147', name: 'Almidón / Fécula de Maíz (Maizena)', category: 'alacena', qty: 0, unit: 'g', minQty: 250, icon: '🌽' },
  { id: 'ing-148', name: 'Polenta instantánea / Harina de Maíz', category: 'alacena', qty: 0, unit: 'g', minQty: 500, icon: '🌽' },
  { id: 'ing-65', name: 'Pan Rallado / Panko crujiente', category: 'alacena', qty: 0, unit: 'g', minQty: 500, icon: '🥖' },
  { id: 'ing-66', name: 'Avena Arrollada gruesa/fina', category: 'alacena', qty: 0, unit: 'g', minQty: 500, icon: '🥣' },
  { id: 'ing-67', name: 'Lentejas secas o en lata', category: 'alacena', qty: 0, unit: 'g', minQty: 400, icon: '🍲' },
  { id: 'ing-68', name: 'Garbanzos secos o en lata', category: 'alacena', qty: 0, unit: 'g', minQty: 400, icon: '🍲' },
  { id: 'ing-149', name: 'Porotos negros / alubia', category: 'alacena', qty: 0, unit: 'g', minQty: 400, icon: '🍲' },
  { id: 'ing-19', name: 'Tomates Perita pelados en lata', category: 'alacena', qty: 0, unit: 'latas', minQty: 2, icon: '🥫' },
  { id: 'ing-150', name: 'Puré de Tomate / Passata', category: 'alacena', qty: 0, unit: 'cajas/botellas', minQty: 2, icon: '🥫' },
  { id: 'ing-69', name: 'Extracto de Tomate concentrado', category: 'alacena', qty: 0, unit: 'tubo/lata', minQty: 1, icon: '🥫' },
  { id: 'ing-71', name: 'Atún en lata al natural / en aceite', category: 'alacena', qty: 0, unit: 'latas', minQty: 2, icon: '🐟' },
  { id: 'ing-151', name: 'Caballa / Sardinas en lata', category: 'alacena', qty: 0, unit: 'latas', minQty: 1, icon: '🐟' },
  { id: 'ing-152', name: 'Choclo amarillo en granos en lata', category: 'alacena', qty: 0, unit: 'latas', minQty: 2, icon: '🌽' },
  { id: 'ing-153', name: 'Arvejas en lata', category: 'alacena', qty: 0, unit: 'latas', minQty: 2, icon: '🥫' },
  { id: 'ing-154', name: 'Palmitos enteros en lata', category: 'alacena', qty: 0, unit: 'lata', minQty: 1, icon: '🥫' },
  { id: 'ing-17', name: 'Leche de Coco cremosa', category: 'alacena', qty: 0, unit: 'lata (400ml)', minQty: 1, icon: '🥥' },
  { id: 'ing-18', name: 'Hongos Secos de Pino / Portobello', category: 'alacena', qty: 0, unit: 'g', minQty: 50, icon: '🍄' },
  { id: 'ing-70', name: 'Caldo en cubos (Verduras / Carne / Pollo)', category: 'alacena', qty: 0, unit: 'cajas', minQty: 1, icon: '🍲' },
  { id: 'ing-20', name: 'Nueces, Almendras & Castañas', category: 'alacena', qty: 0, unit: 'g', minQty: 150, icon: '🥜' },
  { id: 'ing-21', name: 'Chocolate Semiamargo 70% / Taza', category: 'alacena', qty: 0, unit: 'g', minQty: 200, icon: '🍫' },
  { id: 'ing-72', name: 'Cacao Amargo en polvo 100%', category: 'alacena', qty: 0, unit: 'g', minQty: 150, icon: '🍫' },
  { id: 'ing-22', name: 'Azúcar común blanca / Mascabo', category: 'alacena', qty: 0, unit: 'kg', minQty: 1, icon: '🍬' },
  { id: 'ing-155', name: 'Edulcorante líquido / sobres', category: 'alacena', qty: 0, unit: 'frasco', minQty: 1, icon: '🧪' },
  { id: 'ing-73', name: 'Polvo para Hornear / Bicarbonato', category: 'alacena', qty: 0, unit: 'g', minQty: 100, icon: '🧁' },
  { id: 'ing-156', name: 'Levadura seca en sobre / fresca', category: 'alacena', qty: 0, unit: 'sobres/cubos', minQty: 2, icon: '🍞' },
  { id: 'ing-74', name: 'Esencia de Vainilla natural', category: 'alacena', qty: 0, unit: 'ml', minQty: 50, icon: '✨' },
  { id: 'ing-157', name: 'Café Molido / en Grano / Instantáneo', category: 'alacena', qty: 0, unit: 'paquete (250g)', minQty: 1, icon: '☕' },
  { id: 'ing-158', name: 'Té en saquitos / Hebras variadas', category: 'alacena', qty: 0, unit: 'caja', minQty: 1, icon: '🫖' },
  { id: 'ing-159', name: 'Yerba Mate con/sin palo', category: 'alacena', qty: 0, unit: 'kg', minQty: 1, icon: '🧉' },
  { id: 'ing-160', name: 'Pan de Molde Blanco / Integral', category: 'alacena', qty: 0, unit: 'paquete', minQty: 1, icon: '🍞' },
  { id: 'ing-161', name: 'Tostadas / Galletitas de Agua', category: 'alacena', qty: 0, unit: 'paquete', minQty: 1, icon: '🥖' },
  { id: 'ing-162', name: 'Galletitas dulces para merienda', category: 'alacena', qty: 0, unit: 'paquetes', minQty: 2, icon: '🍪' },

  // ==========================================
  // 5. 🧊 FREEZER & CONGELADOS (category: 'alacena')
  // ==========================================
  { id: 'ing-163', name: 'Hielo en bolsa rolito', category: 'alacena', qty: 0, unit: 'bolsa', minQty: 1, icon: '🧊' },
  { id: 'ing-164', name: 'Hamburguesas congeladas de carne/pollo', category: 'alacena', qty: 0, unit: 'unidades', minQty: 4, icon: '🍔' },
  { id: 'ing-165', name: 'Medallones vegetarianos congelados', category: 'alacena', qty: 0, unit: 'unidades', minQty: 4, icon: '🥗' },
  { id: 'ing-166', name: 'Papas Bastón prefritas congeladas', category: 'alacena', qty: 0, unit: 'bolsa (750g)', minQty: 1, icon: '🍟' },
  { id: 'ing-167', name: 'Arvejas congeladas IQF', category: 'alacena', qty: 0, unit: 'bolsa (300g)', minQty: 1, icon: '🫛' },
  { id: 'ing-168', name: 'Mix de Verduras congeladas (salteado/sopa)', category: 'alacena', qty: 0, unit: 'bolsa (500g)', minQty: 1, icon: '🥦' },
  { id: 'ing-169', name: 'Espinaca / Acelga picada congelada', category: 'alacena', qty: 0, unit: 'bolsa (500g)', minQty: 1, icon: '🥬' },
  { id: 'ing-170', name: 'Frutos Rojos congelados (Mix Berries)', category: 'alacena', qty: 0, unit: 'bolsa (300g)', minQty: 1, icon: '🫐' },
  { id: 'ing-171', name: 'Tapas de Empanadas (Hojaldre / Criollas)', category: 'alacena', qty: 0, unit: 'docena', minQty: 1, icon: '🥟' },
  { id: 'ing-172', name: 'Tapas de Tarta (Hojaldre / Pascualina)', category: 'alacena', qty: 0, unit: 'pack (2 un)', minQty: 1, icon: '🥧' },
  { id: 'ing-173', name: 'Helado artesanal / pote', category: 'alacena', qty: 0, unit: 'kg', minQty: 1, icon: '🍨' },

  // ==========================================
  // 6. 🌿 CONDIMENTOS, ESPECIAS, ACEITES & SALSAS (category: 'especias')
  // ==========================================
  { id: 'ing-23', name: 'Aceite de Oliva Extra Virgen', category: 'especias', qty: 0, unit: 'ml', minQty: 500, icon: '🫒' },
  { id: 'ing-76', name: 'Aceite de Girasol / Maíz para cocinar', category: 'especias', qty: 0, unit: 'litro', minQty: 1, icon: '🌻' },
  { id: 'ing-174', name: 'Aceite de Sésamo tostado', category: 'especias', qty: 0, unit: 'ml', minQty: 150, icon: '🍾' },
  { id: 'ing-77', name: 'Aceto Balsámico di Modena', category: 'especias', qty: 0, unit: 'ml', minQty: 250, icon: '🍾' },
  { id: 'ing-78', name: 'Vinagre de Alcohol / Manzana / Vino', category: 'especias', qty: 0, unit: 'ml', minQty: 500, icon: '🍶' },
  { id: 'ing-28', name: 'Sal Fina & Sal Entrefina Parrillera', category: 'especias', qty: 0, unit: 'paquete', minQty: 1, icon: '🧂' },
  { id: 'ing-175', name: 'Sal Gruesa marina para hervor', category: 'especias', qty: 0, unit: 'paquete', minQty: 1, icon: '🧂' },
  { id: 'ing-176', name: 'Pimienta Negra en grano con molinillo', category: 'especias', qty: 0, unit: 'molinillo', minQty: 1, icon: '🧂' },
  { id: 'ing-177', name: 'Pimienta Blanca molida', category: 'especias', qty: 0, unit: 'g', minQty: 30, icon: '🧂' },
  { id: 'ing-79', name: 'Pimentón Dulce / Ahumado de Cachi', category: 'especias', qty: 0, unit: 'g', minQty: 50, icon: '🌶️' },
  { id: 'ing-80', name: 'Ají Molido puro', category: 'especias', qty: 0, unit: 'g', minQty: 50, icon: '🌶️' },
  { id: 'ing-81', name: 'Comino molido aromático', category: 'especias', qty: 0, unit: 'g', minQty: 30, icon: '🌿' },
  { id: 'ing-24', name: 'Curry en polvo / Garam Masala', category: 'especias', qty: 0, unit: 'g', minQty: 50, icon: '🌶️' },
  { id: 'ing-82', name: 'Orégano seco seleccionado', category: 'especias', qty: 0, unit: 'g', minQty: 50, icon: '🌿' },
  { id: 'ing-25', name: 'Romero fresco o seco', category: 'especias', qty: 0, unit: 'atado/frasco', minQty: 1, icon: '🌿' },
  { id: 'ing-83', name: 'Tomillo fresco o seco', category: 'especias', qty: 0, unit: 'atado/frasco', minQty: 1, icon: '🌿' },
  { id: 'ing-26', name: 'Albahaca fresca en hojas', category: 'especias', qty: 0, unit: 'planta/atado', minQty: 1, icon: '🍃' },
  { id: 'ing-84', name: 'Perejil fresco picado', category: 'especias', qty: 0, unit: 'atado', minQty: 1, icon: '🌿' },
  { id: 'ing-85', name: 'Cilantro fresco', category: 'especias', qty: 0, unit: 'atado', minQty: 1, icon: '🌿' },
  { id: 'ing-86', name: 'Hojas de Laurel secas', category: 'especias', qty: 0, unit: 'paquete', minQty: 1, icon: '🍃' },
  { id: 'ing-178', name: 'Nuez Moscada entera/molida', category: 'especias', qty: 0, unit: 'unidades', minQty: 2, icon: '🌰' },
  { id: 'ing-179', name: 'Canela molida y en rama', category: 'especias', qty: 0, unit: 'g', minQty: 30, icon: '🪵' },
  { id: 'ing-180', name: 'Ajo en polvo & Cebolla en polvo', category: 'especias', qty: 0, unit: 'frasco', minQty: 1, icon: '🧄' },
  { id: 'ing-27', name: 'Salsa de Soja Premium', category: 'especias', qty: 0, unit: 'ml', minQty: 250, icon: '🍶' },
  { id: 'ing-87', name: 'Salsa Inglesa / Worcestershire', category: 'especias', qty: 0, unit: 'ml', minQty: 150, icon: '🍶' },
  { id: 'ing-88', name: 'Salsa Picante (Sriracha / Tabasco)', category: 'especias', qty: 0, unit: 'botella', minQty: 1, icon: '🌶️' },
  { id: 'ing-29', name: 'Mostaza Dijon / Antigua con granos', category: 'especias', qty: 0, unit: 'frasco (200g)', minQty: 1, icon: '🍯' },
  { id: 'ing-181', name: 'Mostaza clásica tipo americana', category: 'especias', qty: 0, unit: 'frasco/pomo', minQty: 1, icon: '🌭' },
  { id: 'ing-182', name: 'Mayonesa clásica', category: 'especias', qty: 0, unit: 'doypack (500g)', minQty: 1, icon: '🍶' },
  { id: 'ing-183', name: 'Ketchup clásico', category: 'especias', qty: 0, unit: 'doypack (500g)', minQty: 1, icon: '🍅' },
  { id: 'ing-184', name: 'Salsa Barbacoa ahumada (BBQ)', category: 'especias', qty: 0, unit: 'frasco/pomo', minQty: 1, icon: '🍖' },
  { id: 'ing-30', name: 'Miel de Abejas pura', category: 'especias', qty: 0, unit: 'g', minQty: 250, icon: '🍯' },

  // ==========================================
  // 7. 🍷 BEBIDAS, CAVA & REFRESCOS (category: 'cava')
  // ==========================================
  { id: 'ing-185', name: 'Agua Mineral sin gas', category: 'cava', qty: 0, unit: 'pack/botella (2L)', minQty: 2, icon: '💧' },
  { id: 'ing-186', name: 'Agua con gas / Sifón de Soda', category: 'cava', qty: 0, unit: 'sifones/botellas', minQty: 2, icon: '🫧' },
  { id: 'ing-187', name: 'Gaseosa Cola (Común / Zero)', category: 'cava', qty: 0, unit: 'botella (2.25L)', minQty: 2, icon: '🥤' },
  { id: 'ing-188', name: 'Gaseosa Lima-Limón / Pomelo', category: 'cava', qty: 0, unit: 'botella (2.25L)', minQty: 1, icon: '🥤' },
  { id: 'ing-189', name: 'Jugo natural de Naranja / Manzana', category: 'cava', qty: 0, unit: 'litro', minQty: 1, icon: '🧃' },
  { id: 'ing-190', name: 'Agua Saborizada (Manzana / Pomelo)', category: 'cava', qty: 0, unit: 'botella (1.5L)', minQty: 1, icon: '🧃' },
  { id: 'ing-31', name: 'Vino Tinto Malbec de Guarda', category: 'cava', qty: 0, unit: 'botellas', minQty: 2, icon: '🍷' },
  { id: 'ing-191', name: 'Vino Tinto Cabernet Sauvignon / Blend', category: 'cava', qty: 0, unit: 'botellas', minQty: 1, icon: '🍷' },
  { id: 'ing-32', name: 'Vino Blanco Seco (Chardonnay / Sauvignon Blanc)', category: 'cava', qty: 0, unit: 'botellas', minQty: 2, icon: '🥂' },
  { id: 'ing-89', name: 'Vino Espumante / Champagne Extra Brut', category: 'cava', qty: 0, unit: 'botella', minQty: 1, icon: '🍾' },
  { id: 'ing-90', name: 'Cerveza Rubia / Lager / Pilsen', category: 'cava', qty: 0, unit: 'latas/porrones', minQty: 6, icon: '🍺' },
  { id: 'ing-192', name: 'Cerveza Artesanal IPA / Honey / Stout', category: 'cava', qty: 0, unit: 'latas', minQty: 4, icon: '🍺' },
  { id: 'ing-193', name: 'Fernet Branca', category: 'cava', qty: 0, unit: 'botella (750ml)', minQty: 1, icon: '🥃' },
  { id: 'ing-194', name: 'Gin para Gin Tonic', category: 'cava', qty: 0, unit: 'botella (750ml)', minQty: 1, icon: '🍸' },
  { id: 'ing-195', name: 'Agua Tónica en lata/botella', category: 'cava', qty: 0, unit: 'latas', minQty: 4, icon: '🫧' },
  { id: 'ing-196', name: 'Aperitivo (Aperol / Campari / Vermut Cinzano)', category: 'cava', qty: 0, unit: 'botella', minQty: 1, icon: '🍹' },

  // ==========================================
  // 8. 🧹 LIMPIEZA, HIGIENE & DESCARTABLES DE COCINA (category: 'alacena')
  // ==========================================
  { id: 'ing-197', name: 'Detergente para vajilla concentrado', category: 'alacena', qty: 0, unit: 'botella (750ml)', minQty: 1, icon: '🧼' },
  { id: 'ing-198', name: 'Esponjas de cocina doble cara', category: 'alacena', qty: 0, unit: 'pack (3 un)', minQty: 1, icon: '🧽' },
  { id: 'ing-199', name: 'Virulana / Esponja de acero inoxidable', category: 'alacena', qty: 0, unit: 'pack', minQty: 1, icon: '🧽' },
  { id: 'ing-200', name: 'Rollos de Cocina / Papel Absorbente', category: 'alacena', qty: 0, unit: 'pack (3 rollos)', minQty: 1, icon: '🧻' },
  { id: 'ing-201', name: 'Servilletas de papel', category: 'alacena', qty: 0, unit: 'paquete (100 un)', minQty: 1, icon: '🧻' },
  { id: 'ing-202', name: 'Papel Aluminio reforzado', category: 'alacena', qty: 0, unit: 'rollo (5m)', minQty: 1, icon: '🔘' },
  { id: 'ing-203', name: 'Film Transparente adherente', category: 'alacena', qty: 0, unit: 'rollo (30m)', minQty: 1, icon: '📦' },
  { id: 'ing-204', name: 'Papel Manteca / Para horno', category: 'alacena', qty: 0, unit: 'rollo/pliegos', minQty: 1, icon: '📜' },
  { id: 'ing-205', name: 'Bolsas de Residuo grandes para cocina', category: 'alacena', qty: 0, unit: 'paquete (20 un)', minQty: 1, icon: '🗑️' },
  { id: 'ing-206', name: 'Bolsas herméticas Ziploc para freezer', category: 'alacena', qty: 0, unit: 'caja (15 un)', minQty: 1, icon: '🧊' },
  { id: 'ing-207', name: 'Lavandina pura / desinfectante', category: 'alacena', qty: 0, unit: 'botella (1L)', minQty: 1, icon: '🧴' },
  { id: 'ing-208', name: 'Desengrasante para cocina / hornos', category: 'alacena', qty: 0, unit: 'gatillo (500ml)', minQty: 1, icon: '✨' },
  { id: 'ing-209', name: 'Jabón líquido para manos', category: 'alacena', qty: 0, unit: 'dosificador', minQty: 1, icon: '🧼' },
  { id: 'ing-210', name: 'Trapos rejilla / Repasadores absorbentes', category: 'alacena', qty: 0, unit: 'pack (2 un)', minQty: 1, icon: '🧽' },
  { id: 'ing-211', name: 'Fósforos / Encendedor de cocina', category: 'alacena', qty: 0, unit: 'caja/un', minQty: 1, icon: '🔥' }
];

// 👥 Usuarios por Defecto (Hell's Kitchen Community & Familia)
const DEFAULT_USERS = [
  {
    id: 'user-pato',
    name: 'Chef Pato',
    email: 'pato@hellskitchen.com',
    profession: 'Chef Ejecutivo / Creador',
    password: 'pato',
    avatar: '👨‍🍳',
    role: 'admin'
  },
  {
    id: 'user-joaco',
    name: 'Joaco',
    email: 'joaco@familia.com',
    profession: 'Hijo / Gourmet',
    password: '123',
    avatar: '👦',
    role: 'user'
  },
  {
    id: 'user-lucila',
    name: 'Lucila',
    email: 'lucila@familia.com',
    profession: 'Pareja / Chef de Postres',
    password: '123',
    avatar: '👩',
    role: 'user'
  }
];
const DEFAULT_FAMILY_USERS = DEFAULT_USERS; // Alias de compatibilidad

// 📅 Menú Semanal Inicial por Defecto (4 Comidas & Opciones por Miembro)
const DEFAULT_WEEKLY_MENU = {
  lunes: {
    desayuno: [
      { id: 'opt-l-d-1', userId: 'user-joaco', userName: 'Joaco', userAvatar: '👦', title: 'Tostadas con huevo revuelto y manteca', notes: 'Bien tostadas', ingredients: [{ name: 'Huevos de campo', qty: 2, unit: 'un' }, { name: 'Pan de Molde Blanco / Integral', qty: 2, unit: 'un' }, { name: 'Manteca de primera calidad', qty: 20, unit: 'g' }] },
      { id: 'opt-l-d-2', userId: 'user-lucila', userName: 'Lucila', userAvatar: '👩', title: 'Café con leche y galletitas de agua', notes: 'Con edulcorante', ingredients: [{ name: 'Café Molido / en Grano / Instantáneo', qty: 1, unit: 'paquete' }, { name: 'Leche entera / descremada', qty: 1, unit: 'litro' }, { name: 'Tostadas / Galletitas de Agua', qty: 1, unit: 'paquete' }] },
      { id: 'opt-l-d-3', userId: 'user-pato', userName: 'Chef Pato', userAvatar: '👨‍🍳', title: 'Omelette de queso y palta', notes: 'Con pimienta negra', ingredients: [{ name: 'Huevos de campo', qty: 3, unit: 'un' }, { name: 'Queso Mozzarella', qty: 100, unit: 'g' }, { name: 'Palta Hass', qty: 1, unit: 'un' }] }
    ],
    almuerzo: [
      { id: 'opt-l-a-1', userId: 'user-pato', userName: 'Familia', userAvatar: '👨‍🍳', recipeId: 'rec-1', title: 'Supremas de Pollo al Limón con Papas Rústicas', notes: 'Almuerzo familiar', ingredients: [] }
    ],
    merienda: [
      { id: 'opt-l-m-1', userId: 'user-joaco', userName: 'Joaco', userAvatar: '👦', title: 'Tostadas con dulce de leche y chocolatada', notes: '', ingredients: [{ name: 'Dulce de Leche Repostero / Colonial', qty: 1, unit: 'pote' }, { name: 'Pan de Molde Blanco / Integral', qty: 2, unit: 'un' }] },
      { id: 'opt-l-m-2', userId: 'user-lucila', userName: 'Lucila', userAvatar: '👩', title: 'Té con tostadas y queso crema', notes: 'Merienda liviana', ingredients: [{ name: 'Té en saquitos / Hebras variadas', qty: 1, unit: 'caja' }, { name: 'Queso Crema / Untable (tipo Casancrem)', qty: 1, unit: 'pote' }] }
    ],
    cena: [
      { id: 'opt-l-c-1', userId: 'user-pato', userName: 'Familia', userAvatar: '👨‍🍳', recipeId: 'rec-2', title: 'Ojo de Bife a la Manteca de Romero', notes: 'Cena a los fuegos', ingredients: [] }
    ]
  },
  martes: {
    desayuno: [
      { id: 'opt-m-d-1', userId: 'user-joaco', userName: 'Joaco', userAvatar: '👦', title: 'Avena con leche y banana', notes: '', ingredients: [{ name: 'Avena Arrollada gruesa/fina', qty: 50, unit: 'g' }, { name: 'Banana', qty: 2, unit: 'un' }] },
      { id: 'opt-m-d-2', userId: 'user-lucila', userName: 'Lucila', userAvatar: '👩', title: 'Yogur con arándanos y nueces', notes: 'Sin azúcar', ingredients: [{ name: 'Yogur Natural / Griego', qty: 1, unit: 'pote' }, { name: 'Arándanos frescos', qty: 125, unit: 'g' }, { name: 'Nueces, Almendras & Castañas', qty: 50, unit: 'g' }] }
    ],
    almuerzo: [
      { id: 'opt-m-a-1', userId: 'user-pato', userName: 'Familia', userAvatar: '👨‍🍳', recipeId: 'rec-3', title: 'Risotto Cremoso de Hongos y Parmesano', notes: '', ingredients: [] }
    ],
    merienda: [
      { id: 'opt-m-m-1', userId: 'user-joaco', userName: 'Joaco', userAvatar: '👦', title: 'Galletitas dulces para la tarde', notes: '', ingredients: [{ name: 'Galletitas dulces para merienda', qty: 1, unit: 'paquete' }] }
    ],
    cena: [
      { id: 'opt-m-c-1', userId: 'user-pato', userName: 'Familia', userAvatar: '👨‍🍳', recipeId: 'rec-6', title: 'Salmón Rosado con Espinacas a la Crema', notes: '', ingredients: [] }
    ]
  },
  miercoles: { desayuno: [], almuerzo: [], merienda: [], cena: [] },
  jueves: { desayuno: [], almuerzo: [], merienda: [], cena: [] },
  viernes: { desayuno: [], almuerzo: [], merienda: [], cena: [] },
  sabado: { desayuno: [], almuerzo: [], merienda: [], cena: [] },
  domingo: { desayuno: [], almuerzo: [], merienda: [], cena: [] }
};

const DEFAULT_WEEKLY_NOTES = {
  lunes: '🔥 Arranque de semana organizado',
  viernes: '🍕 ¡Viernes de pizzas caseras!',
  domingo: '🥩 Asado familiar al mediodía'
};

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
