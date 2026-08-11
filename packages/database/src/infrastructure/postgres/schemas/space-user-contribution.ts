import { pgEnum, pgTable, uuid } from "drizzle-orm/pg-core";
import { spaceUserTable } from "./space-user";

// TODO: Create a unique enum called "invoice-types"
const contributionTypes = pgEnum("contribution-type", [
  "groceries",
  "light",
  "water",
  "fuel",
]);

export const homeUserContributionTable = pgTable("space-user-contributions", {
  id: uuid("id").primaryKey().unique().notNull(),
  type: contributionTypes(),
  space_user: uuid("home_user").references(() => spaceUserTable.id),
});
