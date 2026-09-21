import mongoose from "mongoose";

const esquemaProducto = new mongoose.Schema({
    nombre : { type : String, required : true, trim : true },
    sector : { type : String, required : true, enum : ["oficina", "seguridad", "sanitario", "escolar", "textil-hogar"] },
    descripcion : { type : String, required : true },
    precio : { type : Number, required : true, min : 0 },
    disponible : { type : Boolean, default : true },
    imagen : { type : String, default : "" }
}, { timestamps : true });

const Producto = mongoose.model("Producto", esquemaProducto);

export default Producto;
