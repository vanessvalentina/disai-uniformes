import { useState, useEffect } from "react"
import { obtenerProductos, crearProducto, actualizarProducto, eliminarProducto } from "../services/api"

export function useProductos(){

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        obtenerProductos()
            .then(setProductos)
            .catch(() => setError(true))
            .finally(() => setCargando(false))
    }, [])

    async function agregar(producto){
        const nuevo = await crearProducto(producto)
        setProductos([...productos, nuevo])
    }

    async function editar(id, cambios){
        const actualizado = await actualizarProducto(id, cambios)
        setProductos(productos.map(p => p._id === id ? actualizado : p))
    }

    async function eliminar(id){
        await eliminarProducto(id)
        setProductos(productos.filter(p => p._id !== id))
    }

    return { productos, cargando, error, agregar, editar, eliminar }
}
