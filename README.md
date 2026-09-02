# 🍳 PATO'S KITCHEN — Asistente Personal del Chef & Alacena Inteligente

Una aplicación web progresiva (PWA) pensada exclusivamente para disfrutar del arte de cocinar, gestionar los insumos que tenés en casa, descubrir recetas según lo que hay en la alacena y acompañarte en tiempo real mientras cocinás.

---

## 🌟 Características Principales

1. **🪄 Generador Inteligente "¿Qué cocino hoy?":**
   * Cruza en tiempo real los ingredientes disponibles en tu heladera y alacena con el recetario.
   * Te muestra qué platos podés preparar al **100% de inmediato** (sin salir a comprar nada) o cuáles podés hacer con un 70-80% de insumos.
   * Filtros por tiempo de preparación (express ≤20 min o elaboradas) y por tipo de cocina.

2. **🧊 Alacena & Heladera Inteligente (Inventario Vivo):**
   * Categorías visuales: *Frescos & Heladera*, *Carnes & Fuegos*, *Alacena & Secos*, *Condimentos & Especias*, *Cava & Bebidas*.
   * Ajuste rápido de stock con botones **(+)** y **(-)**.
   * Alertas automáticas de stock bajo con botón para enviar directo a la lista de compras.

3. **📖 Recetario de Autor:**
   * Recetas gourmet y caseras con tiempos, nivel de dificultad, notas secretas del chef y maridajes recomendados de vinos/bebidas.
   * **Selector Dinámico de Porciones:** ¿Cocinás para 2, para 4 o para 6 amigos? Ajusta las porciones con 1 clic y los gramos/cantidades se recalculan al instante.

4. **🔥 Modo Cocina en Vivo (Kitchen Companion):**
   * Interfaz limpia a pantalla completa con letras grandes para ver desde la mesada.
   * **Wake Lock API:** La pantalla del celular o tablet no se apaga sola mientras cocinás.
   * **Temporizadores integrados por paso:** Inicia la cuenta regresiva de cocción (ej: *"Hervir arroz: 11 min"*) con alarma sonora al finalizar.
   * Registro final con notas y tips para la próxima vez que hagas el plato.

5. **🛒 Lista de Compras Inteligente:**
   * Agrega automáticamente los ingredientes que te faltan para una receta.
   * Checklist interactivo con tachado.
   * Botón **"📲 Enviar por WhatsApp"** para mandar la lista formateada a tu celular o compartirla con quien vaya a hacer las compras.

---

## 🚀 Cómo ejecutar la app

Simplemente ejecuta el servidor con Node o Python y ábrelo en tu navegador:
```bash
cd "C:\Users\ZenCio\Desktop\apps\patos-kitchen"
node server.js
# o también: python -m http.server 8088
```
Luego abre [http://localhost:8088](http://localhost:8088) en tu navegador de la PC o el celular.
