export class UserRepository {
  constructor(prisma) {
    this.prisma = prisma;
  }

  findAll = () => {
    return this.prisma.user.findMany({});
  };
  findUserByEmail = (email) => {
    return this.prisma.user.findFirst({ where: { email } });
  };
}
