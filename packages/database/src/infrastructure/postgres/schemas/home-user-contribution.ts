import { pgEnum, pgTable, uuid } from "drizzle-orm/pg-core";
import { homeUserTable } from "./home-user";

// TODO: Create a unique enum called "invoice-types"
const contributionTypes = pgEnum("contribution-type", [
  "groceries",
  "light",
  "water",
  "fuel",
]);

export const homeUserContributionTable = pgTable("home-user-contributions", {
  id: uuid("id").primaryKey().unique().notNull(),
  type: contributionTypes(),
  home_user: uuid("home_user").references(() => homeUserTable.id),
});
