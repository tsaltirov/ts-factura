# README


## Descripción del Proyecto

Este proyecto es una aplicación backend construida con NestJS, diseñada generar documentos PDF de facturas que vienen de la BBDD. Utiliza MongoDB para el almacenamiento de datos e incluye características para crear, recuperar, actualizar y eliminar facturas y clientes.

## Tecnologías Utilizadas

- **NestJS**: Un marco progresivo de Node.js para construir aplicaciones del lado del servidor eficientes y escalables.
- **MongoDB**: Una base de datos NoSQL para almacenar datos.
- **Mongoose**: Una biblioteca ODM (Object Data Modeling) para MongoDB y Node.js.
- **PDFKit**: Una biblioteca de generación de documentos PDF para Node.js.
- **Swagger**: Para la documentación de la API.

## Características

- **Gestión de Facturas**: Crear y leer facturas.
- **Gestión de Clientes**: Crear, leer, actualizar y eliminar clientes.
- **Generación de PDF**: Generar facturas en PDF para los clientes.
- **Documentación de API**: Documentación de API generada automáticamente utilizando Swagger.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura MongoDB:
   Asegúrate de tener MongoDB ejecutándose localmente o actualiza la cadena de conexión en `src/app.module.ts` para apuntar a tu instancia de MongoDB.
   También puedes mockear esto con objetos predefinidos.

5. Inicia la aplicación:
   ```bash
   npm run start
   ```

6. Accede a la documentación de la API en `http://localhost:3000/api`.


## Contribuciones

Gracias a la contribución en una Issue de uno de los compañeros de AdoptaUnJunior.

## Licencia

Este proyecto está bajo la Licencia MIT.


