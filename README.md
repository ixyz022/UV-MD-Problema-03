# Problema 3 - CRUD y Capa de Servicios

## Especificación

### Introducción
El objetivo de esta evaluación es aplicar el patrón Capa de Servicios en el desarrollo de un CRUD para una tienda en línea. Deberás plantear un requerimiento funcional, diseñar el diagrama de secuencia que lo satisfaga e implementar el código necesario para realizar la funcionalidad. No se evaluará ningún aspecto de interfaz de usuario, por lo que las consultas se pueden realizar utilizando Postman u otro programa similar.

### Contexto
El presente proyecto representa la base de datos de una tienda en línea. En la tienda existen usuarios Compradores, usuarios Vendedores, Productos y Tipos de productos. Puedes obtener el código SQL para crear la base de datos desde el siguiente enlace: [http://bit.ly/2BCPJ8V](http://bit.ly/2BCPJ8V)

## Instrucciones

1. Desarrollo del CRUD:
   - Deberás desarrollar las operaciones de consulta, inserción, actualización y eliminación para las entidades de la base de datos.
   - Las operaciones deben seguir el estándar API REST.
   - Crea las capas de servicio necesarias para implementar el CRUD y realizar las operaciones en la base de datos.

2. Requerimiento funcional:
   - Formula un requerimiento funcional utilizando los datos de la base de datos.
   - El requerimiento debe involucrar al menos dos tablas de la base de datos.
   - El requerimiento debe ser de consulta de datos.
   - Ejemplo de requerimiento:
     - "Dado un número de vendedor, ver el nombre de todos los Compradores que han comprado sus Productos"
     - "Dado un tipo de producto, ver los nombres de todos los clientes que lo han comprado"

3. Diagrama de secuencia UML:
   - Diseña un diagrama de secuencia UML que describa la interacción entre el actor y las capas de servicio que crearás para satisfacer el requerimiento.
   - El diagrama de secuencia debe reflejar el flujo de información y las operaciones que se realizarán.

4. Implementación:
   - Implementa el requerimiento funcional en el lenguaje de programación que consideres conveniente.
   - Utiliza las capas de servicio creadas en el punto 1 para realizar las consultas necesarias.
   - Asegúrate de seguir el estándar API REST en tu implementación.

## Instalacion

Clonar repositorio con el siguiente comando en la consola "CMD"
```bash
git clone https://github.com/ixyz022/proyecto-web-react
```

## Instalar dependencias
Utilizar los siguientes comandos:
```bash
cd Proyecto03-MD
cd backend
npm install
```

## Configurar acceso a la base de datos
Dentro de:
```bash
backend/app/config/db.config.ts
```
Se encuentra el archivo para configurar la base de datos, donde debera anotar sus credenciales de acceso
## Uso
Instrucciones para lanzar aplicación. Utilizar una consola por cada servicio

## Backend
Lanzar backend:
```bash
cd backend
npm run tsc
npm run start
```