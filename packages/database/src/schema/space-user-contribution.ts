import { pgTable, uuid } from "drizzle-orm/pg-core";
import { spaceUserTable } from "./space-user";
import { contributionEnum } from "./enums";

export const homeUserContributionTable = pgTable("space_user_contribution", {
  id: uuid("id").primaryKey().unique().notNull(),
  type: contributionEnum(),
  space_user: uuid("space_user").references(() => spaceUserTable.id),
});
