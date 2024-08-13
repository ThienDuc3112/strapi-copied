import { Attribute, AvailableType } from "@/interface/schema";

export const attributeToType = (attribute: Attribute): string => {
  const type = attribute.type;
  switch (type) {
    case "bigint":
    case "date":
    case "time":
    case "int":
    case "decimal":
    case "float":
    case "text":
      return type.toUpperCase();
    case "datetime":
      return "TIMESTAMP";
    case "string":
    case "enum":
      return "VARCHAR";
    case "component":
      return `INT REFERENCES ${(() => {
        const [category, name] = attribute.component.split(".");
        const tableName = `components_${category}_${name}`;
        return tableName + "(_id)";
      })()} ON DELETE CASCADE ON UPDATE CASCADE`;
  }
};
