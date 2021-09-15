
# Funcionalidad


### Privados

- Crear un trabajo. `POST /works`
- Actualizar un trabajo, a travez del ID. `UPDATE /works/:id`
- Borrar un trabajo, a travez del ID. `DELETE /works/:id`



### Publicos

- Ver todos los trabajos. `GET /works`
- Ver un solo trabajo, a travez del ID. `GET /works/:id`
- Login, con user y contraseña. `POST /users/login`
- Registro, crear usuario. `POST /users/signup`
- Formulario de contacto, envia mail con datos de contacto


## Instalación 

Utilizando el administrador de paquetes [npm](https://www.npmjs.com/) para instalar las dependencias.

```
npm install
```

## Uso

Luego de instalar las dependencias y levantar el proyecto con:
```
npm run dev
```
Debes loguearte y enviar el token en cada request. Podras ver los trabajos creados en `GET /works`.

Para utilizar el endpoint de contacto es necesario que agregues en un archivo `.env` las variables `EMAIL`, `PASSWORD` y `TOKEN` (jwt).
Para utilizar la aplicacion debes agregar a ese archivo `.env` las variables de entorno de la base de datos `DATABASE_USER`, `DATABASE_HOST`, `DATABASE_PASSWORD`,
`DATABASE_NAME` y `DATABASE_PORT`.

En el repo encontraras la collection de postman con ejemplos de esto y el script de la base de datos.

<h1><strong>NOTA</strong></h1>
Es necesario primero levantar el backend y luego el frontend
