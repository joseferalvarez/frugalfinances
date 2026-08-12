import { INVOICE_TYPES, SPACE_ROLES, SPACE_TYPES, TOKEN_TYPE, USER_ROLES } from "@frugalfinances/constants";
import { pgEnum } from "drizzle-orm/pg-core";

export const invoiceEnum = pgEnum("invoice_type", INVOICE_TYPES);
export const contributionEnum = pgEnum("contribution_type", INVOICE_TYPES);
export const spaceEnum = pgEnum("space_type", SPACE_TYPES);
export const tokenEnum = pgEnum("token_type", TOKEN_TYPE);
export const userRoleEnum = pgEnum("user_role", USER_ROLES);
export const userSpaceRoleEnum = pgEnum("user_space_role", SPACE_ROLES);
