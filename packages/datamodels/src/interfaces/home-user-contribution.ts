import z from "zod";

const homeUserContribution = z.object({
  id: z.string(),
  type: z.string(),
  homeUser: z.string(),
});

export const HomeUserContributionValidator = homeUserContribution;
export type HomeUserContributionType = z.infer<typeof homeUserContribution>;
