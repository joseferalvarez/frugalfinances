import { AuthDatasource } from "#domain/datasources";
import { IdGenerator } from "#config";
import type { LoginUserDto, RegisterUserDto } from "#domain/dtos";
import { User } from "#domain/entities";

// TODO: CREATE THE SUPABASE DATASOURCE

export class AuthDatasourceImpl implements AuthDatasource {
  async login(loginUserDto: LoginUserDto): Promise<User> {
    console.log("login");
    return new User({
      id: IdGenerator.generateUUID(),
      email: "test@test.com",
      username: "test",
      password: "test",
      name: "test test",
      role: "user",
      birthdate: new Date(),
    });
  }
  async register(registerUserDto: RegisterUserDto): Promise<User> {
    console.log("register");
    return new User({
      id: IdGenerator.generateUUID(),
      email: "test@test.com",
      username: "test",
      password: "test",
      name: "test test",
      role: "user",
      birthdate: new Date(),
    });
  }
}
