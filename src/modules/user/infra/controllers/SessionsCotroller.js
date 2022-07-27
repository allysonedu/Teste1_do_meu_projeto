const UserRepository = require('../../repositories/UserRepository');

const SessionService = require('../../services/CreateUserService');

const userRepository = new UserRepository();

class SessionController {
  async login(request, response) {
    const sessionService = new SessionService(userRepository);

    const user = await sessionService.execute(request.body);

    return response.json(user);
  }
}

module.exports = SessionController;
