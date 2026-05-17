# Pre-Entrega Proyecto Back-End Node.js

Este proyecto es una CLI en Node.js para manejar productos de una tienda en línea usando la Fake Store API.  
Permite consultar, crear y eliminar productos desde la terminal.

## Instalación
Clonar el repositorio y ejecutar: npm install

## Uso
Ejecutar los siguientes comandos:

- Consultar todos los productos: npm run start GET products
  
- Consultar un producto por ID: npm run start GET products/7
 
- Crear un producto nuevo: npm run start POST products "Remera negra" 29.99 "men's clothing"

- Eliminar un producto: npm run start DELETE products/7

## Tests
Para correr las pruebas: npm test

Se validan las funciones principales: GET, GET por ID, POST y DELETE.

## Ejemplo
Al ejecutar los comandos se muestran los resultados en la consola (lista de productos, producto específico, producto creado y producto eliminado).

<img width="502" height="330" alt="image" src="https://github.com/user-attachments/assets/2856f1a4-4896-4695-b3f2-96bbcc10ea72" />







