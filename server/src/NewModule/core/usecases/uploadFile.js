class UploadFile {
  constructor({ fileRepo, versionRepo, externalService, queue }) {
    this.fileRepo = fileRepo;
    this.versionRepo = versionRepo;
    this.externalService = externalService;
    this.queue = queue;
  }

  execute = async ({ userId, file }) => {
    // validate
    const uploadParams = {
      tmpPath: `${userId}/file/${file.originalname}`,
      buffer: file.buffer,
    };

    // save to tmp
    const uploadResult = await this.externalService.uploadToTmp(uploadParams);

    const createFileVerParams = {
      userId,
      file,
      fileRepo: this.fileRepo,
      versionRepo: this.versionRepo,
    };

    // create file and version
    const result = await createFileAndVersion(createFileVerParams);

    const { newFile, newVersion } = result;
    // add job
    await this.queue.add(
      'FILE_PROCESS_JOB',
      {
        newVersion,
      },
      {
        jobUuid: '2387283y473',
      }
    );

    return {
      success: true,
      response: {
        fileId: newVersion.fileId,
        versionId: newVersion.id,
      },
    };
  };
}

////

const validate = (context) => {
  if (!context.file) {
    return {
      status: 400,
      success: false,
      response: {
        message: 'No file provided',
      },
    };
  }
  if (!context.userId) {
    return {
      status: 401,
      success: false,
      response: {
        message: 'Unauthorized',
      },
    };
  }
  return {
    status: 200,
    success: true,
    response: {
      message: 'ok',
    },
  };
};

const createFileAndVersion = async ({
  userId,
  file,
  fileRepo,
  versionRepo,
}) => {
  const newFile = await fileRepo.createOne({
    ownerId: userId,
    displayName: file.originalname,
    isDeleted: false,
  });

  //   const hash = await container.hash(file.buffer);

  const newVersion = await versionRepo.createOne({
    storagePath: 'init',
    tmpPath: 'init',
    status: 'uploaded',
    versionNumber: 1,
    sizeBytes: file.size,
    hash: 'dsd',
    filename: file.originalname,
    mimeType: file.mimetype,
    fileId: newFile.id,
  });
  return { newFile, newVersion };
};

module.exports = { UploadFile };
