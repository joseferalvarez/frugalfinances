import { uuid, varchar, pgTable, pgEnum } from "drizzle-orm/pg-core";

const spacesTypes = pgEnum("spaces-types", ["home", "personal"]);

export const spacesTable = pgTable("spaces", {
  id: uuid("id").primaryKey().unique().notNull(),
  name: varchar({ length: 250 }).notNull(),
  type: spacesTypes(),
});
