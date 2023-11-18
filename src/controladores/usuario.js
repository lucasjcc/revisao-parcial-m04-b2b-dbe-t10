const bancoDeDados = require("../config/configuracaoBanco");
const criptografarSenha = require("../utilitarias/criptografarSenha");

const criarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const comando = `
      INSERT INTO usuarios
        (nome, email, senha)
      VALUES
        ($1, $2, $3)
      RETURNING
        id, nome, email;
    `;

    const senhaCriptografada = await criptografarSenha(senha);
    const valores = [nome, email, senhaCriptografada];
    const resposta = await bancoDeDados.query(comando, valores);
    return res.status(201).json(resposta.rows[0]);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ mensagem: "Erro interno no servidor" });
  }
};

const editarUsuario = (req, res) => {
  return res.send("Usuário editado");
};

module.exports = {
  criarUsuario,
  editarUsuario,
};
