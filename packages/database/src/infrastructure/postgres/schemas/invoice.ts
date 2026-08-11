import { date, smallint, uuid, varchar, pgTable, pgEnum } from "drizzle-orm/pg-core";
import { INVOICE_TYPES } from "@frugalfinances/constants";

const invoiceTypes = pgEnum("invoice-types", INVOICE_TYPES);

export const invoiceTable = pgTable("invoices", {
  id: uuid("id").primaryKey().unique().notNull(),
  category: invoiceTypes(),
  shop: varchar().notNull(),
  date: date(),
  total: smallint(),
  url: varchar(),
});
