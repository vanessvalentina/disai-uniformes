import mongoose from "mongoose";

export function conectar(){
    return mongoose.connect(process.env.MONGO_URL);
}