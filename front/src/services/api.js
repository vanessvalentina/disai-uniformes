const API_URL = import.meta.env.VITE_API_URL

export async function obtenerProductos(){
    const respuesta = await fetch(`${API_URL}/productos`)
    return respuesta.json()
}

export async function crearProducto(producto){
    const respuesta = await fetch(`${API_URL}/productos`, {
        method : "POST",
        headers : { "Content-Type" : "application/json" },
        body : JSON.stringify(producto)
    })
    return respuesta.json()
}

export async function actualizarProducto(id, cambios){
    const respuesta = await fetch(`${API_URL}/productos/${id}`, {
        method : "PUT",
        headers : { "Content-Type" : "application/json" },
        body : JSON.stringify(cambios)
    })
    return respuesta.json()
}

export async function eliminarProducto(id){
    await fetch(`${API_URL}/productos/${id}`, { method : "DELETE" })
}
