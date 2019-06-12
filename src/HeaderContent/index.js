import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  headercontent: {
    backgroundColor: '#009fdf',
    color: theme.palette.common.white,
    padding: '20px',
    minWidth: '600px',
    boxSizing: 'border-box',
  },
  whiteTitleText: {
    color: theme.palette.common.white,
    fontSize: '16px',
    textAlign: 'center',
    fontWeight: '600'
  }
});


const HeaderContent = ({ label, classes, icon, close }) => (
  <div className={classes.headercontent}>
          {close}
          <Typography variant="caption" className={classes.whiteTitleText}>
            {icon}
            {label}
          </Typography>
    </div>
);

export default withStyles(styles)(HeaderContent);