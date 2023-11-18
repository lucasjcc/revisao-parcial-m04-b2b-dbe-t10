const verificarExistenciaOutroUsuariosEmail = async (req, res, next) => {
  const { email } = req.body;
  const { idUsuarioLogado } = req;
  try {
    const comando = `
      SELECT * FROM usuarios
      WHERE
        email = $1 AND id != $2;
    `;
    const valores = [email, idUsuarioLogado];
    const { rowCount: quantidadeDeEmailsCadastrados } =
      await bancoDeDados.query(comando, valores);

    if (quantidadeDeEmailsCadastrados !== 0) {
      return res.status(400).json({ mensagem: "E-mail inválido" });
    }
    return next();
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno no servidor" });
  }
};

module.exports = verificarExistenciaOutroUsuariosEmail;
