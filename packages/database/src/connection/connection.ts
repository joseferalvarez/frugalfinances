import { BunSQLDatabase, drizzle } from "drizzle-orm/bun-sql/postgres";

export class PostgresConnection {
  private readonly uri: string;
  private readonly db: BunSQLDatabase;

  constructor(uri: string) {
    this.uri = uri;
    this.db = drizzle(this.uri);
  }

  public getDb() {
    return this.db;
  }
}
