const { Router } = require("express");
const { criarUsuario, editarUsuario } = require("./controladores/usuario");
const validarCorpoRequisicao = require("./intermediarios/validarCorpoRequisicao");
const verificarExistenciaEmail = require("./intermediarios/verificarExistenciaEmail");
const verificarExistenciaOutroUsuariosEmail = require("./intermediarios/verificarExistenciaOutroUsuariosEmail");
const rotas = Router();

rotas.get("/", (req, res) => res.json({ mensagem: "Olá, mundo" }));
rotas.post(
  "/usuarios",
  validarCorpoRequisicao,
  verificarExistenciaEmail,
  criarUsuario
);

rotas.put(
  "/usuarios",
  validarCorpoRequisicao,
  verificarExistenciaOutroUsuariosEmail,
  editarUsuario
);

module.exports = rotas;
