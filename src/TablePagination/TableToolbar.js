import React from "react";
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import UndoIcon from '@material-ui/icons/Undo';

const styles = theme => ({
  root: {
    minHeight: '36px',
    paddingRight: theme.spacing.unit,
  },
  highlight: {
    backgroundColor: '#e3f2fd',
  },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
  titleTypography: {
    color: '#009fdf',
  },
  iconRoot: {
    padding: '6px',
  }
});

const TableToolbar = ({ title, numSelected, onDeleteAll, classes }) => (
  <Toolbar
    variant='dense'
    className={classNames(classes.root, {
      [classes.highlight]: numSelected > 0,
    })}
  >
    <div className={classes.title}>
      <Typography classes={{root: classes.titleTypography}} variant="subtitle1" id="tableTitle">
        {title}
      </Typography>
    </div>
    <div className={classes.spacer} />
    <div className={classes.actions}>
      {numSelected > 0 ? (
        <>
          <Typography inline noWrap color="inherit" variant="subtitle1">
            {`${numSelected} selected`}
          </Typography>

          <Tooltip title="Uncheck all hosts">
            <IconButton classes={{root: classes.iconRoot}} onClick={onDeleteAll} aria-label="Uncheck all hosts">
              <UndoIcon />
            </IconButton>
          </Tooltip>
        </>
      ) : null}
    </div>
  </Toolbar>
);

export default withStyles(styles)(TableToolbar);