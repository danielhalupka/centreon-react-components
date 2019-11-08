import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Alert from './Alert';

describe('Alert', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(
      <Alert
        open
        labelTitle="title"
        labelMessage="message"
        labelCancel="cancel"
        labelConfirm="confirm"
        onCancel={jest.fn()}
        onConfirm={jest.fn()}
      />,
    );

    expect(getByText('title')).toBeInTheDocument();
    expect(getByText('message')).toBeInTheDocument();
    expect(getByText('cancel')).toBeInTheDocument();
    expect(getByText('confirm')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('confirms', () => {
    const mockConfirm = jest.fn();

    const { getByText } = render(
      <Alert
        open
        labelTitle="title"
        labelMessage="message"
        labelCancel="cancel"
        labelConfirm="confirm"
        onCancel={jest.fn()}
        onConfirm={mockConfirm}
      />,
    );

    fireEvent.click(getByText('confirm').parentNode);

    expect(mockConfirm).toBeCalled();
  });

  it('cancels', () => {
    const mockCancel = jest.fn();

    const { getByText } = render(
      <Alert
        open
        labelTitle="title"
        labelMessage="message"
        labelCancel="cancel"
        labelConfirm="confirm"
        onCancel={mockCancel}
        onConfirm={jest.fn()}
      />,
    );

    fireEvent.click(getByText('cancel').parentNode);

    expect(mockCancel).toBeCalled();
  });
});
