# Pre-Entrega Proyecto Back-End Node.js

Este proyecto es una CLI en Node.js para manejar productos de una tienda en línea usando la Fake Store API.  
Permite consultar, crear y eliminar productos desde la terminal.

## Instalación
Clonar el repositorio y ejecutar: npm install

## Uso
Ejecutar los siguientes comandos:

- Consultar todos los productos: npm run start GET products

<img width="1901" height="971" alt="image" src="https://github.com/user-attachments/assets/48f4ccfb-ed2c-4d23-a522-1a3706fa1bf0" />
  
- Consultar un producto por ID: npm run start GET products/7

<img width="1266" height="222" alt="image" src="https://github.com/user-attachments/assets/47456db9-8be7-4fc1-a9b6-3031ffdf93c8" />
 
- Crear un producto nuevo: npm run start POST products "Remera negra" 29.99 "men's clothing"

<img width="502" height="180" alt="image" src="https://github.com/user-attachments/assets/f8183847-e63a-49a9-a9b1-a411baa1c629" />

- Eliminar un producto: npm run start DELETE products/7

<img width="1273" height="223" alt="image" src="https://github.com/user-attachments/assets/fa2bbfa9-74c9-4e3c-896d-ce05ef784a94" />

## Tests
Para correr las pruebas: npm test

Se validan las funciones principales: GET, GET por ID, POST y DELETE.

## Ejemplo
Al ejecutar los comandos se muestran los resultados en la consola (lista de productos, producto específico, producto creado y producto eliminado).

<img width="502" height="330" alt="image" src="https://github.com/user-attachments/assets/2856f1a4-4896-4695-b3f2-96bbcc10ea72" />







