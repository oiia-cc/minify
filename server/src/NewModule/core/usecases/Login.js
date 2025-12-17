class Login {
  constructor({ userRepo, hashService, jwtService }) {
    this.userRepo = userRepo;
    this.hashService = hashService;
    this.jwtService = jwtService;
  }

  execute = async ({ email, password }) => {
    if (!email || !password) {
      throw new Error('BAD_REQUEST');
    }
    const user = await this.userRepo.findUserByEmail(email);
    if (!user) {
      throw new Error('USER_NOT_FOUND');
    }
    const match = await this.hashService.compare(password, user.passwordHash);
    if (!match) {
      throw new Error('INVALID_CREDENTIALS');
    }

    const token = this.jwtService.sign({
      id: user.id,
      email: user.email,
      role: user.role,
      handle: user.handle,
    });

    return {
      access_token: token,
      refresh_token: null,
      user: {
        id: user.id,
        email: user.email,
        handle: user.handle,
        role: user.role,
      },
    };
  };
}

module.exports = Login;
