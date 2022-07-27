const connection = require('../../../shared/database/connection');

class UserRepository {
  async checkUserEmail(email) {
    return connection('user').where({ email }).first();
  }
  async createUser(payload) {
    return connection.transaction(async trx =>
      trx('user').insert(payload).returning('id')
    );
  }
}

module.exports = UserRepository;
