/* eslint-disable no-alert */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { ErrorDialog, PromptDialog } from '../src';

storiesOf('Dialog', module)
  .add('Error', () => (
    <ErrorDialog
      open
      title="Error"
      text="Something unexpected happened..."
      confirmLabel="Close"
      onClose={() => alert("I've been closed")}
    />
  ))
  .add('Prompt', () => (
    <PromptDialog active title="Prompt" info="Please enter a number" />
  ));
