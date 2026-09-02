// DATASET MAESTRO DE PATOS KITCHEN - HELL'S KITCHEN
// Actualizado con Catálogo Maestro de 502 Insumos y 123 Recetas Reales de Chef Anónimo

const MASTER_PANTRY_CATALOG = [
  {
    "id": "ing-1",
    "name": "Pechuga de Pollo",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 500,
    "icon": "🍗"
  },
  {
    "id": "ing-33",
    "name": "Pata Muslo de Pollo",
    "category": "carnes",
    "qty": 0,
    "unit": "un",
    "minQty": 2,
    "icon": "🍗"
  },
  {
    "id": "ing-101",
    "name": "Pollo Entero Limpio",
    "category": "carnes",
    "qty": 0,
    "unit": "un",
    "minQty": 1,
    "icon": "🍗"
  },
  {
    "id": "ing-102",
    "name": "Milanesas de Pollo / Supremas",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 500,
    "icon": "🍗"
  },
  {
    "id": "ing-103",
    "name": "Alitas de Pollo",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 500,
    "icon": "🍗"
  },
  {
    "id": "ing-2",
    "name": "Ojo de Bife / Bife de Chorizo",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 500,
    "icon": "🥩"
  },
  {
    "id": "ing-34",
    "name": "Lomo Vacuno",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 500,
    "icon": "🥩"
  },
  {
    "id": "ing-104",
    "name": "Vacío Vacuno",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 1000,
    "icon": "🥩"
  },
  {
    "id": "ing-105",
    "name": "Asado de Tira",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 1000,
    "icon": "🥩"
  },
  {
    "id": "ing-106",
    "name": "Entraña Fina",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 500,
    "icon": "🥩"
  },
  {
    "id": "ing-107",
    "name": "Matambre Vacuno",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 1000,
    "icon": "🥩"
  },
  {
    "id": "ing-108",
    "name": "Peceto Vacuno",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 1000,
    "icon": "🥩"
  },
  {
    "id": "ing-109",
    "name": "Colita de Cuadril",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 800,
    "icon": "🥩"
  },
  {
    "id": "ing-110",
    "name": "Nalga / Bola de Lomo (p/ Milanesas)",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 500,
    "icon": "🥩"
  },
  {
    "id": "ing-111",
    "name": "Milanesas de Carne preparadas",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 500,
    "icon": "🥩"
  },
  {
    "id": "ing-37",
    "name": "Carne Picada Especial",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 500,
    "icon": "🥩"
  },
  {
    "id": "ing-112",
    "name": "Ossobuco Vacuno",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 500,
    "icon": "🥩"
  },
  {
    "id": "ing-35",
    "name": "Bondiola de Cerdo",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 500,
    "icon": "🥩"
  },
  {
    "id": "ing-113",
    "name": "Costillitas / Pechito de Cerdo",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 500,
    "icon": "🥩"
  },
  {
    "id": "ing-114",
    "name": "Matambre de Cerdo",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 600,
    "icon": "🥩"
  },
  {
    "id": "ing-115",
    "name": "Solomillo de Cerdo",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 500,
    "icon": "🥩"
  },
  {
    "id": "ing-36",
    "name": "Panceta Ahumada",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 150,
    "icon": "🥓"
  },
  {
    "id": "ing-116",
    "name": "Chorizo Puro Cerdo",
    "category": "carnes",
    "qty": 0,
    "unit": "un",
    "minQty": 4,
    "icon": "🌭"
  },
  {
    "id": "ing-117",
    "name": "Morcilla Bombón / Criolla",
    "category": "carnes",
    "qty": 0,
    "unit": "un",
    "minQty": 4,
    "icon": "🌭"
  },
  {
    "id": "ing-38",
    "name": "Salmón Rosado Fresco",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 300,
    "icon": "🐟"
  },
  {
    "id": "ing-39",
    "name": "Filet de Merluza fresca",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 500,
    "icon": "🐟"
  },
  {
    "id": "ing-118",
    "name": "Filet de Abadejo / Lenguado",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 500,
    "icon": "🐟"
  },
  {
    "id": "ing-40",
    "name": "Langostinos Pelados y Desvenados",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 250,
    "icon": "🦐"
  },
  {
    "id": "ing-119",
    "name": "Tubos de Calamar / Rabas",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 400,
    "icon": "🦑"
  },
  {
    "id": "ing-120",
    "name": "Mejillones Pelados",
    "category": "carnes",
    "qty": 0,
    "unit": "g",
    "minQty": 250,
    "icon": "🦪"
  },
  {
    "id": "ing-3",
    "name": "Cebolla blanca",
    "category": "heladera",
    "qty": 0,
    "unit": "un",
    "minQty": 3,
    "icon": "🧅"
  },
  {
    "id": "ing-41",
    "name": "Cebolla Morada",
    "category": "heladera",
    "qty": 0,
    "unit": "un",
    "minQty": 2,
    "icon": "🧅"
  },
  {
    "id": "ing-4",
    "name": "Cebolla de Verdeo",
    "category": "heladera",
    "qty": 0,
    "unit": "un",
    "minQty": 2,
    "icon": "🌱"
  },
  {
    "id": "ing-42",
    "name": "Puerro",
    "category": "heladera",
    "qty": 0,
    "unit": "un",
    "minQty": 2,
    "icon": "🎋"
  },
  {
    "id": "ing-5",
    "name": "Ajo (Cabeza / Dientes)",
    "category": "heladera",
    "qty": 0,
    "unit": "cabezas",
    "minQty": 1,
    "icon": "🧄"
  },
  {
    "id": "ing-6",
    "name": "Papas medianas",
    "category": "heladera",
    "qty": 0,
    "unit": "kg",
    "minQty": 1,
    "icon": "🥔"
  },
  {
    "id": "ing-43",
    "name": "Batata / Camote",
    "category": "heladera",
    "qty": 0,
    "unit": "kg",
    "minQty": 1,
    "icon": "🍠"
  },
  {
    "id": "ing-44",
    "name": "Zanahoria",
    "category": "heladera",
    "qty": 0,
    "unit": "un",
    "minQty": 3,
    "icon": "🥕"
  },
  {
    "id": "ing-11",
    "name": "Morrón Rojo",
    "category": "heladera",
    "qty": 0,
    "unit": "un",
    "minQty": 2,
    "icon": "🫑"
  },
  {
    "id": "ing-45",
    "name": "Morrón Verde",
    "category": "heladera",
    "qty": 0,
    "unit": "un",
    "minQty": 1,
    "icon": "🫑"
  },
  {
    "id": "ing-121",
    "name": "Morrón Amarillo",
    "category": "heladera",
    "qty": 0,
    "unit": "un",
    "minQty": 1,
    "icon": "🫑"
  },
  {
    "id": "ing-46",
    "name": "Tomates frescos redondos / perita",
    "category": "heladera",
    "qty": 0,
    "unit": "kg",
    "minQty": 1,
    "icon": "🍅"
  },
  {
    "id": "ing-47",
    "name": "Tomates Cherry",
    "category": "heladera",
    "qty": 0,
    "unit": "g",
    "minQty": 250,
    "icon": "🍅"
  },
  {
    "id": "ing-122",
    "name": "Lechuga Mantecosa / Criolla",
    "category": "heladera",
    "qty": 0,
    "unit": "planta",
    "minQty": 1,
    "icon": "🥬"
  },
  {
    "id": "ing-49",
    "name": "Rúcula fresca",
    "category": "heladera",
    "qty": 0,
    "unit": "atado",
    "minQty": 1,
    "icon": "🥗"
  },
  {
    "id": "ing-48",
    "name": "Espinaca fresca",
    "category": "heladera",
    "qty": 0,
    "unit": "atado",
    "minQty": 1,
    "icon": "🥬"
  },
  {
    "id": "ing-123",
    "name": "Acelga fresca",
    "category": "heladera",
    "qty": 0,
    "unit": "atado",
    "minQty": 1,
    "icon": "🥬"
  },
  {
    "id": "ing-50",
    "name": "Palta Hass",
    "category": "heladera",
    "qty": 0,
    "unit": "un",
    "minQty": 2,
    "icon": "🥑"
  },
  {
    "id": "ing-51",
    "name": "Zucchini / Calabacín",
    "category": "heladera",
    "qty": 0,
    "unit": "un",
    "minQty": 2,
    "icon": "🥒"
  },
  {
    "id": "ing-52",
    "name": "Berenjena",
    "category": "heladera",
    "qty": 0,
    "unit": "un",
    "minQty": 2,
    "icon": "🍆"
  },
  {
    "id": "ing-124",
    "name": "Zapallito Verde / Redondo",
    "category": "heladera",
    "qty": 0,
    "unit": "kg",
    "minQty": 1,
    "icon": "🥒"
  },
  {
    "id": "ing-125",
    "name": "Calabaza Anco / Butternut",
    "category": "heladera",
    "qty": 0,
    "unit": "un",
    "minQty": 1,
    "icon": "🎃"
  },
  {
    "id": "ing-126",
    "name": "Brócoli fresco",
    "category": "heladera",
    "qty": 0,
    "unit": "un",
    "minQty": 1,
    "icon": "🥦"
  },
  {
    "id": "ing-127",
    "name": "Coliflor fresco",
    "category": "heladera",
    "qty": 0,
    "unit": "un",
    "minQty": 1,
    "icon": "🥦"
  },
  {
    "id": "ing-128",
    "name": "Pepino fresco",
    "category": "heladera",
    "qty": 0,
    "unit": "un",
    "minQty": 2,
    "icon": "🥒"
  },
  {
    "id": "ing-129",
    "name": "Champiñones / Portobellos frescos",
    "category": "heladera",
    "qty": 0,
    "unit": "g",
    "minQty": 200,
    "icon": "🍄"
  },
  {
    "id": "ing-53",
    "name": "Choclo fresco en mazorca",
    "category": "heladera",
    "qty": 0,
    "unit": "un",
    "minQty": 2,
    "icon": "🌽"
  },
  {
    "id": "ing-130",
    "name": "Repollo blanco / colorado",
    "category": "heladera",
    "qty": 0,
    "unit": "un",
    "minQty": 1,
    "icon": "🥬"
  },
  {
    "id": "ing-131",
    "name": "Espárragos frescos",
    "category": "heladera",
    "qty": 0,
    "unit": "atado",
    "minQty": 1,
    "icon": "🎋"
  },
  {
    "id": "ing-132",
    "name": "Jengibre fresco raíz",
    "category": "heladera",
    "qty": 0,
    "unit": "g",
    "minQty": 50,
    "icon": "🫚"
  },
  {
    "id": "ing-12",
    "name": "Limón / Lima",
    "category": "heladera",
    "qty": 0,
    "unit": "un",
    "minQty": 4,
    "icon": "🍋"
  },
  {
    "id": "ing-54",
    "name": "Naranja para jugo / mesa",
    "category": "heladera",
    "qty": 0,
    "unit": "kg",
    "minQty": 1,
    "icon": "🍊"
  },
  {
    "id": "ing-133",
    "name": "Pomelo rosado",
    "category": "heladera",
    "qty": 0,
    "unit": "un",
    "minQty": 2,
    "icon": "🍊"
  },
  {
    "id": "ing-55",
    "name": "Manzana roja / verde",
    "category": "heladera",
    "qty": 0,
    "unit": "kg",
    "minQty": 1,
    "icon": "🍎"
  },
  {
    "id": "ing-56",
    "name": "Banana",
    "category": "heladera",
    "qty": 0,
    "unit": "kg",
    "minQty": 1,
    "icon": "🍌"
  },
  {
    "id": "ing-134",
    "name": "Frutillas frescas",
    "category": "heladera",
    "qty": 0,
    "unit": "g",
    "minQty": 250,
    "icon": "🍓"
  },
  {
    "id": "ing-135",
    "name": "Arándanos frescos",
    "category": "heladera",
    "qty": 0,
    "unit": "g",
    "minQty": 125,
    "icon": "🫐"
  },
  {
    "id": "ing-136",
    "name": "Duraznos / Pelones",
    "category": "heladera",
    "qty": 0,
    "unit": "kg",
    "minQty": 1,
    "icon": "🍑"
  },
  {
    "id": "ing-137",
    "name": "Uvas sin semilla",
    "category": "heladera",
    "qty": 0,
    "unit": "g",
    "minQty": 500,
    "icon": "🍇"
  },
  {
    "id": "ing-7",
    "name": "Huevos de campo",
    "category": "heladera",
    "qty": 0,
    "unit": "maple/docena",
    "minQty": 6,
    "icon": "🥚"
  },
  {
    "id": "ing-57",
    "name": "Leche entera / descremada",
    "category": "heladera",
    "qty": 0,
    "unit": "sachet/litro",
    "minQty": 1,
    "icon": "🥛"
  },
  {
    "id": "ing-138",
    "name": "Leche vegetal (Almendras/Avena)",
    "category": "heladera",
    "qty": 0,
    "unit": "litro",
    "minQty": 1,
    "icon": "🥛"
  },
  {
    "id": "ing-10",
    "name": "Manteca de primera calidad",
    "category": "heladera",
    "qty": 0,
    "unit": "g",
    "minQty": 200,
    "icon": "🧈"
  },
  {
    "id": "ing-8",
    "name": "Crema de Leche",
    "category": "heladera",
    "qty": 0,
    "unit": "ml",
    "minQty": 250,
    "icon": "🥛"
  },
  {
    "id": "ing-9",
    "name": "Queso Parmesano / Reggianito para rallar",
    "category": "heladera",
    "qty": 0,
    "unit": "g",
    "minQty": 200,
    "icon": "🧀"
  },
  {
    "id": "ing-58",
    "name": "Queso Mozzarella",
    "category": "heladera",
    "qty": 0,
    "unit": "g",
    "minQty": 400,
    "icon": "🧀"
  },
  {
    "id": "ing-59",
    "name": "Queso Crema / Untable (tipo Casancrem)",
    "category": "heladera",
    "qty": 0,
    "unit": "pote (300g)",
    "minQty": 1,
    "icon": "🧀"
  },
  {
    "id": "ing-139",
    "name": "Queso Provolone / Provoleta",
    "category": "heladera",
    "qty": 0,
    "unit": "g",
    "minQty": 250,
    "icon": "🧀"
  },
  {
    "id": "ing-60",
    "name": "Queso Azul / Roquefort",
    "category": "heladera",
    "qty": 0,
    "unit": "g",
    "minQty": 150,
    "icon": "🧀"
  },
  {
    "id": "ing-140",
    "name": "Queso Gouda / Danbo en fetas",
    "category": "heladera",
    "qty": 0,
    "unit": "g",
    "minQty": 250,
    "icon": "🧀"
  },
  {
    "id": "ing-141",
    "name": "Queso Cremoso / Cuartirolo",
    "category": "heladera",
    "qty": 0,
    "unit": "g",
    "minQty": 400,
    "icon": "🧀"
  },
  {
    "id": "ing-61",
    "name": "Ricotta fresca magra",
    "category": "heladera",
    "qty": 0,
    "unit": "g",
    "minQty": 300,
    "icon": "🧀"
  },
  {
    "id": "ing-142",
    "name": "Yogur Natural / Griego",
    "category": "heladera",
    "qty": 0,
    "unit": "potes",
    "minQty": 2,
    "icon": "🥛"
  },
  {
    "id": "ing-75",
    "name": "Dulce de Leche Repostero / Colonial",
    "category": "heladera",
    "qty": 0,
    "unit": "g",
    "minQty": 400,
    "icon": "🍯"
  },
  {
    "id": "ing-13",
    "name": "Arroz Basmati / Jazmín",
    "category": "alacena",
    "qty": 0,
    "unit": "g",
    "minQty": 500,
    "icon": "🍚"
  },
  {
    "id": "ing-14",
    "name": "Arroz Carnaroli / Arborio (p/ Risotto)",
    "category": "alacena",
    "qty": 0,
    "unit": "g",
    "minQty": 500,
    "icon": "🌾"
  },
  {
    "id": "ing-62",
    "name": "Arroz Largo Fino / Doble Carolina",
    "category": "alacena",
    "qty": 0,
    "unit": "kg",
    "minQty": 1,
    "icon": "🌾"
  },
  {
    "id": "ing-15",
    "name": "Fideos Spaghetti / Tallarines",
    "category": "alacena",
    "qty": 0,
    "unit": "paquete (500g)",
    "minQty": 1,
    "icon": "🍝"
  },
  {
    "id": "ing-143",
    "name": "Fideos Cortos (Penne / Tirabuzón / Moñitos)",
    "category": "alacena",
    "qty": 0,
    "unit": "paquete (500g)",
    "minQty": 1,
    "icon": "🍝"
  },
  {
    "id": "ing-144",
    "name": "Fideos para Sopa / Municiones",
    "category": "alacena",
    "qty": 0,
    "unit": "paquete (500g)",
    "minQty": 1,
    "icon": "🍲"
  },
  {
    "id": "ing-63",
    "name": "Fideos de Arroz / Ramen",
    "category": "alacena",
    "qty": 0,
    "unit": "paquete",
    "minQty": 1,
    "icon": "🍜"
  },
  {
    "id": "ing-16",
    "name": "Harina de Trigo 0000",
    "category": "alacena",
    "qty": 0,
    "unit": "kg",
    "minQty": 1,
    "icon": "🌾"
  },
  {
    "id": "ing-145",
    "name": "Harina de Trigo 000",
    "category": "alacena",
    "qty": 0,
    "unit": "kg",
    "minQty": 1,
    "icon": "🌾"
  },
  {
    "id": "ing-64",
    "name": "Harina Leudante",
    "category": "alacena",
    "qty": 0,
    "unit": "kg",
    "minQty": 1,
    "icon": "🌾"
  },
  {
    "id": "ing-146",
    "name": "Harina Integral fina",
    "category": "alacena",
    "qty": 0,
    "unit": "kg",
    "minQty": 1,
    "icon": "🌾"
  },
  {
    "id": "ing-147",
    "name": "Almidón / Fécula de Maíz (Maizena)",
    "category": "alacena",
    "qty": 0,
    "unit": "g",
    "minQty": 250,
    "icon": "🌽"
  },
  {
    "id": "ing-148",
    "name": "Polenta instantánea / Harina de Maíz",
    "category": "alacena",
    "qty": 0,
    "unit": "g",
    "minQty": 500,
    "icon": "🌽"
  },
  {
    "id": "ing-65",
    "name": "Pan Rallado / Panko crujiente",
    "category": "alacena",
    "qty": 0,
    "unit": "g",
    "minQty": 500,
    "icon": "🥖"
  },
  {
    "id": "ing-66",
    "name": "Avena Arrollada gruesa/fina",
    "category": "alacena",
    "qty": 0,
    "unit": "g",
    "minQty": 500,
    "icon": "🥣"
  },
  {
    "id": "ing-67",
    "name": "Lentejas secas o en lata",
    "category": "alacena",
    "qty": 0,
    "unit": "g",
    "minQty": 400,
    "icon": "🍲"
  },
  {
    "id": "ing-68",
    "name": "Garbanzos secos o en lata",
    "category": "alacena",
    "qty": 0,
    "unit": "g",
    "minQty": 400,
    "icon": "🍲"
  },
  {
    "id": "ing-149",
    "name": "Porotos negros / alubia",
    "category": "alacena",
    "qty": 0,
    "unit": "g",
    "minQty": 400,
    "icon": "🍲"
  },
  {
    "id": "ing-19",
    "name": "Tomates Perita pelados en lata",
    "category": "alacena",
    "qty": 0,
    "unit": "latas",
    "minQty": 2,
    "icon": "🥫"
  },
  {
    "id": "ing-150",
    "name": "Puré de Tomate / Passata",
    "category": "alacena",
    "qty": 0,
    "unit": "cajas/botellas",
    "minQty": 2,
    "icon": "🥫"
  },
  {
    "id": "ing-69",
    "name": "Extracto de Tomate concentrado",
    "category": "alacena",
    "qty": 0,
    "unit": "tubo/lata",
    "minQty": 1,
    "icon": "🥫"
  },
  {
    "id": "ing-71",
    "name": "Atún en lata al natural / en aceite",
    "category": "alacena",
    "qty": 0,
    "unit": "latas",
    "minQty": 2,
    "icon": "🐟"
  },
  {
    "id": "ing-151",
    "name": "Caballa / Sardinas en lata",
    "category": "alacena",
    "qty": 0,
    "unit": "latas",
    "minQty": 1,
    "icon": "🐟"
  },
  {
    "id": "ing-152",
    "name": "Choclo amarillo en granos en lata",
    "category": "alacena",
    "qty": 0,
    "unit": "latas",
    "minQty": 2,
    "icon": "🌽"
  },
  {
    "id": "ing-153",
    "name": "Arvejas en lata",
    "category": "alacena",
    "qty": 0,
    "unit": "latas",
    "minQty": 2,
    "icon": "🥫"
  },
  {
    "id": "ing-154",
    "name": "Palmitos enteros en lata",
    "category": "alacena",
    "qty": 0,
    "unit": "lata",
    "minQty": 1,
    "icon": "🥫"
  },
  {
    "id": "ing-17",
    "name": "Leche de Coco cremosa",
    "category": "alacena",
    "qty": 0,
    "unit": "lata (400ml)",
    "minQty": 1,
    "icon": "🥥"
  },
  {
    "id": "ing-18",
    "name": "Hongos Secos de Pino / Portobello",
    "category": "alacena",
    "qty": 0,
    "unit": "g",
    "minQty": 50,
    "icon": "🍄"
  },
  {
    "id": "ing-70",
    "name": "Caldo en cubos (Verduras / Carne / Pollo)",
    "category": "alacena",
    "qty": 0,
    "unit": "cajas",
    "minQty": 1,
    "icon": "🍲"
  },
  {
    "id": "ing-20",
    "name": "Nueces, Almendras & Castañas",
    "category": "alacena",
    "qty": 0,
    "unit": "g",
    "minQty": 150,
    "icon": "🥜"
  },
  {
    "id": "ing-21",
    "name": "Chocolate Semiamargo 70% / Taza",
    "category": "alacena",
    "qty": 0,
    "unit": "g",
    "minQty": 200,
    "icon": "🍫"
  },
  {
    "id": "ing-72",
    "name": "Cacao Amargo en polvo 100%",
    "category": "alacena",
    "qty": 0,
    "unit": "g",
    "minQty": 150,
    "icon": "🍫"
  },
  {
    "id": "ing-22",
    "name": "Azúcar común blanca / Mascabo",
    "category": "alacena",
    "qty": 0,
    "unit": "kg",
    "minQty": 1,
    "icon": "🍬"
  },
  {
    "id": "ing-155",
    "name": "Edulcorante líquido / sobres",
    "category": "alacena",
    "qty": 0,
    "unit": "frasco",
    "minQty": 1,
    "icon": "🧪"
  },
  {
    "id": "ing-73",
    "name": "Polvo para Hornear / Bicarbonato",
    "category": "alacena",
    "qty": 0,
    "unit": "g",
    "minQty": 100,
    "icon": "🧁"
  },
  {
    "id": "ing-156",
    "name": "Levadura seca en sobre / fresca",
    "category": "alacena",
    "qty": 0,
    "unit": "sobres/cubos",
    "minQty": 2,
    "icon": "🍞"
  },
  {
    "id": "ing-74",
    "name": "Esencia de Vainilla natural",
    "category": "alacena",
    "qty": 0,
    "unit": "ml",
    "minQty": 50,
    "icon": "✨"
  },
  {
    "id": "ing-157",
    "name": "Café Molido / en Grano / Instantáneo",
    "category": "alacena",
    "qty": 0,
    "unit": "paquete (250g)",
    "minQty": 1,
    "icon": "☕"
  },
  {
    "id": "ing-158",
    "name": "Té en saquitos / Hebras variadas",
    "category": "alacena",
    "qty": 0,
    "unit": "caja",
    "minQty": 1,
    "icon": "🫖"
  },
  {
    "id": "ing-159",
    "name": "Yerba Mate con/sin palo",
    "category": "alacena",
    "qty": 0,
    "unit": "kg",
    "minQty": 1,
    "icon": "🧉"
  },
  {
    "id": "ing-160",
    "name": "Pan de Molde Blanco / Integral",
    "category": "alacena",
    "qty": 0,
    "unit": "paquete",
    "minQty": 1,
    "icon": "🍞"
  },
  {
    "id": "ing-161",
    "name": "Tostadas / Galletitas de Agua",
    "category": "alacena",
    "qty": 0,
    "unit": "paquete",
    "minQty": 1,
    "icon": "🥖"
  },
  {
    "id": "ing-162",
    "name": "Galletitas dulces para merienda",
    "category": "alacena",
    "qty": 0,
    "unit": "paquetes",
    "minQty": 2,
    "icon": "🍪"
  },
  {
    "id": "ing-163",
    "name": "Hielo en bolsa rolito",
    "category": "alacena",
    "qty": 0,
    "unit": "bolsa",
    "minQty": 1,
    "icon": "🧊"
  },
  {
    "id": "ing-164",
    "name": "Hamburguesas congeladas de carne/pollo",
    "category": "alacena",
    "qty": 0,
    "unit": "unidades",
    "minQty": 4,
    "icon": "🍔"
  },
  {
    "id": "ing-165",
    "name": "Medallones vegetarianos congelados",
    "category": "alacena",
    "qty": 0,
    "unit": "unidades",
    "minQty": 4,
    "icon": "🥗"
  },
  {
    "id": "ing-166",
    "name": "Papas Bastón prefritas congeladas",
    "category": "alacena",
    "qty": 0,
    "unit": "bolsa (750g)",
    "minQty": 1,
    "icon": "🍟"
  },
  {
    "id": "ing-167",
    "name": "Arvejas congeladas IQF",
    "category": "alacena",
    "qty": 0,
    "unit": "bolsa (300g)",
    "minQty": 1,
    "icon": "🫛"
  },
  {
    "id": "ing-168",
    "name": "Mix de Verduras congeladas (salteado/sopa)",
    "category": "alacena",
    "qty": 0,
    "unit": "bolsa (500g)",
    "minQty": 1,
    "icon": "🥦"
  },
  {
    "id": "ing-169",
    "name": "Espinaca / Acelga picada congelada",
    "category": "alacena",
    "qty": 0,
    "unit": "bolsa (500g)",
    "minQty": 1,
    "icon": "🥬"
  },
  {
    "id": "ing-170",
    "name": "Frutos Rojos congelados (Mix Berries)",
    "category": "alacena",
    "qty": 0,
    "unit": "bolsa (300g)",
    "minQty": 1,
    "icon": "🫐"
  },
  {
    "id": "ing-171",
    "name": "Tapas de Empanadas (Hojaldre / Criollas)",
    "category": "alacena",
    "qty": 0,
    "unit": "docena",
    "minQty": 1,
    "icon": "🥟"
  },
  {
    "id": "ing-172",
    "name": "Tapas de Tarta (Hojaldre / Pascualina)",
    "category": "alacena",
    "qty": 0,
    "unit": "pack (2 un)",
    "minQty": 1,
    "icon": "🥧"
  },
  {
    "id": "ing-173",
    "name": "Helado artesanal / pote",
    "category": "alacena",
    "qty": 0,
    "unit": "kg",
    "minQty": 1,
    "icon": "🍨"
  },
  {
    "id": "ing-23",
    "name": "Aceite de Oliva Extra Virgen",
    "category": "especias",
    "qty": 0,
    "unit": "ml",
    "minQty": 500,
    "icon": "🫒"
  },
  {
    "id": "ing-76",
    "name": "Aceite de Girasol / Maíz para cocinar",
    "category": "especias",
    "qty": 0,
    "unit": "litro",
    "minQty": 1,
    "icon": "🌻"
  },
  {
    "id": "ing-174",
    "name": "Aceite de Sésamo tostado",
    "category": "especias",
    "qty": 0,
    "unit": "ml",
    "minQty": 150,
    "icon": "🍾"
  },
  {
    "id": "ing-77",
    "name": "Aceto Balsámico di Modena",
    "category": "especias",
    "qty": 0,
    "unit": "ml",
    "minQty": 250,
    "icon": "🍾"
  },
  {
    "id": "ing-78",
    "name": "Vinagre de Alcohol / Manzana / Vino",
    "category": "especias",
    "qty": 0,
    "unit": "ml",
    "minQty": 500,
    "icon": "🍶"
  },
  {
    "id": "ing-28",
    "name": "Sal Fina & Sal Entrefina Parrillera",
    "category": "especias",
    "qty": 0,
    "unit": "paquete",
    "minQty": 1,
    "icon": "🧂"
  },
  {
    "id": "ing-175",
    "name": "Sal Gruesa marina para hervor",
    "category": "especias",
    "qty": 0,
    "unit": "paquete",
    "minQty": 1,
    "icon": "🧂"
  },
  {
    "id": "ing-176",
    "name": "Pimienta Negra en grano con molinillo",
    "category": "especias",
    "qty": 0,
    "unit": "molinillo",
    "minQty": 1,
    "icon": "🧂"
  },
  {
    "id": "ing-177",
    "name": "Pimienta Blanca molida",
    "category": "especias",
    "qty": 0,
    "unit": "g",
    "minQty": 30,
    "icon": "🧂"
  },
  {
    "id": "ing-79",
    "name": "Pimentón Dulce / Ahumado de Cachi",
    "category": "especias",
    "qty": 0,
    "unit": "g",
    "minQty": 50,
    "icon": "🌶️"
  },
  {
    "id": "ing-80",
    "name": "Ají Molido puro",
    "category": "especias",
    "qty": 0,
    "unit": "g",
    "minQty": 50,
    "icon": "🌶️"
  },
  {
    "id": "ing-81",
    "name": "Comino molido aromático",
    "category": "especias",
    "qty": 0,
    "unit": "g",
    "minQty": 30,
    "icon": "🌿"
  },
  {
    "id": "ing-24",
    "name": "Curry en polvo / Garam Masala",
    "category": "especias",
    "qty": 0,
    "unit": "g",
    "minQty": 50,
    "icon": "🌶️"
  },
  {
    "id": "ing-82",
    "name": "Orégano seco seleccionado",
    "category": "especias",
    "qty": 0,
    "unit": "g",
    "minQty": 50,
    "icon": "🌿"
  },
  {
    "id": "ing-25",
    "name": "Romero fresco o seco",
    "category": "especias",
    "qty": 0,
    "unit": "atado/frasco",
    "minQty": 1,
    "icon": "🌿"
  },
  {
    "id": "ing-83",
    "name": "Tomillo fresco o seco",
    "category": "especias",
    "qty": 0,
    "unit": "atado/frasco",
    "minQty": 1,
    "icon": "🌿"
  },
  {
    "id": "ing-26",
    "name": "Albahaca fresca en hojas",
    "category": "especias",
    "qty": 0,
    "unit": "planta/atado",
    "minQty": 1,
    "icon": "🍃"
  },
  {
    "id": "ing-84",
    "name": "Perejil fresco picado",
    "category": "especias",
    "qty": 0,
    "unit": "atado",
    "minQty": 1,
    "icon": "🌿"
  },
  {
    "id": "ing-85",
    "name": "Cilantro fresco",
    "category": "especias",
    "qty": 0,
    "unit": "atado",
    "minQty": 1,
    "icon": "🌿"
  },
  {
    "id": "ing-86",
    "name": "Hojas de Laurel secas",
    "category": "especias",
    "qty": 0,
    "unit": "paquete",
    "minQty": 1,
    "icon": "🍃"
  },
  {
    "id": "ing-178",
    "name": "Nuez Moscada entera/molida",
    "category": "especias",
    "qty": 0,
    "unit": "unidades",
    "minQty": 2,
    "icon": "🌰"
  },
  {
    "id": "ing-179",
    "name": "Canela molida y en rama",
    "category": "especias",
    "qty": 0,
    "unit": "g",
    "minQty": 30,
    "icon": "🪵"
  },
  {
    "id": "ing-180",
    "name": "Ajo en polvo & Cebolla en polvo",
    "category": "especias",
    "qty": 0,
    "unit": "frasco",
    "minQty": 1,
    "icon": "🧄"
  },
  {
    "id": "ing-27",
    "name": "Salsa de Soja Premium",
    "category": "especias",
    "qty": 0,
    "unit": "ml",
    "minQty": 250,
    "icon": "🍶"
  },
  {
    "id": "ing-87",
    "name": "Salsa Inglesa / Worcestershire",
    "category": "especias",
    "qty": 0,
    "unit": "ml",
    "minQty": 150,
    "icon": "🍶"
  },
  {
    "id": "ing-88",
    "name": "Salsa Picante (Sriracha / Tabasco)",
    "category": "especias",
    "qty": 0,
    "unit": "botella",
    "minQty": 1,
    "icon": "🌶️"
  },
  {
    "id": "ing-29",
    "name": "Mostaza Dijon / Antigua con granos",
    "category": "especias",
    "qty": 0,
    "unit": "frasco (200g)",
    "minQty": 1,
    "icon": "🍯"
  },
  {
    "id": "ing-181",
    "name": "Mostaza clásica tipo americana",
    "category": "especias",
    "qty": 0,
    "unit": "frasco/pomo",
    "minQty": 1,
    "icon": "🌭"
  },
  {
    "id": "ing-182",
    "name": "Mayonesa clásica",
    "category": "especias",
    "qty": 0,
    "unit": "doypack (500g)",
    "minQty": 1,
    "icon": "🍶"
  },
  {
    "id": "ing-183",
    "name": "Ketchup clásico",
    "category": "especias",
    "qty": 0,
    "unit": "doypack (500g)",
    "minQty": 1,
    "icon": "🍅"
  },
  {
    "id": "ing-184",
    "name": "Salsa Barbacoa ahumada (BBQ)",
    "category": "especias",
    "qty": 0,
    "unit": "frasco/pomo",
    "minQty": 1,
    "icon": "🍖"
  },
  {
    "id": "ing-30",
    "name": "Miel de Abejas pura",
    "category": "especias",
    "qty": 0,
    "unit": "g",
    "minQty": 250,
    "icon": "🍯"
  },
  {
    "id": "ing-185",
    "name": "Agua Mineral sin gas",
    "category": "cava",
    "qty": 0,
    "unit": "pack/botella (2L)",
    "minQty": 2,
    "icon": "💧"
  },
  {
    "id": "ing-186",
    "name": "Agua con gas / Sifón de Soda",
    "category": "cava",
    "qty": 0,
    "unit": "sifones/botellas",
    "minQty": 2,
    "icon": "🫧"
  },
  {
    "id": "ing-187",
    "name": "Gaseosa Cola (Común / Zero)",
    "category": "cava",
    "qty": 0,
    "unit": "botella (2.25L)",
    "minQty": 2,
    "icon": "🥤"
  },
  {
    "id": "ing-188",
    "name": "Gaseosa Lima-Limón / Pomelo",
    "category": "cava",
    "qty": 0,
    "unit": "botella (2.25L)",
    "minQty": 1,
    "icon": "🥤"
  },
  {
    "id": "ing-189",
    "name": "Jugo natural de Naranja / Manzana",
    "category": "cava",
    "qty": 0,
    "unit": "litro",
    "minQty": 1,
    "icon": "🧃"
  },
  {
    "id": "ing-190",
    "name": "Agua Saborizada (Manzana / Pomelo)",
    "category": "cava",
    "qty": 0,
    "unit": "botella (1.5L)",
    "minQty": 1,
    "icon": "🧃"
  },
  {
    "id": "ing-31",
    "name": "Vino Tinto Malbec de Guarda",
    "category": "cava",
    "qty": 0,
    "unit": "botellas",
    "minQty": 2,
    "icon": "🍷"
  },
  {
    "id": "ing-191",
    "name": "Vino Tinto Cabernet Sauvignon / Blend",
    "category": "cava",
    "qty": 0,
    "unit": "botellas",
    "minQty": 1,
    "icon": "🍷"
  },
  {
    "id": "ing-32",
    "name": "Vino Blanco Seco (Chardonnay / Sauvignon Blanc)",
    "category": "cava",
    "qty": 0,
    "unit": "botellas",
    "minQty": 2,
    "icon": "🥂"
  },
  {
    "id": "ing-89",
    "name": "Vino Espumante / Champagne Extra Brut",
    "category": "cava",
    "qty": 0,
    "unit": "botella",
    "minQty": 1,
    "icon": "🍾"
  },
  {
    "id": "ing-90",
    "name": "Cerveza Rubia / Lager / Pilsen",
    "category": "cava",
    "qty": 0,
    "unit": "latas/porrones",
    "minQty": 6,
    "icon": "🍺"
  },
  {
    "id": "ing-192",
    "name": "Cerveza Artesanal IPA / Honey / Stout",
    "category": "cava",
    "qty": 0,
    "unit": "latas",
    "minQty": 4,
    "icon": "🍺"
  },
  {
    "id": "ing-193",
    "name": "Fernet Branca",
    "category": "cava",
    "qty": 0,
    "unit": "botella (750ml)",
    "minQty": 1,
    "icon": "🥃"
  },
  {
    "id": "ing-194",
    "name": "Gin para Gin Tonic",
    "category": "cava",
    "qty": 0,
    "unit": "botella (750ml)",
    "minQty": 1,
    "icon": "🍸"
  },
  {
    "id": "ing-195",
    "name": "Agua Tónica en lata/botella",
    "category": "cava",
    "qty": 0,
    "unit": "latas",
    "minQty": 4,
    "icon": "🫧"
  },
  {
    "id": "ing-196",
    "name": "Aperitivo (Aperol / Campari / Vermut Cinzano)",
    "category": "cava",
    "qty": 0,
    "unit": "botella",
    "minQty": 1,
    "icon": "🍹"
  },
  {
    "id": "ing-197",
    "name": "Detergente para vajilla concentrado",
    "category": "alacena",
    "qty": 0,
    "unit": "botella (750ml)",
    "minQty": 1,
    "icon": "🧼"
  },
  {
    "id": "ing-198",
    "name": "Esponjas de cocina doble cara",
    "category": "alacena",
    "qty": 0,
    "unit": "pack (3 un)",
    "minQty": 1,
    "icon": "🧽"
  },
  {
    "id": "ing-199",
    "name": "Virulana / Esponja de acero inoxidable",
    "category": "alacena",
    "qty": 0,
    "unit": "pack",
    "minQty": 1,
    "icon": "🧽"
  },
  {
    "id": "ing-200",
    "name": "Rollos de Cocina / Papel Absorbente",
    "category": "alacena",
    "qty": 0,
    "unit": "pack (3 rollos)",
    "minQty": 1,
    "icon": "🧻"
  },
  {
    "id": "ing-201",
    "name": "Servilletas de papel",
    "category": "alacena",
    "qty": 0,
    "unit": "paquete (100 un)",
    "minQty": 1,
    "icon": "🧻"
  },
  {
    "id": "ing-202",
    "name": "Papel Aluminio reforzado",
    "category": "alacena",
    "qty": 0,
    "unit": "rollo (5m)",
    "minQty": 1,
    "icon": "🔘"
  },
  {
    "id": "ing-203",
    "name": "Film Transparente adherente",
    "category": "alacena",
    "qty": 0,
    "unit": "rollo (30m)",
    "minQty": 1,
    "icon": "📦"
  },
  {
    "id": "ing-204",
    "name": "Papel Manteca / Para horno",
    "category": "alacena",
    "qty": 0,
    "unit": "rollo/pliegos",
    "minQty": 1,
    "icon": "📜"
  },
  {
    "id": "ing-205",
    "name": "Bolsas de Residuo grandes para cocina",
    "category": "alacena",
    "qty": 0,
    "unit": "paquete (20 un)",
    "minQty": 1,
    "icon": "🗑️"
  },
  {
    "id": "ing-206",
    "name": "Bolsas herméticas Ziploc para freezer",
    "category": "alacena",
    "qty": 0,
    "unit": "caja (15 un)",
    "minQty": 1,
    "icon": "🧊"
  },
  {
    "id": "ing-207",
    "name": "Lavandina pura / desinfectante",
    "category": "alacena",
    "qty": 0,
    "unit": "botella (1L)",
    "minQty": 1,
    "icon": "🧴"
  },
  {
    "id": "ing-208",
    "name": "Desengrasante para cocina / hornos",
    "category": "alacena",
    "qty": 0,
    "unit": "gatillo (500ml)",
    "minQty": 1,
    "icon": "✨"
  },
  {
    "id": "ing-209",
    "name": "Jabón líquido para manos",
    "category": "alacena",
    "qty": 0,
    "unit": "dosificador",
    "minQty": 1,
    "icon": "🧼"
  },
  {
    "id": "ing-210",
    "name": "Trapos rejilla / Repasadores absorbentes",
    "category": "alacena",
    "qty": 0,
    "unit": "pack (2 un)",
    "minQty": 1,
    "icon": "🧽"
  },
  {
    "id": "ing-211",
    "name": "Fósforos / Encendedor de cocina",
    "category": "alacena",
    "qty": 0,
    "unit": "caja/un",
    "minQty": 1,
    "icon": "🔥"
  },
  {
    "id": "ing-202",
    "name": "Ground Beef",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-203",
    "name": "Ajo",
    "category": "heladera",
    "unit": "dientes",
    "icon": "🧄",
    "minQty": 1
  },
  {
    "id": "ing-204",
    "name": "Cebolla",
    "category": "heladera",
    "unit": "un",
    "icon": "🧅",
    "minQty": 1
  },
  {
    "id": "ing-205",
    "name": "Pimienta Negra Molida",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 100
  },
  {
    "id": "ing-206",
    "name": "Plum Tomatoes",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-207",
    "name": "Perejil Fresco",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 100
  },
  {
    "id": "ing-208",
    "name": "Agua Filtrada",
    "category": "alacena",
    "unit": "ml",
    "icon": "💧",
    "minQty": 100
  },
  {
    "id": "ing-209",
    "name": "Corn Arepa Filled With Mozarella Cheese",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 50
  },
  {
    "id": "ing-210",
    "name": "Black Beans",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-211",
    "name": "Pico De Gallo Sauce",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-212",
    "name": "Shredded Meat",
    "category": "carnes",
    "unit": "g",
    "icon": "🥩",
    "minQty": 50
  },
  {
    "id": "ing-213",
    "name": "Comino Molido",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 100
  },
  {
    "id": "ing-214",
    "name": "Pimentón Dulce",
    "category": "especias",
    "unit": "g",
    "icon": "🌶️",
    "minQty": 100
  },
  {
    "id": "ing-215",
    "name": "Caldo de Carne Casero",
    "category": "alacena",
    "unit": "ml",
    "icon": "🍲",
    "minQty": 100
  },
  {
    "id": "ing-216",
    "name": "Extra Virgin Olive Oil",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-217",
    "name": "Mixed Beef Cuts",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-218",
    "name": "Lean Minced Steak",
    "category": "carnes",
    "unit": "g",
    "icon": "🥩",
    "minQty": 50
  },
  {
    "id": "ing-219",
    "name": "Cooked Beetroot",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-220",
    "name": "Naan Bread",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-221",
    "name": "Rocket",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-222",
    "name": "Soured cream and chive dip",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 50
  },
  {
    "id": "ing-223",
    "name": "Pigs Trotters",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-224",
    "name": "Oxtail",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-225",
    "name": "Lime juice",
    "category": "cava",
    "unit": "ml",
    "icon": "🍷",
    "minQty": 1
  },
  {
    "id": "ing-226",
    "name": "Scotch Bonnet",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-227",
    "name": "Cinnamon Stick",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-228",
    "name": "Cloves",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-229",
    "name": "Azúcar Blanco",
    "category": "alacena",
    "unit": "g",
    "icon": "🍬",
    "minQty": 100
  },
  {
    "id": "ing-230",
    "name": "Albahaca Fresca",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 100
  },
  {
    "id": "ing-231",
    "name": "Tomillo",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 100
  },
  {
    "id": "ing-232",
    "name": "Salsa de Soja",
    "category": "alacena",
    "unit": "ml",
    "icon": "🥢",
    "minQty": 100
  },
  {
    "id": "ing-233",
    "name": "Dry sherry",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-234",
    "name": "Cornstarch",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-235",
    "name": "Sirloin steak",
    "category": "carnes",
    "unit": "g",
    "icon": "🥩",
    "minQty": 50
  },
  {
    "id": "ing-236",
    "name": "Oyster Sauce",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-237",
    "name": "Caldo de Verduras Casero",
    "category": "alacena",
    "unit": "ml",
    "icon": "🍲",
    "minQty": 100
  },
  {
    "id": "ing-238",
    "name": "Broccoli",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-239",
    "name": "High Heat Cooking Oil",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-240",
    "name": "Plain Flour",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-241",
    "name": "Rapeseed Oil",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 50
  },
  {
    "id": "ing-242",
    "name": "Vino Malbec Reserva",
    "category": "cava",
    "unit": "ml",
    "icon": "🍷",
    "minQty": 100
  },
  {
    "id": "ing-243",
    "name": "Mostaza Dijon",
    "category": "alacena",
    "unit": "g",
    "icon": "🟡",
    "minQty": 100
  },
  {
    "id": "ing-244",
    "name": "Egg Yolks",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-245",
    "name": "Puff Pastry",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-246",
    "name": "Green Beans",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-247",
    "name": "Shallots",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-248",
    "name": "Bay Leaf",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-249",
    "name": "Corn Flour",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-250",
    "name": "Oysters",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-251",
    "name": "Beef Stock Concentrate",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-252",
    "name": "Tomato Puree",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-253",
    "name": "White Wine Vinegar",
    "category": "cava",
    "unit": "ml",
    "icon": "🍷",
    "minQty": 1
  },
  {
    "id": "ing-254",
    "name": "Limón",
    "category": "heladera",
    "unit": "un",
    "icon": "🍋",
    "minQty": 1
  },
  {
    "id": "ing-255",
    "name": "Puré de Tomate",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 100
  },
  {
    "id": "ing-256",
    "name": "Chicken Breasts",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-257",
    "name": "Hotsauce",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-258",
    "name": "Lemon Juice",
    "category": "cava",
    "unit": "ml",
    "icon": "🍷",
    "minQty": 1
  },
  {
    "id": "ing-259",
    "name": "Buns",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-260",
    "name": "Cabbage",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-261",
    "name": "Mayonesa",
    "category": "heladera",
    "unit": "g",
    "icon": "🥣",
    "minQty": 100
  },
  {
    "id": "ing-262",
    "name": "Crema Ácida",
    "category": "heladera",
    "unit": "g",
    "icon": "🥛",
    "minQty": 100
  },
  {
    "id": "ing-263",
    "name": "Lettuce",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-264",
    "name": "Challots",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-265",
    "name": "Jengibre Fresco",
    "category": "heladera",
    "unit": "g",
    "icon": "🫚",
    "minQty": 100
  },
  {
    "id": "ing-266",
    "name": "Garlic Clove",
    "category": "heladera",
    "unit": "un",
    "icon": "🥦",
    "minQty": 1
  },
  {
    "id": "ing-267",
    "name": "Cayenne Pepper",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 50
  },
  {
    "id": "ing-268",
    "name": "Turmeric",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-269",
    "name": "Coriander",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-270",
    "name": "Fennel",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-271",
    "name": "Tamarind Paste",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-272",
    "name": "Coconut Milk",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 50
  },
  {
    "id": "ing-273",
    "name": "Chicken Legs",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-274",
    "name": "Leek",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-275",
    "name": "Celery",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-276",
    "name": "Papas",
    "category": "heladera",
    "unit": "g",
    "icon": "🥔",
    "minQty": 100
  },
  {
    "id": "ing-277",
    "name": "Romero Fresco",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 100
  },
  {
    "id": "ing-278",
    "name": "Unsalted Butter",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 50
  },
  {
    "id": "ing-279",
    "name": "Ginger Garlic Paste",
    "category": "heladera",
    "unit": "un",
    "icon": "🥦",
    "minQty": 1
  },
  {
    "id": "ing-280",
    "name": "Curry Powder",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 50
  },
  {
    "id": "ing-281",
    "name": "Ground Cumin",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-282",
    "name": "Red Potatoes",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-283",
    "name": "Onions",
    "category": "heladera",
    "unit": "un",
    "icon": "🥦",
    "minQty": 1
  },
  {
    "id": "ing-284",
    "name": "Allspice",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 50
  },
  {
    "id": "ing-285",
    "name": "Vegetable Oil",
    "category": "heladera",
    "unit": "un",
    "icon": "🥦",
    "minQty": 1
  },
  {
    "id": "ing-286",
    "name": "Pickle Juice",
    "category": "cava",
    "unit": "ml",
    "icon": "🍷",
    "minQty": 1
  },
  {
    "id": "ing-287",
    "name": "Icing Sugar",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-288",
    "name": "Garlic Powder",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 50
  },
  {
    "id": "ing-289",
    "name": "Arroz Doble Carolina",
    "category": "alacena",
    "unit": "g",
    "icon": "🌾",
    "minQty": 100
  },
  {
    "id": "ing-290",
    "name": "Champiñones Frescos",
    "category": "heladera",
    "unit": "g",
    "icon": "🍄",
    "minQty": 100
  },
  {
    "id": "ing-291",
    "name": "Chicken Stock Cube",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-292",
    "name": "Nutmeg",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-293",
    "name": "Mustard Powder",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 50
  },
  {
    "id": "ing-294",
    "name": "Sweetcorn",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-295",
    "name": "Squash",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-296",
    "name": "Red pepper flakes",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 50
  },
  {
    "id": "ing-297",
    "name": "Queso Parmesano",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 100
  },
  {
    "id": "ing-298",
    "name": "Bowtie pasta",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-299",
    "name": "Shortening",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-300",
    "name": "Jerk",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-301",
    "name": "Brussels Sprouts",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-302",
    "name": "Pork belly slices",
    "category": "carnes",
    "unit": "g",
    "icon": "🥩",
    "minQty": 50
  },
  {
    "id": "ing-303",
    "name": "Black Pudding",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-304",
    "name": "Bacon lardon",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-305",
    "name": "Chilli Flakes",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-306",
    "name": "Dried white beans",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-307",
    "name": "Paella Rice",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-308",
    "name": "Pork Shoulder",
    "category": "carnes",
    "unit": "g",
    "icon": "🥩",
    "minQty": 50
  },
  {
    "id": "ing-309",
    "name": "Jasmine Rice",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-310",
    "name": "Pepino",
    "category": "heladera",
    "unit": "un",
    "icon": "🥒",
    "minQty": 1
  },
  {
    "id": "ing-311",
    "name": "Cilantro Leaves",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-312",
    "name": "White Bread Mix",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-313",
    "name": "Sunflower Oil",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-314",
    "name": "Clear Honey",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-315",
    "name": "Barbeque Sauce",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-316",
    "name": "Tomato Ketchup",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-317",
    "name": "Sausages",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-318",
    "name": "Beer",
    "category": "cava",
    "unit": "ml",
    "icon": "🍷",
    "minQty": 1
  },
  {
    "id": "ing-319",
    "name": "Whole Milk",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 50
  },
  {
    "id": "ing-320",
    "name": "Kielbasa",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-321",
    "name": "Sauerkraut",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-322",
    "name": "Marjoram",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-323",
    "name": "Caraway Seed",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 50
  },
  {
    "id": "ing-324",
    "name": "Diced Tomatoes",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-325",
    "name": "Worcestershire Sauce",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-326",
    "name": "Egg White",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-327",
    "name": "Bicarbonate Of Soda",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-328",
    "name": "Cherry Tomatoes",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-329",
    "name": "Bryndza cheese",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 50
  },
  {
    "id": "ing-330",
    "name": "Chives",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-331",
    "name": "Morning Glory",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-332",
    "name": "Minced Pork",
    "category": "carnes",
    "unit": "g",
    "icon": "🥩",
    "minQty": 50
  },
  {
    "id": "ing-333",
    "name": "Soya Bean",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-334",
    "name": "Fish Sauce",
    "category": "carnes",
    "unit": "g",
    "icon": "🥩",
    "minQty": 50
  },
  {
    "id": "ing-335",
    "name": "Romano Pepper",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 50
  },
  {
    "id": "ing-336",
    "name": "Lamb Mince",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-337",
    "name": "Red Pepper Paste",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 50
  },
  {
    "id": "ing-338",
    "name": "Pul Biber",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-339",
    "name": "Chili Powder",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 50
  },
  {
    "id": "ing-340",
    "name": "Lamb Loin Chops",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-341",
    "name": "Freekeh",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-342",
    "name": "Ground Cinnamon",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-343",
    "name": "Mint",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-344",
    "name": "Chickpeas",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-345",
    "name": "Whole black peppercorns",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 50
  },
  {
    "id": "ing-346",
    "name": "Lamb Leg",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-347",
    "name": "Sweet Peppadew Peppers",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 50
  },
  {
    "id": "ing-348",
    "name": "Pita Bread",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-349",
    "name": "Aubergine",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-350",
    "name": "Greek Yogurt",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 50
  },
  {
    "id": "ing-351",
    "name": "Fries",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-352",
    "name": "Doner Meat",
    "category": "carnes",
    "unit": "g",
    "icon": "🥩",
    "minQty": 50
  },
  {
    "id": "ing-353",
    "name": "Garlic sauce",
    "category": "heladera",
    "unit": "un",
    "icon": "🥦",
    "minQty": 1
  },
  {
    "id": "ing-354",
    "name": "Gouda cheese",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 50
  },
  {
    "id": "ing-355",
    "name": "Dill",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-356",
    "name": "Lamb Fat",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-357",
    "name": "Saffron",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-358",
    "name": "Garlic Bulb",
    "category": "heladera",
    "unit": "un",
    "icon": "🥦",
    "minQty": 1
  },
  {
    "id": "ing-359",
    "name": "Chilli Sauce",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-360",
    "name": "Black Eyed Peas",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-361",
    "name": "Green Chilli",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-362",
    "name": "Chilli Powder",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 50
  },
  {
    "id": "ing-363",
    "name": "Baking Powder",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 50
  },
  {
    "id": "ing-364",
    "name": "Red Chilli",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-365",
    "name": "Raw tiger prawns",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-366",
    "name": "Fish fillet",
    "category": "carnes",
    "unit": "g",
    "icon": "🥩",
    "minQty": 50
  },
  {
    "id": "ing-367",
    "name": "Red Curry Paste",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-368",
    "name": "Brown Sugar",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-369",
    "name": "Kaffir Lime Leaves",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-370",
    "name": "Raw King Prawns",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-371",
    "name": "Seafood stock",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-372",
    "name": "Squid",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-373",
    "name": "Coconut Oil",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-374",
    "name": "Black Olives",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-375",
    "name": "Salt Cod",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-376",
    "name": "Tobasco Sauce",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-377",
    "name": "Rice Noodles",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-378",
    "name": "Peanut Butter",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 50
  },
  {
    "id": "ing-379",
    "name": "Bean Sprouts",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-380",
    "name": "White Fish",
    "category": "carnes",
    "unit": "g",
    "icon": "🥩",
    "minQty": 50
  },
  {
    "id": "ing-381",
    "name": "Daikon Radish",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-382",
    "name": "Barramundi",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-383",
    "name": "Cajun",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-384",
    "name": "Flour tortilla",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-385",
    "name": "Linguine Pasta",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-386",
    "name": "Sugar Snap Peas",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-387",
    "name": "Basil Leaves",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-388",
    "name": "Fromage Frais",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-389",
    "name": "Caster Sugar",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-390",
    "name": "Fettuccine",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-391",
    "name": "Clotted Cream",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 50
  },
  {
    "id": "ing-392",
    "name": "Macaroni",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-393",
    "name": "Kosher salt",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-394",
    "name": "Monterey Jack Cheese",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 50
  },
  {
    "id": "ing-395",
    "name": "Queso Cheddar",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 100
  },
  {
    "id": "ing-396",
    "name": "Colby Jack Cheese",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 50
  },
  {
    "id": "ing-397",
    "name": "Chopped Onion",
    "category": "heladera",
    "unit": "un",
    "icon": "🥦",
    "minQty": 1
  },
  {
    "id": "ing-398",
    "name": "Dried Oregano",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-399",
    "name": "Chopped Tomatoes",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-400",
    "name": "Masa para Lasaña",
    "category": "alacena",
    "unit": "g",
    "icon": "🍝",
    "minQty": 100
  },
  {
    "id": "ing-401",
    "name": "Creme Fraiche",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-402",
    "name": "Mozzarella Balls",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-403",
    "name": "Ground Onion",
    "category": "heladera",
    "unit": "un",
    "icon": "🥦",
    "minQty": 1
  },
  {
    "id": "ing-404",
    "name": "Pan Rallado",
    "category": "alacena",
    "unit": "g",
    "icon": "🍞",
    "minQty": 100
  },
  {
    "id": "ing-405",
    "name": "Evaporated Milk",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 50
  },
  {
    "id": "ing-406",
    "name": "Raisins",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-407",
    "name": "Esencia de Vainilla",
    "category": "alacena",
    "unit": "ml",
    "icon": "🍨",
    "minQty": 100
  },
  {
    "id": "ing-408",
    "name": "Pilchards",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-409",
    "name": "Pecorino",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-410",
    "name": "Granulated Sugar",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-411",
    "name": "Cardamom",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-412",
    "name": "Buttermilk",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 50
  },
  {
    "id": "ing-413",
    "name": "Powdered Sugar",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 50
  },
  {
    "id": "ing-414",
    "name": "Raspberry Jam",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-415",
    "name": "All purpose flour",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-416",
    "name": "Lemon Zest",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-417",
    "name": "Desiccated Coconut",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-418",
    "name": "Porridge oats",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-419",
    "name": "Golden Syrup",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-420",
    "name": "Braeburn Apples",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-421",
    "name": "Demerara Sugar",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-422",
    "name": "Blackberries",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-423",
    "name": "Ice Cream",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 50
  },
  {
    "id": "ing-424",
    "name": "Self-raising Flour",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-425",
    "name": "Melted Butter",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 50
  },
  {
    "id": "ing-426",
    "name": "Ground Sugar",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-427",
    "name": "Digestive biscuits",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-428",
    "name": "Bramley apples",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-429",
    "name": "Free-range eggs, beaten",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-430",
    "name": "Ground almonds",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-431",
    "name": "Almond extract",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-432",
    "name": "Flaked almonds",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-433",
    "name": "Sour Milk",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 50
  },
  {
    "id": "ing-434",
    "name": "Cold Water",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-435",
    "name": "Mascarpone",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-436",
    "name": "Orange Blossom Water",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-437",
    "name": "Meringue Nests",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-438",
    "name": "Apricot",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-439",
    "name": "Turkish Delight",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-440",
    "name": "Ground Pork",
    "category": "carnes",
    "unit": "g",
    "icon": "🥩",
    "minQty": 50
  },
  {
    "id": "ing-441",
    "name": "Scallions",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-442",
    "name": "Rice Vinegar",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-443",
    "name": "Egg Roll Wrappers",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-444",
    "name": "Duck Sauce",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-445",
    "name": "Plum Sauce",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-446",
    "name": "Jalapeno",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-447",
    "name": "Semolina",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-448",
    "name": "Cornmeal",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-449",
    "name": "Queso Fresco",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-450",
    "name": "Maple Syrup",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-451",
    "name": "Sesame Seed",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 50
  },
  {
    "id": "ing-452",
    "name": "Warm Water",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-453",
    "name": "Egg Plants",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-454",
    "name": "Tahini",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-455",
    "name": "Yeast",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-456",
    "name": "Almond Essence",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-457",
    "name": "Yuca",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-458",
    "name": "Ground Black Pepper",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 50
  },
  {
    "id": "ing-459",
    "name": "Padron peppers",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 50
  },
  {
    "id": "ing-460",
    "name": "Sea Salt",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-461",
    "name": "Cider Vinegar",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-462",
    "name": "Bay Leaves",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-463",
    "name": "Courgettes",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-464",
    "name": "Frozen Peas",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-465",
    "name": "Raw Vegetables",
    "category": "heladera",
    "unit": "un",
    "icon": "🥦",
    "minQty": 1
  },
  {
    "id": "ing-466",
    "name": "Baguette",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-467",
    "name": "Hummus",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-468",
    "name": "Tempeh",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-469",
    "name": "Coco sugar",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-470",
    "name": "Flax eggs",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-471",
    "name": "Almond milk",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 50
  },
  {
    "id": "ing-472",
    "name": "Green red lentils",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-473",
    "name": "Vegan butter",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 50
  },
  {
    "id": "ing-474",
    "name": "Soya milk",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 50
  },
  {
    "id": "ing-475",
    "name": "Tinned Tomatos",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-476",
    "name": "Walnuts",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-477",
    "name": "Couscous",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-478",
    "name": "Goats Cheese",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 50
  },
  {
    "id": "ing-479",
    "name": "Natural Yoghurt",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-480",
    "name": "Baby New Potatoes",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-481",
    "name": "Cumin Seeds",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 50
  },
  {
    "id": "ing-482",
    "name": "Tortillas",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-483",
    "name": "Cannellini Beans",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-484",
    "name": "Callaloo",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-485",
    "name": "Pumpkin",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-486",
    "name": "Buckwheat Flour",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-487",
    "name": "Vanilla sugar",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-488",
    "name": "Cream Cheese",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 50
  },
  {
    "id": "ing-489",
    "name": "Strawberries",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-490",
    "name": "Raspberries",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-491",
    "name": "Baked Beans",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-492",
    "name": "Grits",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-493",
    "name": "Achiote Seeds",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 50
  },
  {
    "id": "ing-494",
    "name": "Habanero Pepper",
    "category": "especias",
    "unit": "g",
    "icon": "🌿",
    "minQty": 50
  },
  {
    "id": "ing-495",
    "name": "Butter Beans",
    "category": "heladera",
    "unit": "g",
    "icon": "🧀",
    "minQty": 50
  },
  {
    "id": "ing-496",
    "name": "Black Treacle",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-497",
    "name": "English Mustard",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-498",
    "name": "Kale",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-499",
    "name": "Duck Legs",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-500",
    "name": "French Lentils",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-501",
    "name": "Tarragon Leaves",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  },
  {
    "id": "ing-502",
    "name": "Gruyère",
    "category": "alacena",
    "unit": "g",
    "icon": "🥫",
    "minQty": 50
  }
];

