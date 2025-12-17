// newmodule/container/auth.container.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const configApp = require('../infra/config/index');
const prisma = require('../infra/db/prismaClient');

const { UserRepository } = require('../infra/db/repositories/UserRepository');
const { JwtService } = require('../core/services/JwtService');
const Login = require('../core/usecases/Login');
const {
  LoginController,
} = require('../infra/http/controllers/loginController');
const { BcryptService } = require('../core/services/BcryptService');

const userRepo = new UserRepository(prisma);
const hashService = new BcryptService(bcrypt);
const jwtService = new JwtService(jwt, configApp);

const loginUseCase = new Login({
  userRepo,
  hashService,
  jwtService,
});

const loginController = new LoginController({
  loginUseCase,
});

module.exports = { loginController };
