// const express = require('express');
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

// Conectar a la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.error(error));

// Definir puerto
const PORT = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener año actual
app.use((req, res, next) => {
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    next();
});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

// Definir la carpeta pública
app.use(express.static('public'));

// Agregar las rutas
app.use('/', router);

app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`);
})