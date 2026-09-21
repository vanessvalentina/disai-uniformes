import { useState, useEffect } from "react"

const PRODUCTO_VACIO = {
    nombre : "",
    sector : "oficina",
    descripcion : "",
    precio : "",
    disponible : true
}

const SECTORES = ["oficina", "seguridad", "sanitario", "escolar", "textil-hogar"]

function FormularioProducto({ productoEditando, onGuardar, onCancelar }){

    const [datos, setDatos] = useState(PRODUCTO_VACIO)

    useEffect(() => {
        setDatos(productoEditando || PRODUCTO_VACIO)
    }, [productoEditando])

    function manejarCambio(evento){
        const { name, value, type, checked } = evento.target
        setDatos({ ...datos, [name] : type === "checkbox" ? checked : value })
    }

    function manejarEnvio(evento){
        evento.preventDefault()
        onGuardar({ ...datos, precio : Number(datos.precio) })
        setDatos(PRODUCTO_VACIO)
    }

    return (
        <form onSubmit={manejarEnvio}>
            <input name="nombre" placeholder="Nombre del uniforme" value={datos.nombre} onChange={manejarCambio} required />
            <select name="sector" value={datos.sector} onChange={manejarCambio}>
                {SECTORES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <input name="descripcion" placeholder="Descripción" value={datos.descripcion} onChange={manejarCambio} required />
            <input name="precio" type="number" placeholder="Precio (€)" value={datos.precio} onChange={manejarCambio} required />
            <label>
                <input name="disponible" type="checkbox" checked={datos.disponible} onChange={manejarCambio} />
                Disponible
            </label>
            <button>{productoEditando ? "Guardar cambios" : "Añadir producto"}</button>
            {productoEditando && <button type="button" onClick={onCancelar}>Cancelar</button>}
        </form>
    )
}

export default FormularioProducto
