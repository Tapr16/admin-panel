# AdminPanel - Panel Administrativo Web con React JS

Proyecto desarrollado para el taller de la asignatura de Entornos de Desarrollo
de la Escuela de Ingeniería de Sistemas e Informática - UIS (II Semestre 2026).

## Descripción

Aplicación web tipo panel administrativo construida con React + Vite que incluye
sistema de autenticación, navegación protegida, sidebar con modo oscuro/claro
y transiciones animadas entre páginas.

## Tecnologías utilizadas

- React 18
- Vite
- React Router DOM
- Bootstrap 5
- Framer Motion

## Características

- Login con autenticación simple (rutas protegidas)
- Sidebar fijo con navegación mediante NavLink
- Transiciones animadas entre páginas con Framer Motion
- Vistas de Clientes, Proveedor y Usuarios con tablas de datos
- Logo personalizado en sidebar y pestaña del navegador
- Cierre de sesión que redirige al login

## Credenciales de prueba

| Campo      | Valor  |
|------------|--------|
| Usuario    | admin  |
| Contraseña | 1234   |

## Instalación y ejecución

1. Clona el repositorio:
   git clone https://github.com/tu-usuario/admin-panel.git

2. Entra a la carpeta del proyecto:
   cd admin-panel

3. Instala las dependencias:
   npm install

4. Inicia el servidor de desarrollo:
   npm run dev

5. Abre el navegador en:
   http://localhost:5173

## Estructura del proyecto

```
admin-panel/
├── public/
│   └── Logo.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Sidebar.css
│   │   └── PageTransition.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Clientes.jsx
│   │   ├── Clientes.css
│   │   ├── Proveedor.jsx
│   │   ├── Proveedor.css
│   │   ├── Usuarios.jsx
│   │   └── Usuarios.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
└── README.md
```

## Profesor

Carlos Adolfo Beltrán Castro
Escuela de Ingeniería de Sistemas e Informática - UIS