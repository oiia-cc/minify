const { fileQueue } = require('./queueContainer.js');
const { SupabaseStorage } = require('../core/services/SupabaseStorage.js');
const {
  FileRepository,
} = require('../infra/db/repositories/FileRepository.js');
const {
  VersionRepository,
} = require('../infra/db/repositories/VersionRepository');
const {
  UploadFileController,
} = require('../infra/http/controllers/UploadFileController');

// newmodule/container/auth.container.js
const prisma = require('../infra/db/prismaClient');
const { UploadFile } = require('../core/usecases/uploadFile');
const supabase = require('../infra/config/supabaseClient');

const fileRepo = new FileRepository(prisma);
const versionRepo = new VersionRepository(prisma);
const externalService = new SupabaseStorage('tmp', supabase);
const queue = fileQueue;

const uploadFileUseCase = new UploadFile({
  fileRepo,
  versionRepo,
  externalService,
  queue,
});

const uploadFileController = new UploadFileController({
  uploadFileUseCase,
});

module.exports = { uploadFileController };
