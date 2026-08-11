import z from "zod";

const user = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  name: z.string().nullable(),
  avatar: z.string().nullable(),
});

export const UserValidator = user;
export type UserType = z.infer<typeof user>;
