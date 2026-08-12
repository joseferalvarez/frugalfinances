import { uuid, varchar, pgEnum, pgTable } from "drizzle-orm/pg-core";
import { spacesTable } from "./space";
import { tokenEnum } from "./enums";

export const tokenTable = pgTable("token", {
  id: uuid("id").primaryKey().unique().notNull(),
  space: uuid("space").references(() => spacesTable.id),
  category: tokenEnum(),
  token: varchar().notNull(),
});
