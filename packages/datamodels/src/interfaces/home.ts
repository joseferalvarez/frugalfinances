import z from "zod";

const home = z.object({
  id: z.string(),
  name: z.string(),
});

export const HomeValidator = home;
export type HomeType = z.infer<typeof home>;
