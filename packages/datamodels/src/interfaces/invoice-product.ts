import z from "zod";

const invoiceProduct = z.object({
  id: z.string(),
  invoice: z.string(),
  product: z.string(),
  type: z.string(),
  units: z.number(),
  pricePerUnit: z.number(),
  price: z.number(),
});

export const InvoiceProductValidator = invoiceProduct;
export type InvoiceProductType = z.infer<typeof invoiceProduct>;
