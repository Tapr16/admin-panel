import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'

const USUARIO = 'admin'
const PASSWORD = '1234'

function Login({ setIsAuthenticated }) {
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()
    if (usuario === USUARIO && password === PASSWORD) {
      setIsAuthenticated(true)
      navigate('/clientes')
    } else {
      setError('Usuario o contraseña incorrectos.')
    }
  }

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="card shadow-sm"
        style={{ width: '100%', maxWidth: '400px' }}
      >
        <div className="card-body p-4">
          <div className="text-center mb-4">
            <div style={{ fontSize: '3rem' }}>🛠️</div>
            <h4 className="fw-bold mb-0">AdminPanel</h4>
            <small className="text-muted">UIS - 2026</small>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Usuario</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingresa tu usuario"
                value={usuario}
                onChange={e => setUsuario(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            {error && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="alert alert-danger py-2 text-center"
              >
                {error}
              </motion.div>
            )}
            <button type="submit" className="btn btn-primary w-100 mt-2">
              Iniciar sesión
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default Login