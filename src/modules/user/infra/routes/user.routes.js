const { Router } = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const UserController = require('../controllers/UserController');

const {
  verifyIfEmailAlreadyExists,
} = require('../../middleware/user.middleware');

const userRoutes = Router();

const userController = new UserController();

userRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required('Name is required'),
      email: Joi.string().email().required('Email is required'),
      whatssap: Joi.string().required('whatssap is required'),
      cep: Joi.string().required('cep is required'),
      password: Joi.string().min(6).required('password is required'),
      type: Joi.boolean().required('type is required'),
    },
  }),
  verifyIfEmailAlreadyExists,
  userController.createUser
);
userRoutes.get('/', userController.createUser);

userRoutes.put('/', userController.updateUser);

userRoutes.delete('/', userController.deleteUser);

module.exports = userRoutes;
