# PLAN — Inversiones Disai (mini-app fullstack con IA · PEC 5)

## Objetivo
Mini-app fullstack con **CRUD completo** de una entidad, construida con apoyo de **IA** (uso documentado), para el catálogo de uniformes de **Inversiones Disai** (@disaiuniformes).

## Alcance (PEC 5)
- CRUD completo de la entidad **producto** (uniforme): listar, crear, editar y eliminar desde la interfaz.
- **Backend:** Node + Express + **Mongoose** (MongoDB Atlas), respuestas JSON, gestión de errores, variables de entorno.
- **Frontend:** React (listado + formulario + editar/eliminar), conectado a la API.
- **Desplegado** (Vercel) y accesible.
- **Uso de IA documentado** (PLAN.md, AGENTS.md, SKILLS.md, TASKS.md + reflexión en el README).

## Entidad: producto (uniforme)
| Campo | Tipo | Notas |
|---|---|---|
| nombre | String | obligatorio |
| sector | String | seguridad / sanitario / colegios / industria / hostelería |
| descripcion | String | obligatorio |
| precio | Number | precio orientativo |
| disponible | Boolean | por defecto true |
| imagen | String | URL de foto (opcional) |

## Fases
1. Planificación y documentación (PLAN, AGENTS, SKILLS, TASKS).
2. Backend: modelo Mongoose + rutas CRUD + conexión Atlas + `.env`.
3. Pruebas de la API (`.http` + Postman).
4. Frontend React (listado, crear, editar, eliminar).
5. Despliegue (API + front en Vercel).
6. README con reflexión sobre el uso de IA.

## Decisiones
- **Mongoose** (nuevo respecto a MongoClient nativo): lo pide la PEC; permite definir un **esquema/modelo** del producto y validaciones.
- Estilo de código: español en los nombres, minimalista, como el módulo Fullstack.
- Entidad = **producto (uniforme)**, el núcleo del catálogo de Disai.
