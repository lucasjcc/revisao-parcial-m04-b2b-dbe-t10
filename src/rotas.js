const { Router } = require("express");
const rotas = Router();

rotas.get("/", (req, res) => res.json({ mensagem: "Olá, mundo" }));

module.exports = rotas;
