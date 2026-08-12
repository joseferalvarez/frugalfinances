import { date, smallint, uuid, varchar, pgTable, pgEnum } from "drizzle-orm/pg-core";
import { INVOICE_TYPES } from "@frugalfinances/constants";
import { spacesTable } from "./space";

const invoiceTypes = pgEnum("invoice-types", INVOICE_TYPES);

export const invoiceTable = pgTable("invoices", {
  id: uuid("id").primaryKey().unique().notNull(),
  space: uuid("space").references(() => spacesTable.id),
  category: invoiceTypes(),
  shop: varchar().notNull(),
  date: date(),
  total: smallint(),
  url: varchar(),
});
