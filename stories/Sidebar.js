import React from "react";
import { storiesOf } from "@storybook/react";
import { Sidebar } from "../src";
import mock from '../src/Sidebar/mock2';
import reactMock from '../src/Sidebar/reactRoutesMock';

storiesOf("Sidebar", module).add(
  "Sidebar",
  () => (
    <Sidebar navigationData={mock} reactRoutes={reactMock}/>
  ),
  { notes: "A very simple component" }
);