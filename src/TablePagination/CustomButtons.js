import React from "react";
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DoneIcon from '@material-ui/icons/Done';
import ReportProblemIcon from '@material-ui/icons/ReportProblemOutlined';

const styles = theme => ({
  actions: {
    display: 'flex',
    alignItems: 'center',
    height: '30px',
    marginLeft: '20px',
  },
  buttonRefreshRoot: {
    '&:hover': {
      backgroundColor: 'transparent',
    }
  },
  refreshRoot: {
    fontSize: '18px',
  }
});

const CustomButtons = ({classes }) => (
  <div className={classes.topButtons}>
      <Button onClick={console.log(styles)} variant="contained" size="small" styles={{root: classes.topButton}}>
        Add
      </Button>
      <Paper className={classes.actions}>
        <IconButton
          styles={{ root: classes.buttonRefreshRoot }}
          aria-label="Refresh Page"
        >
          <RefreshIcon styles={{ root: classes.refreshRoot }} />
        </IconButton>
      </Paper>
    </div>
);

export default withStyles(styles)(CustomButtons);