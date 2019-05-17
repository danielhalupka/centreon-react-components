import React from "react";
import { storiesOf } from "@storybook/react";
import { FormDynamic } from "../src";



storiesOf("Form dynamic", module)
  .add("Form dynamic", () => 
  <FormDynamic/>
  , {
  notes: "A very simple component"
});
