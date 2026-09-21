# SKILLS — Prompts y técnicas con IA (Disai · PEC 5)

Registro de las habilidades/prompts que usamos con la IA (Claude) para construir el proyecto.

## Prompts principales (reales)
1. "Diferencia este proyecto del de las galletas: usa **Mongoose**, estructura en carpetas (models/controllers/routes) y un hook personalizado, para que se note que es el proyecto con IA."
2. "Crea el **modelo Mongoose `Producto`** con nombre, sector (enum de los sectores reales de Disai), descripcion, precio (min 0), disponible (default true), imagen, y timestamps."
3. "Monta los **controllers** con `async/await` + `try/catch` y las **rutas** CRUD de `/api/productos`, respondiendo JSON con códigos HTTP correctos."
4. "Monta el **front en React**: `services/api.js`, un **hook `useProductos`** con el estado y las acciones, un `ProductoCard`, un `FormularioProducto` (crear y editar) y el `App`."
5. "Dale un **estilo corporativo** azul marino/azul de la marca Disai (nada del rosa de las galletas)."

## Técnicas usadas
- Construir por partes: modelo → controllers → rutas → probar la API → front.
- **Probar cada capa** antes de seguir (la API se probó entera con curl/REST Client antes de conectar el front).
- Pedir a la IA que **explique** lo que genera, para entenderlo y poder justificarlo.
- Reutilizar patrones que ya funcionaron en la PEC 4 (services, formularios controlados) pero con un enfoque distinto.

## Errores que dio la IA / correcciones (para el README)
- El fichero de rutas quedó como `routes.js` en vez de `productos.routes.js` → el servidor no lo encontraba (`ERR_MODULE_NOT_FOUND`). **Corrección:** renombrarlo.
- `enum` de sectores inicial genérico → **corregido** a los sectores reales de Disai.
- *Warning* de Mongoose por la opción `new` en `findByIdAndUpdate` (deprecada) → funciona igual; anotado.
- **El bug más gordo:** la API funcionaba en **local** pero en **Vercel** daba `500` (esperaba 10s y fallaba). Causa: Mongoose en *serverless* — la conexión no estaba lista a tiempo. **Corrección:** reutilizar UNA sola conexión (promesa cacheada) y **esperarla (`await conectar()`) antes de cada petición** con un middleware. Además se hizo el front resistente (que no se rompa si la API tarda). Lo detectamos porque el front se quedaba en blanco y la API tardaba 10s.
