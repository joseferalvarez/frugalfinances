import z from "zod";

const spaceUser = z.object({
  id: z.string(),
  home: z.string(),
  user: z.string(),
});

export const SpaceUserValidator = spaceUser;
export type SpaceUserType = z.infer<typeof spaceUser>;
