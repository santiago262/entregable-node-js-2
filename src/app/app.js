// Importa los módulos necesarios
const express = require('express');
const morgan = require('morgan');
const cors = require('cors'); // Importa el módulo CORS

// Importa el enrutador
const router = require("../router/user.router");

// Inicializa la aplicación express
const app = express();

// Middleware
app.use(cors()); // Configura CORS
app.use(morgan("dev")); // Middleware de registro para entorno de desarrollo
app.use(express.json()); // Middleware para analizar solicitudes JSON

// Definiciones de rutas
app.get("/", (req, res) => {
    res.send('This is express');
});

// Configuración del enrutador
app.use("/users/v1", router);

// Exporta la aplicación express configurada
module.exports = app;
