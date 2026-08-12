import { date, smallint, uuid, varchar, pgTable } from "drizzle-orm/pg-core";
import { spacesTable } from "./space";
import { invoiceEnum } from "./enums";

export const invoiceTable = pgTable("invoice", {
  id: uuid("id").primaryKey().unique().notNull(),
  space: uuid("space").references(() => spacesTable.id),
  category: invoiceEnum(),
  shop: varchar().notNull(),
  date: date(),
  total: smallint(),
  url: varchar(),
});
