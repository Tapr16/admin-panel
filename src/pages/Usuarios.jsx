import './Usuarios.css'
import PageTransition from '../components/PageTransition'

function Usuarios() {
  const usuarios = [
    { id: 1, nombre: 'Admin', rol: 'Administrador', ultimo: '2025-04-17' },
    { id: 2, nombre: 'jperez', rol: 'Editor', ultimo: '2025-04-16' },
    { id: 3, nombre: 'agomez', rol: 'Lector', ultimo: '2025-04-15' },
  ]

  return (
    <PageTransition>
      <div className="usuarios-container">
        <h2 className="mb-1">🔑 Usuarios</h2>
        <p className="text-muted mb-4">Usuarios con acceso al sistema.</p>
        <div className="usuarios-table-wrapper">
          <table className="table table-hover mb-0">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Usuario</th>
                <th>Rol</th>
                <th>Último acceso</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map(u => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.nombre}</td>
                  <td>
                    <span className={`badge ${
                      u.rol === 'Administrador' ? 'bg-danger' :
                      u.rol === 'Editor' ? 'bg-warning text-dark' : 'bg-secondary'
                    }`}>
                      {u.rol}
                    </span>
                  </td>
                  <td>{u.ultimo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageTransition>
  )
}

export default Usuarios