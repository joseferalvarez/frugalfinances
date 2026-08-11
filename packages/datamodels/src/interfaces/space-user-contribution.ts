import z from "zod";

const spaceUserContribution = z.object({
  id: z.string(),
  type: z.string(),
  spaceUser: z.string(),
});

export const SpaceUserContributionValidator = spaceUserContribution;
export type SpaceUserContributionType = z.infer<typeof spaceUserContribution>;
