// newmodule/infra/BcryptHasher.js
export class BcryptService {
  constructor(bcrypt) {
    this.bcrypt = bcrypt;
  }

  compare = (raw, hash) => {
    return this.bcrypt.compare(raw, hash);
  };
}
