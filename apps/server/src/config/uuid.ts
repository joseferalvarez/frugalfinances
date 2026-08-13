import { uuidv7 } from "uuidv7";

export class IdGenerator {
  static generateUUID(): string {
    return uuidv7();
  }
}
