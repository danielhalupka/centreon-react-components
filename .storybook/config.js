import { configure, addDecorator } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";
import {withThemesProvider} from 'storybook-addon-jss-theme';


addDecorator(withNotes);

function loadStories() {
  require("../stories/index.js");
}

configure(loadStories, module);

const themes = [theme1, theme2];
addDecorator(withThemesProvider(themes));