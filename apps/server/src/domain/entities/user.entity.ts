import type { UserRoleType } from "@frugalfinances/constants";

export class User {
  public readonly id: string;
  public readonly username: string;
  public readonly email: string;
  public readonly password: string;
  public readonly name: string;
  public readonly role: UserRoleType;
  public readonly avatar?: string;
  public readonly birthdate: Date;

  constructor({ id, username, email, password, name, role, avatar, birthdate }: User) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.name = name;
    this.role = role;
    this.avatar = avatar;
    this.birthdate = birthdate;
  }
}
