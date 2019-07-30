import React from 'react';

import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import MuiDialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';

function Dialog({
  active,
  onClose,
  title,
  confirmLabel,
  cancelLabel,
  info,
  onNoClicked,
  onYesClicked,
  children,
}) {
  return (
    <MuiDialog open={active} onClose={onClose} aria-labelledby="dialog">
      <DialogTitle id="dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{info}</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onYesClicked} color="primary">
          {confirmLabel}
        </Button>
        <Button variant="outlined" onClick={onNoClicked} color="primary">
          {cancelLabel}
        </Button>
      </DialogActions>
    </MuiDialog>
  );
}

Dialog.defaultProps = {
  onClose: () => {},
  confirmLabel: 'YES',
  cancelLabel: 'NO',
  title: '',
};

Dialog.propTypes = {
  active: PropTypes.bool.isRequired,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
  info: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  onYesClicked: PropTypes.func.isRequired,
  onNoClicked: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default Dialog;
