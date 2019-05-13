import React from "react";
import { storiesOf } from "@storybook/react";
import { Sidebar } from "../src";
import mock from '../src/Sidebar/navigationMock';

storiesOf("Sidebar", module).add(
  "Sidebar",
  () => (
    <Sidebar navigationData={mock}/>
  ),
  { notes: "A very simple component" }
);