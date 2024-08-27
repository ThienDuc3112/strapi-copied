export interface ComponentSchema {
  type: "component";
  attributes: Record<string, Attribute>;
  name: string;
  info: {
    displayName: string;
    description: string;
  };
}

export interface TypeSchema {
  type: "singleType" | "collections";
  attributes: Record<string, Attribute>;
  name: string;
  option: {
    publish: boolean;
  };
  info: {
    displayName: string;
    description: string;
  };
}

export type AvailableType = Attribute["type"];

export type Attribute = DefaultAttribute | EnumAttribute | ComponentAttribute;

export interface DefaultAttribute {
  type:
    | "string"
    | "text"
    | "int"
    | "bigint"
    | "decimal"
    | "float"
    | "date"
    | "datetime"
    | "time";
  required: boolean;
  unique: boolean;
}

export interface EnumAttribute {
  type: "enum";
  required: boolean;
  unique: boolean;
  enum: string[];
}

export interface ComponentAttribute {
  type: "component";
  component: string;
  repeatable: boolean;
  required: boolean;
}
