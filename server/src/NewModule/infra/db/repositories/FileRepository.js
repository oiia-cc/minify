class FileRepository {
  constructor(prisma) {
    this.prisma = prisma;
  }

  findAll = () => {
    return this.prisma.file.findMany({});
  };
  findById = (id) => {
    return this.prisma.file.findFirst({ where: { id } });
  };

  createOne = ({ ownerId, displayName = null, isDeleted = false }) => {
    return this.prisma.file.create({
      data: {
        displayName,
        isDeleted,
        owner: { connect: { id: ownerId } },
      },
    });
  };

  listOfUser = ({
    userId,
    search,
    groupBy,
    sortBy = 'updatedAt',
    orderBy = 'desc',
    skip = 0,
    limit = 20,
  }) => {
    // ----- SEARCH -----
    const searchCondition = search
      ? {
          displayName: {
            contains: search,
            mode: 'insensitive',
          },
        }
      : {};

    // ----- GROUP (FILTER) -----
    let groupCondition = {};

    if (groupBy === 'image') {
      groupCondition = { mimeType: { startsWith: 'image/' } };
    }
    if (groupBy === 'video') {
      groupCondition = { mimeType: { startsWith: 'video/' } };
    }
    if (groupBy === 'doc') {
      groupCondition = {
        OR: [
          { mimeType: { contains: 'pdf' } },
          { mimeType: { contains: 'msword' } },
          { mimeType: { contains: 'officedocument' } },
        ],
      };
    }
    if (groupBy === 'zip') {
      groupCondition = {
        mimeType: {
          contains: 'zip',
        },
      };
    }

    // ----- WHERE -----
    const where = {
      ownerId: userId,
      isDeleted: false,
      ...searchCondition,
      ...groupCondition,
    };

    return this.prisma.$transaction([
      this.prisma.file.findMany({
        where,
        orderBy: {
          [sortBy]: orderBy,
        },
        skip: Number(skip),
        take: Number(limit),
        include: {
          versions: {
            orderBy: { versionNumber: 'desc' },
            take: 1,
          },
        },
      }),
      this.prisma.file.count({ where }),
    ]);
  };
}

module.exports = { FileRepository };
