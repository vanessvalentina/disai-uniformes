# Inversiones Disai — Mini-app fullstack con IA (PEC 5)

CRUD completo de **productos (uniformes)** para el catálogo de **Inversiones Disai** (@disaiuniformes, empresa de uniformes corporativos). Proyecto construido con **apoyo de IA** (Claude) de principio a fin, con el proceso documentado.

## Enlaces
- **Front desplegado:** https://disai-uniformes-front.vercel.app
- **API desplegada:** https://disai-uniformes-api.vercel.app
- **Repositorio:** https://github.com/vanessvalentina/disai-uniformes

## Stack
- **Backend:** Node + Express + **Mongoose** (MongoDB Atlas)
- **Frontend:** React + Vite
- **Despliegue:** Vercel

## Estructura
```
disai-app/
  api/        backend (models, controllers, routes)
  front/      frontend React (services, hooks, components)
  PLAN.md · AGENTS.md · SKILLS.md · TASKS.md   documentación del trabajo con IA
```

## Entidad: producto
`nombre`, `sector` (enum: oficina / seguridad / sanitario / escolar / textil-hogar), `descripcion`, `precio`, `disponible`, `imagen` + `timestamps` (createdAt/updatedAt).

## Endpoints
| Método | Ruta | Uso |
|---|---|---|
| GET | `/api/productos` | listar |
| POST | `/api/productos` | crear |
| PUT | `/api/productos/:id` | editar |
| DELETE | `/api/productos/:id` | eliminar |

## Instalar y ejecutar
**Backend** (`api/`): `npm install` → crear `.env` (ver `.env.example`) → `node index.js` (`:4000`)
**Frontend** (`front/`): `npm install` → crear `.env` con `VITE_API_URL` → `npm run dev` (`:5173`)

## Uso de la IA (obligatorio documentarlo)
- **Herramienta:** Claude (Claude Code) como asistente de programación de principio a fin.
- **Qué generó la IA:** el modelo Mongoose con validaciones (`enum`, `min`, `timestamps`), los controllers `async/await`, las rutas, el hook personalizado `useProductos`, los componentes React y los estilos corporativos.
- **Prompts principales:** ver `SKILLS.md`.
- **Qué revisé/corregí (real):**
  - Un fichero de rutas quedó mal nombrado (`routes.js` en vez de `productos.routes.js`) → el servidor no encontraba el módulo; se **renombró** y funcionó.
  - Se ajustaron los sectores del `enum` a los **reales de Disai** (oficina, seguridad, sanitario, escolar, textil-hogar).
  - Se decidió **diferenciar** este proyecto del anterior (galletas): aquí Mongoose + carpetas `models/controllers/routes` + hook personalizado, en vez del estilo minimalista de clase.

## Reflexión
- **Más rápido con IA:** montar la estructura (Mongoose, controllers, hook), los estilos y probar la API entera en segundos.
- **Qué costó controlar / errores de la IA:** una ruta mal nombrada; un *warning* de Mongoose; verificar que las validaciones funcionaban (sector inválido → **400**); y **el fallo más importante**: el código de la IA funcionaba en local pero **daba error 500 al desplegarlo en Vercel** (Mongoose en *serverless* no esperaba la conexión). Hubo que **diagnosticarlo** (la API tardaba 10s, el front se quedaba en blanco) y **corregirlo** (esperar la conexión antes de cada petición + front resistente). Este fue el mejor ejemplo de por qué hay que **entender y probar** lo que genera la IA, no solo copiarlo.
- **Qué entendí mejor:** cómo Mongoose define un **esquema con validaciones** y da métodos CRUD listos (más cómodo que MongoClient nativo); y cómo un **hook personalizado** agrupa el estado y las acciones del CRUD.
- **¿Volvería a usar IA?** Sí, para ir rápido — pero **revisando y probando todo**, porque el código hay que entenderlo para justificarlo y corregir sus fallos.
