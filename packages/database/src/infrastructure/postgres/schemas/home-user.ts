import { pgTable, uuid } from "drizzle-orm/pg-core";
import { homesTable } from "./home";
import { usersTable } from "./user";

export const homeUserTable = pgTable("home-users", {
  id: uuid("id").primaryKey().unique().notNull(),
  home: uuid("home")
    .references(() => homesTable.id)
    .notNull(),
  user: uuid("user").references(() => usersTable.id),
});
