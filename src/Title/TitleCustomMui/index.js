import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    titlestyle: {
      padding: '5px 20px',
      minWidth: '350px',
      boxSizing: 'border-box',
      fontSize: "12px"
    },
  
  });

const TitleCustom = ({ label, classes, color,fsize }) => (
    <div className={classes.titlestyle}>
        <Typography variant="h6"  style={{color:color, fontSize: fsize}} >
            {label}
        </Typography>
      </div>
  );
  
  export default withStyles(styles)(TitleCustom);


