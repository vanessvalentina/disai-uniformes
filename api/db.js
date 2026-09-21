import mongoose from "mongoose";

// En Vercel (serverless) hay que REUTILIZAR la conexión entre invocaciones.
// Guardamos la promesa de conexión para no abrir una nueva en cada petición.
let promesaConexion = null;

export function conectar(){
    if(!promesaConexion){
        promesaConexion = mongoose.connect(process.env.MONGO_URL);
    }
    return promesaConexion;
}
