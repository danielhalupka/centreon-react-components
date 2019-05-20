import React from "react";
import JssProvider from 'react-jss/lib/JssProvider';


import {storiesOf} from "@storybook/react";

import PageHdModifiers from '../src/PageHdModifiers';


storiesOf("PageHdModifers", module)
.add("Host Discovery Modifiers", () => (
  <PageHdModifiers />
), {notes: "A very simple component"});
