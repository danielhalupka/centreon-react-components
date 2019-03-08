import React from "react";
import { storiesOf } from "@storybook/react";
import { ListSortable } from "../src";

storiesOf("List", module).add(
  
  "List - sortable",
  () => 
  <ListSortable />,
  { notes: "A very simple component" }
);