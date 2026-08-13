import { uuid, varchar, date, pgTable } from "drizzle-orm/pg-core";
import { userRoleEnum } from "./enums";

export const usersTable = pgTable("user", {
  id: uuid("id").primaryKey().unique().notNull(),
  username: varchar({ length: 100 }).unique().notNull(),
  email: varchar({ length: 254 }).unique().notNull(),
  password: varchar({ length: 255 }).notNull(),
  name: varchar({ length: 250 }).notNull(),
  role: userRoleEnum().notNull().default("user"),
  avatar: varchar({ length: 255 }),
  birthdate: date().notNull(),
});
