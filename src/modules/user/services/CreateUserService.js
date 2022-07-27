const { generateHash } = require('../../../shared/utils/encrypt');

class CreateUserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute(payload) {
    const { password } = payload;

    Object.assign(payload, {
      password: await generateHash(password),
    });
    const user = await this.userRepository.createUser(payload);

    return user;
  }
}

module.exports = CreateUserService;
