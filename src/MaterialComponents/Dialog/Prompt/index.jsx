import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

import PropTypes from 'prop-types';
import Dialog from '..';

function PromptDialog({ onYesClicked, ...rest }) {
  const [value, setValue] = useState(1);

  const confirm = () => {
    onYesClicked(value);
  };

  const changeValue = ({ target }) => {
    setValue(target.value);
  };

  return (
    <div>
      <Dialog onYesClicked={confirm} {...rest}>
        <TextField
          autoFocus
          onChange={changeValue}
          margin="dense"
          id="prompt-dialog-count"
          type="number"
          defaultValue={1}
          inputProps={{ min: 1 }}
          fullWidth
        />
      </Dialog>
    </div>
  );
}

PromptDialog.defaultProps = {
  confirmLabel: 'OK',
  cancelLabel: 'Cancel',
};

PromptDialog.propTypes = {
  onYesClicked: PropTypes.func.isRequired,
  onNoClicked: PropTypes.func.isRequired,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
};

export default PromptDialog;
