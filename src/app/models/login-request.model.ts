export class LoginRequest {
  public username: string;
  public password: string;


  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

export class LoginResponse {
  public access_token: string;
  public refresh_token: string;
  public expires_in: string;


  constructor(accessToken: string, refreshToken: string, expiresIn: string) {
    this.access_token = accessToken;
    this.refresh_token = refreshToken;
    this.expires_in = expiresIn;
  }
}

