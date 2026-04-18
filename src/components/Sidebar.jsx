import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ setIsAuthenticated }) {
  const navigate = useNavigate();

  function handleLogout() {
    setIsAuthenticated(false);
    navigate("/login");
  }

  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <img
          src="/Logo.png"
          alt="AdminPanel Logo"
          className="sidebar-logo-img"
        />
        <h5 className="sidebar-title">AdminPanel</h5>
        <small className="sidebar-subtitle">UIS - 2026</small>
      </div>

      <hr className="sidebar-divider" />

      {/* Links */}
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                "sidebar-link" + (isActive ? " active" : "")
              }
            >
              📊 Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clientes"
              className={({ isActive }) =>
                "sidebar-link" + (isActive ? " active" : "")
              }
            >
              👥 Clientes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/proveedor"
              className={({ isActive }) =>
                "sidebar-link" + (isActive ? " active" : "")
              }
            >
              🏭 Proveedor
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/usuarios"
              className={({ isActive }) =>
                "sidebar-link" + (isActive ? " active" : "")
              }
            >
              🔑 Usuarios
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="sidebar-bottom">
        <hr className="sidebar-divider" />

        {/* Logout */}
        <button className="sidebar-logout" onClick={handleLogout}>
          🚪 Cerrar sesión
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
