const { Router } = require('express');

const userRoutes = require('../../../modules/user/infra/routes/user.routes');

const sessionsRoutes = require('../../../modules/user/infra/routes/sessions.routes');

const routes = Router();

//routes.use('/user', userRoutes);

//routes.use('/login', sessionsRoutes);

module.exports = routes;
