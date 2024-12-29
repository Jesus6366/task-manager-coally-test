# Aplicación de Gestión de Tareas

Esta es una aplicación de gestión de tareas construida con el stack MERN (MongoDB, Express, React, Node.js). Permite a los usuarios gestionar tareas, incluyendo operaciones CRUD, con una interfaz fácil de usar y un backend API.

## Enlace a la aplicación desplegada

Puedes acceder a la versión en vivo de la aplicación en:

[Aplicación Desplegada](https://task-manager-app-fw24.onrender.com/)

## Instalación y Ejecución Local

### Requisitos previos

- Node.js (se recomienda la versión 18 o superior)
- npm (Node Package Manager) o Yarn
- Cuenta en MongoDB Atlas (si usas MongoDB en la nube)

### Backend

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Jesus6366/task-manager-coally-test.git
   cd task-manager-coally-test
   Navega a la carpeta api (donde está el código del backend):
   ```

2. cd server
   Instala las dependencias del backend:
   npm install

3. Crea un archivo .env en el directorio api y agrega las siguientes variables de entorno:

4. MONGO_URI=tu_cadena_de_conexión_a_mongo

   MONGO_URI: Reemplázalo con tu cadena de conexión de MongoDB Atlas.

5. npm start
   El backend estará corriendo en http://localhost:8000. (local)

Frontend

1.  Navega al directorio del frontend:
    cd ../frontend
    Instala las dependencias del frontend:

2.  npm install
    Crea un archivo .env en el directorio frontend y agrega la siguiente variable de entorno:

VITE_API_URL=http://localhost:8000
VITE_API_URL: La URL base del API del backend para tu entorno de desarrollo local.

3.  Inicia el servidor frontend:
    npm run dev
    El frontend estará corriendo en http://localhost:3000.
