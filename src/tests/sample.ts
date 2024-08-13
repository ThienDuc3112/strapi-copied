import { createComponentTable } from "@/service/components/new";
import { ComponentSchema } from "../interface/schema";

export const sampleComponent: ComponentSchema = {
  info: {
    displayName: "Sample Component",
    description: "This is a sample component",
  },
  name: "sample_component",
  type: "component",
  attributes: {
    sampleText: { type: "string", required: true, unique: true },
    sampleDescription: { type: "string", required: false, unique: false },
    sampleComponent: {
      type: "component",
      required: false,
      repeatable: false,
      component: "sample.other_sample_component",
    },
  },
};

createComponentTable(sampleComponent, "sample");
