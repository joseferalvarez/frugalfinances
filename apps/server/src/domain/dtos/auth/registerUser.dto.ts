import { Validators } from "#config";

export class RegisterUserDto {
  public username: string;
  public email: string;
  public password: string;
  public name: string;
  public avatar?: string;
  public birthdate: Date;

  private constructor({ username, email, password, name, avatar, birthdate }: RegisterUserDto) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.name = name;
    this.avatar = avatar;
    this.birthdate = birthdate;
  }

  static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {
    const { username, email, password, name, avatar = undefined, birthdate } = object;

    if (!username) return ["Missing username", undefined];
    if (!Validators.isValidUsername) return ["Invalid username", undefined];

    if (!email) return ["Missing email", undefined];
    if (!Validators.isValidEmail(email)) return ["Invalid email", undefined];

    if (!password) return ["Missing password", undefined];
    if (!Validators.isValidPassword(password)) return ["Invalid password", undefined];

    if (!name) return ["Missing name", undefined];

    if (!birthdate) return ["Missing birthdate"];

    return [
      undefined,
      new RegisterUserDto({ username, email: email.toLowerCase(), password, name, avatar, birthdate }),
    ];
  }
}
