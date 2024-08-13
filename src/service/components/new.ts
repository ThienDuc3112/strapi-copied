import { db } from "@/db/client";
import { attributeToType } from "@/helpers/attributeToType";
import { camelToSnakeCase } from "@/helpers/camelToSnakeCase";
import { ComponentSchema } from "@/interface/schema";

export const createComponentTable = (
  component: ComponentSchema,
  category: string
) => {
  const query = `CREATE TABLE IF NOT EXISTS components_${category}_${
    component.name
  } (\n_id SERIAL PRIMARY KEY${Object.keys(component.attributes)
    .map((key) => {
      const attribute = component.attributes[key];
      return `,\n${camelToSnakeCase(key)} ${attributeToType(attribute)}${
        attribute.required ? " NOT NULL" : ""
      }`;
    })
    .join("")}\n)`;
  console.log(query);
};
