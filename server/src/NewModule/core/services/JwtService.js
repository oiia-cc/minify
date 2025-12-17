// newmodule/infra/JwtService.js
export class JwtService {
  constructor(jwt, configApp) {
    this.jwt = jwt;
    this.secret = configApp.app.jwtSecret;
    this.expiresIn = configApp.app.jwtLifetime;
  }

  sign = (payload) => {
    return this.jwt.sign(payload, this.secret, {
      expiresIn: this.expiresIn,
    });
  };
}
