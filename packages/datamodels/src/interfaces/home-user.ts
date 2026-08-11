import z from "zod";

const homeUser = z.object({
  id: z.string(),
  home: z.string(),
  user: z.string(),
});

export const HomeUserValidator = homeUser;
export type HomeUserType = z.infer<typeof homeUser>;
