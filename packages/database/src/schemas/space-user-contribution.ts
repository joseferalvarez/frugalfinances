import { pgEnum, pgTable, uuid } from "drizzle-orm/pg-core";
import { spaceUserTable } from "./space-user";
import { INVOICE_TYPES } from "@frugalfinances/constants";

const contributionTypes = pgEnum("contribution-type", INVOICE_TYPES);

export const homeUserContributionTable = pgTable("space-user-contributions", {
  id: uuid("id").primaryKey().unique().notNull(),
  type: contributionTypes(),
  space_user: uuid("home_user").references(() => spaceUserTable.id),
});
