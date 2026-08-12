import { uuid, varchar, pgEnum, pgTable } from "drizzle-orm/pg-core";
import { spacesTable } from "./space";

const categories = pgEnum("categories", ["telegram", "openai"]);

export const tokenTable = pgTable("tokens", {
  id: uuid("id").primaryKey().unique().notNull(),
  space: uuid("space").references(() => spacesTable.id),
  category: categories(),
  token: varchar().notNull(),
});
