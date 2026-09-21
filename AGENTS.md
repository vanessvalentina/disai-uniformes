# AGENTS — Instrucciones para la IA (Disai · PEC 5)

Contexto y reglas para las herramientas de IA que ayudan a construir este proyecto.

## Herramienta usada
- **Claude (Claude Code)** como asistente de programación de principio a fin.

## Stack
- **Backend:** Node.js + Express + **Mongoose** (MongoDB Atlas).
- **Frontend:** React + Vite.
- **Despliegue:** Vercel.

## Convenciones
- Nombres en **español** (producto, listar, crear, actualizar, borrar...).
- Código **minimalista**, al estilo del módulo Fullstack.
- La API responde en **JSON** con códigos HTTP correctos (200, 201, 400, 404, 500).
- Variables sensibles (`MONGO_URL`) en `.env`, **nunca** en el código ni en GitHub.

## Reglas de trabajo con la IA
- **Entender y revisar TODO** lo que genera la IA antes de usarlo.
- **Probar cada endpoint** (con `.http` / Postman) antes de conectar el front.
- Apuntar en **SKILLS.md** los prompts que funcionan, y en el **README** los errores que dio la IA y cómo se corrigieron.

## Comandos
- Backend: `npm install` · `node index.js`
- Frontend: `npm install` · `npm run dev` · `npm run build`
