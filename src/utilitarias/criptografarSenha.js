const bcrypt = require("bcrypt");

const criptografarSenha = async (senha) => {
  const senhaCriptografada = await bcrypt.hash(senha, 10);
  return senhaCriptografada;
};

module.exports = criptografarSenha;
