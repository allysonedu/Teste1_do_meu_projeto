const CreateUserService = require('../../services/CreateUserService');

const UserRepository = require('../../repositories/UserRepository');

const userRepository = new UserRepository();
class UserController {
  async createUser(request, response) {
    const { name, email, whatssap, password, cep } = request.body;

    const createUser = new CreateUserService(userRepository);

    const user = await createUser.execute({
      name,
      email,
      whatssap,
      password,
      cep,
    });
    return response.json({ user });
  }
  async getAllUser(request, response) {
    return response.json({ getAll: true });
  }
  async updateUser(request, response) {
    return response.json({ update: true });
  }
  async deleteUser(request, response) {
    return response.json({ delete: true });
  }
}

module.exports = UserController;
