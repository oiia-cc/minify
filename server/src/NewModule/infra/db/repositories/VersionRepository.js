class VersionRepository {
  constructor(prisma) {
    this.prisma = prisma;
  }

  findAll = () => {
    return this.prisma.fileVersion.findMany({});
  };
  findById = (id) => {
    return this.prisma.fileVersion.findFirst({ where: { id } });
  };

  createOne = ({
    fileId,
    storagePath,
    tmpPath,
    filename,
    sizeBytes,
    mimeType,
    versionNumber,
    status,
    hash,
    notes,
  }) => {
    return this.prisma.fileVersion.create({
      data: {
        storagePath: storagePath,
        tmpPath: tmpPath,
        status: status,
        versionNumber: versionNumber,
        filename: filename,
        sizeBytes: sizeBytes,
        hash: hash,
        mimeType: mimeType,
        file: { connect: { id: fileId } },
        notes: notes,
      },
    });
  };
}

module.exports = { VersionRepository };
