import { uuid, varchar, pgTable } from "drizzle-orm/pg-core";
import { spaceEnum } from "./enums";

export const spacesTable = pgTable("space", {
  id: uuid("id").primaryKey().unique().notNull(),
  name: varchar({ length: 250 }).notNull(),
  type: spaceEnum(),
});
