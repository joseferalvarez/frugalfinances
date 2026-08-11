import z from "zod";

const token = z.object({
  id: z.string(),
  home: z.string(),
  category: z.enum(["telegram", "openai"]),
  token: z.string(),
});

export const TokenValidator = token;
export type TokenType = z.infer<typeof token>;
