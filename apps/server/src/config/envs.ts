import env from "env-var";

export const envs = {
  PORT: env.get("PORT").required().asPortNumber(),
  JWT_SECRET_KEY: env.get("JWT_SECRET_KEY").required().asString(),
  DATABASE_URL: env.get("DATABASE_URL").required().asUrlString(),
};
