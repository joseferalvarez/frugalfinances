import { pgTable, uuid } from "drizzle-orm/pg-core";
import { spacesTable } from "./space";
import { usersTable } from "./user";

export const spaceUserTable = pgTable("space-users", {
  id: uuid("id").primaryKey().unique().notNull(),
  space: uuid("space")
    .references(() => spacesTable.id)
    .notNull(),
  user: uuid("user").references(() => usersTable.id),
});
