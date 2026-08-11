export const INVOICE_TYPES = [
  "groceries",
  "restaurants",
  "shopping",
  "supplies",
  "transportation",
  "entertainment",
  "travel",
  "health",
  "services",
  "other",
] as const;

export type InvoiceType = (typeof INVOICE_TYPES)[number];
