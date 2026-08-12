export const SPACE_TYPE = ["home", "personal"] as const;
export type SpaceType = (typeof SPACE_TYPE)[number];
