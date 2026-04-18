import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Clientes from "./pages/Clientes";
import Proveedor from "./pages/Proveedor";
import Usuarios from "./pages/Usuarios";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function AnimatedRoutes({ setIsAuthenticated }) {
  const location = useLocation();

  return (
    <div className="layout">
      <Sidebar setIsAuthenticated={setIsAuthenticated} />
      <main className="main-content" style={{ overflow: "hidden" }}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/proveedor" element={<Proveedor />} />
            <Route path="/usuarios" element={<Usuarios />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Login setIsAuthenticated={setIsAuthenticated} />
              )
            }
          />
          <Route
            path="/*"
            element={
              isAuthenticated ? (
                <AnimatedRoutes setIsAuthenticated={setIsAuthenticated} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
