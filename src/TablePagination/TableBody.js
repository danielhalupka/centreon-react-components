
import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import TableSortLabel from '@material-ui/core/TableSortLabel';
import Input from '@material-ui/core/Input';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DoneIcon from '@material-ui/icons/Done';
import ReportProblemIcon from '@material-ui/icons/ReportProblemOutlined';

import IconModify from '../Icon/IconModify';


// Host Discovery Modifiers
const jobs = [
  {
    id:1,
    status: 'running',
    message: 'it is running',
    alias: 'run',
    connection_name: 'connection name 1',
    generate_date: '05/06/2019',
    duration: '3sec',
    items_discovered: 5
  },
  {
    id:2,
    status: 'failed',
    message: 'it is running',
    alias: 'run',
    connection_name: 'connection name 1',
    generate_date: '05/06/2019',
    duration: '3sec',
    items_discovered: 5
  },
  {
    id:3,
    status: 'finished',
    message: 'it is running',
    alias: 'run',
    connection_name: 'connection name 1',
    generate_date: '05/06/2019',
    duration: '3sec',
    items_discovered: 5
  }

]



const styles = theme => ({
  tableRow: {
    height: '36px'
  },
  tr: {
    backgroundColor: '#ffffff',
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



class CustomTableBody extends React.Component {
  state = {
    modal: false,
  };

  componentDidMount() {
    console.log('did moount');
    this.setState({
      // labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  showModal = ()  => {
    console.log('active modal');
    this.setState({
      modal: true,
     });
  };

  render() {
    const { classes, ...rest } = this.props;
    const { modal } = this.state;

    return (
      <React.Fragment>
         <TableBody  {...rest} >
          {jobs.map(job => {
            return (
              <TableRow
                className={classes.row}
                style={{
                  cursor: (job.status == status.finished) ? 'pointer' : 'inherit',
                }}
                hover
                tabIndex={-1}
                key={job.id}
              >
                <TableCell styles={{root: classes.cellIcon}}>
                  {job.status == "running" &&
                    <AccessTimeIcon styles={{root: classes.icon}}/>
                  }
                  {job.status == "finished" &&
                    <DoneIcon styles={{root: classes.icon}}/>
                  }
                  {job.status == "failed" &&
                    <ReportProblemIcon styles={{ root: classes.icon }}/>
                  }
                  <IconModify onClick={this.showModal}/>
                </TableCell>
                <TableCell>
                  {job.alias}
                </TableCell>
                <TableCell>
                  {job.connection_name}
                </TableCell>
                <TableCell>
                  {job.generate_date}
                </TableCell>
                <TableCell align="right">
                  {job.duration}
                </TableCell>
                <TableCell align="right">
                  {job.items_discovered}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </React.Fragment>
    );
  }
}

CustomTableBody.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomTableBody);
