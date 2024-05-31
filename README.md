# Proyecto Full Stack con Next.js, Tailwind CSS y Express

Este repositorio contiene dos carpetas principales: `cliente-web` y `servidor`. El proyecto está desarrollado utilizando **Next.js 14** con **TypeScript** y **Tailwind CSS** para el cliente, y **Express** con **Node.js** y **TypeScript** para el servidor.

## Estructura del Proyecto

### Carpeta `cliente-web`

En la carpeta `cliente-web` se encuentra la aplicación cliente, desarrollada con las siguientes tecnologías:

- **Next.js 14**: Un framework de React para la creación de aplicaciones web modernas.
- **TypeScript**: Un superset de JavaScript que añade tipado estático opcional.
- **Tailwind CSS**: Un framework CSS de utilidad para estilizar la aplicación de manera eficiente.

La aplicación cliente consume la API REST proporcionada por el servidor para interactuar con los datos.

### Carpeta `servidor`

En la carpeta `servidor` se encuentra la API REST, desarrollada con las siguientes tecnologías:

- **Express**: Un framework de Node.js para construir aplicaciones web y APIs.
- **TypeScript**: Utilizado para añadir tipado estático al código de Node.js.

El servidor está preparado para conectarse a una base de datos MongoDB utilizando **Mongoose**. La sección de código para la conexión a la base de datos está comentada, y puede ser habilitada si se desea utilizar MongoDB.
