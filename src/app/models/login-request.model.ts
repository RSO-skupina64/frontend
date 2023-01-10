export class LoginRequest {
  public username: string;
  public password: string;


  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

export class LoginResponse {
  public accessToken: string;
  public refreshToken: string;
  public expiresIn: string;


  constructor(accessToken: string, refreshToken: string, expiresIn: string) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.expiresIn = expiresIn;
  }
}

