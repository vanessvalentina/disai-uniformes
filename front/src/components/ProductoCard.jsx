function ProductoCard({ producto, onEditar, onEliminar }){

    const { _id, nombre, sector, descripcion, precio, disponible } = producto

    return (
        <article className="producto">
            <span className="sector">{sector}</span>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <p className="precio">{precio} €</p>
            <p className="estado">{disponible ? "Disponible" : "No disponible"}</p>
            <div className="acciones">
                <button onClick={() => onEditar(producto)}>Editar</button>
                <button onClick={() => onEliminar(_id)}>Eliminar</button>
            </div>
        </article>
    )
}

export default ProductoCard
