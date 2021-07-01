
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

## Usage

Luego de instalar las dependencias y levantar el proyecto con:
```
npm run dev
```
Debes loguearte y enviar el token en cada request. Podras ver los trabajos creados en `/trabajos.html`.

Para utilizar el formulario de contacto es necesario que agregues en un archivo `.env` las variables `EMAIL`, `PASSWORD` y `TOKEN` (jwt)

En el repo encontraras la collection de postman con ejemplos de esto.
