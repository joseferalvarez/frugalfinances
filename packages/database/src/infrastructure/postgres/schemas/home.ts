import { varchar } from "drizzle-orm/cockroach-core";
import { pgTable, uuid } from "drizzle-orm/pg-core";

export const homesTable = pgTable("homes", {
  id: uuid("id").primaryKey().unique().notNull(),
  name: varchar({ length: 250 }).notNull(),
});
