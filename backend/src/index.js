// src/index.js

const express = require("express");
const cors = require("cors"); // Importa cors solo una vez
const app = express();

app.use(cors());  // Aplica CORS para todas las rutas

const config = require("./config");
const appRoutes = require("./app");

app.use(express.json());
app.use(appRoutes);

app.listen(config.PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${config.PORT}`);
});
