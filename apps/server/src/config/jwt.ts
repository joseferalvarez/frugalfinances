import jwt from "jsonwebtoken";
import { envs } from "#config";

const secret = envs.JWT_SECRET_KEY;

export class JwtAdapter {
  static async generateToken(payload: Object, duration: number = 2): Promise<string | null> {
    return new Promise((resolve) => {
      jwt.sign(payload, secret, { expiresIn: `${duration}h` }, (err, token) => {
        if (err) {
          console.log(err);
          return resolve(null);
        }
        resolve(token!);
      });
    });
  }

  static async validateToken<T>(token: string): Promise<T | null> {
    return new Promise((resolve) => {
      jwt.verify(token, secret, (err, payload) => {
        if (err) {
          console.log(err);
          return resolve(null);
        }
        resolve(payload as T);
      });
    });
  }
}
