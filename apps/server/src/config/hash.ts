import { hash, verify } from "argon2";

export class HashAdapter {
  static async hashPassword(password: string): Promise<string> {
    try {
      return await hash(password);
    } catch (e) {
      throw new Error(`Error hashing the pasword: ${e}`);
    }
  }

  static async verifyPassword(password: string, hash: string): Promise<boolean> {
    try {
      return await verify(hash, password);
    } catch (e) {
      throw new Error(`Error verifying the password: ${e}`);
    }
  }
}
