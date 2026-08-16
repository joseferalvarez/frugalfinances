import type { RegisterUserDto } from "#domain/dtos";
import { CustomError } from "#domain/errors";
import type { AuthRepository } from "#domain/repositories";

type SignTokenCallback = (payload: Object, duration: number) => Promise<string | null>;

interface UserToken {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
}

interface RegisterUserUseCase {
  exec(registerUserDto: RegisterUserDto): Promise<UserToken>;
}

export class RegisterUser implements RegisterUserUseCase {
  private readonly authRepository: AuthRepository;
  private readonly signToken: SignTokenCallback;

  constructor(authRepository: AuthRepository, signToken: SignTokenCallback) {
    this.authRepository = authRepository;
    this.signToken = signToken;
  }

  async exec(registerUserDto: RegisterUserDto): Promise<UserToken> {
    const user = await this.authRepository.register(registerUserDto);
    const token = await this.signToken({ id: user.id }, 2);

    if (!token) throw CustomError.internalServer("Internal error");

    return {
      token: token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    };
  }
}
