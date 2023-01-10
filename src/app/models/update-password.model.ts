export class UpdatePasswordModel {
  public new_password: string;
  public repeat_password: string;


  constructor(new_password: string, repeat_password: string) {
    this.new_password = new_password;
    this.repeat_password = repeat_password;
  }
}
