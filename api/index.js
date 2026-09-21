import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { conectar } from "./db.js";
import productosRoutes from "./routes/productos.routes.js";

const servidor = express();

servidor.use(cors());
servidor.use(express.json());

// Aseguramos la conexión a MongoDB ANTES de cada petición (necesario en serverless)
servidor.use(async (peticion, respuesta, siguiente) => {
    try{
        await conectar();
        siguiente();
    }catch(error){
        respuesta.status(500).json({ error : "Error de conexión a la base de datos" });
    }
});

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
