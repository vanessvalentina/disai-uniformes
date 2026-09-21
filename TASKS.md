# TASKS — Disai (PEC 5)

Estados: ⬜ pendiente · 🟡 en curso · ✅ hecho

## Planificación
- ✅ Definir entidad y campos (producto)
- ✅ Crear PLAN.md, AGENTS.md, SKILLS.md, TASKS.md

## Backend (Express + Mongoose)
- ✅ Crear proyecto e instalar express, mongoose, cors, dotenv
- ✅ Conexión a MongoDB Atlas (base de datos "disai")
- ✅ Modelo Mongoose `Producto` (con enum, min, timestamps)
- ✅ Rutas CRUD (GET, POST, PUT, DELETE `/api/productos`) + controllers
- ✅ Gestión de errores + variables de entorno (`.env` / `.env.example`)
- ✅ Ficheros de prueba (`pruebas.http` + `disai.postman_collection.json`)

## Frontend (React)
- ✅ Crear proyecto Vite React + estructura de carpetas
- ✅ `services/api.js` (URL en `VITE_API_URL`)
- ✅ Hook personalizado `useProductos` (estado + acciones)
- ✅ Listado (GET) con estados de cargando/error
- ✅ Formulario crear (POST) + editar (PUT) + eliminar (DELETE)
- ✅ Estilos corporativos de Disai (azul marino + azul + beige)

## Despliegue
- ⬜ Repo GitHub con commits
- ⬜ API en Vercel
- ⬜ Front en Vercel (`VITE_API_URL` apuntando a la API desplegada)

## Documentación
- ✅ README con descripción + instalación + uso de IA + reflexión
- ✅ SKILLS.md con los prompts reales
