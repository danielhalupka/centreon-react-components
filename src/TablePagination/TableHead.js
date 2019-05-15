import React from "react";
import { withStyles } from '@material-ui/core/styles';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Input from '@material-ui/core/Input';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  tableRow: {
    height: '36px'
  },
  head: {
    backgroundColor: '#009fdf',
    color: theme.palette.common.white,
    zIndex: 1,
    position: 'sticky',
    top: 0,
  },
  checkboxColumn: {
    width: '60px'
  },
  checkboxRoot: {
    padding: '0px 12px',
  },
  sortLabel: {
    color: theme.palette.common.white,
    '&:focus': {
      color: theme.palette.common.white,
    },
    '&:hover': {
      color: theme.palette.common.white,
      '& $icon': {
        opacity: 1,
        color: theme.palette.common.white,
      },
    },
  },
  inputSearch: {
    backgroundColor: theme.palette.common.white,
    marginLeft: '30px',
  },
});

const CustomTableHead = ({checkboxColumn, onSelectAllClick, numSelected, numEnabled, classes }) => (
  <TableHead>
    <TableRow
      classes={{root: classes.tableRow}}
    >
      {checkboxColumn &&
        <TableCell padding="checkbox" classes={{root: classes.checkboxColumn, head: classes.head}}>
          <Checkbox
            classes={{ root: classes.checkboxRoot }}
            indeterminate={numSelected > 0 && numSelected < numEnabled}
            checked={numSelected !== 0 && numSelected === numEnabled}
            onChange={onSelectAllClick}
            style={{
              color: "white",
            }}
          />
        </TableCell>
      }
          <TableCell>Discovery Source</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Connexion parameters</TableCell>
          <TableCell>Start Time</TableCell>
          <TableCell>Duration</TableCell>
          <TableCell>Discovered Items</TableCell>
      
    </TableRow>
  </TableHead>
);

export default withStyles(styles)(CustomTableHead);