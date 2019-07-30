import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import PropTypes from 'prop-types';

function ConfirmationDialog({
  active,
  onClose,
  info,
  title,
  confirmLabel,
  cancelLabel,
  onNoClicked,
  onYesClicked,
}) {
  return (
    <div>
      <Dialog
        open={active}
        onClose={onClose}
        aria-labelledby="confirmation-dialog"
      >
        <DialogTitle id="confirmation-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{info}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={onYesClicked} color="primary">
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

ConfirmationDialog.defaultProps = {
  onClose: () => {},
  confirmLabel: 'YES',
  cancelLabel: 'NO',
  title: '',
};

ConfirmationDialog.propTypes = {
  active: PropTypes.bool.isRequired,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  onClose: PropTypes.func,
  info: PropTypes.string.isRequired,
  onYesClicked: PropTypes.func.isRequired,
  onNoClicked: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default ConfirmationDialog;
