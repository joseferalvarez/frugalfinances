export class CustomError extends Error {
  public readonly statusCode: number;
  public override readonly message: string;

  constructor(statusCode: string, message: string) {
    super(message);

    this.statusCode = Number.parseInt(statusCode);
    this.message = message;
  }

  static badRequest(message: string) {
    return new CustomError("400", message);
  }

  static unauthorized(message: string) {
    return new CustomError("401", message);
  }

  static forbidden(message: string) {
    return new CustomError("403", message);
  }

  static notFound(message: string) {
    return new CustomError("404", message);
  }

  static internalServer(message: string = "Internal server error") {
    return new CustomError("500", message);
  }
}
