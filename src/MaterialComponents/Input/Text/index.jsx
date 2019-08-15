import React from 'react';

import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

const Field = styled(Paper)(() => ({
  paddingLeft: 15,
  paddingRight: 15,
}));

const InputText = ({ placeholder, onChange }) => {
  return (
    <Field>
      <InputBase placeholder={placeholder} onChange={onChange} />
    </Field>
  );
};

export default InputText;