const DEFAULT_WEEKLY_MENU = {
  "lunes": {
    "desayuno": [
      {
        "id": "opt-l-d-1",
        "userId": "user-joaco",
        "userName": "Joaco",
        "userAvatar": "👦",
        "title": "Tostadas con huevo revuelto y manteca",
        "notes": "Bien tostadas",
        "ingredients": [
          {
            "name": "Huevos de campo",
            "qty": 2,
            "unit": "un"
          },
          {
            "name": "Pan de Molde Blanco / Integral",
            "qty": 2,
            "unit": "un"
          },
          {
            "name": "Manteca de primera calidad",
            "qty": 20,
            "unit": "g"
          }
        ]
      },
      {
        "id": "opt-l-d-2",
        "userId": "user-lucila",
        "userName": "Lucila",
        "userAvatar": "👩",
        "title": "Café con leche y galletitas de agua",
        "notes": "Con edulcorante",
        "ingredients": [
          {
            "name": "Café Molido / en Grano / Instantáneo",
            "qty": 1,
            "unit": "paquete"
          },
          {
            "name": "Leche entera / descremada",
            "qty": 1,
            "unit": "litro"
          },
          {
            "name": "Tostadas / Galletitas de Agua",
            "qty": 1,
            "unit": "paquete"
          }
        ]
      },
      {
        "id": "opt-l-d-3",
        "userId": "user-pato",
        "userName": "Chef Pato",
        "userAvatar": "👨‍🍳",
        "title": "Omelette de queso y palta",
        "notes": "Con pimienta negra",
        "ingredients": [
          {
            "name": "Huevos de campo",
            "qty": 3,
            "unit": "un"
          },
          {
            "name": "Queso Mozzarella",
            "qty": 100,
            "unit": "g"
          },
          {
            "name": "Palta Hass",
            "qty": 1,
            "unit": "un"
          }
        ]
      }
    ],
    "almuerzo": [
      {
        "id": "opt-l-a-1",
        "userId": "user-pato",
        "userName": "Familia",
        "userAvatar": "👨‍🍳",
        "recipeId": "rec-1",
        "title": "Supremas de Pollo al Limón con Papas Rústicas",
        "notes": "Almuerzo familiar",
        "ingredients": []
      }
    ],
    "merienda": [
      {
        "id": "opt-l-m-1",
        "userId": "user-joaco",
        "userName": "Joaco",
        "userAvatar": "👦",
        "title": "Tostadas con dulce de leche y chocolatada",
        "notes": "",
        "ingredients": [
          {
            "name": "Dulce de Leche Repostero / Colonial",
            "qty": 1,
            "unit": "pote"
          },
          {
            "name": "Pan de Molde Blanco / Integral",
            "qty": 2,
            "unit": "un"
          }
        ]
      },
      {
        "id": "opt-l-m-2",
        "userId": "user-lucila",
        "userName": "Lucila",
        "userAvatar": "👩",
        "title": "Té con tostadas y queso crema",
        "notes": "Merienda liviana",
        "ingredients": [
          {
            "name": "Té en saquitos / Hebras variadas",
            "qty": 1,
            "unit": "caja"
          },
          {
            "name": "Queso Crema / Untable (tipo Casancrem)",
            "qty": 1,
            "unit": "pote"
          }
        ]
      }
    ],
    "cena": [
      {
        "id": "opt-l-c-1",
        "userId": "user-pato",
        "userName": "Familia",
        "userAvatar": "👨‍🍳",
        "recipeId": "rec-2",
        "title": "Ojo de Bife a la Manteca de Romero",
        "notes": "Cena a los fuegos",
        "ingredients": []
      }
    ]
  },
  "martes": {
    "desayuno": [
      {
        "id": "opt-m-d-1",
        "userId": "user-joaco",
        "userName": "Joaco",
        "userAvatar": "👦",
        "title": "Avena con leche y banana",
        "notes": "",
        "ingredients": [
          {
            "name": "Avena Arrollada gruesa/fina",
            "qty": 50,
            "unit": "g"
          },
          {
            "name": "Banana",
            "qty": 2,
            "unit": "un"
          }
        ]
      },
      {
        "id": "opt-m-d-2",
        "userId": "user-lucila",
        "userName": "Lucila",
        "userAvatar": "👩",
        "title": "Yogur con arándanos y nueces",
        "notes": "Sin azúcar",
        "ingredients": [
          {
            "name": "Yogur Natural / Griego",
            "qty": 1,
            "unit": "pote"
          },
          {
            "name": "Arándanos frescos",
            "qty": 125,
            "unit": "g"
          },
          {
            "name": "Nueces, Almendras & Castañas",
            "qty": 50,
            "unit": "g"
          }
        ]
      }
    ],
    "almuerzo": [
      {
        "id": "opt-m-a-1",
        "userId": "user-pato",
        "userName": "Familia",
        "userAvatar": "👨‍🍳",
        "recipeId": "rec-3",
        "title": "Risotto Cremoso de Hongos y Parmesano",
        "notes": "",
        "ingredients": []
      }
    ],
    "merienda": [
      {
        "id": "opt-m-m-1",
        "userId": "user-joaco",
        "userName": "Joaco",
        "userAvatar": "👦",
        "title": "Galletitas dulces para la tarde",
        "notes": "",
        "ingredients": [
          {
            "name": "Galletitas dulces para merienda",
            "qty": 1,
            "unit": "paquete"
          }
        ]
      }
    ],
    "cena": [
      {
        "id": "opt-m-c-1",
        "userId": "user-pato",
        "userName": "Familia",
        "userAvatar": "👨‍🍳",
        "recipeId": "rec-6",
        "title": "Salmón Rosado con Espinacas a la Crema",
        "notes": "",
        "ingredients": []
      }
    ]
  },
  "miercoles": {
    "desayuno": [],
    "almuerzo": [],
    "merienda": [],
    "cena": []
  },
  "jueves": {
    "desayuno": [],
    "almuerzo": [],
    "merienda": [],
    "cena": []
  },
  "viernes": {
    "desayuno": [],
    "almuerzo": [],
    "merienda": [],
    "cena": []
  },
  "sabado": {
    "desayuno": [],
    "almuerzo": [],
    "merienda": [],
    "cena": []
  },
  "domingo": {
    "desayuno": [],
    "almuerzo": [],
    "merienda": [],
    "cena": []
  }
};

const DEFAULT_WEEKLY_NOTES = {
  "lunes": "🔥 Arranque de semana organizado",
  "viernes": "🍕 ¡Viernes de pizzas caseras!",
  "domingo": "🥩 Asado familiar al mediodía"
};

const DEFAULT_USERS = [
  {
    "id": "user-pato",
    "name": "Chef Pato",
    "email": "pato@hellskitchen.com",
    "profession": "Chef Ejecutivo / Creador",
    "password": "pato",
    "avatar": "👨‍🍳",
    "role": "admin"
  },
  {
    "id": "user-joaco",
    "name": "Joaco",
    "email": "joaco@familia.com",
    "profession": "Hijo / Gourmet",
    "password": "123",
    "avatar": "👦",
    "role": "user"
  },
  {
    "id": "user-lucila",
    "name": "Lucila",
    "email": "lucila@familia.com",
    "profession": "Pareja / Chef de Postres",
    "password": "123",
    "avatar": "👩",
    "role": "user"
  }
];

