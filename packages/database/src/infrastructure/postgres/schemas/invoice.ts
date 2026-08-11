import { date, smallint, uuid, varchar, pgTable } from "drizzle-orm/pg-core";

export const invoiceTable = pgTable("invoices", {
  id: uuid("id").primaryKey().unique().notNull(),
  category: varchar(),
  shop: varchar().notNull(),
  date: date(),
  total: smallint(),
  url: varchar(),
});
