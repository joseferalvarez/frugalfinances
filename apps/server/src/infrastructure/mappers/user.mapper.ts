import { CustomError } from "#domain/errors";
import { User } from "#domain/entities";

export class UserMapper {
  static userEntityFromObject(object: { [key: string]: any }) {
    const { _id, username, email, password, name, role, avatar, birthdate } = object;

    if (!_id) throw CustomError.badRequest("Missing id");
    if (!username) throw CustomError.badRequest("Missing username");
    if (!email) throw CustomError.badRequest("Missing email");
    if (!password) throw CustomError.badRequest("Missing password");

    return new User({ id: _id, username, email, password, name, role, avatar, birthdate });
  }
}
