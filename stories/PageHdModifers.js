import React from "react";
import { storiesOf } from "@storybook/react";

import jobsMock from "../src/PageHdModifiers/jobsMock";
import PageHdModifiers from "../src/PageHdModifiers";

storiesOf("PageHdModifers", module).add(
  "Host Discovery Modifiers",
  () => <PageHdModifiers jobs={jobsMock} />,
  { notes: "A very simple component" }
);
