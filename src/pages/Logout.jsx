import { useNavigate } from 'react-router-dom'

function Logout() {
  const navigate = useNavigate()

  function handleLogout() {
    // Aquí iría la lógica real de cierre de sesión
    alert('Sesión cerrada correctamente.')
    navigate('/')
  }

  return (
    <div className="text-center mt-5">
      <h2>🚪 Cerrar sesión</h2>
      <p className="text-muted">¿Estás seguro de que deseas salir?</p>
      <button className="btn btn-danger mt-3" onClick={handleLogout}>
        Confirmar Logout
      </button>
    </div>
  )
}
export default Logout