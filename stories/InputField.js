import React from "react";
import { storiesOf } from "@storybook/react";
import { InputField, InputFieldSelect, InputFieldTextarea } from "../src";

storiesOf("Input Field", module).add(
  
  "Input Field - with title",
  () => 
  <InputField type="text" label="Input field with title" name="test" inputSize="small" />,
  { notes: "A very simple component" }
);

storiesOf("Input Field", module).add(
  
  "Input Field - without title",
  () => 
  <InputField type="text" name="test" inputSize="small" />,
  { notes: "A very simple component" }
);

storiesOf("Input Field", module).add(
  
  "Input Field - without title",
  () => 
  <InputField type="text" name="test" inputSize="small" />,
  { notes: "A very simple component" }
);

storiesOf("Input Field", module).add(
  
  "Input Field error - without title",
  () => 
  <InputField type="text" name="test" error="The field is mandatory" inputSize="small" />,
  { notes: "A very simple component" }
);

storiesOf("Input Field", module).add(
  
  "Input Field - select",
  () => 
  <InputFieldSelect />,
  { notes: "A very simple component" }
);

storiesOf("Input Field", module).add(
  
  "Input Field - textarea",
  () => 
  <InputFieldTextarea textareaType="small" label="Textarea field label" />,
  { notes: "A very simple component" }
);