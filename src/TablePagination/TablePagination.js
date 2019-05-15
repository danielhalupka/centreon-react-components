import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';

const styles = {
  toolbar: {
    height: '32px',
    minHeight: '32px',
  },
  select: {
    width: 'calc(100% - 29px)',
    paddingRight: '20px',
  },
};

const CustomTablePagination = ({ classes, ...props }) => (
  <TablePagination
    classes={{toolbar: classes.toolbar, select: classes.select}}
    SelectProps={{
      native: true,
    }}
    {...props}
  />
);

export default withStyles(styles)(CustomTablePagination);