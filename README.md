# Gestión de Gestion de Usuarios

Este proyecto implementa un sistema de gestión de usuarios utilizando una aplicación web desarrollada con Node.js, Express, MySQL y TypeScript

## Backend

El backend de la aplicación está construido con Node.js y Express, y se encarga de manejar las solicitudes HTTP y las operaciones CRUD en la base de datos MySQL.

### Configuración del Backend

1. **Instalación de dependencias**: Antes de ejecutar el servidor, asegúrate de instalar todas las dependencias necesarias ejecutando `npm install`.

2. **Configuración de la base de datos**: Asegúrate de tener una base de datos MySQL configurada. Puedes modificar los parámetros de conexión en el archivo `src/config/database.ts` para que coincidan con tu entorno.

3. **Inicio del servidor**: Para iniciar el servidor, ejecuta `npm run dev` en tu terminal. Por defecto, el servidor se ejecutará en el puerto 3030.

**Instalación de dependencias**: Antes de ejecutar la aplicación frontend, asegúrate de instalar todas las dependencias necesarias ejecutando `npm install` en la carpeta `frontend`.

**Compilación de TypeScript**: Compila los archivos TypeScript ejecutando `npm run build` en la carpeta `frontend`. Esto generará los archivos JavaScript necesarios en la carpeta `frontend/dist`.
