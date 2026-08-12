import { uuid, varchar, pgTable, smallint } from "drizzle-orm/pg-core";
import { invoiceTable } from "./invoice";

export const invoiceProductTable = pgTable("invoice_product", {
  id: uuid("id").primaryKey().unique().notNull(),
  invoice: uuid("invoice").references(() => invoiceTable.id),
  product: varchar(),
  type: varchar(),
  units: smallint(),
  price_per_unit: smallint(),
  price: smallint(),
});
