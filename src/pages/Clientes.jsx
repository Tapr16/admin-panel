import './Clientes.css'
import PageTransition from '../components/PageTransition'

function Clientes() {
  const clientes = [
    { id: 1, nombre: 'Carlos Pérez', email: 'carlos@email.com', estado: 'Activo' },
    { id: 2, nombre: 'Ana Gómez', email: 'ana@email.com', estado: 'Inactivo' },
    { id: 3, nombre: 'Luis Torres', email: 'luis@email.com', estado: 'Activo' },
  ]

  return (
    <PageTransition>
      <div className="clientes-container">
        <h2 className="mb-1">👥 Clientes</h2>
        <p className="text-muted mb-4">Listado de clientes registrados.</p>
        <div className="clientes-table-wrapper">
          <table className="table table-hover mb-0">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map(c => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.nombre}</td>
                  <td>{c.email}</td>
                  <td>
                    <span className={`badge ${c.estado === 'Activo' ? 'bg-success' : 'bg-secondary'}`}>
                      {c.estado}
                    </span>
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

export default Clientes