-- ==============================================================================
-- HELL'S KITCHEN - ESQUEMA DE BASE DE DATOS EN SUPABASE (POSTGRESQL + RLS)
-- ==============================================================================
-- Ejecutá este script completo en el SQL Editor de tu proyecto de Supabase.
-- Crea las tablas para:
-- 1. Usuarios / Chefs
-- 2. Catálogo Maestro Global de Insumos (compartido entre todos)
-- 3. Alacenas Individuales por Usuario
-- 4. Listas de Compras Individuales por Usuario
-- 5. Recetas Públicas y Privadas
-- 6. Comentarios y Respuestas del Autor en Tiempo Real
-- ==============================================================================

-- 1. EXTENSIÓN PARA UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==============================================================================
-- 2. TABLA DE USUARIOS / CHEFS (kitchen_users)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.kitchen_users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  avatar TEXT DEFAULT '👨‍🍳',
  role TEXT NOT NULL DEFAULT 'chef' CHECK (role IN ('admin', 'chef', 'user')),
  email TEXT UNIQUE,
  profession TEXT DEFAULT 'Cocinero/a Aficionado/a',
  password TEXT,
  marketing_opt_in BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- 3. TABLA: CATÁLOGO MAESTRO GLOBAL DE INSUMOS (master_ingredients)
-- Todos los usuarios pueden consultar y agregar insumos al catálogo compartido
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.master_ingredients (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL CHECK (category IN ('carnes', 'heladera', 'alacena', 'especias', 'cava')),
  unit TEXT NOT NULL DEFAULT 'un',
  min_qty NUMERIC DEFAULT 1,
  icon TEXT DEFAULT '📦',
  created_by TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- 4. TABLA: ALACENAS INDIVIDUALES POR USUARIO (user_pantries)
-- Cada usuario tiene su propio stock de insumos
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.user_pantries (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES public.kitchen_users(id) ON DELETE CASCADE,
  ingredient_id TEXT NOT NULL REFERENCES public.master_ingredients(id) ON DELETE CASCADE,
  qty NUMERIC NOT NULL DEFAULT 0,
  unit TEXT NOT NULL DEFAULT 'un',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE (user_id, ingredient_id)
);

-- ==============================================================================
-- 5. TABLA: LISTAS DE COMPRAS INDIVIDUALES (user_shopping_lists)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.user_shopping_lists (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES public.kitchen_users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  qty TEXT NOT NULL DEFAULT '1 un',
  unit TEXT DEFAULT '',
  checked BOOLEAN NOT NULL DEFAULT false,
  note TEXT DEFAULT '',
  canonical_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- 6. TABLA: RECETAS PÚBLICAS Y PRIVADAS (recipes)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.recipes (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  author_id TEXT NOT NULL REFERENCES public.kitchen_users(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  author_avatar TEXT DEFAULT '👨‍🍳',
  is_private BOOLEAN NOT NULL DEFAULT false,
  category TEXT NOT NULL CHECK (category IN ('carnes', 'pastas', 'rapidas', 'postres')),
  time INTEGER NOT NULL DEFAULT 30,
  portions INTEGER NOT NULL DEFAULT 2,
  difficulty TEXT NOT NULL DEFAULT 'Media',
  rating NUMERIC DEFAULT 5,
  image TEXT,
  description TEXT,
  pairing TEXT,
  chef_tip TEXT,
  ingredients JSONB NOT NULL DEFAULT '[]'::jsonb,
  steps JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- 7. TABLA: COMENTARIOS DE RECETAS (recipe_comments)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.recipe_comments (
  id TEXT PRIMARY KEY,
  recipe_id TEXT NOT NULL REFERENCES public.recipes(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL REFERENCES public.kitchen_users(id) ON DELETE CASCADE,
  user_name TEXT NOT NULL,
  user_avatar TEXT DEFAULT '👨‍🍳',
  text TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- 8. TABLA: RESPUESTAS A COMENTARIOS (recipe_replies)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.recipe_replies (
  id TEXT PRIMARY KEY,
  comment_id TEXT NOT NULL REFERENCES public.recipe_comments(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL REFERENCES public.kitchen_users(id) ON DELETE CASCADE,
  user_name TEXT NOT NULL,
  user_avatar TEXT DEFAULT '👨‍🍳',
  is_author BOOLEAN NOT NULL DEFAULT false,
  text TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- 9. HABILITAR ROW LEVEL SECURITY (RLS) & POLÍTICAS DE ACCESO PÚBLICO/COMUNITARIO
-- ==============================================================================
ALTER TABLE public.kitchen_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.master_ingredients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_pantries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_shopping_lists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.recipes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.recipe_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.recipe_replies ENABLE ROW LEVEL SECURITY;

-- Políticas de lectura y escritura para la App Hell's Kitchen
CREATE POLICY "Acceso total a usuarios de cocina" ON public.kitchen_users FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Acceso total a catalogo maestro" ON public.master_ingredients FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Acceso total a alacenas" ON public.user_pantries FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Acceso total a listas de compras" ON public.user_shopping_lists FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Acceso total a recetas" ON public.recipes FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Acceso total a comentarios" ON public.recipe_comments FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Acceso total a respuestas" ON public.recipe_replies FOR ALL USING (true) WITH CHECK (true);

-- ==============================================================================
-- 10. HABILITAR PUBLICACIÓN EN TIEMPO REAL (REALTIME)
-- ==============================================================================
ALTER PUBLICATION supabase_realtime ADD TABLE public.kitchen_users;
ALTER PUBLICATION supabase_realtime ADD TABLE public.master_ingredients;
ALTER PUBLICATION supabase_realtime ADD TABLE public.user_pantries;
ALTER PUBLICATION supabase_realtime ADD TABLE public.user_shopping_lists;
ALTER PUBLICATION supabase_realtime ADD TABLE public.recipes;
ALTER PUBLICATION supabase_realtime ADD TABLE public.recipe_comments;
ALTER PUBLICATION supabase_realtime ADD TABLE public.recipe_replies;

-- ==============================================================================
-- 11. DATOS INICIALES POR DEFECTO (SEMILLA)
-- ==============================================================================
INSERT INTO public.kitchen_users (id, name, avatar, role)
VALUES 
  ('user-pato', 'Chef Pato', '👨‍🍳', 'admin'),
  ('user-gaston', 'Gastón', '🧑‍🍳', 'chef'),
  ('user-sofia', 'Sofía', '👩‍🍳', 'chef')
ON CONFLICT (id) DO NOTHING;
