import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    backgroundColor:  '#009fdf',
    margin: theme.spacing.unit,
  },
});

function Chips(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Chip
        clickable
        className={classes.chip}
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
    </div>
  );
}

Chips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chips);