import './Proveedor.css'
import PageTransition from '../components/PageTransition'

function Proveedor() {
  const proveedores = [
    { id: 1, nombre: 'TechSupply S.A.', contacto: 'proveedores@tech.com', categoria: 'Tecnología' },
    { id: 2, nombre: 'OficinaMax', contacto: 'ventas@ofmax.com', categoria: 'Papelería' },
    { id: 3, nombre: 'LogiStore', contacto: 'info@logistore.com', categoria: 'Logística' },
  ]

  return (
    <PageTransition>
      <div className="proveedor-container">
        <h2 className="mb-1">🏭 Proveedor</h2>
        <p className="text-muted mb-4">Listado de proveedores registrados.</p>
        <div className="proveedor-table-wrapper">
          <table className="table table-hover mb-0">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Empresa</th>
                <th>Contacto</th>
                <th>Categoría</th>
              </tr>
            </thead>
            <tbody>
              {proveedores.map(p => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.nombre}</td>
                  <td>{p.contacto}</td>
                  <td>
                    <span className="badge bg-info text-dark">{p.categoria}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageTransition>
  )
}

export default Proveedor