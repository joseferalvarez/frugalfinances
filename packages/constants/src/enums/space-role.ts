export const SPACE_ROLES = ["owner", "admin", "member"] as const;
export type SpaceRoleType = (typeof SPACE_ROLES)[number];
