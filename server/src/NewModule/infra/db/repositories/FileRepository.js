export class FileRepository {
  constructor(prisma) {
    this.prisma = prisma;
  }

  findAll = () => {
    return this.prisma.file.findMany({});
  };
  findById = (id) => {
    return this.prisma.file.findFirst({ where: { id } });
  };
}
