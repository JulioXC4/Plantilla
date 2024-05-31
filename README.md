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

## Instrucciones para configurar el proyecto

### Cliente Web

1. Descarga la carpeta que contiene las 2 carpetas necesarias.
2. Abre una terminal y navega hasta la carpeta del cliente web.
3. Ejecuta `npm i` para instalar las dependencias.
4. Crea un archivo `.env` dentro de la carpeta del cliente web.
5. Utiliza las variables de entorno del archivo `.env.example` como guía para configurar tu `.env`.
6. Para el desarrollo, ejecuta `npm run dev`.
7. Para el build, ejecuta `npm run build`.
8. Para correr el build, ejecuta `npm run start`.

### Servidor

1. Navega a la carpeta del servidor desde una terminal.
2. Ejecuta `npm i` para instalar las dependencias.
3. Crea un archivo `.env` dentro de la carpeta del servidor.
4. Utiliza las variables de entorno del archivo `.env.example` como guía para configurar tu `.env`.
5. Para utilizar nodemon en el desarrollo, ejecuta `npm run dev`.
6. Para correr el TypeScript, ejecuta `npm run start`.
