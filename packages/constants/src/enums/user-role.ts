export const USER_ROLES = ["admin", "user"] as const;
export type UserRoleType = (typeof USER_ROLES)[number];
