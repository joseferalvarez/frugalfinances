import type { LoginUserDto } from "#domain/dtos";
import { CustomError } from "#domain/errors";
import type { AuthRepository } from "#domain/repositories";

type SignTokenCallback = (payload: Object, duration: number) => Promise<string | null>;

interface UserData {
  token: string;
  user: {
    username: string;
    email: string;
    avatar?: string;
  };
}

interface LoginUserUseCase {
  exec(loginUserDto: LoginUserDto): Promise<UserData>;
}

export class LoginUser implements LoginUserUseCase {
  private readonly authRepository: AuthRepository;
  private readonly signToken: SignTokenCallback;

  constructor(authRepository: AuthRepository, signToken: SignTokenCallback) {
    this.authRepository = authRepository;
    this.signToken = signToken;
  }

  async exec(loginUserDto: LoginUserDto): Promise<UserData> {
    const user = await this.authRepository.login(loginUserDto);
    const token = await this.signToken({ id: user.id }, 2);

    if (!token) throw CustomError.internalServer("Internal error");

    return {
      token: token,
      user: {
        username: user.username,
        email: user.email,
        ...(user.avatar && { avatar: user.avatar }),
      },
    };
  }
}
