export class LoginUserDto {
  public username: string;
  public password: string;

  private constructor({ username, password }: LoginUserDto) {
    this.username = username;
    this.password = password;
  }

  static create(object: { [key: string]: any }): [string?, LoginUserDto?] {
    const { username, password } = object;

    if (!username) return ["Missing username", undefined];
    if (!password) return ["Missing password", undefined];

    return [undefined, new LoginUserDto({ username, password })];
  }
}
