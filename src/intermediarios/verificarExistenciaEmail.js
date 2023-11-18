const bancoDeDados = require("../config/configuracaoBanco");

const verificarExistenciaEmail = async (req, res, next) => {
  const { email } = req.body;
  try {
    const comando = `
      SELECT id
        FROM usuarios
      WHERE
        email = $1;
    `;
    const valores = [email];
    const { rowCount: quantidadeDeEmailsCadastrados } =
      await bancoDeDados.query(comando, valores);

    if (quantidadeDeEmailsCadastrados !== 0) {
      return res.status(400).json({ mensagem: "Usuário cadastrado" });
    }
    return next();
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno no servidor" });
  }
};

module.exports = verificarExistenciaEmail;
