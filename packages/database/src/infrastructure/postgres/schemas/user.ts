import { date, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: uuid("id").primaryKey().unique().notNull(),
  username: varchar({ length: 100 }).unique().notNull(),
  email: varchar({ length: 254 }).unique().notNull(),
  password: varchar({ length: 255 }).notNull(),
  name: varchar({ length: 250 }),
  avatar: varchar({ length: 255 }),
  birthdate: date(),
});
