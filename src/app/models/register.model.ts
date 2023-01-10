export class RegisterRequest {
  public username: string;
  public password: string;
  public repeat_password: string
  public name: string
  public last_name: string
  public email: string


  constructor(username: string, password: string, repeat_password: string, name: string, last_name: string, email: string) {
    this.username = username;
    this.password = password;
    this.repeat_password = repeat_password;
    this.name = name;
    this.last_name = last_name;
    this.email = email;
  }
}

export class MessageResponse {
  public message: string;

  constructor(message: string) {
    this.message = message;
  }
}

