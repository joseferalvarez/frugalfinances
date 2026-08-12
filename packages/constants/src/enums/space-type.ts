export const SPACE_TYPES = ["home", "personal"] as const;
export type SpaceType = (typeof SPACE_TYPES)[number];
