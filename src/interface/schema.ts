import { z } from "zod";

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

export const DefaultAttributeZod = z.object({
  type: z.enum([
    "string",
    "text",
    "int",
    "bigint",
    "decimal",
    "float",
    "date",
    "datetime",
    "time",
  ]),
  required: z.boolean(),
  unique: z.boolean(),
});

export interface EnumAttribute {
  type: "enum";
  required: boolean;
  unique: boolean;
  enum: string[];
}

export const EnumAttributeZod = z.object({
  type: z.enum(["enum"]),
  required: z.boolean(),
  unique: z.boolean(),
  enum: z.string().array(),
});

export interface ComponentAttribute {
  type: "component";
  component: string;
  repeatable: boolean;
  required: boolean;
}

export const ComponentAttributeZod = z.object({
  type: z.enum(["component"]),
  required: z.boolean(),
  component: z.string(),
  repeatable: z.boolean(),
});

export type Attribute = DefaultAttribute | EnumAttribute | ComponentAttribute;

export const AttributeZod = z.union([
  DefaultAttributeZod,
  EnumAttributeZod,
  ComponentAttributeZod,
]);

export type AvailableType = Attribute["type"];

export interface ComponentSchema {
  type: "component";
  attributes: Record<string, Attribute>;
  name: string;
  info: {
    displayName: string;
    description: string;
  };
}

export const ComponentZodSchema = z.object({
  type: z.enum(["component"]),
  attributes: z.record(z.string(), AttributeZod),
  name: z.string(),
  info: z.object({
    description: z.string(),
    displayName: z.string(),
  }),
});

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

export const TypeSchemaZod = z.object({
  type: z.enum(["singleType", "collections"]),
  attributes: z.record(z.string(), AttributeZod),
  name: z.string(),
  option: z.object({
    publsh: z.boolean(),
  }),
  info: z.object({
    displayName: z.string(),
    description: z.string(),
  }),
});
