import { PostgresConnection, usersTable } from "@frugalfinances/database";
import { uuidv7 } from "uuidv7";

const main = async () => {
  const client = new PostgresConnection(process.env.DATABASE_URL || "");
  const db = client.getDb();
  await db.insert(usersTable).values({
    id: uuidv7(),
    username: "josefernando",
    email: "joseferalvarezr@gmail.com",
    name: "Jose Fernando Alvarez Romero",
    password: "passdeprueba",
  });
};

(() => {
  main();
})();
