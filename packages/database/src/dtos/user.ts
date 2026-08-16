import { USER_ROLES } from "@frugalfinances/constants";
import z from "zod";

const user = z.object({
  id: z.string(),
  username: z.string(),
  email: z.email(),
  password: z.string(),
  name: z.string(),
  role: z.enum(USER_ROLES).optional(),
  avatar: z.string().optional(),
  birthdate: z.date(),
});

export const UserValidator = user;
export type UserType = z.infer<typeof user>;
