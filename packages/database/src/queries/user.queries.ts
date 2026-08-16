import type { BunSQLDatabase } from "drizzle-orm/bun-sql/postgres";
import type { PostgresConnection } from "../connection/connection";
import { users, userSelectSchema } from "../schema/user";
import { eq } from "drizzle-orm";
import { UserValidator, type UserType } from "../dtos/user";

export class UserQueries {
  private readonly client: PostgresConnection;
  private readonly db: BunSQLDatabase;

  constructor(client: PostgresConnection) {
    this.client = client;
    this.db = this.client.getDb();
  }

  async getUserByUsername(username: string) {
    const rows = await this.db.select().from(users).where(eq(users.username, username)).limit(1);
    const user = userSelectSchema.parse(rows[0]);
    if (!user) return null;
    return user;
  }

  async getUserByEmail(email: string) {
    const rows = await this.db.select().from(users).where(eq(users.email, email)).limit(1);
    const user = userSelectSchema.parse(rows[0]);
    if (!user) return null;
    return user;
  }

  async postUser(user: UserType): Promise<[status: 0 | 1, message: string]> {
    const validUser = UserValidator.safeParse(user);
    if (!validUser.success) return [0, "User is not valid"];

    try {
      await this.db.insert(users).values({
        id: validUser.data.id,
        username: validUser.data.username,
        email: validUser.data.email,
        name: validUser.data.name,
        password: validUser.data.password,
        birthdate: validUser.data.birthdate.toISOString(),
        ...(validUser.data.avatar && { avatar: validUser.data.avatar }),
        ...(validUser.data.role && { role: validUser.data.role }),
      });
      return [1, "New user created"];
    } catch (e) {
      return [0, `Error creating a new user: ${e}`];
    }
  }
}
