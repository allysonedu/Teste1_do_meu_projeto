const { Router } = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const SessionsController = require('../controllers/SessionsCotroller');

const sessionsRoutes = Router();
const sessionsController = new SessionsController();

sessionsRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required('Email is required'),
      password: Joi.string().min(6).required('password is required'),
    },
  }),
  sessionsController.login
);
module.exports = sessionsRoutes;
