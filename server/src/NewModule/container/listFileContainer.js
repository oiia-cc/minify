// newmodule/container/auth.container.js
const prisma = require('../infra/db/prismaClient');

const {
  LoginController,
} = require('../infra/http/controllers/loginController');
const { FileRepository } = require('../infra/db/repositories/FileRepository');
const {
  ListFileController,
} = require('../infra/http/controllers/ListFileController');
const ListFile = require('../core/usecases/ListFile');

const fileRepo = new FileRepository(prisma);

const listFilesUseCase = new ListFile({
  fileRepo,
});

const listFileController = new ListFileController({
  listFilesUseCase,
});

module.exports = { listFileController };
