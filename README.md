# Proyecto Final Back-End Node.js

Este proyecto es un servicio REST API en Node.js con Express, conectado a Firebase Firestore para manejar productos de una tienda en línea.
Incluye autenticación con JWT y rutas protegidas para realizar operaciones CRUD.

# Instalación

Clonar el repositorio y ejecutar: npm install

Configurar las variables de entorno en un archivo .env (ejemplo):
PORT=3000
FIREBASE_PROJECT_ID=ilevenn
JWT_SECRET=clave_secreta

Ejecutar el servidor: npm run start

# Uso

Login - Obtener un token JWT:
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"user":"admin","password":"admin"}'