const DEFAULT_RECIPE_CATEGORIES = [
  {
    "id": "carnes",
    "name": "Carnes & Fuegos",
    "icon": "🥩"
  },
  {
    "id": "pastas",
    "name": "Pastas & Risottos",
    "icon": "🍝"
  },
  {
    "id": "rapidas",
    "name": "Rápidas de Semana",
    "icon": "⚡"
  },
  {
    "id": "postres",
    "name": "Postres & Dulces",
    "icon": "🍫"
  },
  {
    "id": "ensaladas",
    "name": "Ensaladas & Frescos",
    "icon": "🥗"
  },
  {
    "id": "pizzas",
    "name": "Pizzas, Tartas & Empanadas",
    "icon": "🍕"
  },
  {
    "id": "guisos",
    "name": "Guisos, Sopas & Ollas",
    "icon": "🍲"
  },
  {
    "id": "sandwiches",
    "name": "Sandwiches & Burgers",
    "icon": "🥪"
  },
  {
    "id": "pescados",
    "name": "Pescados & Mariscos",
    "icon": "🐟"
  },
  {
    "id": "veggie",
    "name": "Veggie & Saludable",
    "icon": "🥑"
  },
  {
    "id": "panaderia",
    "name": "Panadería & Desayunos",
    "icon": "🥐"
  },
  {
    "id": "internacional",
    "name": "Comida Internacional",
    "icon": "🌮"
  },
  {
    "id": "tragos",
    "name": "Tragos & Coctelería",
    "icon": "🍹"
  }
];

