import { IdGenerator } from "#config";
import type { AuthDatasource } from "#domain/datasources";
import type { RegisterUserDto, LoginUserDto } from "#domain/dtos";
import { User } from "#domain/entities";
import { CustomError } from "#domain/errors";
import { UserMapper } from "#infrastructure/mappers";
import { UserQueries } from "@frugalfinances/database";

type HashFunction = (password: string) => string;
type CompareFunction = (password: string, hash: string) => boolean;
type GenerateUUIDFunction = () => string;

export class AuthDatasourceImpl implements AuthDatasource {
  private readonly generateUUID: GenerateUUIDFunction;
  private readonly hashPassword: HashFunction;
  private readonly comparePassword: CompareFunction;
  private readonly userQueries: UserQueries;

  constructor(
    generateUUID: GenerateUUIDFunction,
    hashPassword: HashFunction,
    comparePassword: CompareFunction,
    userQueries: UserQueries,
  ) {
    this.generateUUID = generateUUID;
    this.hashPassword = hashPassword;
    this.comparePassword = comparePassword;
    this.userQueries = userQueries;
  }

  async login(loginUserDto: LoginUserDto): Promise<User> {
    const { username, password } = loginUserDto;

    try {
      const user = await this.userQueries.getUserByUsername(username);
      if (!user) throw CustomError.badRequest("Invalid credentials");

      const passwordMatch = this.comparePassword(password, user.password);

      if (!passwordMatch) throw CustomError.badRequest("Invalid credentials");

      return UserMapper.userEntityFromObject(user);
    } catch (e) {
      if (e instanceof CustomError) {
        throw e;
      }
      throw CustomError.internalServer();
    }
  }

  async register(registerUserDto: RegisterUserDto): Promise<{ status: 0 | 1; message: string }> {
    const { username, email, password, name, birthdate, avatar = undefined } = registerUserDto;

    try {
      const userByUsername = await this.userQueries.getUserByUsername(username);
      if (userByUsername) throw CustomError.badRequest("User already exists");

      const userByEmail = await this.userQueries.getUserByEmail(email);
      if (userByEmail) throw CustomError.badRequest("User already exists");

      const [status, message] = await this.userQueries.postUser({
        id: IdGenerator.generateUUID(),
        username,
        email,
        password,
        name,
        birthdate,
        ...(avatar && { avatar }),
      });

      return { status, message };
    } catch (e) {
      if (e instanceof CustomError) {
        throw e;
      }
      throw CustomError.internalServer();
    }
  }
}
