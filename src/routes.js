const express = require("express");
const rotas = express.Router();

//Controllers
const CepController = require("./controllers/CepController");

//Routes
rotas.get("/", CepController.index);
rotas.get("/cep/:id", CepController.cep);

module.exports = rotas;
