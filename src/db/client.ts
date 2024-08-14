import { Pool } from "pg";

export const pool = new Pool({
  host: "localhost",
  port: 5678,
  user: "postgres",
  password: "password",
  database: "test",
});
