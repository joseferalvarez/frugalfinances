import { pgTable, uuid } from "drizzle-orm/pg-core";
import { spacesTable } from "./space";
import { usersTable } from "./user";
import { userSpaceRoleEnum } from "./enums";

export const spaceUserTable = pgTable("space_user", {
  id: uuid("id").primaryKey().unique().notNull(),
  space: uuid("space")
    .references(() => spacesTable.id)
    .notNull(),
  user: uuid("user").references(() => usersTable.id),
  role: userSpaceRoleEnum().notNull().default("member"),
});
