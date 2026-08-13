import type { LoginUserDto, RegisterUserDto } from "#domain/dtos";
import { User } from "#domain/entities";
import { AuthRepository } from "#domain/repositories";
import { AuthDatasource } from "#domain/datasources";

export class AuthRepositoryImpl implements AuthRepository {
  private readonly authDatasource: AuthDatasource;

  constructor(authDatasource: AuthDatasource) {
    this.authDatasource = authDatasource;
  }

  async login(loginUserDto: LoginUserDto): Promise<User> {
    return this.authDatasource.login(loginUserDto);
  }
  async register(registerUserDto: RegisterUserDto): Promise<User> {
    return this.authDatasource.register(registerUserDto);
  }
}
