export const TOKEN_TYPE = ["telegram", "openai"] as const;
export type tokenType = (typeof TOKEN_TYPE)[number];