const DEFAULT_KITCHEN_DATA = {
  activePantry: MASTER_PANTRY_CATALOG.map(item => ({
    id: item.id,
    name: item.name,
    category: item.category,
    qty: 0,
    unit: item.unit,
    minQty: item.minQty,
    icon: item.icon,
    preferredUnit: item.unit
  })),
  shoppingList: [],
  recipes: [
  {
    "id": "rec-1",
    "title": "Pollo al Curry Aromático con Leche de Coco & Basmati",
    "authorId": "user-pato",
    "authorName": "Chef Pato",
    "authorAvatar": "👨‍🍳",
    "isPrivate": false,
    "category": "rapidas",
    "time": 25,
    "portions": 2,
    "difficulty": "Fácil",
    "rating": 5,
    "image": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&auto=format&fit=crop&q=80",
    "description": "Cremoso, especiado y con el perfume inconfundible de la leche de coco y el arroz basmati al vapor.",
    "pairing": "Vino Blanco Torrontés o Chardonnay fresco / Cerveza IPA",
    "chefTip": "Dorar el pollo en tandas para que tome color dorado y no hierva. Tostar el curry 30 segundos en el aceite antes de verter los líquidos para despertar los aceites esenciales.",
    "ingredients": [
      {
        "name": "Pechuga de Pollo",
        "qty": 400,
        "unit": "g",
        "requiredId": "ing-1"
      },
      {
        "name": "Cebolla",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-3"
      },
      {
        "name": "Ajo",
        "qty": 2,
        "unit": "dientes",
        "requiredId": "ing-5"
      },
      {
        "name": "Leche de Coco",
        "qty": 1,
        "unit": "lata (400ml)",
        "requiredId": "ing-17"
      },
      {
        "name": "Curry en polvo / Garam Masala",
        "qty": 2,
        "unit": "cucharadas",
        "requiredId": "ing-24"
      },
      {
        "name": "Arroz Basmati / Jazmín",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-13"
      },
      {
        "name": "Aceite de Oliva Extra Virgen",
        "qty": 20,
        "unit": "ml",
        "requiredId": "ing-23"
      },
      {
        "name": "Cebolla de Verdeo",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-4"
      },
      {
        "name": "Sal Entrefina / Marina & Pimienta Negra",
        "qty": 1,
        "unit": "pizca",
        "requiredId": "ing-28"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Arroz Basmati al Vapor",
        "text": "Lavar el arroz basmati con agua fría 2 veces. En una cacerola, poner 1 taza de arroz por 1.5 tazas de agua con una pizca de sal. Hervir a fuego suave tapado durante 11 minutos. Apagar el fuego y dejar reposar 5 minutos tapado sin tocar.",
        "timerMinutes": 11
      },
      {
        "stepNumber": 2,
        "title": "Sellado del Pollo",
        "text": "Cortar las pechugas en cubos de 2.5 cm. Salpimentar. En un wok o sartén grande con aceite de oliva bien caliente, dorar el pollo a fuego fuerte por 4 minutos sin mover demasiado.",
        "timerMinutes": 4
      },
      {
        "stepNumber": 3,
        "title": "Sofrito Aromático & Especias",
        "text": "Bajar el fuego, sumar la cebolla picada fina y los ajos rallados. Saltear 3 minutos hasta transparentar. Espolvorear las 2 cucharadas de curry y tostar 30 segundos removiendo.",
        "timerMinutes": 3
      },
      {
        "stepNumber": 4,
        "title": "Emulsión de Coco y Reducción",
        "text": "Verter toda la leche de coco. Mezclar raspando el fondo para levantar los sabores glaseados. Cocinar a fuego medio-bajo por 8 minutos hasta que la salsa espese y tome textura aterciopelada.",
        "timerMinutes": 8
      },
      {
        "stepNumber": 5,
        "title": "Emplatado Chef",
        "text": "Servir en plato hondo con base de arroz basmati suelto, el pollo con abundante salsa de curry y terminar por encima con verdeo fresco cortado al sesgo y unas gotas de limón/lima."
      }
    ]
  },
  {
    "id": "rec-2",
    "title": "Ojo de Bife Sellado a la Sartén de Hierro con Papas Rústicas al Romero",
    "authorId": "user-pato",
    "authorName": "Chef Pato",
    "authorAvatar": "👨‍🍳",
    "isPrivate": false,
    "category": "carnes",
    "time": 35,
    "portions": 2,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
    "description": "Costra crocante perfecta por fuera, tierno y jugoso por dentro con aroma a romero fresco, manteca avellanada y ajo machacado.",
    "pairing": "Vino Tinto Malbec de Guarda o Cabernet Franc con cuerpo",
    "chefTip": "Sacar la carne de la heladera 30 minutos antes para que tome temperatura ambiente. Secarla muy bien con papel absorbente antes de salar para garantizar una reacción de Maillard (costra dorada) suprema.",
    "ingredients": [
      {
        "name": "Ojo de Bife / Bife de Chorizo",
        "qty": 600,
        "unit": "g (2 bifes gruesos)",
        "requiredId": "ing-2"
      },
      {
        "name": "Papas medianas",
        "qty": 4,
        "unit": "un",
        "requiredId": "ing-6"
      },
      {
        "name": "Romero fresco / seco",
        "qty": 1,
        "unit": "ramita generosa",
        "requiredId": "ing-25"
      },
      {
        "name": "Ajo",
        "qty": 3,
        "unit": "dientes en camisa",
        "requiredId": "ing-5"
      },
      {
        "name": "Manteca",
        "qty": 40,
        "unit": "g",
        "requiredId": "ing-10"
      },
      {
        "name": "Aceite de Oliva Extra Virgen",
        "qty": 30,
        "unit": "ml",
        "requiredId": "ing-23"
      },
      {
        "name": "Sal Entrefina / Marina & Pimienta Negra",
        "qty": 1,
        "unit": "al gusto",
        "requiredId": "ing-28"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Papas Rústicas Crocantes",
        "text": "Lavar bien las papas y cortarlas en gajos con piel. Hervir en agua con sal por 6 minutos (que queden firmes). Escurrir, sacudir en la olla para romper bordes (clave para que queden crujientes), mezclar con aceite de oliva, romero y sal entrefina. Llevar a horno fuerte a 210°C por 20 minutos hasta dorar.",
        "timerMinutes": 20
      },
      {
        "stepNumber": 2,
        "title": "Calentamiento de Sartén de Hierro",
        "text": "Poner la sartén de hierro a fuego máximo hasta que empiece a humear apenas. Añadir un hilo de aceite de oliva.",
        "timerMinutes": 3
      },
      {
        "stepNumber": 3,
        "title": "Sellado & Costra",
        "text": "Salar la carne generosamente justo antes de entrar a la sartén. Colocar los bifes y sellar 3 minutos sin tocarlos para crear la costra.",
        "timerMinutes": 3
      },
      {
        "stepNumber": 4,
        "title": "Arrosé (Baño en Manteca, Ajo y Romero)",
        "text": "Dar vuelta la carne. Bajar a fuego medio. Agregar la manteca, los ajos machacados y el romero. Con una cuchara, bañar continuamente la parte superior del bife con la manteca espumosa aromatizada durante 2.5 minutos.",
        "timerMinutes": 3
      },
      {
        "stepNumber": 5,
        "title": "Reposo Esencial",
        "text": "Retirar el bife a una tabla y dejar reposar 4 minutos para que los jugos se redistribuyan antes de cortar. Servir con las papas rústicas calientes.",
        "timerMinutes": 4
      }
    ]
  },
  {
    "id": "rec-3",
    "title": "Risotto Cremoso de Hongos de Pino, Verdeo & Parmesano",
    "authorId": "user-pato",
    "authorName": "Chef Pato",
    "authorAvatar": "👨‍🍳",
    "isPrivate": false,
    "category": "pastas",
    "time": 30,
    "portions": 2,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=600&auto=format&fit=crop&q=80",
    "description": "El clásico italiano por excelencia: arroz nacarado al dente con el fondo terroso de los hongos hidratados y la mantecatura final.",
    "pairing": "Vino Pinot Noir o Chardonnay con paso por roble",
    "chefTip": "Nunca laves el arroz para risotto porque perderías el almidón que da la cremosidad. El caldo siempre debe estar hirviendo al lado al momento de agregarlo al arroz.",
    "ingredients": [
      {
        "name": "Arroz Carnaroli / Arborio (p/ Risotto)",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-14"
      },
      {
        "name": "Hongos Secos de Pino / Portobello",
        "qty": 30,
        "unit": "g",
        "requiredId": "ing-18"
      },
      {
        "name": "Cebolla",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-3"
      },
      {
        "name": "Cebolla de Verdeo",
        "qty": 2,
        "unit": "un",
        "requiredId": "ing-4"
      },
      {
        "name": "Ajo",
        "qty": 1,
        "unit": "diente",
        "requiredId": "ing-5"
      },
      {
        "name": "Vino Blanco Seco (Chardonnay/Sauvignon)",
        "qty": 100,
        "unit": "ml",
        "requiredId": "ing-32"
      },
      {
        "name": "Manteca",
        "qty": 50,
        "unit": "g (fría en cubos)",
        "requiredId": "ing-10"
      },
      {
        "name": "Queso Parmesano / Reggianito",
        "qty": 80,
        "unit": "g",
        "requiredId": "ing-9"
      },
      {
        "name": "Aceite de Oliva Extra Virgen",
        "qty": 20,
        "unit": "ml",
        "requiredId": "ing-23"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Hidratación de Hongos",
        "text": "Poner los hongos secos en un bol con 2 tazas de agua caliente o té negro durante 15 minutos. Colar reservando el líquido (será parte de nuestro caldo) y picar los hongos.",
        "timerMinutes": 15
      },
      {
        "stepNumber": 2,
        "title": "Nacarado del Arroz",
        "text": "En una cacerola amplia, calentar aceite de oliva con la cebolla y el blanco del verdeo picados muy finos. Cuando transparente, agregar el arroz y nacarar 2 minutos hasta que los granos se vuelvan translúcidos.",
        "timerMinutes": 2
      },
      {
        "stepNumber": 3,
        "title": "Desglasado con Vino Blanco",
        "text": "Verter el vino blanco frío. Dejar evaporar el alcohol por completo a fuego vivo mientras se remueve suavemente.",
        "timerMinutes": 2
      },
      {
        "stepNumber": 4,
        "title": "Cocción Gradual con Caldo",
        "text": "Sumar los hongos picados. Ir agregando el caldo caliente de a cucharones, esperando que el arroz lo absorba antes de agregar el siguiente. Remover suavemente en forma de ocho. Tiempo total: 16 minutos.",
        "timerMinutes": 16
      },
      {
        "stepNumber": 5,
        "title": "Mantecatura All'Onda",
        "text": "Apagar el fuego. Agregar los cubos de manteca bien fría y el parmesano rallado. Batir vigorosamente con cuchara de madera para emulsionar. Dejar reposar tapado 2 minutos y servir con verdeo verde picado."
      }
    ]
  },
  {
    "id": "rec-4",
    "title": "Spaghetti al Pesto Genovés Auténtico de Albahaca, Parmesano y Nueces",
    "authorId": "user-pato",
    "authorName": "Chef Pato",
    "authorAvatar": "👨‍🍳",
    "isPrivate": false,
    "category": "pastas",
    "time": 18,
    "portions": 2,
    "difficulty": "Fácil",
    "rating": 5,
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80",
    "description": "Fresco, vibrante y aromático. El calor de la pasta recién colada despierta los perfumes de la albahaca recién procesada.",
    "pairing": "Vino Blanco Sauvignon Blanc o Torrontés",
    "chefTip": "Nunca cocines el pesto al fuego directo. Se mezcla en crudo en el bol con una o dos cucharadas del agua de cocción de la pasta (rica en almidón) para crear una salsa cremosa.",
    "ingredients": [
      {
        "name": "Pasta Seca (Spaghetti / Penne)",
        "qty": 250,
        "unit": "g",
        "requiredId": "ing-15"
      },
      {
        "name": "Albahaca fresca",
        "qty": 1,
        "unit": "atado grande (hojas lavadas y secas)",
        "requiredId": "ing-26"
      },
      {
        "name": "Nueces o Almendras",
        "qty": 40,
        "unit": "g (tostadas)",
        "requiredId": "ing-20"
      },
      {
        "name": "Queso Parmesano / Reggianito",
        "qty": 60,
        "unit": "g rallado fino",
        "requiredId": "ing-9"
      },
      {
        "name": "Ajo",
        "qty": 1,
        "unit": "diente sin el brote central",
        "requiredId": "ing-5"
      },
      {
        "name": "Aceite de Oliva Extra Virgen",
        "qty": 70,
        "unit": "ml",
        "requiredId": "ing-23"
      },
      {
        "name": "Sal Entrefina / Marina & Pimienta Negra",
        "qty": 1,
        "unit": "pizca",
        "requiredId": "ing-28"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Hervor de la Pasta",
        "text": "Poner a hervir abundante agua con sal gruesa (10g de sal por cada litro). Cuando rompa hervor fuerte, echar los spaghetti y cocinar 8 minutos (al dente).",
        "timerMinutes": 8
      },
      {
        "stepNumber": 2,
        "title": "Procesado del Pesto",
        "text": "En mortero o procesadora, colocar las hojas de albahaca bien secas, las nueces tostadas, el diente de ajo y una pizca de sal. Procesar a pulsos agregando el aceite de oliva en hilo continuo.",
        "timerMinutes": 2
      },
      {
        "stepNumber": 3,
        "title": "Integración de Quesos",
        "text": "Pasar la pasta verde a un bol y mezclar a mano con el parmesano rallado."
      },
      {
        "stepNumber": 4,
        "title": "Emulsión & Emplatado",
        "text": "Separar media taza del agua de cocción. Colar la pasta, verterla inmediatamente sobre el bol con el pesto, sumar 3 cucharadas del agua caliente y mezclar con pinzas. Servir con lluvia de queso y un hilo de oliva."
      }
    ]
  },
  {
    "id": "rec-5",
    "title": "Volcán de Chocolate Fondant con Centro Líquido",
    "authorId": "user-pato",
    "authorName": "Chef Pato",
    "authorAvatar": "👨‍🍳",
    "isPrivate": false,
    "category": "postres",
    "time": 20,
    "portions": 2,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80",
    "description": "El postre insignia de la cocina francesa. Bizcocho tibio por fuera que al cortar con la cuchara libera lava de chocolate fundido.",
    "pairing": "Café Espresso o Copa de Oporto / Vino Dulce Tardío",
    "chefTip": "El secreto absoluto es la temperatura y el tiempo exacto de horno: 11 minutos a 200°C. Si te pasás 2 minutos se convierte en bizcochuelo.",
    "ingredients": [
      {
        "name": "Chocolate Semiamargo 70%",
        "qty": 110,
        "unit": "g",
        "requiredId": "ing-21"
      },
      {
        "name": "Manteca",
        "qty": 70,
        "unit": "g",
        "requiredId": "ing-10"
      },
      {
        "name": "Huevos de campo",
        "qty": 2,
        "unit": "un",
        "requiredId": "ing-7"
      },
      {
        "name": "Azúcar mascabo / común",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-22"
      },
      {
        "name": "Harina 0000",
        "qty": 25,
        "unit": "g (2 cucharadas)",
        "requiredId": "ing-16"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Derretido Suave",
        "text": "Picar el chocolate y la manteca. Fundir a baño maría o en microondas en tandas de 30 segundos removiendo hasta que quede liso y brillante.",
        "timerMinutes": 2
      },
      {
        "stepNumber": 2,
        "title": "Batido Espumoso",
        "text": "En otro bol, batir los huevos con el azúcar durante 2 minutos hasta que tomen color claro y espumen.",
        "timerMinutes": 2
      },
      {
        "stepNumber": 3,
        "title": "Integración de Mezcla",
        "text": "Verter el chocolate fundido sobre los huevos batidos con movimientos envolventes. Incorporar la harina tamizada con espátula."
      },
      {
        "stepNumber": 4,
        "title": "Moldeado & Horneado de Precisión",
        "text": "Enmantecar y espolvorear con cacao dos moldes de soufflé o flaneras. Llenar a 3/4. Llevar a horno precalentado a 200°C durante exactamente 11 minutos.",
        "timerMinutes": 11
      },
      {
        "stepNumber": 5,
        "title": "Desmolde Magia",
        "text": "Dejar reposar 1 minuto. Pasar un cuchillito fino por el borde, desmoldar directo en el plato y servir con una bocha de helado de crema o frutos rojos."
      }
    ]
  },
  {
    "id": "rec-6",
    "title": "Wok Expres de Pollo, Morrón, Verdeo & Soja",
    "authorId": "user-pato",
    "authorName": "Chef Pato",
    "authorAvatar": "👨‍🍳",
    "isPrivate": false,
    "category": "rapidas",
    "time": 15,
    "portions": 2,
    "difficulty": "Fácil",
    "rating": 5,
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80",
    "description": "Crocante, saludable y con sabor oriental. Ideal para resolver una cena de diez puntos en solo quince minutos.",
    "pairing": "Cerveza rubia helada o Vino Blanco fresco",
    "chefTip": "Mantener el wok al máximo de temperatura en todo momento. Los vegetales deben quedar crocantes al dente, nunca blandos ni hervidos.",
    "ingredients": [
      {
        "name": "Pechuga de Pollo",
        "qty": 300,
        "unit": "g en tiras",
        "requiredId": "ing-1"
      },
      {
        "name": "Morrón Rojo",
        "qty": 1,
        "unit": "un en juliana",
        "requiredId": "ing-11"
      },
      {
        "name": "Cebolla",
        "qty": 1,
        "unit": "un en pluma",
        "requiredId": "ing-3"
      },
      {
        "name": "Cebolla de Verdeo",
        "qty": 2,
        "unit": "un",
        "requiredId": "ing-4"
      },
      {
        "name": "Ajo",
        "qty": 2,
        "unit": "dientes laminados",
        "requiredId": "ing-5"
      },
      {
        "name": "Salsa de Soja",
        "qty": 30,
        "unit": "ml",
        "requiredId": "ing-27"
      },
      {
        "name": "Aceite de Oliva Extra Virgen",
        "qty": 20,
        "unit": "ml",
        "requiredId": "ing-23"
      },
      {
        "name": "Arroz Basmati / Jazmín",
        "qty": 150,
        "unit": "g",
        "requiredId": "ing-13"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Fuego Vivo en Wok",
        "text": "Calentar el wok hasta que humee. Agregar 1 cucharada de aceite y saltear el pollo en tiras 3 minutos hasta dorar. Retirar y reservar.",
        "timerMinutes": 3
      },
      {
        "stepNumber": 2,
        "title": "Vegetales al Dente",
        "text": "En el mismo wok con otro hilo de aceite, saltear a fuego máximo la cebolla, el morrón y el ajo por 3 minutos moviendo constantemente.",
        "timerMinutes": 3
      },
      {
        "stepNumber": 3,
        "title": "Glaseado con Soja & Emplatado",
        "text": "Reincorporar el pollo, verter la salsa de soja y el verdeo. Saltear 1 minuto más para que todo se unifique y caramelice. Servir sobre arroz basmati caliente.",
        "timerMinutes": 1
      }
    ]
  },
  {
    "id": "rec-anon-53281",
    "title": "Algerian Kefta (Meatballs)",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 47,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/8rfd4q1764112993.jpg",
    "description": "Exquisito plato tradicional de autor (Algerian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Ground Beef",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-202"
      },
      {
        "name": "Ajo",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-203"
      },
      {
        "name": "Cebolla",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-204"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Pimienta Negra Molida",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-205"
      },
      {
        "name": "Plum Tomatoes",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-206"
      },
      {
        "name": "Perejil Fresco",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-207"
      },
      {
        "name": "Agua Filtrada",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-208"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Combine ground beef with 1/2 of the minced garlic and 1 tablespoon chopped onion in a large bowl. Mix with your hands until fully incorporated. Shape meat mixture into 1 1/2-inch oblong patties; you should have 12 to 14 meatballs."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Heat a large skillet over medium-high heat. Brown patties in batches in the hot skillet until crispy on both sides and no longer pink in the center, about 10 minutes. Set meatballs aside in a rimmed serving dish.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Reduce heat to medium and stir remaining chopped onion into drippings in the skillet. Season with salt and pepper. Cook, stirring constantly, until onion has softened and turned translucent, about 5 minutes. Stir in remaining garlic and cook for 30 seconds. Stir in Roma tomatoes, dried parsley, and ras el hanout. Pour in water. Cook until tomatoes are soft, about 5 minutes.",
        "timerMinutes": 5
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Pour tomato sauce over meatballs to serve."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53334",
    "title": "Arepa Pabellón",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 47,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/13fg4j1764441982.jpg",
    "description": "Exquisito plato tradicional de autor (Venezuela), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Corn Arepa Filled With Mozarella Cheese",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-209"
      },
      {
        "name": "Banana",
        "qty": 1,
        "unit": "kg",
        "requiredId": "ing-56"
      },
      {
        "name": "Black Beans",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-210"
      },
      {
        "name": "Pico De Gallo Sauce",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-211"
      },
      {
        "name": "Shredded Meat",
        "qty": 2000,
        "unit": "g",
        "requiredId": "ing-212"
      },
      {
        "name": "Plum Tomatoes",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-206"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Pimienta Negra Molida",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-205"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Prepare the meat in a skillet and add salt and pepper to taste, heat the beans over medium heat in a pan, fry or grill the ripe plantains as indicated on its package and cut the tomato into small cubes. Reserve these ingredients until filling."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Preheat the grill or pan and grill the arepa, putting it once on each side until they are golden brown."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "With the help of a knife, open it by the edge through the middle, creating a space to fill it with the ripe plantain, the beans, meat and chopped tomato."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Serve with a little pico de gallo or guacamole dip sauce."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53329",
    "title": "Arepa pelua",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/jgl9qq1764437635.jpg",
    "description": "Exquisito plato tradicional de autor (Venezuela), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Ground Beef",
        "qty": 500,
        "unit": "g",
        "requiredId": "ing-202"
      },
      {
        "name": "Cebolla",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-204"
      },
      {
        "name": "Morrón Rojo",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-11"
      },
      {
        "name": "Ajo",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-203"
      },
      {
        "name": "Comino Molido",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-213"
      },
      {
        "name": "Orégano seco seleccionado",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-82"
      },
      {
        "name": "Pimentón Dulce",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-214"
      },
      {
        "name": "Caldo de Carne Casero",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-215"
      },
      {
        "name": "Agua Filtrada",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-208"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Corn Arepa Filled With Mozarella Cheese",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-209"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-216"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Cook the meat: Place the flank steak in a pot with broth or water and salt. Cook over low heat for about 2 hours, until tender and easy to shred."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Shred the meat: Once cooked, drain and shred the meat using two forks."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Prepare the vegetables: Sauté chopped onion, bell pepper, and garlic in a little oil. Add cumin, oregano, paprika, and salt. Stir in the meat and cook for a few minutes until the flavors are well combined."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Make the dough: In a bowl, mix the cornmeal with warm water and salt until a soft dough forms. Let it rest for 5 minutes.",
        "timerMinutes": 5
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Form the arepas: Divide the dough into 6 portions, shape into balls, and flatten into thick discs."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Cook: Cook the arepas on a griddle or skillet over medium heat for 2–3 minutes on each side until golden. You can then bake them for a few minutes if you prefer them crispier.",
        "timerMinutes": 3
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53133",
    "title": "Asado",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 31,
    "portions": 4,
    "difficulty": "Fácil",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/kgfh3q1763075438.jpg",
    "description": "Exquisito plato tradicional de autor (Argentina), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Mixed Beef Cuts",
        "qty": 2000,
        "unit": "g",
        "requiredId": "ing-217"
      },
      {
        "name": "Ojo de Bife / Bife de Chorizo",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-2"
      },
      {
        "name": "Morcilla Bombón / Criolla",
        "qty": 2,
        "unit": "un",
        "requiredId": "ing-117"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Prepare the Fire: Start a wood fire in your grill and let it burn down to coals."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Season the Meat: Generously salt the beef cuts."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Grill the Meat: Place the beef on the grill, starting with the thickest cuts farthest from the coals. Add chorizo and morcilla after the beef has been cooking for a while."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Cook to Perfection: Cook the meat, turning occasionally, until it reaches your desired doneness. Typically, ribs may take up to 2 hours; thinner cuts will cook faster."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Rest and Serve: Let the meat rest for about 10 minutes before slicing. Serve with chimichurri sauce and grilled vegetables.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Use a mix of wood and charcoal for a consistent heat source. Wood adds flavor, while charcoal maintains temperature."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53099",
    "title": "Aussie Burgers",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 35,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/44bzep1761848278.jpg",
    "description": "Exquisito plato tradicional de autor (Australian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Lean Minced Steak",
        "qty": 500,
        "unit": "g",
        "requiredId": "ing-218"
      },
      {
        "name": "Cooked Beetroot",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-219"
      },
      {
        "name": "Naan Bread",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-220"
      },
      {
        "name": "Rocket",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-221"
      },
      {
        "name": "Soured cream and chive dip",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-222"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Make the burgers: Tip the meat into a bowl and sprinkle over 1 tsp salt and a good grinding of black pepper.Work with wet hands to mix in the seasoning. Divide into four with your hands and shape into burgers. (It can be frozen at this stage.)"
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Sort out your ingredients: Slice the beetroot and split the naan breads."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Toast the naans: Heat a griddle pan or barbecue. Griddle the naans on both sides until lightly toasted and set aside. Add the burgers to the grill or barbecue and cook for 2-3 minutes, then turn and cook the other side for a further 2-3 minutes.",
        "timerMinutes": 3
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Assemble the dish: Set half a toasted naan on each serving plate and put a pile of rocket on each. Top with a burger, then a few slices of beetroot and a dollop of soured cream. Sprinkle with salt and freshly ground black pepper and serve immediately with a big green salad and chips. A glass of red wine wouldn’t go amiss, either."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53457",
    "title": "Barbados Pepperpot",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/5tf8j11782236249.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Pigs Trotters",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-223"
      },
      {
        "name": "Oxtail",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-224"
      },
      {
        "name": "Lime juice",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-225"
      },
      {
        "name": "Ajo",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-203"
      },
      {
        "name": "Scotch Bonnet",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-226"
      },
      {
        "name": "Cebolla",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-204"
      },
      {
        "name": "Cinnamon Stick",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-227"
      },
      {
        "name": "Cloves",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-228"
      },
      {
        "name": "Azúcar Blanco",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-229"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Albahaca Fresca",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-230"
      },
      {
        "name": "Tomillo",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-231"
      },
      {
        "name": "Ground Beef",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-202"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Wash the stewing steak and place it in the mixing bowl with the lemon or lime juice."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Set that to one side; while you slice the garlic into tiny slices, slice the onion. Chop the basil and thyme."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Now you need to be very careful when you slice the scotch bonnet peppers; you want these in fine pieces, which you can either do with a long knife trying not to touch the pepper, or you can wear rubber gloves to cut it up. Wash your hands straight afterward and do not touch your eyes; these peppers really burn your hands and eyes if they make contact with the skin!"
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Now rinse the lime or lemon juice off the stewing steak. And cut the meat into cubes."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Also, chop the pig’s trotters and the oxtail into cubes."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Fill the large saucepan with water and bring to a boil."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53366",
    "title": "Beef and Broccoli Stir-Fry",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/m0p0j81765568742.jpg",
    "description": "Exquisito plato tradicional de autor (Chinese), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Salsa de Soja",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-232"
      },
      {
        "name": "Dry sherry",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-233"
      },
      {
        "name": "Cornstarch",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-234"
      },
      {
        "name": "Pimienta Negra Molida",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-205"
      },
      {
        "name": "Sirloin steak",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-235"
      },
      {
        "name": "Oyster Sauce",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-236"
      },
      {
        "name": "Dry sherry",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-233"
      },
      {
        "name": "Salsa de Soja",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-232"
      },
      {
        "name": "Caldo de Verduras Casero",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-237"
      },
      {
        "name": "Broccoli",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-238"
      },
      {
        "name": "High Heat Cooking Oil",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-239"
      },
      {
        "name": "Ajo",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-203"
      },
      {
        "name": "Cornstarch",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-234"
      },
      {
        "name": "Agua Filtrada",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-208"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Marinate the beef:"
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Stir together the beef marinade ingredients (1 teaspoon soy sauce, 1 teaspoon Chinese rice wine, 1/2 teaspoon cornstarch, 1/8 teaspoon black pepper) in a medium bowl."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Add the beef slices and stir until coated. Let stand for 10 minutes.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Prepare the sauce:"
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Stir together the sauce ingredients (2 tablespoons oyster sauce, 1 teaspoon Chinese rice wine, 1 teaspoon soy sauce, 1/4 cup chicken broth) in a small bowl. Set aside."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Blanch or steam the broccoli:"
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52874",
    "title": "Pastel de Carne al Horno con Mostaza",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
    "description": "Exquisito plato tradicional de autor (British), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Ground Beef",
        "qty": 1000,
        "unit": "g",
        "requiredId": "ing-202"
      },
      {
        "name": "Plain Flour",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-240"
      },
      {
        "name": "Rapeseed Oil",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-241"
      },
      {
        "name": "Vino Malbec Reserva",
        "qty": 200,
        "unit": "ml",
        "requiredId": "ing-242"
      },
      {
        "name": "Caldo de Carne Casero",
        "qty": 400,
        "unit": "ml",
        "requiredId": "ing-215"
      },
      {
        "name": "Cebolla",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-204"
      },
      {
        "name": "Zanahoria",
        "qty": 2,
        "unit": "un",
        "requiredId": "ing-44"
      },
      {
        "name": "Tomillo",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-231"
      },
      {
        "name": "Mostaza Dijon",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-243"
      },
      {
        "name": "Egg Yolks",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-244"
      },
      {
        "name": "Puff Pastry",
        "qty": 400,
        "unit": "g",
        "requiredId": "ing-245"
      },
      {
        "name": "Green Beans",
        "qty": 300,
        "unit": "g",
        "requiredId": "ing-246"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 25,
        "unit": "g",
        "requiredId": "ing-125"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Pimienta Negra Molida",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-205"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Preheat the oven to 150C/300F/Gas 2."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Toss the beef and flour together in a bowl with some salt and black pepper."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Heat a large casserole until hot, add half of the rapeseed oil and enough of the beef to just cover the bottom of the casserole."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Fry until browned on each side, then remove and set aside. Repeat with the remaining oil and beef."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Return the beef to the pan, add the wine and cook until the volume of liquid has reduced by half, then add the stock, onion, carrots, thyme and mustard, and season well with salt and pepper."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Cover with a lid and place in the oven for two hours."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52878",
    "title": "Beef and Oyster pie",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg",
    "description": "Exquisito plato tradicional de autor (British), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Ground Beef",
        "qty": 900,
        "unit": "g",
        "requiredId": "ing-202"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-216"
      },
      {
        "name": "Shallots",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-247"
      },
      {
        "name": "Ajo",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-203"
      },
      {
        "name": "Panceta Ahumada",
        "qty": 125,
        "unit": "g",
        "requiredId": "ing-36"
      },
      {
        "name": "Tomillo",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-231"
      },
      {
        "name": "Bay Leaf",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-248"
      },
      {
        "name": "Cerveza Artesanal IPA / Honey / Stout",
        "qty": 330,
        "unit": "ml",
        "requiredId": "ing-192"
      },
      {
        "name": "Caldo de Carne Casero",
        "qty": 400,
        "unit": "ml",
        "requiredId": "ing-215"
      },
      {
        "name": "Corn Flour",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-249"
      },
      {
        "name": "Oysters",
        "qty": 8,
        "unit": "g",
        "requiredId": "ing-250"
      },
      {
        "name": "Plain Flour",
        "qty": 400,
        "unit": "g",
        "requiredId": "ing-240"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 250,
        "unit": "g",
        "requiredId": "ing-125"
      },
      {
        "name": "Huevos de campo",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-7"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Season the beef cubes with salt and black pepper. Heat a tablespoon of oil in the frying pan and fry the meat over a high heat. Do this in three batches so that you don’t overcrowd the pan, transferring the meat to a large flameproof casserole dish once it is browned all over. Add extra oil if the pan seems dry."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "In the same pan, add another tablespoon of oil and cook the shallots for 4-5 minutes, then add the garlic and fry for 30 seconds. Add the bacon and fry until slightly browned. Transfer the onion and bacon mixture to the casserole dish and add the herbs.",
        "timerMinutes": 5
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Preheat the oven to 180C/350F/Gas 4."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Pour the stout into the frying pan and bring to the boil, stirring to lift any stuck-on browned bits from the bottom of the pan. Pour the stout over the beef in the casserole dish and add the stock. Cover the casserole and place it in the oven for 1½-2 hours, or until the beef is tender and the sauce is reduced."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Skim off any surface fat, taste and add salt and pepper if necessary, then stir in the cornflour paste. Put the casserole dish on the hob – don’t forget that it will be hot – and simmer for 1-2 minutes, stirring, until thickened. Leave to cool.",
        "timerMinutes": 2
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Increase the oven to 200C/400F/Gas 6. To make the pastry, put the flour and salt in a very large bowl. Grate the butter and stir it into the flour in three batches. Gradually add 325ml/11fl oz cold water – you may not need it all – and stir with a round-bladed knife until the mixture just comes together. Knead the pastry lightly into a ball on a lightly floured surface and set aside 250g/9oz for the pie lid."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53071",
    "title": "Beef Asado",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/pkopc31683207947.jpg",
    "description": "Exquisito plato tradicional de autor (Filipino), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Ground Beef",
        "qty": 1500,
        "unit": "g",
        "requiredId": "ing-202"
      },
      {
        "name": "Beef Stock Concentrate",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-251"
      },
      {
        "name": "Tomato Puree",
        "qty": 8,
        "unit": "g",
        "requiredId": "ing-252"
      },
      {
        "name": "Agua Filtrada",
        "qty": 600,
        "unit": "g",
        "requiredId": "ing-208"
      },
      {
        "name": "Salsa de Soja",
        "qty": 6000,
        "unit": "ml",
        "requiredId": "ing-232"
      },
      {
        "name": "White Wine Vinegar",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-253"
      },
      {
        "name": "Pimienta Negra Molida",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-205"
      },
      {
        "name": "Bay Leaf",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-248"
      },
      {
        "name": "Limón",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-254"
      },
      {
        "name": "Puré de Tomate",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-255"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 3,
        "unit": "un",
        "requiredId": "ing-125"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-216"
      },
      {
        "name": "Cebolla",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-204"
      },
      {
        "name": "Ajo",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-203"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Combine beef, crushed peppercorn, soy sauce, vinegar, dried bay leaves, lemon, and tomato sauce. Mix well. Marinate beef for at least 30 minutes.",
        "timerMinutes": 30
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Put the marinated beef in a cooking pot along with remaining marinade. Add water. Let boil."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Add Knorr Beef Cube. Stir. Cover the pot and cook for 40 minutes in low heat.",
        "timerMinutes": 40
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Turn the beef over. Add tomato paste. Continue cooking until beef tenderizes. Set aside."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Heat oil in a pan. Fry the potato until it browns. Turn over and continue frying the opposite side. Remove from the pan and place on a clean plate. Do the same with the carrots."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Save 3 tablespoons of cooking oil from the pan where the potato was fried. Saute onion and garlic until onion softens."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53085",
    "title": "15-minute chicken & halloumi burgers",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 59,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/vdwloy1713225718.jpg",
    "description": "Exquisito plato tradicional de autor (United States), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Chicken Breasts",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-256"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 15,
        "unit": "g",
        "requiredId": "ing-216"
      },
      {
        "name": "Hotsauce",
        "qty": 60,
        "unit": "g",
        "requiredId": "ing-257"
      },
      {
        "name": "Lemon Juice",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-258"
      },
      {
        "name": "Buns",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-259"
      },
      {
        "name": "Corn Arepa Filled With Mozarella Cheese",
        "qty": 250,
        "unit": "g",
        "requiredId": "ing-209"
      },
      {
        "name": "Cabbage",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-260"
      },
      {
        "name": "Mayonesa",
        "qty": 30,
        "unit": "g",
        "requiredId": "ing-261"
      },
      {
        "name": "Crema Ácida",
        "qty": 60,
        "unit": "g",
        "requiredId": "ing-262"
      },
      {
        "name": "Lettuce",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-263"
      },
      {
        "name": "Morrón Rojo",
        "qty": 2,
        "unit": "un",
        "requiredId": "ing-11"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Put the chicken breasts between two pieces of baking parchment and use a rolling pin to gently bash them until they are approximately 1cm thick. Cut each chicken breast into two even pieces."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "If you're using a frying pan, heat two frying pans over medium-high heat, with one of them containing oil. Fry the chicken in the oiled pan for 3-4 mins on each side until they are cooked through. Season the chicken, reduce the heat, drizzle in the chilli sauce and half of the lemon juice, and cook for an additional 1-2 mins until the sauce is reduced. Remove the chicken from the heat.",
        "timerMinutes": 4
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "If you're using an air-fryer, preheat it to 180C for 4 mins. Add the chicken to the air-fryer and cook for 12 mins. Drizzle over the chilli sauce and half the lemon juice and cook for an additional 1-2 mins until the chicken is cooked through and the sauce is reduced. Remove the chicken and keep it warm.",
        "timerMinutes": 4
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "While the chicken is cooking, toast the buns in the dry frying pan for 30 seconds. Transfer them to a plate. If you're using an air fryer, put the buns in the air fryer for 1-2 mins until they are warm. Increase the air fryer temperature to 200C. Add the halloumi to the air fryer basket and cook for 10 mins, turning halfway through, until it's golden. Toss the cabbage with the mayo and the remaining lemon juice.",
        "timerMinutes": 2
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Spoon the hummus (or dip of your choice) into the toasted buns, then top with the rocket, chilli chicken, halloumi, and peppers. Drizzle with a little more chilli sauce, spoon over the cabbage, season with black pepper, and top with the bun lids. Serve with any extra cabbage on the side or a green salad."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53050",
    "title": "Ayam Percik",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/020z181619788503.jpg",
    "description": "Exquisito plato tradicional de autor (Malaysian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Pata Muslo de Pollo",
        "qty": 6,
        "unit": "un",
        "requiredId": "ing-33"
      },
      {
        "name": "Challots",
        "qty": 16,
        "unit": "g",
        "requiredId": "ing-264"
      },
      {
        "name": "Jengibre Fresco",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-265"
      },
      {
        "name": "Garlic Clove",
        "qty": 6,
        "unit": "un",
        "requiredId": "ing-266"
      },
      {
        "name": "Cayenne Pepper",
        "qty": 8,
        "unit": "g",
        "requiredId": "ing-267"
      },
      {
        "name": "Turmeric",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-268"
      },
      {
        "name": "Comino Molido",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-213"
      },
      {
        "name": "Coriander",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-269"
      },
      {
        "name": "Fennel",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-270"
      },
      {
        "name": "Tamarind Paste",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-271"
      },
      {
        "name": "Coconut Milk",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-272"
      },
      {
        "name": "Azúcar Blanco",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-229"
      },
      {
        "name": "Agua Filtrada",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-208"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "In a blender, add the ingredients for the spice paste and blend until smooth."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Over medium heat, pour the spice paste in a skillet or pan and fry for 10 minutes until fragrant. Add water or oil 1 tablespoon at a time if the paste becomes too dry. Don't burn the paste. Lower the fire slightly if needed.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Add the cloves, cardamom, tamarind pulp, coconut milk, water, sugar and salt. Turn the heat up and bring the mixture to boil. Turn the heat to medium low and simmer for 10 minutes. Stir occasionally. It will reduce slightly. This is the marinade/sauce, so taste and adjust seasoning if necessary. Don't worry if it's slightly bitter. It will go away when roasting.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "When the marinade/sauce has cooled, pour everything over the chicken and marinate overnight to two days."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Preheat the oven to 425 F."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Remove the chicken from the marinade. Spoon the marinade onto a greased (or aluminum lined) baking sheet. Lay the chicken on top of the sauce (make sure the chicken covers the sauce and the sauce isn't exposed or it'll burn) and spread the remaining marinade on the chicken. Roast for 35-45 minutes or until internal temp of the thickest part of chicken is at least 175 F.",
        "timerMinutes": 45
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53466",
    "title": "Belgian Waterzooi Chicken",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/nmxec11782498644.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Chicken Legs",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-273"
      },
      {
        "name": "Chicken Breasts",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-256"
      },
      {
        "name": "Agua Filtrada",
        "qty": 600,
        "unit": "g",
        "requiredId": "ing-208"
      },
      {
        "name": "Zanahoria",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-44"
      },
      {
        "name": "Leek",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-274"
      },
      {
        "name": "Celery",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-275"
      },
      {
        "name": "Papas",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-276"
      },
      {
        "name": "Garlic Clove",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Romero Fresco",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-277"
      },
      {
        "name": "Soured cream and chive dip",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-222"
      },
      {
        "name": "Bay Leaf",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-248"
      },
      {
        "name": "Unsalted Butter",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-278"
      },
      {
        "name": "Egg Yolks",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-244"
      },
      {
        "name": "Cayenne Pepper",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-267"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Put the chicken, water and one garlic clove in a large saucepan. Place it over medium-high heat until boiling. Then turn the heat low, cover the pan and simmer the chicken for 10 minutes. Remove the chicken leg and breast. Keep the fresh chicken stock for later.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Let the chicken cool. Then dice the chicken breast up. Pick the meat off the leg. Discard any bones and skin. Slice the leek, celery and carrot finely (julienne). Add the butter, rosemary and bay leaves to a large pan and place it over medium heat until melted."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Then add the sliced vegetables. Season with pepper and salt."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Stir and cook the vegetables for 3 minutes. Then add the shredded and diced chicken.",
        "timerMinutes": 3
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Cover the pan and cook the chicken and vegetables for 5 minutes. Then add the cream and ½ cup (120 ml) of the fresh chicken stock.",
        "timerMinutes": 5
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Look at this delicious waterzooi recipe! Do try out my chunky chicken stew with fresh leeks, celery, carrots and lots of cream... This is Belgian comfort food!"
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53453",
    "title": "Bengali Chicken Curry with Potatoes",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/9ya6o71780262651.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-216"
      },
      {
        "name": "Cebolla",
        "qty": 2,
        "unit": "un",
        "requiredId": "ing-204"
      },
      {
        "name": "Ginger Garlic Paste",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-279"
      },
      {
        "name": "Plum Tomatoes",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-206"
      },
      {
        "name": "Cayenne Pepper",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-267"
      },
      {
        "name": "Curry Powder",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-280"
      },
      {
        "name": "Curry en polvo / Garam Masala",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-24"
      },
      {
        "name": "Turmeric",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-268"
      },
      {
        "name": "Ground Cumin",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-281"
      },
      {
        "name": "Chicken Breasts",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-256"
      },
      {
        "name": "Red Potatoes",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-282"
      },
      {
        "name": "Cilantro fresco",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-85"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Heat the olive oil in a large skillet over medium-high heat. Cook and stir the onions in the hot oil until translucent, about 5 minutes. Add the ginger-garlic paste and continue cooking another 5 minutes. Reduce heat to medium; stir the tomatoes into the mixture and cook until the tomatoes are pulpy, 5 to 10 minutes. Season with the cayenne pepper, curry powder, garam masala, turmeric, and cumin; cook and stir another 5 minutes.",
        "timerMinutes": 5
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Add the chicken and potatoes to the mixture in the skillet; simmer, stirring occasionally, until the potatoes are tender and the chicken is no longer pink in the center, about 20 minutes. Sprinkle the cilantro over the mixture and continue simmering another 10 minutes. Serve hot.",
        "timerMinutes": 20
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52940",
    "title": "Brown Stew Chicken",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg",
    "description": "Exquisito plato tradicional de autor (Jamaican), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Chicken Breasts",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-256"
      },
      {
        "name": "Plum Tomatoes",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-206"
      },
      {
        "name": "Onions",
        "qty": 2,
        "unit": "un",
        "requiredId": "ing-283"
      },
      {
        "name": "Garlic Clove",
        "qty": 2,
        "unit": "un",
        "requiredId": "ing-266"
      },
      {
        "name": "Morrón Rojo",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-11"
      },
      {
        "name": "Zanahoria",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-44"
      },
      {
        "name": "Lime juice",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-225"
      },
      {
        "name": "Tomillo",
        "qty": 10,
        "unit": "g",
        "requiredId": "ing-231"
      },
      {
        "name": "Allspice",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-284"
      },
      {
        "name": "Salsa de Soja",
        "qty": 2,
        "unit": "ml",
        "requiredId": "ing-232"
      },
      {
        "name": "Cornstarch",
        "qty": 10,
        "unit": "g",
        "requiredId": "ing-234"
      },
      {
        "name": "Coconut Milk",
        "qty": 400,
        "unit": "g",
        "requiredId": "ing-272"
      },
      {
        "name": "Vegetable Oil",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-285"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Squeeze lime over chicken and rub well. Drain off excess lime juice."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces. Cover and marinate at least one hour."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Heat oil in a dutch pot or large saucepan. Shake off the seasonings as you remove each piece of chicken from the marinade. Reserve the marinade for sauce."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Lightly brown the chicken a few pieces at a time in very hot oil. Place browned chicken pieces on a plate to rest while you brown the remaining pieces."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Drain off excess oil and return the chicken to the pan. Pour the marinade over the chicken and add the carrots. Stir and cook over medium heat for 10 minutes.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Mix flour and coconut milk and add to stew, stirring constantly. Turn heat down to minimum and cook another 20 minutes or until tender.",
        "timerMinutes": 20
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53016",
    "title": "Chick-Fil-A Sandwich",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg",
    "description": "Exquisito plato tradicional de autor (United States), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Chicken Breasts",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-256"
      },
      {
        "name": "Pickle Juice",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-286"
      },
      {
        "name": "Queso Parmesano / Reggianito para rallar",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-9"
      },
      {
        "name": "Coconut Milk",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-272"
      },
      {
        "name": "Plain Flour",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-240"
      },
      {
        "name": "Icing Sugar",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-287"
      },
      {
        "name": "Pimentón Dulce",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-214"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-168"
      },
      {
        "name": "Pimienta Negra Molida",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-205"
      },
      {
        "name": "Garlic Powder",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-288"
      },
      {
        "name": "Celery",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-275"
      },
      {
        "name": "Cayenne Pepper",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-267"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-216"
      },
      {
        "name": "Buns",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-259"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Wrap the chicken loosely between plastic wrap and pound gently with the flat side of a meat tenderizer until about 1/2 inch thick all around."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Cut into two pieces, as even as possible."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Marinate in the pickle juice for 30 minutes to one hour (add a teaspoon of Tabasco sauce now for a spicy sandwich).",
        "timerMinutes": 30
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Beat the egg with the milk in a bowl."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Combine the flour, sugar, and spices in another bowl."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Dip the chicken pieces each into the egg on both sides, then coat in flour on both sides."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53161",
    "title": "Chicken & chorizo rice pot",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/fk80jp1763280767.jpg",
    "description": "Exquisito plato tradicional de autor (Spanish), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-216"
      },
      {
        "name": "Chicken Breasts",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-256"
      },
      {
        "name": "Onions",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-283"
      },
      {
        "name": "Morrón Rojo",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-11"
      },
      {
        "name": "Garlic Clove",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Ojo de Bife / Bife de Chorizo",
        "qty": 225,
        "unit": "g",
        "requiredId": "ing-2"
      },
      {
        "name": "Tomato Puree",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-252"
      },
      {
        "name": "Tomillo",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-231"
      },
      {
        "name": "White Wine Vinegar",
        "qty": 150,
        "unit": "ml",
        "requiredId": "ing-253"
      },
      {
        "name": "Caldo de Verduras Casero",
        "qty": 800,
        "unit": "ml",
        "requiredId": "ing-237"
      },
      {
        "name": "Arroz Doble Carolina",
        "qty": 400,
        "unit": "g",
        "requiredId": "ing-289"
      },
      {
        "name": "Perejil Fresco",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-207"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Heat the oil in a large flameproof casserole dish and brown the chicken pieces on all sides – you may have to do this in batches. Remove from the dish and put to one side."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Lower the heat, add the onion and pepper, and gently cook for 10 mins until softened. Add the garlic and chorizo, and cook for a further 2 mins until the chorizo has released some of its oils into the dish. Stir in the tomato purée and cook for 1 min more.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Return the chicken pieces to the dish along with the thyme, white wine and stock. Bring the liquid to a boil, cover the dish with a tight-fitting lid and lower the heat. Cook for 30 mins.",
        "timerMinutes": 30
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Tip in the rice and stir everything together. Cover, set over a low heat and cook for a further 15 mins, or until the rice is cooked and has absorbed most of the cooking liquid. Remove from the heat and leave the dish to sit for 10 mins to absorb any remaining liquid. Season to taste and scatter with parsley to serve.",
        "timerMinutes": 15
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52846",
    "title": "Chicken & mushroom Hotpot",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 59,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg",
    "description": "Exquisito plato tradicional de autor (British), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-125"
      },
      {
        "name": "Onions",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-283"
      },
      {
        "name": "Champiñones Frescos",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-290"
      },
      {
        "name": "Plain Flour",
        "qty": 40,
        "unit": "g",
        "requiredId": "ing-240"
      },
      {
        "name": "Chicken Stock Cube",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-291"
      },
      {
        "name": "Nutmeg",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-292"
      },
      {
        "name": "Mustard Powder",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-293"
      },
      {
        "name": "Chicken Breasts",
        "qty": 250,
        "unit": "g",
        "requiredId": "ing-256"
      },
      {
        "name": "Sweetcorn",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-294"
      },
      {
        "name": "Red Potatoes",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-282"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-125"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Heat oven to 200C/180C fan/gas 6. Put the butter in a medium-size saucepan and place over a medium heat. Add the onion and leave to cook for 5 mins, stirring occasionally. Add the mushrooms to the saucepan with the onions.",
        "timerMinutes": 5
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Once the onion and mushrooms are almost cooked, stir in the flour – this will make a thick paste called a roux. If you are using a stock cube, crumble the cube into the roux now and stir well. Put the roux over a low heat and stir continuously for 2 mins – this will cook the flour and stop the sauce from having a floury taste.",
        "timerMinutes": 2
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Take the roux off the heat. Slowly add the fresh stock, if using, or pour in 500ml water if you’ve used a stock cube, stirring all the time. Once all the liquid has been added, season with pepper, a pinch of nutmeg and mustard powder. Put the saucepan back onto a medium heat and slowly bring it to the boil, stirring all the time. Once the sauce has thickened, place on a very low heat. Add the cooked chicken and vegetables to the sauce and stir well. Grease a medium-size ovenproof pie dish with a little butter and pour in the chicken and mushroom filling."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Carefully lay the potatoes on top of the hot-pot filling, overlapping them slightly, almost like a pie top."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Brush the potatoes with a little melted butter and cook in the oven for about 35 mins. The hot-pot is ready once the potatoes are cooked and golden brown.",
        "timerMinutes": 35
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52796",
    "title": "Fettuccine Alfredo con Pollo y Crema",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg",
    "description": "Exquisito plato tradicional de autor (Italian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-125"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-216"
      },
      {
        "name": "Chicken Breasts",
        "qty": 5000,
        "unit": "ml",
        "requiredId": "ing-256"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Squash",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-295"
      },
      {
        "name": "Broccoli",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-238"
      },
      {
        "name": "Champiñones Frescos",
        "qty": 8000,
        "unit": "ml",
        "requiredId": "ing-290"
      },
      {
        "name": "Cayenne Pepper",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-267"
      },
      {
        "name": "Onions",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-283"
      },
      {
        "name": "Garlic Clove",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Red pepper flakes",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-296"
      },
      {
        "name": "White Wine Vinegar",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-253"
      },
      {
        "name": "Coconut Milk",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-272"
      },
      {
        "name": "Crema de Leche",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-8"
      },
      {
        "name": "Queso Parmesano",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-297"
      },
      {
        "name": "Bowtie pasta",
        "qty": 16,
        "unit": "g",
        "requiredId": "ing-298"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Cayenne Pepper",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-267"
      },
      {
        "name": "Perejil Fresco",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-207"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Heat 1 tablespoon of butter and 2 tablespoons of olive oil in a large skillet over medium-high heat. Season both sides of each chicken breast with seasoned salt and a pinch of pepper. Add the chicken to the skillet and cook for 5-7 minutes on each side, or until cooked through.  While the chicken is cooking, bring a large pot of water to a boil. Season the boiling water with a few generous pinches of kosher salt. Add the pasta and give it a stir. Cook, stirring occasionally, until al dente, about 12 minutes. Reserve 1/2 cup of  pasta water before draining the pasta.  Remove the chicken from the pan and transfer it to a cutting board; allow it to rest. Turn the heat down to medium and dd the remaining 1 tablespoon of butter and olive oil to the same pan you used to cook the chicken. Add the veggies (minus the garlic) and red pepper flakes to the pan and stir to coat with the oil and butter (refrain from seasoning with salt until the veggies are finished browning). Cook, stirring often, until the veggies are tender, about 5 minutes. Add the garlic and a generous pinch of salt and pepper to the pan and cook for 1 minute.  Deglaze the pan with the white wine. Continue to cook until the wine has reduced by half, about 3 minutes. Stir in the milk, heavy cream, and reserved pasta water. Bring the mixture to a gentle boil and allow to simmer and reduce for 2-3 minutes. Turn off the heat and add the Parmesan cheese and cooked pasta. Season with salt and pepper to taste. Garnish with Parmesan cheese and chopped parsley, if desired.",
        "timerMinutes": 7
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53459",
    "title": "Chicken and Potato Roti",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/mp9z0i1782238092.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Plain Flour",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-240"
      },
      {
        "name": "Shortening",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-299"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Agua Filtrada",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-208"
      },
      {
        "name": "Chicken Breasts",
        "qty": 6,
        "unit": "g",
        "requiredId": "ing-256"
      },
      {
        "name": "Perejil Fresco",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-207"
      },
      {
        "name": "Tomillo",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-231"
      },
      {
        "name": "Jerk",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-300"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Icing Sugar",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-287"
      },
      {
        "name": "Pimienta Negra Molida",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-205"
      },
      {
        "name": "Onions",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-283"
      },
      {
        "name": "Garlic Clove",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Scotch Bonnet",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-226"
      },
      {
        "name": "Red Potatoes",
        "qty": 500,
        "unit": "ml",
        "requiredId": "ing-282"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Add a pint of chicken stock to the simmer and put three tablespoons of sugar into a large saucepan on high; cook until the sugar caramelizes, then add the cubed chicken breasts and stir until the chicken browns."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Add chopped onions, garlic, parsley, thyme, jerk seasoning, salt, and the whole scotch bonnet pepper – do not cut up the pepper! Reduce the heat to low and let this simmer for 25 minutes.",
        "timerMinutes": 25
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "In a large mixing bowl, sift the flour, and add a pinch of salt to taste."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Now add the first tablespoon of shortening, and with your fingers, rub the flour into the shortening until it forms a breadcrumb-like consistency."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Then add the second tablespoon of shortening and rub against the flour until it looks like breadcrumbs."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Now add the third tablespoon of shortening and repeat the process."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52885",
    "title": " Bubble & Squeak",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 39,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/xusqvw1511638311.jpg",
    "description": "Exquisito plato tradicional de autor (British), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-125"
      },
      {
        "name": "Panceta Ahumada",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-36"
      },
      {
        "name": "Onions",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-283"
      },
      {
        "name": "Garlic Clove",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-266"
      },
      {
        "name": "Brussels Sprouts",
        "qty": 20,
        "unit": "g",
        "requiredId": "ing-301"
      },
      {
        "name": "Red Potatoes",
        "qty": 400,
        "unit": "g",
        "requiredId": "ing-282"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Melt the fat in a non-stick pan, allow it to get nice and hot, then add the bacon. As it begins to brown, add the onion and garlic. Next, add the sliced sprouts or cabbage and let it colour slightly. All this will take 5-6 mins.",
        "timerMinutes": 6
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Next, add the potato. Work everything together in the pan and push it down so that the mixture covers the base of the pan – allow the mixture to catch slightly on the base of the pan before turning it over and doing the same again. It’s the bits of potato that catch in the pan that define the term ‘bubble and squeak’, so be brave and let the mixture colour. Cut into wedges and serve."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53156",
    "title": "Arroz al horno (baked rice)",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/qt4i0n1763256454.jpg",
    "description": "Exquisito plato tradicional de autor (Spanish), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 30,
        "unit": "g",
        "requiredId": "ing-216"
      },
      {
        "name": "Pork belly slices",
        "qty": 800,
        "unit": "g",
        "requiredId": "ing-302"
      },
      {
        "name": "Black Pudding",
        "qty": 150,
        "unit": "g",
        "requiredId": "ing-303"
      },
      {
        "name": "Bacon lardon",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-304"
      },
      {
        "name": "Onions",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-283"
      },
      {
        "name": "Red pepper flakes",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-296"
      },
      {
        "name": "Plum Tomatoes",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-206"
      },
      {
        "name": "Garlic Clove",
        "qty": 8,
        "unit": "un",
        "requiredId": "ing-266"
      },
      {
        "name": "Pimentón Dulce",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-214"
      },
      {
        "name": "Chilli Flakes",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-305"
      },
      {
        "name": "Dried white beans",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-306"
      },
      {
        "name": "Chicken Stock Cube",
        "qty": 500,
        "unit": "ml",
        "requiredId": "ing-291"
      },
      {
        "name": "Tomillo",
        "qty": 6,
        "unit": "g",
        "requiredId": "ing-231"
      },
      {
        "name": "Paella Rice",
        "qty": 375,
        "unit": "g",
        "requiredId": "ing-307"
      },
      {
        "name": "Lemon Juice",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-258"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Heat oven to 200C/180C/gas 6. Heat half the oil in a deep frying or sauté pan (or shallow casserole dish) measuring around 30cm in diameter. Over a high heat, colour the pork belly slices on each side in several batches, then transfer to a bowl. Add the remaining oil to the pan and lower the heat to medium, then add the black pudding and bacon and fry all over for several mins. Remove with a slotted spoon. Fry the onion and peppers for around 10 mins until soft and pale gold, then add the tomato and cook until soft. Add the garlic, smoked paprika and chilli flakes and cook for another 2 mins, then put the pork, black pudding and bacon back in the pan. Add the beans, stock and whichever herb you're using, and bring everything to the boil.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Sprinkle the rice around the pork belly, pushing it underneath the stock. Let the stock come to the boil again, season well, then transfer to the oven (leave it uncovered). Cook for 20 mins without stirring, then check to see how the rice is doing. The rice should be tender and the stock absorbed. If it’s not ready, put back in the oven for another 5 mins, then check again. Taste for seasoning.",
        "timerMinutes": 20
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Squeeze lemon juice over the top and drizzle over some extra virgin olive oil just before serving, if you like."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53496",
    "title": "Bai Sach Chrouk – Grilled Pork with Rice",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/f0cdwk1782688162.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Pork Shoulder",
        "qty": 650,
        "unit": "g",
        "requiredId": "ing-308"
      },
      {
        "name": "Coconut Milk",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-272"
      },
      {
        "name": "Salsa de Soja",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-232"
      },
      {
        "name": "Oyster Sauce",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-236"
      },
      {
        "name": "Cerveza Artesanal IPA / Honey / Stout",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-192"
      },
      {
        "name": "Garlic Clove",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Pimienta Negra Molida",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-205"
      },
      {
        "name": "Jasmine Rice",
        "qty": 400,
        "unit": "g",
        "requiredId": "ing-309"
      },
      {
        "name": "Agua Filtrada",
        "qty": 800,
        "unit": "g",
        "requiredId": "ing-208"
      },
      {
        "name": "Vegetable Oil",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-285"
      },
      {
        "name": "Pepino",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-310"
      },
      {
        "name": "Cilantro Leaves",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-311"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "In a large bowl, combine the coconut milk, soy sauce, oyster sauce, honey, minced garlic, and black pepper to make the marinade."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Add the thinly sliced pork shoulder to the marinade, ensuring each piece is fully coated, then cover and refrigerate for at least 30 minutes to allow the flavors to penetrate.",
        "timerMinutes": 30
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "While the pork marinates, rinse the jasmine rice under cold water until the water runs clear to remove excess starch, which helps prevent clumping."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "In a medium pot, combine the rinsed rice and 4 cups of water, bring to a boil over high heat, then reduce to a simmer, cover, and cook for 15 minutes until the water is absorbed and the rice is tender.",
        "timerMinutes": 15
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Heat a grill pan or outdoor grill to medium-high heat (about 400°F) and lightly brush with vegetable oil to prevent sticking."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Remove the pork from the marinade, shaking off any excess, and place it on the hot grill, cooking for 3-4 minutes per side until nicely charred and cooked through with an internal temperature of 145°F.",
        "timerMinutes": 4
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53242",
    "title": "Barbecue pork buns",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 55,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/tzsy461763769901.jpg",
    "description": "Exquisito plato tradicional de autor (Vietnamese), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Icing Sugar",
        "qty": 85,
        "unit": "g",
        "requiredId": "ing-287"
      },
      {
        "name": "White Bread Mix",
        "qty": 500,
        "unit": "g",
        "requiredId": "ing-312"
      },
      {
        "name": "Sunflower Oil",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-313"
      },
      {
        "name": "Bacon lardon",
        "qty": 12,
        "unit": "g",
        "requiredId": "ing-304"
      },
      {
        "name": "Ginger Garlic Paste",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-279"
      },
      {
        "name": "Garlic Clove",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Salsa de Soja",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-232"
      },
      {
        "name": "Clear Honey",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-314"
      },
      {
        "name": "Tomato Puree",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-252"
      },
      {
        "name": "Queso Parmesano / Reggianito para rallar",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-9"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Heat the oven to 200C/fan 180C/gas. Mix the sugar into the bread mix in a large bowl, then add water as instructed on the pack. Bring the dough together with a wooden spoon, then knead on a lightly floured surface for 5 mins until smooth. Put into a large bowl, cover with oiled cling film then leave in a warm place until doubled in size.",
        "timerMinutes": 5
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Meanwhile, heat the oil in a pan, then fry the bacon until crisp, about 5 mins. Add the ginger and garlic and fry for 1 min until soft, then tip in the soy, honey and tomato purée and stir well. Can be made up to 3 days ahead.",
        "timerMinutes": 5
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Turn out the dough and knead briefly, then pull into 12 even-sized balls. Flatten with your hands, then put a teaspoon-size blob of the filling in the middle. Draw the dough up and pinch it closed like a purse, then turn the bun over and sit it on a large baking sheet. Cover with oiled cling film and leave to rise for about 30 mins until the dough feels pillowy. Brush with egg and bake for 20 mins until golden. Serve warm with dipping sauce. Can be frozen after second rise for up to 1 month or baked up to a day ahead and re-warmed.",
        "timerMinutes": 30
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52995",
    "title": "BBQ Pork Sloppy Joes",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/atd5sh1583188467.jpg",
    "description": "Exquisito plato tradicional de autor (United States), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Red Potatoes",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-282"
      },
      {
        "name": "Onions",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-283"
      },
      {
        "name": "Garlic Clove",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Lime juice",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-225"
      },
      {
        "name": "Naan Bread",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-220"
      },
      {
        "name": "Pork belly slices",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-302"
      },
      {
        "name": "Barbeque Sauce",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-315"
      },
      {
        "name": "Hotsauce",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-257"
      },
      {
        "name": "Tomato Ketchup",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-316"
      },
      {
        "name": "Icing Sugar",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-287"
      },
      {
        "name": "Vegetable Oil",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-285"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Cayenne Pepper",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-267"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Preheat oven to 450 degrees. Wash and dry all produce. Cut sweet potatoes into ½-inch-thick wedges. Toss on a baking sheet with a drizzle of oil, salt, and pepper. Roast until browned and tender, 20-25 minutes.",
        "timerMinutes": 25
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Meanwhile, halve and peel onion. Slice as thinly as possible until you have ¼ cup (½ cup for 4 servings); finely chop remaining onion. Peel and finely chop garlic. Halve lime; squeeze juice into a small bowl. Halve buns. Add 1 TBSP butter (2 TBSP for 4) to a separate small microwave-safe bowl; microwave until melted, 30 seconds. Brush onto cut sides of buns."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "To bowl with lime juice, add sliced onion, ¼ tsp sugar (½ tsp for 4 servings), and a pinch of salt. Stir to combine; set aside to quick-pickle."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Heat a drizzle of oil in a large pan over medium-high heat. Add chopped onion and season with salt and pepper. Cook, stirring, until softened, 4-5 minutes. Add garlic and cook until fragrant, 30 seconds more. Add pork and season with salt and pepper. Cook, breaking up meat into pieces, until browned and cooked through, 4-6 minutes.",
        "timerMinutes": 5
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "While pork cooks, in a third small bowl, combine BBQ sauce, pickling liquid from onion, 3 TBSP ketchup (6 TBSP for 4 servings), ½ tsp sugar (1 tsp for 4), and ¼ cup water (⅓ cup for 4). Once pork is cooked through, add BBQ sauce mixture to pan. Cook, stirring, until sauce is thickened, 2-3 minutes. Taste and season with salt and pepper.",
        "timerMinutes": 3
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Meanwhile, toast buns in oven or toaster oven until golden, 3-5 minutes. Divide toasted buns between plates and fill with as much BBQ pork as you’d like. Top with pickled onion and hot sauce. Serve with sweet potato wedges on the side.",
        "timerMinutes": 5
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53468",
    "title": "Belgian Stoemp",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/byolko1782500400.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Sausages",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-317"
      },
      {
        "name": "Red Potatoes",
        "qty": 450,
        "unit": "g",
        "requiredId": "ing-282"
      },
      {
        "name": "Cabbage",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-260"
      },
      {
        "name": "Garlic Clove",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Perejil Fresco",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-207"
      },
      {
        "name": "Onions",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-283"
      },
      {
        "name": "Unsalted Butter",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-278"
      },
      {
        "name": "Beer",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-318"
      },
      {
        "name": "Whole Milk",
        "qty": 60,
        "unit": "ml",
        "requiredId": "ing-319"
      },
      {
        "name": "Nutmeg",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-292"
      },
      {
        "name": "Cayenne Pepper",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-267"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Add the chopped potatoes and garlic to a high pan and fill it with tap water until the potatoes are fully submerged."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Add some salt. Then place the pan over high heat and bring the potatoes to a boil. Cook them until tender. In the meantime rinse and drain the savoy cabbage. Slice it up finely."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Add a tablespoon of butter to a large non-stick pan. Place it over medium-high heat. Once melted, add the savoy cabbage. Season with a pinch of pepper and salt."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Stir fry the cabbage for 15 to 20 minutes or until the cabbage is soft and tender. Then turn the heat off and take the cabbage off the heat. In the meantime, pan fry the sausages (or sliced bacon if you are using both) in a non-stick pan in a tablespoon of butter or oil until golden brown and cooked through.",
        "timerMinutes": 20
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Transfer the sausages (and bacon) to a plate and cover with a lid or tinfoil to keep the meat warm. In the same greasy pan, add the sliced onion and extra butter and cook it gently over medium heat for 10 minutes until softened. (I often add diced bacon as well, if I only serve the stoemp with sausages.)",
        "timerMinutes": 10
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Then add the beer and turn the heat up. Let the beer reduce until you get a nice beer and onion sauce (you can add a little flour or sauce thickener if you like). Add the pan fried meat back to the pan and cover to keep warm."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53018",
    "title": "Bigos (Hunters Stew)",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/md8w601593348504.jpg",
    "description": "Exquisito plato tradicional de autor (Polish), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Bacon lardon",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-304"
      },
      {
        "name": "Kielbasa",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-320"
      },
      {
        "name": "Pork belly slices",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-302"
      },
      {
        "name": "Plain Flour",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-240"
      },
      {
        "name": "Garlic Clove",
        "qty": 3,
        "unit": "un",
        "requiredId": "ing-266"
      },
      {
        "name": "Onions",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-283"
      },
      {
        "name": "Champiñones Frescos",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-290"
      },
      {
        "name": "Cabbage",
        "qty": 800,
        "unit": "g",
        "requiredId": "ing-260"
      },
      {
        "name": "Sauerkraut",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-321"
      },
      {
        "name": "Vino Malbec Reserva",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-242"
      },
      {
        "name": "Bay Leaf",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-248"
      },
      {
        "name": "Albahaca Fresca",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-230"
      },
      {
        "name": "Marjoram",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-322"
      },
      {
        "name": "Pimentón Dulce",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-214"
      },
      {
        "name": "Caraway Seed",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-323"
      },
      {
        "name": "Hotsauce",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-257"
      },
      {
        "name": "Beef Stock Concentrate",
        "qty": 1000,
        "unit": "g",
        "requiredId": "ing-251"
      },
      {
        "name": "Tomato Puree",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-252"
      },
      {
        "name": "Diced Tomatoes",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-324"
      },
      {
        "name": "Worcestershire Sauce",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-325"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Preheat the oven to 350 degrees F (175 degrees C)."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Heat a large pot over medium heat. Add the bacon and kielbasa; cook and stir until the bacon has rendered its fat and sausage is lightly browned. Use a slotted spoon to remove the meat and transfer to a large casserole or Dutch oven."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Coat the cubes of pork lightly with flour and fry them in the bacon drippings over medium-high heat until golden brown. Use a slotted spoon to transfer the pork to the casserole. Add the garlic, onion, carrots, fresh mushrooms, cabbage and sauerkraut. Reduce heat to medium; cook and stir until the carrots are soft, about 10 minutes. Do not let the vegetables brown.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Deglaze the pan by pouring in the red wine and stirring to loosen all of the bits of food and flour that are stuck to the bottom. Season with the bay leaf, basil, marjoram, paprika, salt, pepper, caraway seeds and cayenne pepper; cook for 1 minute.",
        "timerMinutes": 1
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Mix in the dried mushrooms, hot pepper sauce, Worcestershire sauce, beef stock, tomato paste and tomatoes. Heat through just until boiling. Pour the vegetables and all of the liquid into the casserole dish with the meat. Cover with a lid."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Bake in the preheated oven for 2 1/2 to 3 hours, until meat is very tender."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53036",
    "title": "Boxty Breakfast",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 59,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/naqyel1608588563.jpg",
    "description": "Exquisito plato tradicional de autor (Irish), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Red Potatoes",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-282"
      },
      {
        "name": "Onions",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-283"
      },
      {
        "name": "Plain Flour",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-240"
      },
      {
        "name": "Egg White",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-326"
      },
      {
        "name": "Coconut Milk",
        "qty": 150,
        "unit": "ml",
        "requiredId": "ing-272"
      },
      {
        "name": "Bicarbonate Of Soda",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-327"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 3,
        "unit": "un",
        "requiredId": "ing-125"
      },
      {
        "name": "Vegetable Oil",
        "qty": 2,
        "unit": "un",
        "requiredId": "ing-285"
      },
      {
        "name": "Cherry Tomatoes",
        "qty": 6,
        "unit": "g",
        "requiredId": "ing-328"
      },
      {
        "name": "Bacon lardon",
        "qty": 12,
        "unit": "g",
        "requiredId": "ing-304"
      },
      {
        "name": "Queso Parmesano / Reggianito para rallar",
        "qty": 6,
        "unit": "g",
        "requiredId": "ing-9"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Before you start, put your oven on its lowest setting, ready to keep things warm. Peel the potatoes, grate 2 of them, then set aside. Cut the other 2 into large chunks, then boil for 10-15 mins or until tender. Meanwhile, squeeze as much of the liquid from the grated potatoes as you can using a clean tea towel. Mash the boiled potatoes, then mix with the grated potato, spring onions and flour.",
        "timerMinutes": 15
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Whisk the egg white in a large bowl until it holds soft peaks. Fold in the buttermilk, then add the bicarbonate of soda. Fold into the potato mix."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Heat a large non-stick frying pan over a medium heat, then add 1 tbsp butter and some of the oil. Drop 3-4 spoonfuls of the potato mixture into the pan, then gently cook for 3-5 mins on each side until golden and crusty. Keep warm on a plate in the oven while you cook the next batch, adding more butter and oil to the pan before you do so. You will get 16 crumpet-size boxty from the mix. Can be made the day ahead, drained on kitchen paper, then reheated in a low oven for 20 mins.",
        "timerMinutes": 5
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Heat the grill to medium and put the tomatoes in a heavy-based pan. Add a good knob of butter and a little oil, then fry for about 5 mins until softened. Grill the bacon, then pile onto a plate and keep warm. Stack up the boxty, bacon and egg, and serve the tomatoes on the side.",
        "timerMinutes": 5
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53190",
    "title": "Bryndzové Halušky",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 43,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/g33c901763365484.jpg",
    "description": "Exquisito plato tradicional de autor (Slovakia), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Red Potatoes",
        "qty": 500,
        "unit": "g",
        "requiredId": "ing-282"
      },
      {
        "name": "Plain Flour",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-240"
      },
      {
        "name": "Queso Parmesano / Reggianito para rallar",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-9"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Bryndza cheese",
        "qty": 250,
        "unit": "g",
        "requiredId": "ing-329"
      },
      {
        "name": "Bacon lardon",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-304"
      },
      {
        "name": "Chives",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-330"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Prepare the Dough"
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Grate the potatoes finely using a hand grater or food processor. Place the grated potatoes in a bowl and mix them with flour, egg, and salt until a sticky dough forms. The consistency should be thick but pliable."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Cook the Dumplings"
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Bring a large pot of salted water to a boil. Using a halušky maker (similar to a spaetzle maker), press the dough directly into the boiling water. If you don’t have one, use a tilted cutting board and a knife to scrape small pieces of dough into the water."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Let the dumplings cook until they float to the surface, usually within 2-3 minutes. Scoop them out with a slotted spoon and set aside in a large bowl.",
        "timerMinutes": 3
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Prepare the Toppings"
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53418",
    "title": "Cambodian Stir-fried Morning Glory with Pork, Fermented Soybeans, and Garlic",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 47,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/wympxc1779734808.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Morning Glory",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-331"
      },
      {
        "name": "Minced Pork",
        "qty": 150,
        "unit": "g",
        "requiredId": "ing-332"
      },
      {
        "name": "Soya Bean",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-333"
      },
      {
        "name": "Garlic Clove",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-216"
      },
      {
        "name": "Fish Sauce",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-334"
      },
      {
        "name": "Icing Sugar",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-287"
      },
      {
        "name": "Chilli Flakes",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-305"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "In a wok or large pan, heat 1 tablespoon of vegetable oil over medium heat. Once the oil is hot, add the garlic and stir-fry for about 30 seconds, until fragrant but not burnt."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Add the minced pork to the pan and break it up with a spatula. Stir-fry until the pork is fully cooked and browned, about 2-3 minutes.",
        "timerMinutes": 3
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Stir in the fermented soy beans and cook for another minute, mixing it thoroughly with the pork."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Toss in the cut morning glory and stir-fry for 2-3 minutes to retain its bright green colour and crisp texture.",
        "timerMinutes": 3
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Check the seasoning and adjust with fish sauce or sugar if needed. Transfer to a serving dish and serve immediately with steamed rice."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53262",
    "title": "Adana kebab",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 35,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/04axct1763793018.jpg",
    "description": "Exquisito plato tradicional de autor (Turkish), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Romano Pepper",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-335"
      },
      {
        "name": "Lamb Mince",
        "qty": 800,
        "unit": "g",
        "requiredId": "ing-336"
      },
      {
        "name": "Red Pepper Paste",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-337"
      },
      {
        "name": "Pul Biber",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-338"
      },
      {
        "name": "Sunflower Oil",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-313"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Finely chop the peppers in a food processor, then tip them in a sieve and press into the sieve so that the peppers release all of their juices. Tip into a bowl along with the mince, red pepper paste, pul biber, 1½ tsp flaky sea salt, and 2 tbsp of the oil. Mix together, kneading well for at least 2-3 mins. If you need to, wet your hands with cold water to prevent the mixture from sticking. The mixture should be sticky when ready. Cover and chill for at least 2 hrs, or up to 12 hrs.",
        "timerMinutes": 3
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "When ready to cook, heat the grill to high or an oven to 220C/200C fan/gas 6. Divide the mixture into 12 equal portions, around 85g each. If you’d like to skewer them, divide into 8 equal portions and roll into balls. Using wet hands, thread the balls onto the end of the skewers, massaging the mixture down the skewers in between the palms of your hands, until evenly distributed. Ensure that the mixture is fully wrapped tightly around the skewers without any exposed metal. Alternatively, lay them on a large baking tray lined with parchment paper if cooking in the oven, or foil if cooking under the grill. Shape into 20cm-long köfte. Wet your fingers with a little cold water and make indents all along the köfte for the traditional shape."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Gently brush each köfte with the remaining 1 tbsp oil and cook under the grill, on the top shelf for 10-12 mins, turning regularly, or cook in the oven for 16-18 mins, until crispy on the outside and juicy in the middle",
        "timerMinutes": 12
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53265",
    "title": "Chilli ginger lamb chops",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 43,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/8xuvhj1763794991.jpg",
    "description": "Exquisito plato tradicional de autor (Turkish), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Garlic Clove",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Ginger Garlic Paste",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-279"
      },
      {
        "name": "Lemon Juice",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-258"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-216"
      },
      {
        "name": "Chili Powder",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-339"
      },
      {
        "name": "Ground Cumin",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-281"
      },
      {
        "name": "Lamb Loin Chops",
        "qty": 8,
        "unit": "g",
        "requiredId": "ing-340"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Put the garlic in a bowl with the ginger, lemon juice, oil, spices and seasoning. Blitz with a hand blender until smooth, then use to coat the lamb chops on both sides. Leave to marinate in the fridge for a couple of hours or overnight."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Heat a barbecue until hot. Barbecue the chops over the coals for 3 mins on each side until cooked but still pink and juicy in the centre.",
        "timerMinutes": 3
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53289",
    "title": "Chorba Hamra bel Frik (Algerian Lamb, Tomato, and Freekeh Soup)",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/p9tebp1764118792.jpg",
    "description": "Exquisito plato tradicional de autor (Algerian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Freekeh",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-341"
      },
      {
        "name": "Lamb Mince",
        "qty": 12,
        "unit": "g",
        "requiredId": "ing-336"
      },
      {
        "name": "Onions",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-283"
      },
      {
        "name": "Pimienta Negra Molida",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-205"
      },
      {
        "name": "Pimentón Dulce",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-214"
      },
      {
        "name": "Ground Cinnamon",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-342"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Vegetable Oil",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-285"
      },
      {
        "name": "Cilantro fresco",
        "qty": 1,
        "unit": "atado",
        "requiredId": "ing-85"
      },
      {
        "name": "Mint",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-343"
      },
      {
        "name": "Celery",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-275"
      },
      {
        "name": "Chickpeas",
        "qty": 14,
        "unit": "g",
        "requiredId": "ing-344"
      },
      {
        "name": "Agua Filtrada",
        "qty": 800,
        "unit": "g",
        "requiredId": "ing-208"
      },
      {
        "name": "Zucchini / Calabacín",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-51"
      },
      {
        "name": "Zanahoria",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-44"
      },
      {
        "name": "Tomato Puree",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-252"
      },
      {
        "name": "Plum Tomatoes",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-206"
      },
      {
        "name": "Red Potatoes",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-282"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Place freekeh in a small bowl and cover with cold water. Set aside."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Combine lamb, onion, black pepper, paprika, cinnamon, and salt in a pot. Stir in oil, 1/2 the cilantro, 1/2 the mint, and celery stalk until combined. Simmer over low heat for 15 minutes. Stir in chickpeas; pour in just enough water to cover, and return to a simmer. Stir in zucchini, carrot, and tomato paste.",
        "timerMinutes": 15
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Set a steamer over the pot; add tomatoes. Cover and steam tomatoes until soft, about 5 minutes. Crush tomatoes using a wooden spoon, so pulp drips into soup. Remove the steamer and discard leftover tomato peels.",
        "timerMinutes": 5
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Add potato to soup and just enough water to cover. Simmer until potato is soft, about 10 minutes.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Drain freekeh and add to soup. Simmer until soft, about 15 minutes. Remove celery stalk and discard. Sprinkle soup with remaining 1/2 cilantro and remaining 1/2 mint before serving.",
        "timerMinutes": 15
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53123",
    "title": "Fårikål (Norwegian National Dish)",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 39,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/ttfxxn1762773067.jpg",
    "description": "Exquisito plato tradicional de autor (Norway), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Lamb Mince",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-336"
      },
      {
        "name": "Cabbage",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-260"
      },
      {
        "name": "Whole black peppercorns",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-345"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 15,
        "unit": "g",
        "requiredId": "ing-168"
      },
      {
        "name": "Agua Filtrada",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-208"
      },
      {
        "name": "Plain Flour",
        "qty": 5000,
        "unit": "ml",
        "requiredId": "ing-240"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Cut the lamb into large pieces."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Slice the cabbage into large wedges, keeping the core attached."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Add a layer of lamb pieces to the bottom of a large pot, fatty side down. Sprinkle with peppercorns and salt. Add a layer of cabbage wedges on top. Repeat with more layers of lamb, peppercorns, and cabbage, ending with cabbage on top."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Optional: Sprinkle a couple of tablespoons on top of the lamb for a thicker stew."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Add water to the pot and bring to a boil. Cover and reduce heat. Cook on low heat for 2 – 3 hours, until the lamb gently falls away from the bone."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Serve with boiled potatoes and fresh parsley, covering generously with the fårikål broth."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53258",
    "title": "Hot cumin lamb wrap with crunchy slaw & spicy mayo",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 59,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/jyylmo1763790808.jpg",
    "description": "Exquisito plato tradicional de autor (Turkish), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Lamb Leg",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-346"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 10,
        "unit": "g",
        "requiredId": "ing-216"
      },
      {
        "name": "Ground Cumin",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-281"
      },
      {
        "name": "Icing Sugar",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-287"
      },
      {
        "name": "White Wine Vinegar",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-253"
      },
      {
        "name": "Zanahoria",
        "qty": 2,
        "unit": "un",
        "requiredId": "ing-44"
      },
      {
        "name": "Onions",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-283"
      },
      {
        "name": "Cabbage",
        "qty": 400,
        "unit": "g",
        "requiredId": "ing-260"
      },
      {
        "name": "Sweet Peppadew Peppers",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-347"
      },
      {
        "name": "Mayonesa",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-261"
      },
      {
        "name": "Pita Bread",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-348"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Heat a griddle pan. Rub the lamb steaks with the oil, cumin and some seasoning. Griddle for about 3-4 mins on each side or until cooked to your liking. Place to one side on a plate to rest.",
        "timerMinutes": 4
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "In a large bowl, stir the sugar into the vinegar until dissolved. Add the carrots, spring onions, cabbage and some seasoning, and toss together."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Blitz the whole peppers and the mayo in a food processor. Add a heap of the salad to each flatbread. Slice the lamb, trimming off any excess fat and lay on top of the salad, drizzling with the resting juices. Spoon over the mayo and scatter with a few of the sliced peppers. Roll up and eat. If using pitta, split and stuff. Serve any extra salad on the side."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53253",
    "title": "Imam bayildi with BBQ lamb & tzatziki",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/ampz9v1763787134.jpg",
    "description": "Exquisito plato tradicional de autor (Turkish), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Aubergine",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-349"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-216"
      },
      {
        "name": "Onions",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-283"
      },
      {
        "name": "Garlic Clove",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Cinnamon Stick",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-227"
      },
      {
        "name": "Plum Tomatoes",
        "qty": 8,
        "unit": "g",
        "requiredId": "ing-206"
      },
      {
        "name": "Perejil Fresco",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-207"
      },
      {
        "name": "Lamb Loin Chops",
        "qty": 12,
        "unit": "g",
        "requiredId": "ing-340"
      },
      {
        "name": "Pimentón Dulce",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-214"
      },
      {
        "name": "Lemon Juice",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-258"
      },
      {
        "name": "Greek Yogurt",
        "qty": 150,
        "unit": "g",
        "requiredId": "ing-350"
      },
      {
        "name": "Pepino",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-310"
      },
      {
        "name": "Mint",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-343"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Heat oven to 190C/170C fan/gas 5. Halve the aubergines lengthways and score the flesh side deeply, brush with a good layer of olive oil and put on a baking sheet. Roast for 20 mins or until the flesh is soft enough to scoop out.",
        "timerMinutes": 20
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Fry the onion in a little oil until soft, add the garlic and cinnamon and fry for 1 min. Once the aubergines are cool enough to handle, scoop out the centres. Roughly chop the flesh and add it to the onions. Halve the tomatoes, scoop the seeds and juice into a sieve set over a bowl, then chop the flesh. Add the chopped tomatoes to the pan and cook everything for 10 mins until nice and soft. Add a little more oil if you need to. Stir in the parsley, leaving a little for scattering at the end.",
        "timerMinutes": 1
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Lay the aubergine halves in a baking dish and divide the tomato mixture between them. Pour over the juice from the tomatoes, drizzle with more olive oil and bake for 30 mins until the aubergines have collapsed.",
        "timerMinutes": 30
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Meanwhile, mix the tzatziki ingredients together and put in a small serving bowl."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Season the lamb with salt, black pepper and a pinch of paprika. Griddle, grill or barbecue for 3 mins on each side or until the fat is nicely browned, then put in a serving dish and squeeze over the lemon halves. Scatter the aubergines with parsley, then serve with the lamb and tzatziki.",
        "timerMinutes": 3
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52769",
    "title": "Kapsalon",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 47,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/sxysrt1468240488.jpg",
    "description": "Exquisito plato tradicional de autor (Netherlands), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Fries",
        "qty": 250,
        "unit": "g",
        "requiredId": "ing-351"
      },
      {
        "name": "Doner Meat",
        "qty": 500,
        "unit": "g",
        "requiredId": "ing-352"
      },
      {
        "name": "Garlic sauce",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-353"
      },
      {
        "name": "Hotsauce",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-257"
      },
      {
        "name": "Lettuce",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-263"
      },
      {
        "name": "Plum Tomatoes",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-206"
      },
      {
        "name": "Pepino",
        "qty": 3,
        "unit": "un",
        "requiredId": "ing-310"
      },
      {
        "name": "Gouda cheese",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-354"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Cut the meat into strips. Heat oil in a pan and fry the strips for 6 minutes until it's ready.",
        "timerMinutes": 6
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Bake the fries until golden brown in a deep fryrer. When ready transfer to a backing dish. Make sure the fries are spread over the whole dish."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Cover the fries with a new layer of meat and spread evenly."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Add a layer of cheese over the meat. You can also use grated cheese. When done put in the oven for a few minutes until the cheese is melted."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Chop the lettuce, tomato and cucumber in small pieces and mix together. for a basic salad. As extra you can add olives jalapenos and a red union."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Dived the salad over the dish and Serve with garlicsauce and hot sauce"
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53449",
    "title": "Kelem dolmasi",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/7vdtqi1780160088.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Lamb Mince",
        "qty": 500,
        "unit": "g",
        "requiredId": "ing-336"
      },
      {
        "name": "Cabbage",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-260"
      },
      {
        "name": "Onions",
        "qty": 8,
        "unit": "un",
        "requiredId": "ing-283"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Cayenne Pepper",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-267"
      },
      {
        "name": "Turmeric",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-268"
      },
      {
        "name": "Cinnamon Stick",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-227"
      },
      {
        "name": "Cilantro fresco",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-85"
      },
      {
        "name": "Dill",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-355"
      },
      {
        "name": "Paella Rice",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-307"
      },
      {
        "name": "Chickpeas",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-344"
      },
      {
        "name": "Lamb Fat",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-356"
      },
      {
        "name": "Tomato Puree",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-252"
      },
      {
        "name": "Agua Filtrada",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-208"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "First boil the rice for eight minutes. Meanwhile, peel and finely chop the onion. Then chop the herbs."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "The recipe didn't really say what to do with the chickpeas (also known of course as garbanzo beans), beyond soaking them overnight and rinsing them. I used canned chickpeas, since I've never actually seen them dried. I decided to chop/mash them slightly so they would better incorporate into the filling."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Chickpeas (or garbanzo beans) roughly chopped"
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Now mince the lamb (I used my mini food processor). Here's where I ran into another problem: what to do with the lamb fat this recipe calls for? Mince it? Melt it? Does lamb fat even melt? I decided to mince mine. Thankfully, my husband doesn't actually read this blog because he'd be horrified if he knew I put fat in the dolma on purpose."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Minced lamb and its good friend, minced fat. Ew."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "The ingredients for the dolma stuffing include onion, cilantro, chickpeas and turmeric."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52974",
    "title": "Keleya Zaara",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 47,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/8x09hy1560460923.jpg",
    "description": "Exquisito plato tradicional de autor (Tunisian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-216"
      },
      {
        "name": "Lamb Mince",
        "qty": 750,
        "unit": "g",
        "requiredId": "ing-336"
      },
      {
        "name": "Saffron",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-357"
      },
      {
        "name": "Onions",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-283"
      },
      {
        "name": "Agua Filtrada",
        "qty": 25,
        "unit": "ml",
        "requiredId": "ing-208"
      },
      {
        "name": "Perejil Fresco",
        "qty": 30,
        "unit": "g",
        "requiredId": "ing-207"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-125"
      },
      {
        "name": "Lemon Juice",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-258"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Heat the vegetable oil in a large frying pan over medium-high heat. Add the lamb and cook until browned on all sides, about 5 minutes. Season with saffron, salt and pepper to taste; stir in all but 4 tablespoons of the onion, and pour in the water. Bring to the boil, then cover, reduce heat to medium-low, and simmer until the lamb is tender, about 15 minutes.",
        "timerMinutes": 5
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Uncover the pan, stir in the butter and allow the sauce reduce 5 to 10 minutes to desired consistency. Season to taste with salt and pepper, then pour into a serving dish. Sprinkle with the remaining chopped onions and parsley. Garnish with lemon wedges to serve.",
        "timerMinutes": 10
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53257",
    "title": "kofta burgers",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "carnes",
    "time": 59,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/lgmnff1763789847.jpg",
    "description": "Exquisito plato tradicional de autor (Turkish), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Tinto Malbec o Cabernet",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Lamb Mince",
        "qty": 1000,
        "unit": "g",
        "requiredId": "ing-336"
      },
      {
        "name": "Onions",
        "qty": 2,
        "unit": "un",
        "requiredId": "ing-283"
      },
      {
        "name": "Garlic Bulb",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-358"
      },
      {
        "name": "Curry en polvo / Garam Masala",
        "qty": 6000,
        "unit": "ml",
        "requiredId": "ing-24"
      },
      {
        "name": "Coriander",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-269"
      },
      {
        "name": "Chilli Sauce",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-359"
      },
      {
        "name": "Pita Bread",
        "qty": 8,
        "unit": "g",
        "requiredId": "ing-348"
      },
      {
        "name": "Plum Tomatoes",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-206"
      },
      {
        "name": "Cabbage",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-260"
      },
      {
        "name": "Onions",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-283"
      },
      {
        "name": "Greek Yogurt",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-350"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Tip the mince into a large bowl (use a clean washing-up bowl if you don’t have anything big enough) with all the other burger ingredients and a good pinch of salt. Roll up your sleeves, get your hands into the mix and squelch everything together through your fingers until completely mixed. Pat the mix into 16 small burgers. These may now be frozen for up to 1 month or chilled up to a day ahead."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "To cook, heat grill to its highest setting and lay the burgers in a single layer on a baking tray (you may need to do this in batches, depending on how big your tray is). Grill on the highest shelf for 5-6 mins on each side until browned and cooked through. Pile burgers onto a platter and serve with all the accompaniments, so everyone can construct their own sandwich.",
        "timerMinutes": 6
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53483",
    "title": "Acaraje black-eyed pea fritters with shrimp filling",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "pescados",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/dxs5t71782678369.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Blanco Sauvignon Blanc o Chardonnay",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Black Eyed Peas",
        "qty": 800,
        "unit": "g",
        "requiredId": "ing-360"
      },
      {
        "name": "Garlic Clove",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Green Chilli",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-361"
      },
      {
        "name": "Onions",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-283"
      },
      {
        "name": "Plain Flour",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-240"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-168"
      },
      {
        "name": "Chilli Powder",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-362"
      },
      {
        "name": "Baking Powder",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-363"
      },
      {
        "name": "Vegetable Oil",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-285"
      },
      {
        "name": "Onions",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-283"
      },
      {
        "name": "Ginger Garlic Paste",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-279"
      },
      {
        "name": "Garlic Clove",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Red Chilli",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-364"
      },
      {
        "name": "Raw tiger prawns",
        "qty": 150,
        "unit": "g",
        "requiredId": "ing-365"
      },
      {
        "name": "Vegetable Oil",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-285"
      },
      {
        "name": "Plum Tomatoes",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-206"
      },
      {
        "name": "Coriander",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-269"
      },
      {
        "name": "Lime juice",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-225"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Make the filling by placing the onion, ginger, garlic, chilli, and some salt into food processor. Purée until smooth. Heat the oil in a frying pan and pour the purée into it. Fry for 5 mins or until cooked through. Add the prawns, tomatoes and chopped coriander. Squeeze in the lime and add salt to taste. Cook for 3 mins, or until the prawns have cooked through. Remove from the heat.",
        "timerMinutes": 5
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Drain and rinse the black-eyed peas. Pour into a food processor with the garlic and chili. Purée until smooth. Scrape into a bowl and add the onion, flour, salt, chilli powder and baking powder. Mix and roll into 16 balls."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Heat the oven to 190C/170C fan/gas 5. Heat 8cm of the palm or vegetable oil in a wok or small heavy pan. When a small piece of bread sizzles, drop 4-5 balls into the oil. Fry until golden and crisp, about 4-5 mins. Drain on kitchen paper and repeat until they are all finished. You can keep them warm in the oven while you finish. Slice the fritters open down the centre and spoon the prawn filling in. Serve with hot sauce.",
        "timerMinutes": 5
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53495",
    "title": "Amok Trey – Cambodian Fish Curry",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "pescados",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/diuub11782687570.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Blanco Sauvignon Blanc o Chardonnay",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Fish fillet",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-366"
      },
      {
        "name": "Coconut Milk",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-272"
      },
      {
        "name": "Red Curry Paste",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-367"
      },
      {
        "name": "Fish Sauce",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-334"
      },
      {
        "name": "Brown Sugar",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-368"
      },
      {
        "name": "Chicken Stock Cube",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-291"
      },
      {
        "name": "Queso Parmesano / Reggianito para rallar",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-9"
      },
      {
        "name": "Kaffir Lime Leaves",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-369"
      },
      {
        "name": "Vegetable Oil",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-285"
      },
      {
        "name": "Banana",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-56"
      },
      {
        "name": "Cilantro fresco",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-85"
      },
      {
        "name": "Lime juice",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-225"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "In a medium bowl, combine the coconut milk, red curry paste, fish sauce, palm sugar, and broth, whisking until smooth—this ensures no lumps in the sauce."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Heat the vegetable oil in a large skillet over medium heat (about 350°F) for 30 seconds until shimmering."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Pour the coconut milk mixture into the skillet and bring it to a gentle simmer, stirring occasionally, which should take about 3-4 minutes.",
        "timerMinutes": 4
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Add the fish cubes and kaffir lime leaves to the skillet, submerging them fully in the sauce."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Reduce the heat to low, cover the skillet, and let it cook for 10 minutes until the fish is opaque and flakes easily with a fork—avoid overcooking to keep it tender.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Stir in the beaten egg slowly, cooking for 2 more minutes until the sauce thickens slightly, which adds a rich, custard-like texture."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53147",
    "title": "Arroz con gambas y calamar",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "pescados",
    "time": 55,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/jc6oub1763196663.jpg",
    "description": "Exquisito plato tradicional de autor (Spanish), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Blanco Sauvignon Blanc o Chardonnay",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Raw King Prawns",
        "qty": 24,
        "unit": "g",
        "requiredId": "ing-370"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 30,
        "unit": "g",
        "requiredId": "ing-216"
      },
      {
        "name": "Onions",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-283"
      },
      {
        "name": "Bay Leaf",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-248"
      },
      {
        "name": "Saffron",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-357"
      },
      {
        "name": "Paella Rice",
        "qty": 450,
        "unit": "g",
        "requiredId": "ing-307"
      },
      {
        "name": "Tomato Puree",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-252"
      },
      {
        "name": "White Wine Vinegar",
        "qty": 200,
        "unit": "ml",
        "requiredId": "ing-253"
      },
      {
        "name": "Seafood stock",
        "qty": 650,
        "unit": "ml",
        "requiredId": "ing-371"
      },
      {
        "name": "Squid",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-372"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Peel and devein most of the prawns (a fishmonger should be able to do this for you), keeping a few whole for decoration, if you like. Heat the olive oil in a large frying pan or shallow flameproof casserole over a medium-low heat and fry the onion for 5 mins until softened. Add the bay leaf, saffron, rice and tomato purée, and cook for 1-2 mins more, stirring.",
        "timerMinutes": 5
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Pour in the wine and bubble for 1-2 mins, then pour in the seafood stock and 150ml water. Cook for 5 mins, then add the squid, season well and stir to combine. Bring to the boil, then cover and reduce the heat to a gentle simmer. Cook for 12 mins more, adding a little more water if the mixture starts to look dry.",
        "timerMinutes": 2
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Uncover the pan and stir through the peeled prawns, then arrange any whole prawns on top of the rice mixture. Cover again and simmer for a further 5-6 mins until the prawns are pink and cooked through. Leave to stand for a couple of minutes before serving from the pan.",
        "timerMinutes": 6
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53481",
    "title": "Bahia-style Moqueca prawn stew",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "pescados",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/e2kcut1782591669.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Blanco Sauvignon Blanc o Chardonnay",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Raw King Prawns",
        "qty": 450,
        "unit": "g",
        "requiredId": "ing-370"
      },
      {
        "name": "Lime juice",
        "qty": 75,
        "unit": "ml",
        "requiredId": "ing-225"
      },
      {
        "name": "Garlic Clove",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Coconut Oil",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-373"
      },
      {
        "name": "Onions",
        "qty": 4,
        "unit": "un",
        "requiredId": "ing-283"
      },
      {
        "name": "Onions",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-283"
      },
      {
        "name": "Red pepper flakes",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-296"
      },
      {
        "name": "Chilli Flakes",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-305"
      },
      {
        "name": "Pimentón Dulce",
        "qty": 10,
        "unit": "g",
        "requiredId": "ing-214"
      },
      {
        "name": "Plum Tomatoes",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-206"
      },
      {
        "name": "Coconut Milk",
        "qty": 400,
        "unit": "ml",
        "requiredId": "ing-272"
      },
      {
        "name": "Coriander",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-269"
      },
      {
        "name": "Paella Rice",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-307"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Place the prawns in a bowl with 2 tbsp of the lime juice, 1 tsp of salt and 1 tbsp of the chopped garlic. Chill for 1 hr."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Heat the coconut oil in a large saucepan. Add the spring onion and onion and fry for 5 mins, then add the red pepper, chilli flakes, paprika and remaining garlic.",
        "timerMinutes": 5
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Pour in the tomatoes, coconut milk and a little salt. Bring to a simmer and let reduce for 10 mins. Add the prawns, all the marinade and remaining lime juice. Gently simmer until the prawns turn white, about 3 mins. Serve with the fresh coriander and rice.",
        "timerMinutes": 10
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52959",
    "title": "Baked salmon with fennel & tomatoes",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "pescados",
    "time": 43,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/1548772327.jpg",
    "description": "Exquisito plato tradicional de autor (British), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Blanco Sauvignon Blanc o Chardonnay",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Fennel",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-270"
      },
      {
        "name": "Perejil Fresco",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-207"
      },
      {
        "name": "Lemon Juice",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-258"
      },
      {
        "name": "Cherry Tomatoes",
        "qty": 175,
        "unit": "g",
        "requiredId": "ing-328"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-216"
      },
      {
        "name": "Salmón Rosado Fresco",
        "qty": 350,
        "unit": "g",
        "requiredId": "ing-38"
      },
      {
        "name": "Black Olives",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-374"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Heat oven to 180C/fan 160C/gas 4. Trim the fronds from the fennel and set aside. Cut the fennel bulbs in half, then cut each half into 3 wedges. Cook in boiling salted water for 10 mins, then drain well. Chop the fennel fronds roughly, then mix with the parsley and lemon zest.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Spread the drained fennel over a shallow ovenproof dish, then add the tomatoes. Drizzle with olive oil, then bake for 10 mins. Nestle the salmon among the veg, sprinkle with lemon juice, then bake 15 mins more until the fish is just cooked. Scatter over the parsley and serve.",
        "timerMinutes": 10
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53440",
    "title": "Balchi di Pisca",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "pescados",
    "time": 59,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/qqwhw51780093126.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Blanco Sauvignon Blanc o Chardonnay",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Salt Cod",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-375"
      },
      {
        "name": "Red Potatoes",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-282"
      },
      {
        "name": "Plum Tomatoes",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-206"
      },
      {
        "name": "Morrón Verde",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-45"
      },
      {
        "name": "Onions",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-283"
      },
      {
        "name": "Garlic Clove",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Tobasco Sauce",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-376"
      },
      {
        "name": "Nutmeg",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-292"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Cayenne Pepper",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-267"
      },
      {
        "name": "Queso Parmesano / Reggianito para rallar",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-9"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "These delectable fish balls can also be made with salmon or fish fillets. Substitute one large can of salmon or one pound of any white fish for the cod."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Soak for twenty-four hours:"
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "salted cod, or bakijow Discard the water."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Place cod in saucepan with fresh water to cover. Simmer gently until the fish flakes easily when tested with the tines of a fork. Strain, reserving a bit of the broth. De bone the cod and set it aside for later use. In a saucepan, bring to boil in water to cover: 3 medium potatoes, peeled and diced When the potatoes are tender, drain them well. Add the cod and mash the two ingredients thoroughly together."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Place in the container of an electric blender:"
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "tomato, peeled and chopped"
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53239",
    "title": "Bang bang prawn salad",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "pescados",
    "time": 47,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/4xcfai1763765676.jpg",
    "description": "Exquisito plato tradicional de autor (Vietnamese), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Blanco Sauvignon Blanc o Chardonnay",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Rice Noodles",
        "qty": 140,
        "unit": "g",
        "requiredId": "ing-377"
      },
      {
        "name": "Peanut Butter",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-378"
      },
      {
        "name": "Coconut Milk",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-272"
      },
      {
        "name": "Chilli Sauce",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-359"
      },
      {
        "name": "Onions",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-283"
      },
      {
        "name": "Pepino",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-310"
      },
      {
        "name": "Bean Sprouts",
        "qty": 300,
        "unit": "g",
        "requiredId": "ing-379"
      },
      {
        "name": "Raw tiger prawns",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-365"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Cook the noodles following pack instructions, then rinse under cold water and drain thoroughly. In a small saucepan melt together the peanut butter, coconut milk, sweet chilli sauce and half the spring onions, adding 1-2 tbsp of water to loosen the mixture to a drizzling consistency."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Mix the noodles, cucumber and beansprouts in a serving dish. Top with the prawns, drizzle over the peanut sauce and scatter over the remaining spring onions."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53451",
    "title": "Bangladeshi fish curry with daikon",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "pescados",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/r7mcjm1780261264.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Blanco Sauvignon Blanc o Chardonnay",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "White Fish",
        "qty": 450,
        "unit": "g",
        "requiredId": "ing-380"
      },
      {
        "name": "Daikon Radish",
        "qty": 450,
        "unit": "g",
        "requiredId": "ing-381"
      },
      {
        "name": "Vegetable Oil",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-285"
      },
      {
        "name": "Garlic Clove",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Onions",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-283"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 10,
        "unit": "g",
        "requiredId": "ing-168"
      },
      {
        "name": "Turmeric",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-268"
      },
      {
        "name": "Coriander",
        "qty": 10,
        "unit": "g",
        "requiredId": "ing-269"
      },
      {
        "name": "Chilli Powder",
        "qty": 10,
        "unit": "g",
        "requiredId": "ing-362"
      },
      {
        "name": "Green Chilli",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-361"
      },
      {
        "name": "Coriander",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-269"
      },
      {
        "name": "Lime juice",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-225"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "If you are using rohu fish it will usually be frozen. Soak it in cold water for 30-45 minutes to defrost and while still a little firm, descale and cut each steak into quarters and wash in cold saltwater a few times. Drain and set aside. If using an alternative such as cod, cut into 2 ½ inch chunks then rinse, drain and set aside",
        "timerMinutes": 45
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Top and tail the daikon and peel using a potato peeler. Cut in half widthways then cut each half down the middle, lengthways. Now slice into 2cm-thick half-moon pieces. Rinse and set aside"
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Place a large, shallow saucepan over a medium heat and add the oil. When the oil is hot add the crushed garlic and stir for a minute until pale golden"
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Add the onion paste and salt and cook for 3-5 minutes, until the onion softens and becomes translucent, stirring occasionally",
        "timerMinutes": 5
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Pour in 200ml of water then cover and cook for 10 minutes, stirring once or twice",
        "timerMinutes": 10
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "After 10 minutes add the ground spices and stir for a couple of minutes so that the spices cook through. Cover and cook for 5 minutes over a low heat then stir in the daikon. After a minute or so add 200ml of water. Cover and cook for 10 minutes on a medium heat",
        "timerMinutes": 10
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53103",
    "title": "Barramundi with Moroccan spices",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "pescados",
    "time": 51,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/4o4wh11761848573.jpg",
    "description": "Exquisito plato tradicional de autor (Australian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Blanco Sauvignon Blanc o Chardonnay",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Barramundi",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-382"
      },
      {
        "name": "Ground Cumin",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-281"
      },
      {
        "name": "Coriander",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-269"
      },
      {
        "name": "Pimentón Dulce",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-214"
      },
      {
        "name": "Chili Powder",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-339"
      },
      {
        "name": "Garlic Clove",
        "qty": 2,
        "unit": "un",
        "requiredId": "ing-266"
      },
      {
        "name": "Lemon Juice",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-258"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 5000,
        "unit": "ml",
        "requiredId": "ing-216"
      },
      {
        "name": "Coriander",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-269"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Tip all the dressing ingredients into a food processor with a pinch of salt and blitz to a dressing. Slash the fish three times on each side, coat with half of the dressing, then set aside to marinate for about 30 mins.",
        "timerMinutes": 30
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Heat oven to 220C/fan 200C/gas 7. Place the fish on a roasting tray, then cook in the oven for 20 mins until the flesh is firm and the eyes have turned white. Serve the fish with the rest of the dressing and steamed couscous or rice.",
        "timerMinutes": 20
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "KNOW HOW: HOW TO COOK IT: Cooking barramundi on the bone, as we have done here, has its advantages – it will stay more moist during cooking, and some would say that the flavour is enhanced, too. If you want to take out the bones they are easy to locate and less likely to be lodged in the fillet if the fish is cooked whole. Fillets can be simply pan-fried or grilled. If you like trout, you will really enjoy the flavour of barramundi, which lends itself to similar ingredients and cooking methods – citrus flavours are particularly good, as are garlic and wild mushrooms. Simply roasting the fish with some fresh herbs, olive oil and seasoning is delicious, and in the summer months you could barbecue it, too. One thing that you mustn’t miss are the cheeks or ‘pearls’ of the fish, these are simply lovely, moist and really sweet – well worth leaving the head on for!"
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52819",
    "title": "Cajun spiced fish tacos",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "pescados",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
    "description": "Exquisito plato tradicional de autor (Mexican), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino Blanco Sauvignon Blanc o Chardonnay",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Cajun",
        "qty": 30,
        "unit": "g",
        "requiredId": "ing-383"
      },
      {
        "name": "Cayenne Pepper",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-267"
      },
      {
        "name": "White Fish",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-380"
      },
      {
        "name": "Vegetable Oil",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-285"
      },
      {
        "name": "Flour tortilla",
        "qty": 8,
        "unit": "g",
        "requiredId": "ing-384"
      },
      {
        "name": "Palta Hass",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-50"
      },
      {
        "name": "Lettuce",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-263"
      },
      {
        "name": "Onions",
        "qty": 4,
        "unit": "un",
        "requiredId": "ing-283"
      },
      {
        "name": "Salsa de Soja Premium",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-27"
      },
      {
        "name": "Crema Ácida",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-262"
      },
      {
        "name": "Lemon Juice",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-258"
      },
      {
        "name": "Garlic Clove",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-266"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Cooking in a cajun spice and cayenne pepper marinade makes this fish super succulent and flavoursome. Top with a zesty dressing and serve in a tortilla for a quick, fuss-free main that's delightfully summery."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "On a large plate, mix the cajun spice and cayenne pepper with a little seasoning and use to coat the fish all over."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Heat a little oil in a frying pan, add in the fish and cook over a medium heat until golden. Reduce the heat and continue frying until the fish is cooked through, about 10 minutes. Cook in batches if you don’t have enough room in the pan.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Meanwhile, prepare the dressing by combining all the ingredients with a little seasoning."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Soften the tortillas by heating in the microwave for 5-10 seconds. Pile high with the avocado, lettuce and spring onion, add a spoonful of salsa, top with large flakes of fish and drizzle over the dressing."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52839",
    "title": "Chilli prawn linguine",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "pastas",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg",
    "description": "Exquisito plato tradicional de autor (Italian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Linguine Pasta",
        "qty": 280,
        "unit": "g",
        "requiredId": "ing-385"
      },
      {
        "name": "Sugar Snap Peas",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-386"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-216"
      },
      {
        "name": "Garlic Clove",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Red Chilli",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-364"
      },
      {
        "name": "Raw King Prawns",
        "qty": 24,
        "unit": "g",
        "requiredId": "ing-370"
      },
      {
        "name": "Cherry Tomatoes",
        "qty": 12,
        "unit": "g",
        "requiredId": "ing-328"
      },
      {
        "name": "Basil Leaves",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-387"
      },
      {
        "name": "Lettuce",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-263"
      },
      {
        "name": "Naan Bread",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-220"
      },
      {
        "name": "Fromage Frais",
        "qty": 30,
        "unit": "g",
        "requiredId": "ing-388"
      },
      {
        "name": "Lime juice",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-225"
      },
      {
        "name": "Caster Sugar",
        "qty": 10,
        "unit": "g",
        "requiredId": "ing-389"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Mix the dressing ingredients in a small bowl and season with salt and pepper. Set aside."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Cook the pasta according to the packet instructions. Add the sugar snap peas for the last minute or so of cooking time."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Meanwhile, heat the oil in a wok or large frying pan, toss in the garlic and chilli and cook over a fairly gentle heat for about 30 seconds without letting the garlic brown. Tip in the prawns and cook over a high heat, stirring frequently, for about 3 minutes until they turn pink.",
        "timerMinutes": 3
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Add the tomatoes and cook, stirring occasionally, for 3 minutes until they just start to soften. Drain the pasta and sugar snaps well, then toss into the prawn mixture. Tear in the basil leaves, stir, and season with salt and pepper.",
        "timerMinutes": 3
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Serve with salad leaves drizzled with the lime dressing, and warm crusty bread."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53064",
    "title": "Fettuccine Alfredo",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "pastas",
    "time": 39,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/0jv5gx1661040802.jpg",
    "description": "Exquisito plato tradicional de autor (Italian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Fettuccine",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-390"
      },
      {
        "name": "Crema de Leche",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-8"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-125"
      },
      {
        "name": "Queso Parmesano / Reggianito para rallar",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-9"
      },
      {
        "name": "Perejil Fresco",
        "qty": 30,
        "unit": "g",
        "requiredId": "ing-207"
      },
      {
        "name": "Whole black peppercorns",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-345"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Cook pasta according to package instructions in a large pot of boiling water and salt. Add heavy cream and butter to a large skillet over medium heat until the cream bubbles and the butter melts. Whisk in parmesan and add seasoning (salt and black pepper). Let the sauce thicken slightly and then add the pasta and toss until coated in sauce. Garnish with parsley, and it's ready."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52835",
    "title": "Fettucine alfredo",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "pastas",
    "time": 43,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/uquqtu1511178042.jpg",
    "description": "Exquisito plato tradicional de autor (Italian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Clotted Cream",
        "qty": 227,
        "unit": "g",
        "requiredId": "ing-391"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 25,
        "unit": "g",
        "requiredId": "ing-125"
      },
      {
        "name": "Corn Flour",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-249"
      },
      {
        "name": "Queso Parmesano",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-297"
      },
      {
        "name": "Nutmeg",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-292"
      },
      {
        "name": "Fettuccine",
        "qty": 250,
        "unit": "g",
        "requiredId": "ing-390"
      },
      {
        "name": "Perejil Fresco",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-207"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "In a medium saucepan, stir the clotted cream, butter and cornflour over a low-ish heat and bring to a low simmer. Turn off the heat and keep warm."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Meanwhile, put the cheese and nutmeg in a small bowl and add a good grinding of black pepper, then stir everything together (don’t add any salt at this stage)."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Put the pasta in another pan with 2 tsp salt, pour over some boiling water and cook following pack instructions (usually 3-4 mins). When cooked, scoop some of the cooking water into a heatproof jug or mug and drain the pasta, but not too thoroughly.",
        "timerMinutes": 4
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Add the pasta to the pan with the clotted cream mixture, then sprinkle over the cheese and gently fold everything together over a low heat using a rubber spatula. When combined, splash in 3 tbsp of the cooking water. At first, the pasta will look wet and sloppy: keep stirring until the water is absorbed and the sauce is glossy. Check the seasoning before transferring to heated bowls. Sprinkle over some chives or parsley, then serve immediately."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52829",
    "title": "Grilled Mac and Cheese Sandwich",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "pastas",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg",
    "description": "Exquisito plato tradicional de autor (United States), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Macaroni",
        "qty": 8,
        "unit": "g",
        "requiredId": "ing-392"
      },
      {
        "name": "Plain Flour",
        "qty": 67,
        "unit": "g",
        "requiredId": "ing-240"
      },
      {
        "name": "Mustard Powder",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-293"
      },
      {
        "name": "Garlic Powder",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-288"
      },
      {
        "name": "Kosher salt",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-393"
      },
      {
        "name": "Whole black peppercorns",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-345"
      },
      {
        "name": "Cayenne Pepper",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-267"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 6,
        "unit": "g",
        "requiredId": "ing-125"
      },
      {
        "name": "Whole Milk",
        "qty": 500,
        "unit": "ml",
        "requiredId": "ing-319"
      },
      {
        "name": "Crema de Leche",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-8"
      },
      {
        "name": "Monterey Jack Cheese",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-394"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-125"
      },
      {
        "name": "Garlic Powder",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-288"
      },
      {
        "name": "Naan Bread",
        "qty": 16000,
        "unit": "ml",
        "requiredId": "ing-220"
      },
      {
        "name": "Queso Cheddar",
        "qty": 8000,
        "unit": "ml",
        "requiredId": "ing-395"
      },
      {
        "name": "Colby Jack Cheese",
        "qty": 8000,
        "unit": "ml",
        "requiredId": "ing-396"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-125"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Make the mac and cheese"
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Bring a medium saucepan of generously salted water (you want it to taste like seawater) to a boil. Add the pasta and cook, stirring occasionally, until al dente, 8 to 10 minutes, or according to the package directions. The pasta should be tender but still chewy.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "While the pasta is cooking, in a small bowl, whisk together the flour, mustard powder, garlic powder, salt, black pepper, and cayenne pepper."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Drain the pasta in a colander. Place the empty pasta pan (no need to wash it) over low heat and add the butter. When the butter has melted, whisk in the flour mixture and continue to cook, whisking frequently, until the mixture is beginning to brown and has a pleasant, nutty aroma, about 1 minute. Watch carefully so it does not scorch on the bottom of the pan.",
        "timerMinutes": 1
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Slowly whisk the milk and cream into the flour mixture until everything is really well combined. Cook, whisking constantly, until the sauce is heated through and just begins to thicken, about 2 minutes. Remove from the heat. Gradually add the cheese while stirring constantly with a wooden spoon or silicone spatula and keep stirring until the cheese has melted into the sauce. Then stir in the drained cooked pasta.",
        "timerMinutes": 2
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Line a 9-by-13-inch (23-by-33-centimeter) rimmed baking sheet with parchment paper or aluminum foil. Coat the paper or foil with nonstick cooking spray or slick it with butter. Pour the warm mac and cheese onto the prepared baking sheet and spread it evenly with a spatula. Coat another piece of parchment paper with cooking spray or butter and place it, oiled or buttered side down, directly on the surface of the mac and cheese. Refrigerate until cool and firm, about 1 hour."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52987",
    "title": "Lasagna Sandwiches",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "pastas",
    "time": 51,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/xr0n4r1576788363.jpg",
    "description": "Exquisito plato tradicional de autor (United States), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Crema Ácida",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-262"
      },
      {
        "name": "Chopped Onion",
        "qty": 2,
        "unit": "un",
        "requiredId": "ing-397"
      },
      {
        "name": "Dried Oregano",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-398"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-168"
      },
      {
        "name": "Naan Bread",
        "qty": 8000,
        "unit": "ml",
        "requiredId": "ing-220"
      },
      {
        "name": "Bacon lardon",
        "qty": 8000,
        "unit": "ml",
        "requiredId": "ing-304"
      },
      {
        "name": "Plum Tomatoes",
        "qty": 8000,
        "unit": "ml",
        "requiredId": "ing-206"
      },
      {
        "name": "Queso Mozzarella",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-58"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-125"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "In a small bowl, combine the first four ingredients; spread on four slices of bread. Layer with bacon, tomato and cheese; top with remaining bread."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "In a large skillet or griddle, melt 2 tablespoons butter. Toast sandwiches until lightly browned on both sides and cheese is melted, adding butter if necessary."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "sandwich: 445 calories, 24g fat (12g saturated fat), 66mg cholesterol, 1094mg sodium, 35g carbohydrate (3g sugars, 2g fiber), 21g protein."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52844",
    "title": "Lasaña Casera a la Boloñesa Gratinada",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "pastas",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
    "description": "Exquisito plato tradicional de autor (Italian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-216"
      },
      {
        "name": "Bacon lardon",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-304"
      },
      {
        "name": "Onions",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-283"
      },
      {
        "name": "Celery",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-275"
      },
      {
        "name": "Zanahoria",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-44"
      },
      {
        "name": "Garlic Clove",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Carne Picada Especial",
        "qty": 500,
        "unit": "g",
        "requiredId": "ing-37"
      },
      {
        "name": "Tomato Puree",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-252"
      },
      {
        "name": "Chopped Tomatoes",
        "qty": 800,
        "unit": "g",
        "requiredId": "ing-399"
      },
      {
        "name": "Cerveza Artesanal IPA / Honey / Stout",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-192"
      },
      {
        "name": "Masa para Lasaña",
        "qty": 500,
        "unit": "g",
        "requiredId": "ing-400"
      },
      {
        "name": "Creme Fraiche",
        "qty": 400,
        "unit": "ml",
        "requiredId": "ing-401"
      },
      {
        "name": "Mozzarella Balls",
        "qty": 125,
        "unit": "g",
        "requiredId": "ing-402"
      },
      {
        "name": "Queso Parmesano",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-297"
      },
      {
        "name": "Basil Leaves",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-387"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Heat the oil in a large saucepan. Use kitchen scissors to snip the bacon into small pieces, or use a sharp knife to chop it on a chopping board. Add the bacon to the pan and cook for just a few mins until starting to turn golden. Add the onion, celery and carrot, and cook over a medium heat for 5 mins, stirring occasionally, until softened.",
        "timerMinutes": 5
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Add the garlic and cook for 1 min, then tip in the mince and cook, stirring and breaking it up with a wooden spoon, for about 6 mins until browned all over.",
        "timerMinutes": 1
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Stir in the tomato purée and cook for 1 min, mixing in well with the beef and vegetables. Tip in the chopped tomatoes. Fill each can half full with water to rinse out any tomatoes left in the can, and add to the pan. Add the honey and season to taste. Simmer for 20 mins.",
        "timerMinutes": 1
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Heat oven to 200C/180C fan/gas 6. To assemble the lasagne, ladle a little of the ragu sauce into the bottom of the roasting tin or casserole dish, spreading the sauce all over the base. Place 2 sheets of lasagne on top of the sauce overlapping to make it fit, then repeat with more sauce and another layer of pasta. Repeat with a further 2 layers of sauce and pasta, finishing with a layer of pasta."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Put the crème fraîche in a bowl and mix with 2 tbsp water to loosen it and make a smooth pourable sauce. Pour this over the top of the pasta, then top with the mozzarella. Sprinkle Parmesan over the top and bake for 25–30 mins until golden and bubbling. Serve scattered with basil, if you like.",
        "timerMinutes": 30
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53461",
    "title": "Macaroni Pie",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "pastas",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/kpiu4t1782242131.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Macaroni",
        "qty": 250,
        "unit": "g",
        "requiredId": "ing-392"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-125"
      },
      {
        "name": "Queso Cheddar",
        "qty": 375,
        "unit": "g",
        "requiredId": "ing-395"
      },
      {
        "name": "Queso Parmesano / Reggianito para rallar",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-9"
      },
      {
        "name": "Coconut Milk",
        "qty": 250,
        "unit": "ml",
        "requiredId": "ing-272"
      },
      {
        "name": "Ground Onion",
        "qty": 10,
        "unit": "g",
        "requiredId": "ing-403"
      },
      {
        "name": "Mustard Powder",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-293"
      },
      {
        "name": "Cayenne Pepper",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-267"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-168"
      },
      {
        "name": "Cayenne Pepper",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-267"
      },
      {
        "name": "Pan Rallado",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-404"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 10,
        "unit": "g",
        "requiredId": "ing-125"
      },
      {
        "name": "Queso Cheddar",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-395"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Bring water to a boil and add the broken-up macaroni, elbows, and salt. Cook uncovered until tender but not overcooked (about 8 minutes).",
        "timerMinutes": 8
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Preheat a moderately hot oven to 350F, 180C, or Gas Mark 4."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Drain the macaroni thoroughly, put it back into the same hot saucepan cooked in, and mix in the butter."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Grate the cheese and mix it with the macaroni while it is still warm."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Whisk the egg until fluffy, and add the milk, onion powder, white pepper, salt, pepper sauce, and mustard. Pour in with the macaroni and mix."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Place in a greased ovenproof casserole dish. Top with butter, some grated cheese, and fine breadcrumbs. Bake in the center of the oven for about 30-45 minutes, depending on the dish’s depth.",
        "timerMinutes": 45
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53504",
    "title": "Macaroni Pudding",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "pastas",
    "time": 55,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/hbte551782770868.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Macaroni",
        "qty": 800,
        "unit": "g",
        "requiredId": "ing-392"
      },
      {
        "name": "Evaporated Milk",
        "qty": 800,
        "unit": "g",
        "requiredId": "ing-405"
      },
      {
        "name": "Agua Filtrada",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-208"
      },
      {
        "name": "Icing Sugar",
        "qty": 600,
        "unit": "g",
        "requiredId": "ing-287"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 10,
        "unit": "g",
        "requiredId": "ing-168"
      },
      {
        "name": "Huevos de campo",
        "qty": 4,
        "unit": "maple/docena",
        "requiredId": "ing-7"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-125"
      },
      {
        "name": "Raisins",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-406"
      },
      {
        "name": "Nutmeg",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-292"
      },
      {
        "name": "Esencia de Vainilla",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-407"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Add macaroni to large pan with sufficient water to cover (approximately 4 cups). Add salt and bring to boil until tender (approximately 25 -30 minutes). Meanwhile, beat eggs and sugar together, then add vanilla and nutmeg. Mix well and set aside. In a separate medium sauce pan, heat evaporated milk plus 1 cup of water and butter to almost a boiling point. Remove from heat and add to sugar mixture. Drain cooked macaroni. Add macaroni and raisins to the milk mixture and stir well. (This mixture will have quite a bit of liquid, but this will form a nice custard textured pudding once baked.)",
        "timerMinutes": 30
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Grease a large baking dish with butter or margarine, add the macaroni mixture and sprinkle with additional nutmeg. Bake at 350° F for 1 hour or until golden brown. (Pudding should be firm enough to cut, but moist and not dry)."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52837",
    "title": "Pilchard puttanesca",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "pastas",
    "time": 51,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/vvtvtr1511180578.jpg",
    "description": "Exquisito plato tradicional de autor (Italian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Fideos Spaghetti / Tallarines",
        "qty": 300,
        "unit": "g",
        "requiredId": "ing-15"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-216"
      },
      {
        "name": "Onions",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-283"
      },
      {
        "name": "Garlic Clove",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Red Chilli",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-364"
      },
      {
        "name": "Tomato Puree",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-252"
      },
      {
        "name": "Pilchards",
        "qty": 425,
        "unit": "g",
        "requiredId": "ing-408"
      },
      {
        "name": "Black Olives",
        "qty": 70,
        "unit": "g",
        "requiredId": "ing-374"
      },
      {
        "name": "Queso Parmesano / Reggianito para rallar",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-9"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Cook the pasta following pack instructions. Heat the oil in a non-stick frying pan and cook the onion, garlic and chilli for 3-4 mins to soften. Stir in the tomato purée and cook for 1 min, then add the pilchards with their sauce. Cook, breaking up the fish with a wooden spoon, then add the olives and continue to cook for a few more mins.",
        "timerMinutes": 4
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Drain the pasta and add to the pan with 2-3 tbsp of the cooking water. Toss everything together well, then divide between plates and serve, scattered with Parmesan."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52982",
    "title": "Spaghetti alla Carbonara",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "pastas",
    "time": 39,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
    "description": "Exquisito plato tradicional de autor (Italian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Fideos Spaghetti / Tallarines",
        "qty": 320,
        "unit": "g",
        "requiredId": "ing-15"
      },
      {
        "name": "Egg Yolks",
        "qty": 6,
        "unit": "g",
        "requiredId": "ing-244"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Bacon lardon",
        "qty": 150,
        "unit": "g",
        "requiredId": "ing-304"
      },
      {
        "name": "Pecorino",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-409"
      },
      {
        "name": "Whole black peppercorns",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-345"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Put a large saucepan of water on to boil."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Finely chop the 100g pancetta, having first removed any rind. Finely grate 50g pecorino cheese and 50g parmesan and mix them together."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Beat the 3 large eggs in a medium bowl and season with a little freshly grated black pepper. Set everything aside."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Add 1 tsp salt to the boiling water, add 350g spaghetti and when the water comes back to the boil, cook at a constant simmer, covered, for 10 minutes or until al dente (just cooked).",
        "timerMinutes": 10
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Squash 2 peeled plump garlic cloves with the blade of a knife, just to bruise it."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "While the spaghetti is cooking, fry the pancetta with the garlic. Drop 50g unsalted butter into a large frying pan or wok and, as soon as the butter has melted, tip in the pancetta and garlic."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53120",
    "title": "Æbleskiver",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "postres",
    "time": 55,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/wkhg581762773124.jpg",
    "description": "Exquisito plato tradicional de autor (Norway), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Café espresso o vino dulce de cosecha tardía",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Plain Flour",
        "qty": 400,
        "unit": "g",
        "requiredId": "ing-240"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Granulated Sugar",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-410"
      },
      {
        "name": "Baking Powder",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-363"
      },
      {
        "name": "Cardamom",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-411"
      },
      {
        "name": "Queso Parmesano / Reggianito para rallar",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-9"
      },
      {
        "name": "Buttermilk",
        "qty": 400,
        "unit": "g",
        "requiredId": "ing-412"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-125"
      },
      {
        "name": "Powdered Sugar",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-413"
      },
      {
        "name": "Raspberry Jam",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-414"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Whisk the flour, salt, sugar, baking soda, and cardamom together in a large bowl."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Separate the eggs and add the egg yolks to the flour mixture. Pour in the buttermilk (or cultured milk) and whisk the batter together until smooth. Cover and refrigerate for about 30 minutes.",
        "timerMinutes": 30
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Use a hand (or stand) mixer to beat the egg whites until stiff. Carefully fold into the æbleskiver batter."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Heat the pan on medium heat. Once hot, brush the pan with butter and fill each æbleskive hole almost full with the batter."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Once the edges become firm use a knitting needle or wooden skewer to turn the æbleskiver about 1/4. Continue turning until you get round pancake spheres. They should be golden brown."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Remove the æbleskiver from the pan and serve with powdered sugar and jam."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53138",
    "title": "Alfajores",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "postres",
    "time": 47,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/a4kgf21763075288.jpg",
    "description": "Exquisito plato tradicional de autor (Argentina), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Café espresso o vino dulce de cosecha tardía",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "All purpose flour",
        "qty": 300,
        "unit": "g",
        "requiredId": "ing-415"
      },
      {
        "name": "Cornstarch",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-234"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-125"
      },
      {
        "name": "Icing Sugar",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-287"
      },
      {
        "name": "Egg Yolks",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-244"
      },
      {
        "name": "Lemon Zest",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-416"
      },
      {
        "name": "Dulce de Leche Repostero / Colonial",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-75"
      },
      {
        "name": "Desiccated Coconut",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-417"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Make the Dough: Cream butter and sugar. Add egg yolks and lemon zest. Gradually mix in flour and cornstarch to form a dough. Chill for 1 hour."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Bake the Cookies: Roll out the dough, cut into circles, and bake at 180°C (350°F) for 12-15 minutes. Let cool.",
        "timerMinutes": 15
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Assemble: Spread dulce de leche on one cookie, then sandwich with another. Roll the edges in coconut flakes."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Chill the dough before rolling it out to make it easier to handle and to prevent the cookies from spreading too much while baking."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Dip the alfajores in melted chocolate and let them set on a wire rack for an extra decadent treat."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53111",
    "title": "Anzac biscuits",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "postres",
    "time": 43,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/q47rkb1762324620.jpg",
    "description": "Exquisito plato tradicional de autor (Australian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Café espresso o vino dulce de cosecha tardía",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Porridge oats",
        "qty": 85,
        "unit": "g",
        "requiredId": "ing-418"
      },
      {
        "name": "Desiccated Coconut",
        "qty": 85,
        "unit": "g",
        "requiredId": "ing-417"
      },
      {
        "name": "Plain Flour",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-240"
      },
      {
        "name": "Caster Sugar",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-389"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-125"
      },
      {
        "name": "Golden Syrup",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-419"
      },
      {
        "name": "Bicarbonate Of Soda",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-327"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Heat oven to 180C/fan 160C/gas 4. Put the oats, coconut, flour and sugar in a bowl. Melt the butter in a small pan and stir in the golden syrup. Add the bicarbonate of soda to 2 tbsp boiling water, then stir into the golden syrup and butter mixture."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Make a well in the middle of the dry ingredients and pour in the butter and golden syrup mixture. Stir gently to incorporate the dry ingredients."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Put dessertspoonfuls of the mixture on to buttered baking sheets, about 2.5cm/1in apart to allow room for spreading. Bake in batches for 8-10 mins until golden. Transfer to a wire rack to cool.",
        "timerMinutes": 10
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53049",
    "title": "Apam balik",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "postres",
    "time": 51,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg",
    "description": "Exquisito plato tradicional de autor (Malaysian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Café espresso o vino dulce de cosecha tardía",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Coconut Milk",
        "qty": 200,
        "unit": "ml",
        "requiredId": "ing-272"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 60,
        "unit": "ml",
        "requiredId": "ing-216"
      },
      {
        "name": "Huevos de campo",
        "qty": 2,
        "unit": "maple/docena",
        "requiredId": "ing-7"
      },
      {
        "name": "Plain Flour",
        "qty": 1600,
        "unit": "g",
        "requiredId": "ing-240"
      },
      {
        "name": "Baking Powder",
        "qty": 15,
        "unit": "g",
        "requiredId": "ing-363"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-168"
      },
      {
        "name": "Unsalted Butter",
        "qty": 25,
        "unit": "g",
        "requiredId": "ing-278"
      },
      {
        "name": "Icing Sugar",
        "qty": 45,
        "unit": "g",
        "requiredId": "ing-287"
      },
      {
        "name": "Peanut Butter",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-378"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Mix milk, oil and egg together. Sift flour, baking powder and salt into the mixture. Stir well until all ingredients are combined evenly."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Spread some batter onto the pan. Spread a thin layer of batter to the side of the pan. Cover the pan for 30-60 seconds until small air bubbles appear."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Add butter, cream corn, crushed peanuts and sugar onto the pancake. Fold the pancake into half once the bottom surface is browned."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Cut into wedges and best eaten when it is warm."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52893",
    "title": "Crumble de Manzanas y Frutos Rojos",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "postres",
    "time": 51,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
    "description": "Exquisito plato tradicional de autor (British), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Café espresso o vino dulce de cosecha tardía",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Plain Flour",
        "qty": 120,
        "unit": "g",
        "requiredId": "ing-240"
      },
      {
        "name": "Caster Sugar",
        "qty": 60,
        "unit": "g",
        "requiredId": "ing-389"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 60,
        "unit": "g",
        "requiredId": "ing-125"
      },
      {
        "name": "Braeburn Apples",
        "qty": 300,
        "unit": "g",
        "requiredId": "ing-420"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 30,
        "unit": "g",
        "requiredId": "ing-125"
      },
      {
        "name": "Demerara Sugar",
        "qty": 30,
        "unit": "g",
        "requiredId": "ing-421"
      },
      {
        "name": "Blackberries",
        "qty": 120,
        "unit": "g",
        "requiredId": "ing-422"
      },
      {
        "name": "Cinnamon Stick",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-227"
      },
      {
        "name": "Ice Cream",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-423"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Heat oven to 190C/170C fan/gas 5. Tip the flour and sugar into a large bowl. Add the butter, then rub into the flour using your fingertips to make a light breadcrumb texture. Do not overwork it or the crumble will become heavy. Sprinkle the mixture evenly over a baking sheet and bake for 15 mins or until lightly coloured.",
        "timerMinutes": 15
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Meanwhile, for the compote, peel, core and cut the apples into 2cm dice. Put the butter and sugar in a medium saucepan and melt together over a medium heat. Cook for 3 mins until the mixture turns to a light caramel. Stir in the apples and cook for 3 mins. Add the blackberries and cinnamon, and cook for 3 mins more. Cover, remove from the heat, then leave for 2-3 mins to continue cooking in the warmth of the pan.",
        "timerMinutes": 3
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "To serve, spoon the warm fruit into an ovenproof gratin dish, top with the crumble mix, then reheat in the oven for 5-10 mins. Serve with vanilla ice cream.",
        "timerMinutes": 10
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53380",
    "title": "Apple cake",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "postres",
    "time": 51,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/c0gmo31766594751.jpg",
    "description": "Exquisito plato tradicional de autor (Netherlands), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Café espresso o vino dulce de cosecha tardía",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Huevos de campo",
        "qty": 4,
        "unit": "maple/docena",
        "requiredId": "ing-7"
      },
      {
        "name": "Icing Sugar",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-287"
      },
      {
        "name": "Self-raising Flour",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-424"
      },
      {
        "name": "Melted Butter",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-425"
      },
      {
        "name": "Esencia de Vainilla",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-407"
      },
      {
        "name": "Ground Cinnamon",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-342"
      },
      {
        "name": "Braeburn Apples",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-420"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Ground Sugar",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-426"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Preheat the oven to 180°C. (350˚F) Grease a cake pan and line it with baking paper."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "In a large bowl, break the four eggs with the sugar and beat until they have tripled in volume and become fluffy."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Sift the self-rising baking flour and add it to your egg mixture. Fold this over, preserving as much air as possible. Add the melted (and slightly cooled) butter and mix until combined."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Add cinnamon, pinch of salt and vanilla extract."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Add the diced apple to the batter and gently fold them into the batter so that the apple pieces are evenly distributed. You can roll the apple pieces through some more cinnamon."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Pour the batter into the prepared cake pan and smooth the top with a spatula."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52768",
    "title": "Apple Frangipan Tart",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "postres",
    "time": 51,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
    "description": "Exquisito plato tradicional de autor (British), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Café espresso o vino dulce de cosecha tardía",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Digestive biscuits",
        "qty": 175,
        "unit": "g",
        "requiredId": "ing-427"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 75,
        "unit": "g",
        "requiredId": "ing-125"
      },
      {
        "name": "Bramley apples",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-428"
      },
      {
        "name": "Unsalted Butter",
        "qty": 75,
        "unit": "g",
        "requiredId": "ing-278"
      },
      {
        "name": "Caster Sugar",
        "qty": 75,
        "unit": "g",
        "requiredId": "ing-389"
      },
      {
        "name": "Free-range eggs, beaten",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-429"
      },
      {
        "name": "Ground almonds",
        "qty": 75,
        "unit": "g",
        "requiredId": "ing-430"
      },
      {
        "name": "Almond extract",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-431"
      },
      {
        "name": "Flaked almonds",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-432"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Preheat the oven to 200C/180C Fan/Gas 6."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Put the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Cream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined.",
        "timerMinutes": 3
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Peel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Bake for 20-25 minutes until golden-brown and set.",
        "timerMinutes": 25
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Remove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin.",
        "timerMinutes": 15
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53575",
    "title": "Apple Pie",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "postres",
    "time": 43,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/stnxzp1784835840.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Café espresso o vino dulce de cosecha tardía",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Braeburn Apples",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-420"
      },
      {
        "name": "Free-range eggs, beaten",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-429"
      },
      {
        "name": "Icing Sugar",
        "qty": 125,
        "unit": "ml",
        "requiredId": "ing-287"
      },
      {
        "name": "Plain Flour",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-240"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-168"
      },
      {
        "name": "Bicarbonate Of Soda",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-327"
      },
      {
        "name": "Sour Milk",
        "qty": 250,
        "unit": "ml",
        "requiredId": "ing-433"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Peel and clean apples/rhubarb, cut in to a slices"
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "beat eggs and sugar together into a light foam"
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Mix together flour, salt and baking powder"
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Add  the dry ingredients to the egg mixture and add sour milk gradually while stirring,  Add berries."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Pour dough in to a butter greased pan. Sprinkle over sugar (and cinnamon). Bake at 180 C for 30 minute",
        "timerMinutes": 30
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53568",
    "title": "Apple pie pops",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "postres",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/ax643t1784731109.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Café espresso o vino dulce de cosecha tardía",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Icing Sugar",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-287"
      },
      {
        "name": "All purpose flour",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-415"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-168"
      },
      {
        "name": "Unsalted Butter",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-278"
      },
      {
        "name": "Shortening",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-299"
      },
      {
        "name": "Cold Water",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-434"
      },
      {
        "name": "Braeburn Apples",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-420"
      },
      {
        "name": "Brown Sugar",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-368"
      },
      {
        "name": "Cinnamon Stick",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-227"
      },
      {
        "name": "Unsalted Butter",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-278"
      },
      {
        "name": "Nutmeg",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-292"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-168"
      },
      {
        "name": "Lemon Juice",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-258"
      },
      {
        "name": "Icing Sugar",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-287"
      },
      {
        "name": "Queso Parmesano / Reggianito para rallar",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-9"
      },
      {
        "name": "Cold Water",
        "qty": 10,
        "unit": "g",
        "requiredId": "ing-434"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Need Lollipop sticks"
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Instructions for crust"
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Combine the flour, sugar, and salt to a food processor bowl. Mix using the pulse setting."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Add butter and shortening and pulse about 10 -12 times until the texture is changed to small pebbles."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Add ¾ of the ice water and pulse a few more times until the dough takes the shape of a ball. Add more water as needed. Don't overmix. Don't worry if the dough isn't completely blended. You will use your rolling pin to finish creating the crust."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Place dough ball onto the counter and flatten into a flat disc. Wrap it in plastic wrap and refrigerate for at least an hour or overnight."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53276",
    "title": "Apricot & Turkish delight mess",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "postres",
    "time": 51,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/p277uc1764109195.jpg",
    "description": "Exquisito plato tradicional de autor (Turkish), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Café espresso o vino dulce de cosecha tardía",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Mascarpone",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-435"
      },
      {
        "name": "Greek Yogurt",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-350"
      },
      {
        "name": "Icing Sugar",
        "qty": 25,
        "unit": "g",
        "requiredId": "ing-287"
      },
      {
        "name": "Orange Blossom Water",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-436"
      },
      {
        "name": "Meringue Nests",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-437"
      },
      {
        "name": "Apricot",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-438"
      },
      {
        "name": "Turkish Delight",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-439"
      },
      {
        "name": "Ground almonds",
        "qty": 25,
        "unit": "g",
        "requiredId": "ing-430"
      },
      {
        "name": "Mint",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-343"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Place the mascarpone, yogurt, sugar and orange flower water into a large bowl and whisk until thickened. Fold the remaining ingredients through, then divide the mix between 2 dessert glasses or bowls and decorate with extra mint, if you like."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53373",
    "title": "Air Fryer Egg Rolls",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "ensaladas",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/grhn401765687086.jpg",
    "description": "Exquisito plato tradicional de autor (Chinese), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-216"
      },
      {
        "name": "Ground Pork",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-440"
      },
      {
        "name": "Garlic Clove",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Ginger Garlic Paste",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-279"
      },
      {
        "name": "Zanahoria",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-44"
      },
      {
        "name": "Scallions",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-441"
      },
      {
        "name": "Cabbage",
        "qty": 600,
        "unit": "g",
        "requiredId": "ing-260"
      },
      {
        "name": "Salsa de Soja",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-232"
      },
      {
        "name": "Rice Vinegar",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-442"
      },
      {
        "name": "Egg Roll Wrappers",
        "qty": 12,
        "unit": "g",
        "requiredId": "ing-443"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-216"
      },
      {
        "name": "Duck Sauce",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-444"
      },
      {
        "name": "Plum Sauce",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-445"
      },
      {
        "name": "Salsa de Soja",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-232"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Alternative Pan Fry Method: If you don’t have access to an air fryer, you can make these egg rolls using a traditional pan fry method. Add enough oil to a medium skillet with high walls so the oil is about 1/2 inch up the side of the skillet. Heat oil on medium high heat until it reaches 350°F. Add egg rolls and fry for 3 to 4 minutes, flip, and fry for another 3 to 4 minutes until golden brown. Remove and let them drain and cool on a few paper towels.",
        "timerMinutes": 4
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Cook the filling:"
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "In a large skillet over medium heat, add the olive oil along with the ground pork or chicken. Break apart the meat with a spatula or wooden spoon as it cooks. Cook until the meat is cooked through, 6 to 8 minutes.",
        "timerMinutes": 8
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Add garlic, ginger, carrot, scallions, and cabbage. Continue to cook until cabbage wilts down and is soft, another 3 to 4 minutes, stirring regularly. Season the filling with soy sauce and rice wine vinegar, and take off the heat to cool. (This filling can be made in advance.)",
        "timerMinutes": 4
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Assemble the egg rolls:"
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Place a single egg roll wrapper on a dry surface with one point of the square facing you (like a diamond). Place about 1/4 cup of the egg roll filling mixture in the middle of the wrapper."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53284",
    "title": "Algerian Bouzgene Berber Bread with Roasted Pepper Sauce",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "ensaladas",
    "time": 59,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/se5vhk1764114880.jpg",
    "description": "Exquisito plato tradicional de autor (Algerian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Red pepper flakes",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-296"
      },
      {
        "name": "Plum Tomatoes",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-206"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-216"
      },
      {
        "name": "Garlic Clove",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Jalapeno",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-446"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Semolina",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-447"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-168"
      },
      {
        "name": "Cold Water",
        "qty": 600,
        "unit": "g",
        "requiredId": "ing-434"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-216"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 6000,
        "unit": "ml",
        "requiredId": "ing-216"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Preheat your oven's broiler. Place red bell peppers and tomatoes on a baking sheet, and roast under the broiler for about 8 minutes, turning occasionally. This should blacken the skin and help it peel off more easily. Cool, then scrape the skins off of the tomatoes and peppers, and place them in a large bowl. Remove cores and seeds from the bell peppers.",
        "timerMinutes": 8
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Heat 1 tablespoon of olive oil in a skillet over medium heat. Add the jalapenos and garlic, and cook until tender, stirring frequently. Remove from heat, and transfer the garlic and jalapeno to the bowl with the tomatoes and red peppers. Using two sharp steak knives (one in each hand), cut up the tomatoes and peppers to a coarse and soupy consistency. Stir, and set sauce aside."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Place the semolina in a large bowl, and stir in salt and 4 tablespoons of olive oil. Gradually add water while mixing and squeezing with your hand until the dough holds together without being sticky or dry, and molds easily with the hand. Divide into 6 pieces and form into balls."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "For each round, heat 1 tablespoon of olive oil in a large heavy skillet over medium heat. Roll out dough one round at a time, to no thicker than 1/4 inch. Fry in the hot skillet until dark brown spots appear on the surface, and they are crispy. Remove from the skillet, and wrap in a clean towel while preparing the remaining flat breads."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "To eat the bread and sauce, break off pieces of the bread, and scoop them into the sauce. It will slide off, but just keep reaching in!"
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53282",
    "title": "Algerian Carrots",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "ensaladas",
    "time": 59,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/o2cd4r1764113576.jpg",
    "description": "Exquisito plato tradicional de autor (Algerian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Cold Water",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-434"
      },
      {
        "name": "Zanahoria",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-44"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 5000,
        "unit": "ml",
        "requiredId": "ing-216"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-168"
      },
      {
        "name": "Whole black peppercorns",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-345"
      },
      {
        "name": "Ground Cinnamon",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-342"
      },
      {
        "name": "Ground Cumin",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-281"
      },
      {
        "name": "Garlic Clove",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Tomillo",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-231"
      },
      {
        "name": "Bay Leaf",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-248"
      },
      {
        "name": "Lemon Juice",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-258"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Place a steamer insert into a saucepan, and fill with 1 1/2 cups of water, or just below the bottom of the steamer. Cover, and bring the water to a boil over high heat. Add the sliced carrots, reduce the heat to medium, and cover the pan again. Steam until tender but not mushy, 4 to 6 minutes depending on the thickness of the slices. Reserve 1/2 cup of the cooking liquid.",
        "timerMinutes": 6
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Heat the olive oil in a skillet over medium heat. Reduce the heat to low and stir in the salt, pepper, cinnamon, cumin, garlic, and thyme. Cook the spices and garlic, stirring frequently, until fragrant, about 10 minutes. Add the 1/2 cup reserved cooking liquid and the bay leaf, cover, and simmer for 20 minutes.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Stir in the carrots, tossing well to coat with the spice mixture, and cook until heated through, about 2 to 3 minutes. Sprinkle with lemon juice and remove the bay leaf before serving.",
        "timerMinutes": 3
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53529",
    "title": "Almojábanas (Colombian Cheese Bread)",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "ensaladas",
    "time": 47,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/ymk7gt1783803106.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Cornmeal",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-448"
      },
      {
        "name": "Queso Fresco",
        "qty": 600,
        "unit": "g",
        "requiredId": "ing-449"
      },
      {
        "name": "Queso Mozzarella",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-58"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-125"
      },
      {
        "name": "Baking Powder",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-363"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-168"
      },
      {
        "name": "Free-range eggs, beaten",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-429"
      },
      {
        "name": "Coconut Milk",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-272"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Preheat the oven to 400° F."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Mix the masarepa and cheese in a food processor."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Add the remaining ingredients and mix well."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Divide into 8 equal-size portions and shape into a ball."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Place on a greased baking sheet and bake for about 25 to 30 minutes, or until they are golden. Serve warm.",
        "timerMinutes": 30
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53389",
    "title": "Apple Potato Mash (Hete bliksem) ",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "ensaladas",
    "time": 55,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/pa03n41777540582.jpg",
    "description": "Exquisito plato tradicional de autor (Netherlands), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Braeburn Apples",
        "qty": 250,
        "unit": "g",
        "requiredId": "ing-420"
      },
      {
        "name": "Red Potatoes",
        "qty": 250,
        "unit": "g",
        "requiredId": "ing-282"
      },
      {
        "name": "Cinnamon Stick",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-227"
      },
      {
        "name": "Maple Syrup",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-450"
      },
      {
        "name": "Ground Cinnamon",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-342"
      },
      {
        "name": "Bacon lardon",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-304"
      },
      {
        "name": "Corn Arepa Filled With Mozarella Cheese",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-209"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Queso Parmesano / Reggianito para rallar",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-9"
      },
      {
        "name": "Sesame Seed",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-451"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Clean and peel the potatoes and cut them into even size chunks. Boil them in salted water for about 10 min and then add the cleaned and chopped apples into the boiling water. Add the cinnamon stick as well. Leave to boil for another 10 minutes or until both apples and potatoes are to your liking. I like mine to be fairly chunky but that is a personal preference",
        "timerMinutes": 10
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "In the mean time bake the streaky bacon in a dry frying pan until crispy and set aside to drain on paper towels."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Slice a few apple pieces and melt a little butter in a fryin pan. Add the apple slices to it and add a bit of maple syrup into the pan as well as some cinnamon. Let it simmer until the apple is soft."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Prepare a plate with one whisked egg and one plate with sesame seeds. Cut your cheese into the required size. The smaller it is, the easier it is too handle."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Dip the cheese into the egg and make sure it coats all sides. Then dip the cheese into the sesame seeds and make sure it is covered everywhere."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Heat a non stick frying pan on high until nice and hot. Put the cheese slice in and bake until the sesame seeds are brown. You have to do this rather quickly or the cheese will melt completely. Turn and bake the other side."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53439",
    "title": "Arepa",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "ensaladas",
    "time": 27,
    "portions": 4,
    "difficulty": "Fácil",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/ejht7k1780092390.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-168"
      },
      {
        "name": "Corn Flour",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-249"
      },
      {
        "name": "Warm Water",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-452"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Put the corn flour in a bowl and add the salted water little by little, mixing with the flour until all the water has been used and the flour has become a dough. Let it rest for five minutes. Now, shape the dough into round rolls about 3 inches in diameter and 1/2 inch thick. In a lightly greased skillet, slowly cook the arepas until a crust forms on each side. Now place them into a casserole and bake in the oven at 350 degrees for approximately 20 minutes, until the arepas sound hollow when tapped.",
        "timerMinutes": 20
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "To enhance taste: instead of using just water, use chicken or beef broth."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53094",
    "title": "Baba Ghanoush",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "ensaladas",
    "time": 55,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/dlmh401760524897.jpg",
    "description": "Exquisito plato tradicional de autor (Syrian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Egg Plants",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-453"
      },
      {
        "name": "Garlic Clove",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Kosher salt",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-393"
      },
      {
        "name": "Lemon Juice",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-258"
      },
      {
        "name": "Tahini",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-454"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-216"
      },
      {
        "name": "Greek Yogurt",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-350"
      },
      {
        "name": "Cayenne Pepper",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-267"
      },
      {
        "name": "Mint",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-343"
      },
      {
        "name": "Perejil Fresco",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-207"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Preheat an outdoor grill for medium-high heat and lightly oil the grate. Prick the surface of the skin of eggplants several times with the tip of a knife."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Place eggplants directly on grill. Turn frequently with tongs while skin chars. Cook until eggplants have collapsed and are very soft, 25 to 30 minutes. Transfer to a bowl and cover tightly with aluminum foil and allow to cool, about 15 minutes.",
        "timerMinutes": 30
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "When eggplants are cool enough to handle, split them in half and scrape flesh into a colander placed over a bowl. Drain 5 or 10 minutes.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Transfer eggplant to mixing bowl. Add crushed garlic and salt; mash until creamy but with a little texture, about 5 minutes. Whisk in lemon juice, tahini, olive oil, and cayenne pepper. Stir in yogurt.",
        "timerMinutes": 5
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Cover bowl with plastic wrap and refrigerate until completely chilled. Stir in mint and parsley, and taste to adjust seasonings before serving."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53456",
    "title": "Bajan Salt Bread Recipe",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "ensaladas",
    "time": 39,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/sr7chd1780264758.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Yeast",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-455"
      },
      {
        "name": "Icing Sugar",
        "qty": 10,
        "unit": "g",
        "requiredId": "ing-287"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-168"
      },
      {
        "name": "Vegetable Oil",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-285"
      },
      {
        "name": "Plain Flour",
        "qty": 1200,
        "unit": "g",
        "requiredId": "ing-240"
      },
      {
        "name": "Warm Water",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-452"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Sift half the flour, mix with salt and yeast in a large mixing bowl, and slowly add warm water until the mixture forms a stiff dough. Add more sifted flour until you have a stiff enough dough to knead."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Lightly flour the work surface, knead the dough for 10 minutes until it is smooth and elastic, and then place it in a greased bowl. Now place the bowl warmly for 40-50 minutes until it has doubled. You know the dough is ready when you poke a finger, and the indentation remains.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Preheat oven to 425 degrees F or 220 degrees C."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Now divide the dough into 12 equal portions, roll each into a fist size ball, and place on a greased baking sheet. Now place in a warm place again for a further 40 minutes or again until the dough has doubled in size.",
        "timerMinutes": 40
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Now place in the oven’s center and bake for 25-30 minutes until golden brown rolls sound hollow when tapped.",
        "timerMinutes": 30
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53460",
    "title": "Bajan Sweet Bread",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "ensaladas",
    "time": 59,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/5vhbzt1782239221.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Coconut Milk",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-272"
      },
      {
        "name": "Melted Butter",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-425"
      },
      {
        "name": "Plain Flour",
        "qty": 800,
        "unit": "g",
        "requiredId": "ing-240"
      },
      {
        "name": "Shortening",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-299"
      },
      {
        "name": "Baking Powder",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-363"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-168"
      },
      {
        "name": "Icing Sugar",
        "qty": 150,
        "unit": "g",
        "requiredId": "ing-287"
      },
      {
        "name": "Raisins",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-406"
      },
      {
        "name": "Queso Parmesano / Reggianito para rallar",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-9"
      },
      {
        "name": "Evaporated Milk",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-405"
      },
      {
        "name": "Almond Essence",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-456"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Add all the flour, baking powder, and salt to a large mixing bowl."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Melt the butter in a saucepan."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Mix the coconut and most of the sugar in another bowl – leave some back to cover the loaves later, raisins, egg, milk, almond essence, vanilla essence, and melted butter."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Mix well until you have a creamy paste."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Add this to the bowl with the flour, baking powder, and salt. Mix until you form a stiff dough."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Now divide the mixture between the baking tins."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53548",
    "title": "Baked Yuca Fries",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "ensaladas",
    "time": 51,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/j223gc1784579841.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Yuca",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-457"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-216"
      },
      {
        "name": "Chilli Powder",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-362"
      },
      {
        "name": "Kosher salt",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-393"
      },
      {
        "name": "Ground Black Pepper",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-458"
      },
      {
        "name": "Palta Hass",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-50"
      },
      {
        "name": "Crema Ácida",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-262"
      },
      {
        "name": "Lime juice",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-225"
      },
      {
        "name": "Cilantro fresco",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-85"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Preheat oven to 450°. Bring a large pot of water to a boil. Trim ends of yuca and cut each one in half, widthwise. Stand them on their ends and use a sharp knife to cut the waxy peel off. Cut each piece in half lengthwise and then cut in half lengthwise one more time to create 16 pieces total. Trim the fibrous center out of each piece."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Place cut yuca into boiling water and let boil until fork tender, 8 to 10 minutes. Using a slotted spoon, remove from pot and place on a paper towel lined cutting board. Pat dry with another paper towel.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Place dried yuca into a large bowl and toss with oil. Season with chili powder, salt, and pepper and toss again to evenly coat. Place yuca on a large baking sheet in an even layer."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Bake until golden and crispy, about 25 minutes, tossing halfway through.",
        "timerMinutes": 25
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Meanwhile make dipping sauce: In a small food processor or blender, combine avocado, sour cream, lime juice, and cilantro and blend until smooth. Season with salt and pepper."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Serve fries immediately with dipping sauce."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53092",
    "title": "Fasoliyyeh Bi Z-Zayt (Syrian Green Beans with Olive Oil)",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "veggie",
    "time": 35,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/21yc5s1760524759.jpg",
    "description": "Exquisito plato tradicional de autor (Syrian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Green Beans",
        "qty": 16,
        "unit": "g",
        "requiredId": "ing-246"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-216"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Garlic Clove",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Cilantro fresco",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-85"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Place the green beans into a large pot, and drizzle with olive oil. Season with salt to taste, and put the lid on the pot. Cook over medium-high heat, stirring occasionally, until beans are cooked to your desired doneness. Syrians like it cooked until the green beans are turning brownish in color. The idea is not to saute them, but to let them steam in the moisture released by the ice crystals."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Add cilantro and garlic to the beans, and continue to cook just until the cilantro has started to wilt. Eat as a main course by scooping up with warm pita bread or serve as a side dish."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53150",
    "title": "Padron peppers",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "veggie",
    "time": 23,
    "portions": 4,
    "difficulty": "Fácil",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/0ljvc51763248075.jpg",
    "description": "Exquisito plato tradicional de autor (Spanish), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-216"
      },
      {
        "name": "Padron peppers",
        "qty": 500,
        "unit": "g",
        "requiredId": "ing-459"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Heat the olive oil in a large frying pan over a high heat, or if using an air-fryer, heat to 205C for 3 mins. Fry the peppers, stirring frequently, for 5 mins until blistered and wilted. The peppers should be soft and slightly charred.",
        "timerMinutes": 3
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Transfer the peppers to a serving plate and season with some sea salt. Serve with dips or as part of a tapas spread, if you like."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53115",
    "title": "Red onion pickle",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "veggie",
    "time": 39,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/ppodrp1762325183.jpg",
    "description": "Exquisito plato tradicional de autor (Norway), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Onions",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-283"
      },
      {
        "name": "Sea Salt",
        "qty": 10,
        "unit": "g",
        "requiredId": "ing-460"
      },
      {
        "name": "Cider Vinegar",
        "qty": 200,
        "unit": "ml",
        "requiredId": "ing-461"
      },
      {
        "name": "Granulated Sugar",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-410"
      },
      {
        "name": "Whole black peppercorns",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-345"
      },
      {
        "name": "Bay Leaves",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-462"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Peel the onions, cut them in half from top to bottom and finely slice into half-moon pieces. Put in a colander placed over a bowl and sprinkle with salt, lightly turning over the onion pieces with your hands so the surfaces are all covered. Set aside for an hour or so to brine."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Meanwhile put the vinegar, 50ml/2fl oz water and the sugar in a saucepan. Bring to a simmer, stirring to help the sugar dissolve, and cook for a couple of minutes. Set aside."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Pack the onions into the sterilised jars, sprinkling in a little pepper as you go. Cover with the warm vinegar and finish by tucking a couple of bay leaves down the side of the jars. Seal. The onions are best kept in the fridge and used within to 4 weeks."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52942",
    "title": "Roast fennel and aubergine paella",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "veggie",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/1520081754.jpg",
    "description": "Exquisito plato tradicional de autor (Spanish), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Aubergine",
        "qty": 6000,
        "unit": "ml",
        "requiredId": "ing-349"
      },
      {
        "name": "Fennel",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-270"
      },
      {
        "name": "Red pepper flakes",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-296"
      },
      {
        "name": "Courgettes",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-463"
      },
      {
        "name": "Onions",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-283"
      },
      {
        "name": "Paella Rice",
        "qty": 300,
        "unit": "g",
        "requiredId": "ing-307"
      },
      {
        "name": "Pimentón Dulce",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-214"
      },
      {
        "name": "Saffron",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-357"
      },
      {
        "name": "White Wine Vinegar",
        "qty": 200,
        "unit": "ml",
        "requiredId": "ing-253"
      },
      {
        "name": "Caldo de Verduras Casero",
        "qty": 700,
        "unit": "ml",
        "requiredId": "ing-237"
      },
      {
        "name": "Frozen Peas",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-464"
      },
      {
        "name": "Lemon Juice",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-258"
      },
      {
        "name": "Perejil Fresco",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-207"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Whole black peppercorns",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-345"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Put the fennel, aubergine, pepper and courgette in a roasting tray. Add a glug of olive oil, season with salt and pepper and toss around to coat the veggies in the oil. Roast in the oven for 20 minutes, turning a couple of times until the veg are pretty much cooked through and turning golden.",
        "timerMinutes": 20
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Meanwhile, heat a paella pan or large frying pan over a low– medium heat and add a glug of olive oil. Sauté the onion for 8–10 minutes until softened. Increase the heat to medium and stir in the rice, paprika and saffron. Cook for around 1 minute to start toasting the rice, then add the white wine. Reduce by about half before stirring in two-thirds of the stock. Reduce to a simmer and cook for 10 minutes without a lid, stirring a couple of times.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Stir in the peas, add some seasoning, then gently mix in the roasted veg. Pour over the remaining stock, arrange the lemon wedges on top and cover with a lid or some aluminium foil. Cook for a further 10 minutes.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "To ensure you get the classic layer of toasted rice at the bottom of the pan, increase the heat to high until you hear a slight crackle. Remove from the heat and sit for 5 minutes before sprinkling over the parsley and serving.",
        "timerMinutes": 5
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53250",
    "title": "Vegan banh mi",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "veggie",
    "time": 51,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/sonirb1763782831.jpg",
    "description": "Exquisito plato tradicional de autor (Vietnamese), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Raw Vegetables",
        "qty": 150,
        "unit": "g",
        "requiredId": "ing-465"
      },
      {
        "name": "White Wine Vinegar",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-253"
      },
      {
        "name": "Caster Sugar",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-389"
      },
      {
        "name": "Baguette",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-466"
      },
      {
        "name": "Hummus",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-467"
      },
      {
        "name": "Tempeh",
        "qty": 175,
        "unit": "g",
        "requiredId": "ing-468"
      },
      {
        "name": "Coriander",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-269"
      },
      {
        "name": "Mint",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-343"
      },
      {
        "name": "Hotsauce",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-257"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Put the shredded veg in a bowl and add the vinegar, sugar and 1 tsp salt. Toss everything together, then set aside to pickle quickly while you prepare the rest of the sandwich."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Heat oven to 180C/160C fan/gas 4. Cut the baguette into four, then slice each piece horizontally in half. Put the baguette pieces in the oven for 5 mins until lightly toasted and warm. Spread each piece with a layer of hummus, then top four pieces with the tempeh slices and pile the pickled veg on top. To serve, sprinkle over the herbs and squeeze over some hot sauce, then top with the other baguette pieces to make sandwiches.",
        "timerMinutes": 5
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52794",
    "title": "Vegan Chocolate Cake",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "veggie",
    "time": 47,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/qxutws1486978099.jpg",
    "description": "Exquisito plato tradicional de autor (United States), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Self-raising Flour",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-424"
      },
      {
        "name": "Coco sugar",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-469"
      },
      {
        "name": "Cacao Amargo en polvo 100%",
        "qty": 67,
        "unit": "g",
        "requiredId": "ing-72"
      },
      {
        "name": "Baking Powder",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-363"
      },
      {
        "name": "Flax eggs",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-470"
      },
      {
        "name": "Almond milk",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-471"
      },
      {
        "name": "Esencia de Vainilla",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-407"
      },
      {
        "name": "Cold Water",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-434"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Simply mix all dry ingredients with wet ingredients and blend altogether. Bake for 45 min on 180 degrees. Decorate with some melted vegan chocolate",
        "timerMinutes": 45
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52775",
    "title": "Vegan Lasagna",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "veggie",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/rvxxuy1468312893.jpg",
    "description": "Exquisito plato tradicional de autor (Italian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Green red lentils",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-472"
      },
      {
        "name": "Zanahoria",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-44"
      },
      {
        "name": "Onions",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-283"
      },
      {
        "name": "Zucchini / Calabacín",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-51"
      },
      {
        "name": "Coriander",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-269"
      },
      {
        "name": "Espinaca fresca",
        "qty": 150,
        "unit": "g",
        "requiredId": "ing-48"
      },
      {
        "name": "Masa para Lasaña",
        "qty": 10,
        "unit": "g",
        "requiredId": "ing-400"
      },
      {
        "name": "Vegan butter",
        "qty": 35,
        "unit": "g",
        "requiredId": "ing-473"
      },
      {
        "name": "Plain Flour",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-240"
      },
      {
        "name": "Soya milk",
        "qty": 300,
        "unit": "ml",
        "requiredId": "ing-474"
      },
      {
        "name": "Mustard Powder",
        "qty": 1.5,
        "unit": "g",
        "requiredId": "ing-293"
      },
      {
        "name": "White Wine Vinegar",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-253"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Preheat oven to 180 degrees celcius."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Boil vegetables for 5-7 minutes, until soft. Add lentils and bring to a gentle simmer, adding a stock cube if desired. Continue cooking and stirring until the lentils are soft, which should take about 20 minutes.",
        "timerMinutes": 7
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Blanch spinach leaves for a few minutes in a pan, before removing and setting aside."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Top up the pan with water and cook the lasagne sheets. When cooked, drain and set aside."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "To make the sauce, melt the butter and add the flour, then gradually add the soya milk along with the mustard and the vinegar. Cook and stir until smooth and then assemble the lasagne as desired in a baking dish."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Bake in the preheated oven for about 25 minutes.",
        "timerMinutes": 25
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53158",
    "title": "Air fryer patatas bravas",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "veggie",
    "time": 47,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/3m8yae1763257951.jpg",
    "description": "Exquisito plato tradicional de autor (Spanish), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Red Potatoes",
        "qty": 900,
        "unit": "g",
        "requiredId": "ing-282"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-216"
      },
      {
        "name": "Onions",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-283"
      },
      {
        "name": "Garlic Clove",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Pimentón Dulce",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-214"
      },
      {
        "name": "Tomato Puree",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-252"
      },
      {
        "name": "Tinned Tomatos",
        "qty": 225,
        "unit": "g",
        "requiredId": "ing-475"
      },
      {
        "name": "Basil Leaves",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-387"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Soak the potatoes in just-boiled water for 30 mins, then drain and leave to air-dry for 5 mins. Heat the air fryer to 200C. Tip the potatoes into a bowl and drizzle over 1 tbsp of the oil and add 1/2 tsp each of salt and freshly ground black pepper. Mix to coat the potatoes all over, then tip into the air fryer basket and cook for 20-30 mins until crisp and golden.",
        "timerMinutes": 30
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Meanwhile, heat the remaining oil in a small pan over a medium-low heat and fry the onion for 8-10 mins until softened but not golden. Stir in the garlic and cook for a minute before adding the paprika and cooking for 30 seconds more. Stir in the tomato purée, cook for 1 min, then tip in the chopped tomatoes. Cook for 5-10 mins over a medium heat until thickened slightly.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Once the potatoes are cooked, tip out onto a platter and pour over the tomato sauce. Sprinkle with the basil leaves, then serve."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53288",
    "title": "Algerian Flafla (Bell Pepper Salad)",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "veggie",
    "time": 43,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/tbj1bs1764118062.jpg",
    "description": "Exquisito plato tradicional de autor (Algerian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Morrón Verde",
        "qty": 3,
        "unit": "un",
        "requiredId": "ing-45"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-216"
      },
      {
        "name": "Onions",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-283"
      },
      {
        "name": "Garlic Clove",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Cayenne Pepper",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-267"
      },
      {
        "name": "Plum Tomatoes",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-206"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Preheat an oven to 450 degrees F (230 degrees C). Place the whole peppers on aluminum foil. Bake until the skin is spotted black and the peppers are soft, 30 to 45 minutes, turning the peppers once if necessary.",
        "timerMinutes": 45
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Remove peppers from the oven and set aside to cool for 10 minutes. Peel off the skin and remove the stem and seeds. Chop the roasted peppers into half-inch pieces.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Heat the olive oil in a skillet over medium heat. Stir in the onion and cook, stirring frequently, until the onion has softened and turned translucent, about 5 minutes. Add the garlic, salt, and pepper; stir in the chopped peppers and tomato. Cook over medium heat, stirring occasionally, until the tomato is soft and the mixture is well incorporated, about 5 minutes.",
        "timerMinutes": 5
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53278",
    "title": "Aubergine & hummus grills",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "veggie",
    "time": 51,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/zub3s91764110535.jpg",
    "description": "Exquisito plato tradicional de autor (Turkish), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Aubergine",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-349"
      },
      {
        "name": "Vegetable Oil",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-285"
      },
      {
        "name": "Naan Bread",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-220"
      },
      {
        "name": "Hummus",
        "qty": 300,
        "unit": "g",
        "requiredId": "ing-467"
      },
      {
        "name": "Walnuts",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-476"
      },
      {
        "name": "Perejil Fresco",
        "qty": 40,
        "unit": "g",
        "requiredId": "ing-207"
      },
      {
        "name": "Cherry Tomatoes",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-328"
      },
      {
        "name": "Lemon Juice",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-258"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-216"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Lay the aubergine out in one layer on a large baking sheet. Brush sparingly with vegetable oil, then season generously. Grill for 15 mins, turning twice and brushing with oil until the slices are softened and cooked through. Meanwhile, whizz the bread into crumbs. Add 2 tsp oil and whizz briefly again, to coat.",
        "timerMinutes": 15
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Spread a couple of tsps of hummus on top of each slice of aubergine. Tip the breadcrumbs onto a large plate, then press the hummus side of the aubergines into the crumbs to coat. Grill again, crumb-side up, for about 3 mins until golden.",
        "timerMinutes": 3
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Toss the walnuts, parsley and cherry tomatoes in a bowl, season, then add the lemon juice and olive oil and toss again. Serve the grills with the salad, a dollop more hummus and some pitta bread."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53267",
    "title": "Aubergine couscous salad",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "veggie",
    "time": 47,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/02s6gc1763799560.jpg",
    "description": "Exquisito plato tradicional de autor (Turkish), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Aubergine",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-349"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-216"
      },
      {
        "name": "Couscous",
        "qty": 140,
        "unit": "g",
        "requiredId": "ing-477"
      },
      {
        "name": "Caldo de Verduras Casero",
        "qty": 225,
        "unit": "g",
        "requiredId": "ing-237"
      },
      {
        "name": "Cherry Tomatoes",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-328"
      },
      {
        "name": "Mint",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-343"
      },
      {
        "name": "Goats Cheese",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-478"
      },
      {
        "name": "Lemon Juice",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-258"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Heat grill to high. Put the aubergine on a baking sheet, brush with oil and season. Grill for about 15 mins, turning and brushing with more oil halfway, until browned and softened.",
        "timerMinutes": 15
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Meanwhile, tip the couscous into a large bowl, pour over the stock, then cover and leave for 10 mins. Mix the tomatoes, mint, goat’s cheese and remaining oil together. Fluff the couscous up with a fork, then stir in the aubergines, tomato mixture and lemon juice.",
        "timerMinutes": 10
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53107",
    "title": "Avocado dip with new potatoes",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "veggie",
    "time": 51,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/flrajf1762341295.jpg",
    "description": "Exquisito plato tradicional de autor (Australian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Palta Hass",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-50"
      },
      {
        "name": "Natural Yoghurt",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-479"
      },
      {
        "name": "Lime juice",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-225"
      },
      {
        "name": "Lemon Juice",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-258"
      },
      {
        "name": "Baby New Potatoes",
        "qty": 1250,
        "unit": "g",
        "requiredId": "ing-480"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-216"
      },
      {
        "name": "Chilli Powder",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-362"
      },
      {
        "name": "Cumin Seeds",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-481"
      },
      {
        "name": "Tortillas",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-482"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Whizz half the avocado flesh with the yogurt, lime and lemon juice and seasoning. Dice the remaining avocado, then gently stir into the whizzed mix with most of the lime zest. Cover, then chill until ready to serve."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Boil potatoes for 6 mins, then drain well and toss with olive oil, chilli powder and cumin seeds. Now set aside until half an hour before your guests arrive.",
        "timerMinutes": 6
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Heat oven to 200C/180C fan/gas 6, then roast potatoes for about 30 mins, shaking the tray halfway, until golden and tender. Transfer the dip to one or two bowls, scatter with the remaining lime zest and serve with the hot potatoes, and tortilla chips for dipping.",
        "timerMinutes": 30
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52807",
    "title": "Baingan Bharta",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "veggie",
    "time": 51,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg",
    "description": "Exquisito plato tradicional de autor (India), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Aubergine",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-349"
      },
      {
        "name": "Onions",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-283"
      },
      {
        "name": "Plum Tomatoes",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-206"
      },
      {
        "name": "Garlic Clove",
        "qty": 6000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Green Chilli",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-361"
      },
      {
        "name": "Chilli Powder",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-362"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 1500,
        "unit": "ml",
        "requiredId": "ing-216"
      },
      {
        "name": "Coriander",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-269"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Rinse the baingan (eggplant or aubergine) in water. Pat dry with a kitchen napkin. Apply some oil all over and"
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "keep it for roasting on an open flame. You can also grill the baingan or roast in the oven. But then you won't get"
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "the smoky flavor of the baingan. Keep the eggplant turning after a 2 to 3 minutes on the flame, so that its evenly",
        "timerMinutes": 3
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "cooked. You could also embed some garlic cloves in the baingan and then roast it."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Roast the aubergine till its completely cooked and tender. With a knife check the doneness. The knife should slid"
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "easily in aubergines without any resistance. Remove the baingan and immerse in a bowl of water till it cools"
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53307",
    "title": "Beetroot & red cabbage sauerkraut",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "veggie",
    "time": 35,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/ra2k8a1764365055.jpg",
    "description": "Exquisito plato tradicional de autor (Polish), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Cooked Beetroot",
        "qty": 320,
        "unit": "g",
        "requiredId": "ing-219"
      },
      {
        "name": "Cabbage",
        "qty": 450,
        "unit": "g",
        "requiredId": "ing-260"
      },
      {
        "name": "Onions",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-283"
      },
      {
        "name": "Caraway Seed",
        "qty": 10,
        "unit": "g",
        "requiredId": "ing-323"
      },
      {
        "name": "Sea Salt",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-460"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Tip all the ingredients into a large bowl, add 1-1½ tsp freshly ground black pepper, then scrunch it all together with your hands for 5 mins. You might want to wear gloves to avoid staining your skin with the beetroot juices.",
        "timerMinutes": 5
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Press the veg down in the bowl with your hands, then cover the surface and up the side of the bowl with a large sheet of compostable cling film or something reusable like a beeswax wrap. Now place another similar-sized bowl on top. Press down hard and add anything heavy (packs of rice or cans work well) to weigh it down so the juices rise to cover the surface. Cover again."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Leave to ferment at room temperature for at least five days, but for maximum flavour, leave for one-five weeks (until the bubbling subsides)."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Check the sauerkraut. After a few days, you will see bubbles that have built up as it ferments. Give it a stir, then cover and weigh it down again as before. The cabbage will become increasingly sour the longer it’s fermented, so taste it now and again. When you like the flavour, transfer it to sterilised jars and keep chilled. Will keep chilled for up to six months."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53313",
    "title": "Beetroot latkes",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "veggie",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/qwicc91764368097.jpg",
    "description": "Exquisito plato tradicional de autor (Ukrainian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Rapeseed Oil",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-241"
      },
      {
        "name": "Greek Yogurt",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-350"
      },
      {
        "name": "Mint",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-343"
      },
      {
        "name": "Rocket",
        "qty": 150,
        "unit": "g",
        "requiredId": "ing-221"
      },
      {
        "name": "Cherry Tomatoes",
        "qty": 130,
        "unit": "g",
        "requiredId": "ing-328"
      },
      {
        "name": "Cooked Beetroot",
        "qty": 400,
        "unit": "g",
        "requiredId": "ing-219"
      },
      {
        "name": "Queso Parmesano / Reggianito para rallar",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-9"
      },
      {
        "name": "Plain Flour",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-240"
      },
      {
        "name": "Garlic Clove",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Caraway Seed",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-323"
      },
      {
        "name": "Ground Cumin",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-281"
      },
      {
        "name": "Lemon Juice",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-258"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Heat the oven to 180C/160C fan/gas 4. Make the latkes by combining all of the ingredients."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Heat the oil in a large non-stick pan. Spoon in the mixture to make six round latkes. Fry for 4-5 mins on each side, then transfer to a baking sheet and bake for 10 mins.",
        "timerMinutes": 5
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Combine the yogurt and mint in a small bowl. Toss the salad leaves and tomatoes together, then serve the latkes with the mint yogurt and salad."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53078",
    "title": "Beetroot Soup (Borscht)",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "veggie",
    "time": 43,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/zadvgb1699012544.jpg",
    "description": "Exquisito plato tradicional de autor (Ukrainian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Cooked Beetroot",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-219"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-216"
      },
      {
        "name": "Chicken Stock Cube",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-291"
      },
      {
        "name": "Cold Water",
        "qty": 1200,
        "unit": "g",
        "requiredId": "ing-434"
      },
      {
        "name": "Red Potatoes",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-282"
      },
      {
        "name": "Cannellini Beans",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-483"
      },
      {
        "name": "Dill",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-355"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Chop the beetroot, add water and stock cube and cook for 15mins. Add the other ingredients and boil until soft. Finally add the beans and cook for 5mins. Serve in the soup pot.",
        "timerMinutes": 15
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53536",
    "title": "Black Beans Hotpot",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "veggie",
    "time": 59,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/81ahfr1784394567.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Black Beans",
        "qty": 400,
        "unit": "g",
        "requiredId": "ing-210"
      },
      {
        "name": "Onions",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-283"
      },
      {
        "name": "Morrón Verde",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-45"
      },
      {
        "name": "Red pepper flakes",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-296"
      },
      {
        "name": "Celery",
        "qty": 67,
        "unit": "g",
        "requiredId": "ing-275"
      },
      {
        "name": "Garlic Clove",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Ground Cumin",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-281"
      },
      {
        "name": "Orégano seco seleccionado",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-82"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-168"
      },
      {
        "name": "Whole black peppercorns",
        "qty": 10,
        "unit": "g",
        "requiredId": "ing-345"
      },
      {
        "name": "Cold Water",
        "qty": 1000,
        "unit": "g",
        "requiredId": "ing-434"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Add all the ingredients in the Instant pot, Lock the lid on and set the Instant Pot to High Pressure for 35 minutes. Once the beans are done cooking, let the pressure release naturally for 20 minutes before releasing the remaining pressure. Open and serve!",
        "timerMinutes": 35
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Let the beans get cool completely before saving them in the fridge or freezer."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53430",
    "title": "Antiguan Breakfast (Chop Up and ‘Saltfish’)",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "panaderia",
    "time": 47,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/jvjnoh1780086318.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Egg Plants",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-453"
      },
      {
        "name": "Callaloo",
        "qty": 8,
        "unit": "g",
        "requiredId": "ing-484"
      },
      {
        "name": "Pumpkin",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-485"
      },
      {
        "name": "Garlic Clove",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Onions",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-283"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 2,
        "unit": "un",
        "requiredId": "ing-125"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-168"
      },
      {
        "name": "Whole black peppercorns",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-345"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Peel and chop eggplant and pumpkin into medium-sized pieces."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Heat butter and add onions and garlic in a medium sized pot set to medium to high heat. Sauté for 2 minutes until softened but not browned.",
        "timerMinutes": 2
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Add pumpkin and eggplant. Sauté for an additional two to three minutes."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Add water just to cover the vegetables. Bring to a boil, reduce heat to a simmer and cook until the vegetables are soft."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Add the chopped spinach, stir and cook for an additional 3 minutes.",
        "timerMinutes": 3
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Pour the vegetable mixture into a colander and let drain."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53076",
    "title": "Bread omelette",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "panaderia",
    "time": 27,
    "portions": 4,
    "difficulty": "Fácil",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg",
    "description": "Exquisito plato tradicional de autor (India), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Naan Bread",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-220"
      },
      {
        "name": "Queso Parmesano / Reggianito para rallar",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-9"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Cocción",
        "text": "Make and enjoy",
        "timerMinutes": 20
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52965",
    "title": "Breakfast Potatoes",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "panaderia",
    "time": 51,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/1550441882.jpg",
    "description": "Exquisito plato tradicional de autor (Canadian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Red Potatoes",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-282"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-216"
      },
      {
        "name": "Bacon lardon",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-304"
      },
      {
        "name": "Garlic Clove",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-266"
      },
      {
        "name": "Maple Syrup",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-450"
      },
      {
        "name": "Perejil Fresco",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-207"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Cayenne Pepper",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-267"
      },
      {
        "name": "Allspice",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-284"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Before you do anything, freeze your bacon slices that way when you're ready to prep, it'll be so much easier to chop!"
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Wash the potatoes and cut medium dice into square pieces. To prevent any browning, place the already cut potatoes in a bowl filled with water."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "In the meantime, heat 1-2 tablespoons of oil in a large skillet over medium-high heat. Tilt the skillet so the oil spreads evenly."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Once the oil is hot, drain the potatoes and add to the skillet. Season with salt, pepper, and Old Bay as needed."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Cook for 10 minutes, stirring the potatoes often, until brown. If needed, add a tablespoon more of oil.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Chop up the bacon and add to the potatoes. The bacon will start to render and the fat will begin to further cook the potatoes. Toss it up a bit! The bacon will take 5-6 minutes to crisp.",
        "timerMinutes": 6
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53379",
    "title": "Dutch poffertjes (mini pancakes)",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "panaderia",
    "time": 51,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/oaqz9f1766593912.jpg",
    "description": "Exquisito plato tradicional de autor (Netherlands), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Plain Flour",
        "qty": 125,
        "unit": "g",
        "requiredId": "ing-240"
      },
      {
        "name": "Buckwheat Flour",
        "qty": 125,
        "unit": "g",
        "requiredId": "ing-486"
      },
      {
        "name": "Free-range eggs, beaten",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-429"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-125"
      },
      {
        "name": "Coconut Milk",
        "qty": 300,
        "unit": "ml",
        "requiredId": "ing-272"
      },
      {
        "name": "Yeast",
        "qty": 10,
        "unit": "g",
        "requiredId": "ing-455"
      },
      {
        "name": "Vanilla sugar",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-487"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-125"
      },
      {
        "name": "Icing Sugar",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-287"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Mix the dry yeast with some of the luke warm milk en stir until dissolved."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Place buckwheat and the flour together in a bowl and make a small circle in the middle. Add the yeast mixture into it. Add the milk and stir until you have a smooth batter."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Add the eggs, salt and vanille sugar and stir through. Leave to stand and rise for about 45 minutes.",
        "timerMinutes": 45
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Heat the poffertjespan and add a bit of butter into each hole. Fill halfway with batter and first bake one side until you can see the top dry out a little. Turn the poffertjes around with a small fork and bake the other side until cooked and golden brown."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Serve the poffertjes with butter and icing sugar"
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52895",
    "title": "English Breakfast",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "panaderia",
    "time": 43,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg",
    "description": "Exquisito plato tradicional de autor (British), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Sausages",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-317"
      },
      {
        "name": "Bacon lardon",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-304"
      },
      {
        "name": "Champiñones Frescos",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-290"
      },
      {
        "name": "Plum Tomatoes",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-206"
      },
      {
        "name": "Black Pudding",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-303"
      },
      {
        "name": "Free-range eggs, beaten",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-429"
      },
      {
        "name": "Naan Bread",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-220"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Heat the flat grill plate over a low heat, on top of 2 rings/flames if it fits, and brush sparingly with light olive oil."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Cook the sausages first. Add the sausages to the hot grill plate/the coolest part if there is one and allow to cook slowly for about 15-20 minutes, turning occasionally, until golden. After the first 10 minutes, increase the heat to medium before beginning to cook the other ingredients. If you are struggling for space, completely cook the sausages and keep hot on a plate in the oven.",
        "timerMinutes": 20
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Snip a few small cuts into the fatty edge of the bacon. Place the bacon straight on to the grill plate and fry for 2-4 minutes each side or until your preferred crispiness is reached. Like the sausages, the cooked bacon can be kept hot on a plate in the oven.",
        "timerMinutes": 4
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "For the mushrooms, brush away any dirt using a pastry brush and trim the stalk level with the mushroom top. Season with salt and pepper and drizzle over a little olive oil. Place stalk-side up on the grill plate and cook for 1-2 minutes before turning and cooking for a further 3-4 minutes. Avoid moving the mushrooms too much while cooking, as this releases the natural juices, making them soggy.",
        "timerMinutes": 2
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "For the tomatoes, cut the tomatoes across the centre/or in half lengthways if using plum tomatoes , and with a small, sharp knife remove the green 'eye'. Season with salt and pepper and drizzle with a little olive oil. Place cut-side down on the grill plate and cook without moving for 2 minutes. Gently turn over and season again. Cook for a further 2-3 minutes until tender but still holding their shape.",
        "timerMinutes": 2
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "For the black pudding, cut the black pudding into 3-4 slices and remove the skin. Place on the grill plate and cook for 1½-2 minutes each side until slightly crispy.",
        "timerMinutes": 2
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53413",
    "title": "Flija Layered Pancake / Crepe",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "panaderia",
    "time": 60,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/eqnf3p1779649407.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Plain Flour",
        "qty": 1000,
        "unit": "g",
        "requiredId": "ing-240"
      },
      {
        "name": "Cold Water",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-434"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-168"
      },
      {
        "name": "Melted Butter",
        "qty": 220,
        "unit": "g",
        "requiredId": "ing-425"
      },
      {
        "name": "Vegetable Oil",
        "qty": 200,
        "unit": "ml",
        "requiredId": "ing-285"
      },
      {
        "name": "Greek Yogurt",
        "qty": 5000,
        "unit": "ml",
        "requiredId": "ing-350"
      },
      {
        "name": "Melted Butter",
        "qty": 220,
        "unit": "g",
        "requiredId": "ing-425"
      },
      {
        "name": "Vegetable Oil",
        "qty": 200,
        "unit": "ml",
        "requiredId": "ing-285"
      },
      {
        "name": "Clotted Cream",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-391"
      },
      {
        "name": "Melted Butter",
        "qty": 220,
        "unit": "g",
        "requiredId": "ing-425"
      },
      {
        "name": "Crema Ácida",
        "qty": 500,
        "unit": "ml",
        "requiredId": "ing-262"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-216"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Prepare the Flour Batter"
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Mix together the flour, water and salt ensuring all the lumps are dissolved. The mixture should be thick but still of a pouring consistency, add a little extra water if required. Put to one side."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Prepare the Batter Filling"
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Mix together the butter, oil and chosen yogurt / cream ensuring all the lumps are dissolved. The mixture should be runny, leave to rest for 10 minutes before given it another good mix. The consistency should be similar to custard. Put to one side.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Preheat the gill to a medium setting (I use mark 4 of 6). Take a large deep baking tray or pie pan and rub some olive oil over the base. Make the first layer of flour batter using a squirty bottle or laydel, don't try to pour the batter as it will be too thick in the pan. You need to make a star effect by leaving triangles between each line of batter layers. Place under the grill until golden brown. This will take between 3 - 5 minutes.",
        "timerMinutes": 5
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Remove from under the grill and using a brush or the back of spoon rub over the whole pan (both battered and un-battered areas) a layer of the batter filling. Then, add a layer of the flour filling, use the same star effect this time placing the lines of batter through the gaps left from the previous layering. Also, leaving the same triangle shapes between each line. Place under the grill until golden brown. This will take between 3 - 5 minutes.",
        "timerMinutes": 5
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52957",
    "title": "Fruit and Cream Cheese Breakfast Pastries",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "panaderia",
    "time": 47,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/1543774956.jpg",
    "description": "Exquisito plato tradicional de autor (United States), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Cream Cheese",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-488"
      },
      {
        "name": "Icing Sugar",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-287"
      },
      {
        "name": "Esencia de Vainilla",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-407"
      },
      {
        "name": "Plain Flour",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-240"
      },
      {
        "name": "Puff Pastry",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-245"
      },
      {
        "name": "Strawberries",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-489"
      },
      {
        "name": "Raspberries",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-490"
      },
      {
        "name": "Blackberries",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-422"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Preheat oven to 400ºF (200ºC), and prepare two cookie sheets with parchment paper. In a bowl, mix cream cheese, sugar, and vanilla until fully combined. Lightly flour the surface and roll out puff pastry on top to flatten. Cut each sheet of puff pastry into 9 equal squares. On the top right and bottom left of the pastry, cut an L shape approximately ½ inch (1 cm) from the edge."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "NOTE: This L shape should reach all the way down and across the square, however both L shapes should not meet at the ends. Your pastry should look like a picture frame with two corners still intact."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Take the upper right corner and fold down towards the inner bottom corner. You will now have a diamond shape."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Place 1 to 2 teaspoons of the cream cheese filling in the middle, then place berries on top."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Repeat with the remaining pastry squares and place them onto the parchment covered baking sheet."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Bake for 15-20 minutes or until pastry is golden brown and puffed.",
        "timerMinutes": 20
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52896",
    "title": "Full English Breakfast",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "panaderia",
    "time": 47,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/sqrtwu1511721265.jpg",
    "description": "Exquisito plato tradicional de autor (British), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Sausages",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-317"
      },
      {
        "name": "Bacon lardon",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-304"
      },
      {
        "name": "Champiñones Frescos",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-290"
      },
      {
        "name": "Plum Tomatoes",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-206"
      },
      {
        "name": "Black Pudding",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-303"
      },
      {
        "name": "Free-range eggs, beaten",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-429"
      },
      {
        "name": "Naan Bread",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-220"
      },
      {
        "name": "Baked Beans",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-491"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Heat the flat grill plate over a low heat, on top of 2 rings/flames if it fits, and brush sparingly with light olive oil."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Cook the sausages first. Add the sausages to the hot grill plate/the coolest part if there is one and allow to cook slowly for about 15-20 minutes, turning occasionally, until golden. After the first 10 minutes, increase the heat to medium before beginning to cook the other ingredients. If you are struggling for space, completely cook the sausages and keep hot on a plate in the oven.",
        "timerMinutes": 20
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Snip a few small cuts into the fatty edge of the bacon. Place the bacon straight on to the grill plate and fry for 2-4 minutes each side or until your preferred crispiness is reached. Like the sausages, the cooked bacon can be kept hot on a plate in the oven.",
        "timerMinutes": 4
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "For the mushrooms, brush away any dirt using a pastry brush and trim the stalk level with the mushroom top. Season with salt and pepper and drizzle over a little olive oil. Place stalk-side up on the grill plate and cook for 1-2 minutes before turning and cooking for a further 3-4 minutes. Avoid moving the mushrooms too much while cooking, as this releases the natural juices, making them soggy.",
        "timerMinutes": 2
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "For the tomatoes, cut the tomatoes across the centre/or in half lengthways if using plum tomatoes , and with a small, sharp knife remove the green 'eye'. Season with salt and pepper and drizzle with a little olive oil. Place cut-side down on the grill plate and cook without moving for 2 minutes. Gently turn over and season again. Cook for a further 2-3 minutes until tender but still holding their shape.",
        "timerMinutes": 2
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "For the black pudding, cut the black pudding into 3-4 slices and remove the skin. Place on the grill plate and cook for 1½-2 minutes each side until slightly crispy.",
        "timerMinutes": 2
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53450",
    "title": "Grits",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "panaderia",
    "time": 27,
    "portions": 4,
    "difficulty": "Fácil",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/bfok4w1780242078.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Grits",
        "qty": 50,
        "unit": "g",
        "requiredId": "ing-492"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-168"
      },
      {
        "name": "Cold Water",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-434"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Bring water with salt to a boil then add grits; reduce heat and cover. occasionally stirring. Cook approximately 15 minutes or until grits have desired consistency. Cool then serve",
        "timerMinutes": 15
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52967",
    "title": "Home-made Mandazi",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "panaderia",
    "time": 31,
    "portions": 4,
    "difficulty": "Fácil",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/thazgm1555350962.jpg",
    "description": "Exquisito plato tradicional de autor (Kenyan), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Self-raising Flour",
        "qty": 750,
        "unit": "g",
        "requiredId": "ing-424"
      },
      {
        "name": "Icing Sugar",
        "qty": 6000,
        "unit": "ml",
        "requiredId": "ing-287"
      },
      {
        "name": "Free-range eggs, beaten",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-429"
      },
      {
        "name": "Coconut Milk",
        "qty": 200,
        "unit": "g",
        "requiredId": "ing-272"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "This is one recipe a lot of people have requested and I have tried to make it as simple as possible and I hope it will work for you. Make sure you use the right flour which is basically one with raising agents. Adjust the amount of sugar to your taste and try using different flavours to have variety whenever you have them."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "You can use Coconut milk instead of regular milk, you can also add desiccated coconut to the dry flour or other spices like powdered cloves or cinnamon."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "For “healthy looking” mandazis do not roll the dough too thin before frying and use the procedure I have indicated above."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Mix the flour,cinnamon and sugar in a suitable bowl."
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "In a separate bowl whisk the egg into the milk"
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Make a well at the centre of the flour and add the milk and egg mixture and slowly mix to form a dough."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53527",
    "title": "Achiote Oil (Aceite Achiotado) Recipe",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "internacional",
    "time": 23,
    "portions": 4,
    "difficulty": "Fácil",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/iuws3q1783801530.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Vegetable Oil",
        "qty": 400,
        "unit": "g",
        "requiredId": "ing-285"
      },
      {
        "name": "Achiote Seeds",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-493"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Heat the vegetable or olive oil and Achiote seeds in a small skillet over medium heat for about 2 to 3 minutes.",
        "timerMinutes": 3
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Don't let the seeds turn black. Remove the skillet from the heat and let stand for 5 minutes more. Strain the oil and store for up to 15 days at room temperature in a jar with a tight lid.",
        "timerMinutes": 5
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53525",
    "title": "Ají de Aguacate Recipe (Colombian Spicy Avocado Sauce)",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "internacional",
    "time": 51,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/jyvy8u1783800448.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Palta Hass",
        "qty": 2,
        "unit": "un",
        "requiredId": "ing-50"
      },
      {
        "name": "Habanero Pepper",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-494"
      },
      {
        "name": "Queso Parmesano / Reggianito para rallar",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-9"
      },
      {
        "name": "Lime juice",
        "qty": 1,
        "unit": "ml",
        "requiredId": "ing-225"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "White Wine Vinegar",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-253"
      },
      {
        "name": "Onions",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-283"
      },
      {
        "name": "Scallions",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-441"
      },
      {
        "name": "Cilantro fresco",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-85"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Place all the ingredients in a food processor. Process until the mixture is well combined."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "If the mixture is too thick, add more lime juice until you reach the desired consistency."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52848",
    "title": "Bean & Sausage Hotpot",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "internacional",
    "time": 35,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/vxuyrx1511302687.jpg",
    "description": "Exquisito plato tradicional de autor (British), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Sausages",
        "qty": 8,
        "unit": "g",
        "requiredId": "ing-317"
      },
      {
        "name": "Puré de Tomate",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-255"
      },
      {
        "name": "Butter Beans",
        "qty": 1200,
        "unit": "g",
        "requiredId": "ing-495"
      },
      {
        "name": "Black Treacle",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-496"
      },
      {
        "name": "English Mustard",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-497"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "In a large casserole, fry the sausages until brown all over – about 10 mins.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Add the tomato sauce, stirring well, then stir in the beans, treacle or sugar and mustard. Bring to the simmer, cover and cook for 30 mins. Great served with crusty bread or rice.",
        "timerMinutes": 30
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53438",
    "title": "Bolita di Keshi",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "internacional",
    "time": 31,
    "portions": 4,
    "difficulty": "Fácil",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/skzd0x1780091674.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Queso Cheddar",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-395"
      },
      {
        "name": "Queso Gouda / Danbo en fetas",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-140"
      },
      {
        "name": "Free-range eggs, beaten",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-429"
      },
      {
        "name": "Cornstarch",
        "qty": 5000,
        "unit": "ml",
        "requiredId": "ing-234"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Grate finely and toss together."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "lb. sharp yellow cheese (cheddar or oude boerenkaas)"
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "lb. keshi di buriko (or any white cheese such as fromage blanc, queso blanco, ricotto, feta etc.)"
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Tbs. Cornstarch"
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Shape the mixture into small balls. These may be kept indefinitely in the freezer. Drop the balls into deep, hot fat and fry until golden. Serve piping hot on toothpicks."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52939",
    "title": "Callaloo Jamaican Style",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "internacional",
    "time": 55,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/ussyxw1515364536.jpg",
    "description": "Exquisito plato tradicional de autor (Jamaican), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Kale",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-498"
      },
      {
        "name": "Bacon lardon",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-304"
      },
      {
        "name": "Garlic Clove",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Onions",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-283"
      },
      {
        "name": "Pimentón Dulce",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-214"
      },
      {
        "name": "Tomillo",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-231"
      },
      {
        "name": "Plum Tomatoes",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-206"
      },
      {
        "name": "Red pepper flakes",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-296"
      },
      {
        "name": "Banana",
        "qty": 4,
        "unit": "kg",
        "requiredId": "ing-56"
      },
      {
        "name": "Vegetable Oil",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-285"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Cut leaves and soft stems from the kale branches, them soak in a bowl of cold water for about 5-10 minutes or until finish with prep.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Proceed to slicing the onions, mincing the garlic and dicing the tomatoes. Set aside"
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Remove kale from water cut in chunks."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Place bacon on saucepan and cook until crispy. Then add onions, garlic, thyme, stir for about a minute or more"
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Add tomatoes; scotch bonnet pepper, smoked paprika. Sauté for about 2-3 more minutes."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "Finally add vegetable, salt, mix well, and steamed for about 6-8 minutes or until leaves are tender. Add a tiny bit of water as needed. Adjust seasonings and turn off the heat.",
        "timerMinutes": 8
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52969",
    "title": "Chakchouka ",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "internacional",
    "time": 59,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/gpz67p1560458984.jpg",
    "description": "Exquisito plato tradicional de autor (Tunisian), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Plum Tomatoes",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-206"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-216"
      },
      {
        "name": "Onions",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-283"
      },
      {
        "name": "Red pepper flakes",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-296"
      },
      {
        "name": "Morrón Verde",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-45"
      },
      {
        "name": "Garlic Clove",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Ground Cumin",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-281"
      },
      {
        "name": "Pimentón Dulce",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-214"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Chili Powder",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-339"
      },
      {
        "name": "Free-range eggs, beaten",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-429"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "In a large cast iron skillet or sauté pan with a lid, heat oil over medium high heat. Add the onion and sauté for 2-3 minutes, until softened. Add the peppers and garlic, and sauté for an additional 3-5 minutes. Add the tomatoes, cumin, paprika, salt, and chili powder. Mix well and bring the mixture to a simmer. Reduce the heat to medium low and continue to simmer, uncovered, 10-15 minutes until the mixture has thickened to your desired consistency. (Taste the sauce at this point and adjust for salt and spice, as desired.) Using the back of a spoon, make four craters in the mixture, large enough to hold an egg. Crack one egg into each of the craters. Cover the skillet and simmer for 5-7 minutes, until the eggs have set. Serve immediately with crusty bread or pita.",
        "timerMinutes": 3
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-53446",
    "title": "Clear Soup with Semolina Dumplings",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "internacional",
    "time": 47,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/qserum1780156275.jpg",
    "description": "Exquisito plato tradicional de autor (Internacional), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Semolina",
        "qty": 120,
        "unit": "g",
        "requiredId": "ing-447"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 60,
        "unit": "g",
        "requiredId": "ing-125"
      },
      {
        "name": "Queso Parmesano / Reggianito para rallar",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-9"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1,
        "unit": "bolsa (500g)",
        "requiredId": "ing-168"
      },
      {
        "name": "Nutmeg",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-292"
      },
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-216"
      },
      {
        "name": "Beef Stock Concentrate",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-251"
      },
      {
        "name": "Perejil Fresco",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-207"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Allow butter to come to room temperature before beating in a bowl until creamed. Season with salt and a small, delicate pinch of nutmeg."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Add in the egg, stirring vigorously. Sprinkle the semolina over this, and mix it in well until the surface is smooth. Cover with saran wrap and leave to rest for 15 – 20 minutes.",
        "timerMinutes": 20
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Use two spoons, dipped regularly into hot water throughout, to press or shape dumplings from the paste. You can also place these on a lightly oiled board or plate and again leave them to stand for a short while (this allows the dumplings to rise even more)."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "Heat a generous quantity of salted water in a large pan. Place the dumplings into the water and bring them back to a boil before turning down the heat and leaving to simmer gently for 10 – 15 minutes (do not boil). Carefully turn the dumplings occasionally.",
        "timerMinutes": 15
      },
      {
        "stepNumber": 5,
        "title": "Toque Final & Montaje",
        "text": "Remove the semolina dumplings carefully and put them in the heated soup. Serve promptly, with a garnish of sprinkled parsley or chives."
      },
      {
        "stepNumber": 6,
        "title": "Emplatado & Degustación",
        "text": "The semolina dumplings can also be cooked in the beef broth, but this causes the soup to take on a slightly dull appearance. The cooked dumplings should never be left standing in the soup for too long, as they will “soak up” the soup and become softened."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52907",
    "title": "Duck Confit",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "internacional",
    "time": 39,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/wvpvsu1511786158.jpg",
    "description": "Exquisito plato tradicional de autor (France), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Sea Salt",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-460"
      },
      {
        "name": "Bay Leaf",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-248"
      },
      {
        "name": "Garlic Clove",
        "qty": 4000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Tomillo",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-231"
      },
      {
        "name": "Duck Legs",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-499"
      },
      {
        "name": "White Wine Vinegar",
        "qty": 100,
        "unit": "ml",
        "requiredId": "ing-253"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "The day before you want to make the dish, scatter half the salt, half the garlic and half of the herbs over the base of a small shallow dish. Lay the duck legs, skin-side up, on top, then scatter over the remaining salt, garlic and herbs. Cover the duck and refrigerate overnight. This can be done up to 2 days ahead."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Pour the wine into a saucepan that will snugly fit the duck legs in a single layer. Brush the salt off the duck legs and place them, skin-side down, in the wine. Cover the pan with a lid and place over a medium heat. As soon as the wine starts to bubble, turn the heat down to the lowest setting and cook for 2 hours, checking occasionally that the liquid is just barely simmering. (If you own a heat diffuser, it would be good to use it here.) After 2 hours, the duck legs should be submerged in their own fat and the meat should feel incredibly tender when prodded. Leave to cool."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "The duck legs are now cooked and can be eaten immediately – or you can follow the next step if you like them crisp. If you are preparing ahead, pack the duck legs tightly into a plastic container or jar and pour over the fat, but not the liquid at the bottom of the pan. Cover and leave in the fridge for up to a month, or freeze for up to 3 months. The liquid you are left with makes a tasty gravy, which can be chilled or frozen until needed."
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "To reheat and crisp up the duck legs, heat oven to 220C/fan 200C/gas 7. Remove the legs from the fat and place them, skin-side down, in an ovenproof frying pan. Roast for 30-40 mins, turning halfway through, until brown and crisp. Serve with the reheated gravy, a crisp salad and some crisp golden ptoatoes.",
        "timerMinutes": 40
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52815",
    "title": "French Lentils With Garlic and Thyme",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "internacional",
    "time": 51,
    "portions": 4,
    "difficulty": "Avanzada",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/vwwspt1487394060.jpg",
    "description": "Exquisito plato tradicional de autor (France), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Extra Virgin Olive Oil",
        "qty": 3000,
        "unit": "ml",
        "requiredId": "ing-216"
      },
      {
        "name": "Onions",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-283"
      },
      {
        "name": "Garlic Clove",
        "qty": 2000,
        "unit": "ml",
        "requiredId": "ing-266"
      },
      {
        "name": "Zanahoria",
        "qty": 1,
        "unit": "un",
        "requiredId": "ing-44"
      },
      {
        "name": "French Lentils",
        "qty": 100,
        "unit": "g",
        "requiredId": "ing-500"
      },
      {
        "name": "Tomillo",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-231"
      },
      {
        "name": "Bay Leaf",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-248"
      },
      {
        "name": "Mix de Verduras congeladas (salteado/sopa)",
        "qty": 1000,
        "unit": "ml",
        "requiredId": "ing-168"
      },
      {
        "name": "Celery",
        "qty": 2,
        "unit": "g",
        "requiredId": "ing-275"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Place a large saucepan over medium heat and add oil. When hot, add chopped vegetables and sauté until softened, 5 to 10 minutes.",
        "timerMinutes": 10
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Add 6 cups water, lentils, thyme, bay leaves and salt. Bring to a boil, then reduce to a fast simmer."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Simmer lentils until they are tender and have absorbed most of the water, 20 to 25 minutes. If necessary, drain any excess water after lentils have cooked. Serve immediately, or allow them to cool and reheat later.",
        "timerMinutes": 25
      },
      {
        "stepNumber": 4,
        "title": "Reducción & Ajuste de Sazón",
        "text": "For a fuller taste, use some chicken stock and reduce the water by the same amount."
      }
    ],
    "comments": []
  },
  {
    "id": "rec-anon-52915",
    "title": "French Omelette",
    "authorId": "user-anon",
    "authorName": "Chef Anónimo",
    "authorAvatar": "👨‍🍳",
    "isAnonymous": true,
    "isPrivate": false,
    "category": "internacional",
    "time": 43,
    "portions": 4,
    "difficulty": "Media",
    "rating": 5,
    "image": "https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg",
    "description": "Exquisito plato tradicional de autor (France), preparado con ingredientes frescos y cocción perfecta.",
    "pairing": "Vino fresco o bebida fría a elección",
    "chefTip": "Controlar los tiempos de cocción y sazonar en cada etapa para realzar los sabores naturales.",
    "ingredients": [
      {
        "name": "Free-range eggs, beaten",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-429"
      },
      {
        "name": "Calabaza Anco / Butternut",
        "qty": 2,
        "unit": "un",
        "requiredId": "ing-125"
      },
      {
        "name": "Queso Parmesano / Reggianito para rallar",
        "qty": 5,
        "unit": "g",
        "requiredId": "ing-9"
      },
      {
        "name": "Tarragon Leaves",
        "qty": 3,
        "unit": "g",
        "requiredId": "ing-501"
      },
      {
        "name": "Perejil Fresco",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-207"
      },
      {
        "name": "Chives",
        "qty": 1,
        "unit": "g",
        "requiredId": "ing-330"
      },
      {
        "name": "Gruyère",
        "qty": 4,
        "unit": "g",
        "requiredId": "ing-502"
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mise en Place & Preparación",
        "text": "Get everything ready. Warm a 20cm (measured across the top) non-stick frying pan on a medium heat. Crack the eggs into a bowl and beat them with a fork so they break up and mix, but not as completely as you would for scrambled egg. With the heat on medium-hot, drop one knob of butter into the pan. It should bubble and sizzle, but not brown. Season the eggs with the Parmesan and a little salt and pepper, and pour into the pan."
      },
      {
        "stepNumber": 2,
        "title": "Sellado & Salteado Aromático",
        "text": "Let the eggs bubble slightly for a couple of seconds, then take a wooden fork or spatula and gently draw the mixture in from the sides of the pan a few times, so it gathers in folds in the centre. Leave for a few seconds, then stir again to lightly combine uncooked egg with cooked. Leave briefly again, and when partly cooked, stir a bit faster, stopping while there’s some barely cooked egg left. With the pan flat on the heat, shake it back and forth a few times to settle the mixture. It should slide easily in the pan and look soft and moist on top. A quick burst of heat will brown the underside."
      },
      {
        "stepNumber": 3,
        "title": "Cocción Principal a Fuego Lento",
        "text": "Grip the handle underneath. Tilt the pan down away from you and let the omelette fall to the edge. Fold the side nearest to you over by a third with your fork, and keep it rolling over, so the omelette tips onto a plate – or fold it in half, if that’s easier. For a neat finish, cover the omelette with a piece of kitchen paper and plump it up a bit with your fingers. Rub the other knob of butter over to glaze. Serve immediately."
      }
    ],
    "comments": []
  }
],
  history: []
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    MASTER_PANTRY_CATALOG,
    DEFAULT_WEEKLY_MENU,
    DEFAULT_WEEKLY_NOTES,
    DEFAULT_USERS,
    DEFAULT_RECIPE_CATEGORIES,
    DEFAULT_KITCHEN_DATA
  };
}
