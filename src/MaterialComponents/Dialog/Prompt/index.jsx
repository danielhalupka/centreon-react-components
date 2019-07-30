import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import PropTypes from 'prop-types';

function PromptDialog({
  active,
  onClose,
  info,
  title,
  confirmLabel,
  cancelLabel,
  onNoClicked,
  onYesClicked,
}) {
  const [value, setValue] = useState(1);

  const confirm = () => {
    onYesClicked(value);
  };

  const changeValue = ({ target }) => {
    setValue(target.value);
  };

  return (
    <div>
      <Dialog open={active} onClose={onClose} aria-labelledby="prompt-dialog">
        <DialogTitle id="prompt-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{info}</DialogContentText>
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
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={confirm} color="primary">
            {confirmLabel}
          </Button>
          <Button variant="outlined" onClick={onNoClicked} color="primary">
            {cancelLabel}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

PromptDialog.defaultProps = {
  onClose: () => {},
  confirmLabel: 'OK',
  cancelLabel: 'Cancel',
  title: '',
};

PromptDialog.propTypes = {
  active: PropTypes.bool.isRequired,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  onClose: PropTypes.func,
  info: PropTypes.string.isRequired,
  onYesClicked: PropTypes.func.isRequired,
  onNoClicked: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default PromptDialog;
