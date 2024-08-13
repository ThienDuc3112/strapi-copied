import sqlite from "sqlite3";
sqlite.verbose();

export const db = new sqlite.Database("./data.db", (err) => {
  if (err) console.error(err);
  else console.log("Connected to sqlite3 db");
});
