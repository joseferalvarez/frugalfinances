import z from "zod";

const space = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
});

export const SpaceValidator = space;
export type SpaceType = z.infer<typeof space>;
