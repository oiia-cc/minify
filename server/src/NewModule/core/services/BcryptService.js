// newmodule/infra/BcryptHasher.js
class BcryptService {
  constructor(bcrypt) {
    this.bcrypt = bcrypt;
  }

  compare = (raw, hash) => {
    return this.bcrypt.compare(raw, hash);
  };
}

module.exports = { BcryptService };
