import { pool } from "@/db/client";
import { attributeToType } from "@/helpers/attributeToType";
import { camelToSnakeCase } from "@/helpers/camelToSnakeCase";
import { ComponentSchema } from "@/interface/schema";
import { writeFile, mkdir } from "fs";
import { join } from "path";

export const createComponentTable = async (
  component: ComponentSchema,
  category: string
) => {
  const tableName = `components_${category}_${component.name}`;
  const query = `CREATE TABLE IF NOT EXISTS ${tableName} (\n_id SERIAL PRIMARY KEY${Object.keys(
    component.attributes
  )
    .map((key) => {
      const attribute = component.attributes[key];
      return `,\n${camelToSnakeCase(key)} ${attributeToType(attribute)}${
        attribute.required ? " NOT NULL" : ""
      }`;
    })
    .join("")}\n)`;
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    console.log(await client.query(query));

    await client.query("COMMIT");
    console.log(tableName + " created!");
  } catch (error) {
    client.query("ROLLBACK");
    throw error;
  }
};

export const writeComponentSchema = async (
  schema: ComponentSchema,
  category: string
) => {
  if (!/^[a-zA-Z\s]$/.test(category) === false) throw Error("Invalid category");

  const dir = join(
    __dirname,
    "..",
    "..",
    "..",
    "generated",
    "components",
    category
  );
  mkdir(dir, { recursive: true }, (err) => {
    if (err) throw err;
  });

  writeFile(
    join(dir, `${schema.name}.json`),
    JSON.stringify(schema, null, 2),
    (err) => {
      if (err) throw err;
      console.log("Schema updated");
    }
  );
};
