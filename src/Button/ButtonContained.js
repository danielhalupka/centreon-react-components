import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  }
});

function ContainedButtonPrimary(props) {
  const { label, classes } = props;
  return (
    <Button variant="contained" color="primary" className={classes.button}>
        {label}
    </Button>
  );
}

ContainedButtonPrimary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtonPrimary);