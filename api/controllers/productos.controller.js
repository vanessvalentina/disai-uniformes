import Producto from "../models/producto.model.js";

// GET /api/productos -> listar todos
export async function listarProductos(peticion, respuesta){
    try{
        const productos = await Producto.find();
        respuesta.json(productos);
    }catch(error){
        respuesta.status(500).json({ error : "Error al obtener los productos" });
    }
}

// POST /api/productos -> crear uno
export async function crearProducto(peticion, respuesta){
    try{
        const producto = await Producto.create(peticion.body);
        respuesta.status(201).json(producto);
    }catch(error){
        respuesta.status(400).json({ error : error.message });
    }
}

// PUT /api/productos/:id -> editar uno
export async function editarProducto(peticion, respuesta){
    try{
        const producto = await Producto.findByIdAndUpdate(
            peticion.params.id,
            peticion.body,
            { new : true, runValidators : true }
        );
        if(!producto){
            return respuesta.status(404).json({ error : "Producto no encontrado" });
        }
        respuesta.json(producto);
    }catch(error){
        respuesta.status(400).json({ error : error.message });
    }
}

// DELETE /api/productos/:id -> eliminar uno
export async function eliminarProducto(peticion, respuesta){
    try{
        const producto = await Producto.findByIdAndDelete(peticion.params.id);
        if(!producto){
            return respuesta.status(404).json({ error : "Producto no encontrado" });
        }
        respuesta.json({ mensaje : "Producto eliminado" });
    }catch(error){
        respuesta.status(500).json({ error : "Error al eliminar el producto" });
    }
}