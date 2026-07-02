# Proyecto Final Back-End Node.js

Este proyecto es un servicio REST API en Node.js con Express, conectado a Firebase Firestore para manejar productos de una tienda en línea.
Incluye autenticación con JWT y rutas protegidas para realizar operaciones CRUD.

# Instalación

Clonar el repositorio y ejecutar: git clone https://github.com/Mauro-Jalil-11/Pre-Entrega-Back-End-NodeJS.git
cd Pre-Entrega-Back-End-NodeJS
npm install

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

<img width="1125" height="75" alt="image" src="https://github.com/user-attachments/assets/7de6387d-dfc5-4c7d-b482-6f97ca80df2a" />










