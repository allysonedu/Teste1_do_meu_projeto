const bcrypt = require('bcrypt');

const AppError = require('../errors/Apperror');

module.exports = {
  //geração do hash de senha
  async generateHash(password) {
    const hash = await bcrypt.hash(password, Number(process.env.ENCRYPT_BITS));

    return hash;
  },
  async campare(password, hashedPassword) {
    const passwordMatch = await bcrypt.compare(password, hashedPassword);

    if (!passwordMatch) throw new AppError('Credentials do not match', 401);
  },
};
