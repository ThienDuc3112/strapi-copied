export interface ComponentSchema {
  type: "component";
  attributes: Attribute[];
  tableName: string;
  info: {
    displayName: string;
    description: string;
  };
}

export interface TypeSchema {
  type: "singleType" | "collections";
  attributes: Attribute[];
  tableName: string;
  option: {
    publish: boolean;
  };
  info: {
    displayName: string;
    description: string;
  };
}
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
