/* eslint-disable no-undef */

import React from 'react';
import { render } from '@testing-library/react';
import ErrorDialog from '.';

describe('ErrorDialog', () => {
  it('renders', () => {
    const { container } = render(
      <ErrorDialog
        open
        title="Error"
        errorText="Something unexpected happened..."
        confirmLabel="Close"
        onClose={() => {}}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
