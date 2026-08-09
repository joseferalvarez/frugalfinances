import { uuid, varchar } from "drizzle-orm/cockroach-core";
import { pgTable, smallint } from "drizzle-orm/pg-core";
import { invoiceTable } from "./invoice";

export const invoiceProductTable = pgTable("invoice-products", {
  id: uuid("id").primaryKey().unique().notNull(),
  invoice: uuid("id").references(() => invoiceTable.id),
  product: varchar(),
  type: varchar(),
  units: smallint(),
  price_per_unit: smallint(),
  price: smallint(),
});
