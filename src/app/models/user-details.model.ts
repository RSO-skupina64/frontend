export class UserDetailsResponse {
  public email: string;
  public name: string;
  public last_name: string;
  public username: string;

  constructor(email: string, name: string, last_name: string, username: string) {
    this.email = email;
    this.name = name;
    this.last_name = last_name;
    this.username = username;
  }
}
