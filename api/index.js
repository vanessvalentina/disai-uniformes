import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { conectar } from "./db.js";
import productosRoutes from "./routes/productos.routes.js";

// Conexión a MongoDB con Mongoose
conectar()
    .then(() => console.log("Conectado a MongoDB (disai)"))
    .catch((error) => console.log("Error de conexión:", error.message));

const servidor = express();

servidor.use(cors());
servidor.use(express.json());

servidor.use("/api/productos", productosRoutes);

// Ruta no encontrada (404)
servidor.use((peticion, respuesta) => {
    respuesta.status(404).json({ error : "Ruta no encontrada" });
});

if(!process.env.VERCEL){
    servidor.listen(process.env.PORT, () => {
        console.log(`Servidor en http://localhost:${process.env.PORT}`);
    });
}

export default servidor;