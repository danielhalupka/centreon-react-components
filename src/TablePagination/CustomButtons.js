import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';


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

const CustomButtons = ({ classes }) => (
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