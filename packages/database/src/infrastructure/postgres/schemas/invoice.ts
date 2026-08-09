import { date, smallint, uuid, varchar } from "drizzle-orm/cockroach-core";
import { pgTable } from "drizzle-orm/pg-core";

export const invoiceTable = pgTable("invoices", {
  id: uuid("id").primaryKey().unique().notNull(),
  category: varchar(),
  shop: varchar().notNull(),
  date: date(),
  total: smallint(),
  url: varchar(),
});
