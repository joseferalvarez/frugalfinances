import type { LoginUserDto, RegisterUserDto } from "#domain/dtos";
import type { User } from "#domain/entities";

export abstract class AuthRepository {
  abstract login(loginUserDto: LoginUserDto): Promise<User>;
  abstract register(registerUserDto: RegisterUserDto): Promise<User>;
}
