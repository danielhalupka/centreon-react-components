import React from "react";
import classnames from 'classnames';


import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  headercontent: {
    backgroundColor: '#009fdf',
    color: theme.palette.common.white,
    padding: '30px',
    minWidth: '350px',
    boxSizing: 'border-box',
  },
  whiteTitleText: {
    color: theme.palette.common.white,
    fontSize: '16px',
    textAlign: 'center',
    fontWeight: '600'
  }
});


const HeaderContent = ({ label, classes }) => (
  <div className={classes.headercontent}>

          <Typography variant="caption" className={classes.whiteTitleText}>
            {label}
          </Typography>
    </div>
);

export default withStyles(styles)(HeaderContent);