import './Dashboard.css'
import PageTransition from '../components/PageTransition'

function Dashboard() {
  const actividad = [
    { usuario: 'Admin',  accion: 'Inició sesión',         hora: 'Hace 5 min' },
    { usuario: 'jperez', accion: 'Consultó clientes',     hora: 'Hace 20 min' },
    { usuario: 'agomez', accion: 'Revisó proveedores',    hora: 'Hace 1 hora' },
    { usuario: 'Admin',  accion: 'Actualizó un usuario',  hora: 'Hace 2 horas' },
  ]

  return (
    <PageTransition>
      <div className="dashboard-container">
        <h2 className="mb-1">📊 Dashboard</h2>
        <p className="text-muted mb-4">Resumen general del sistema.</p>

        {/* Tarjetas */}
        <div className="dashboard-cards">
          <div className="dashboard-card card-clientes">
            <span className="card-icon">👥</span>
            <span className="card-number">3</span>
            <span className="card-label">Clientes registrados</span>
          </div>
          <div className="dashboard-card card-proveedor">
            <span className="card-icon">🏭</span>
            <span className="card-number">3</span>
            <span className="card-label">Proveedores registrados</span>
          </div>
          <div className="dashboard-card card-usuarios">
            <span className="card-icon">🔑</span>
            <span className="card-number">3</span>
            <span className="card-label">Usuarios del sistema</span>
          </div>
          <div className="dashboard-card card-activos">
            <span className="card-icon">✅</span>
            <span className="card-number">2</span>
            <span className="card-label">Clientes activos</span>
          </div>
        </div>

        {/* Tabla de actividad reciente */}
        <div className="dashboard-table-section">
          <h5>🕐 Actividad reciente</h5>
          <div className="dashboard-table-wrapper">
            <table className="table table-hover mb-0">
              <thead className="table-dark">
                <tr>
                  <th>Usuario</th>
                  <th>Acción</th>
                  <th>Hora</th>
                </tr>
              </thead>
              <tbody>
                {actividad.map((a, i) => (
                  <tr key={i}>
                    <td><strong>{a.usuario}</strong></td>
                    <td>{a.accion}</td>
                    <td><span className="badge bg-secondary">{a.hora}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default Dashboard