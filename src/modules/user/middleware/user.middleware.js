const UserRepository = require('../repositories/UserRepository');

const AppError = require('../../../shared/errors/Apperror');

const userRepository = new UserRepository();

module.exports = {
  async verifyIfEmailAlreadyExists(request, response, next) {
    const { email } = request.body;

    const emailExists = await userRepository.checkUserEmail(email);
    if (emailExists) throw new AppError('Email already exists', 401);

    next();
  },
};
