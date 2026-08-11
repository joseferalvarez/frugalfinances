import { uuid, varchar, pgEnum, pgTable } from "drizzle-orm/pg-core";
import { homesTable } from "./space";

const categories = pgEnum("categories", ["telegram", "openai"]);

export const tokenTable = pgTable("tokens", {
  id: uuid("id").primaryKey().unique().notNull(),
  home: uuid("home").references(() => homesTable.id),
  category: categories(),
  token: varchar().notNull(),
});
