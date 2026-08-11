import z from "zod";

const invoice = z.object({
  id: z.string(),
  category: z.string(),
  shop: z.string(),
  date: z.date(),
  total: z.number(),
  url: z.number(),
});

export const InvoiceValidator = invoice;
export type InvoiceType = z.infer<typeof invoice>;
