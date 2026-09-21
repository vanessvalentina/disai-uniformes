import { useState } from "react"
import { useProductos } from "./hooks/useProductos"
import FormularioProducto from "./components/FormularioProducto"
import ProductoCard from "./components/ProductoCard"

function App(){

    const { productos, cargando, error, agregar, editar, eliminar } = useProductos()
    const [editando, setEditando] = useState(null)

    function guardar(datos){
        if(editando){
            editar(editando._id, datos)
        }else{
            agregar(datos)
        }
        setEditando(null)
    }

    return (
        <main>
            <header>
                <h1>Inversiones Disai</h1>
                <p className="subtitulo">Catálogo de uniformes corporativos</p>
            </header>

            <FormularioProducto
                productoEditando={editando}
                onGuardar={guardar}
                onCancelar={() => setEditando(null)}
            />

            {cargando && <p className="aviso">Cargando productos…</p>}
            {error && <p className="aviso">Error al cargar los productos</p>}

            <section className="catalogo">
                {productos.map(producto => (
                    <ProductoCard
                        key={producto._id}
                        producto={producto}
                        onEditar={setEditando}
                        onEliminar={eliminar}
                    />
                ))}
            </section>
        </main>
    )
}

export default App
