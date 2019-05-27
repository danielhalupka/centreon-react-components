import React, { Component } from "react";
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName } from '@material-ui/core/styles';
import { StateDecorator, Store } from "@sambego/storybook-state";

import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';

// import { MaterialTabs, MaterialTable, MaterialProgressBar, MaterialButton } from "../";


import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';
import CustomTableHead from '../TablePagination/TableHead';
import CustomTableBody from '../TablePagination/TableBody';
import CustomTablePagination from '../TablePagination/TablePagination';
import IconModify from '../Icon/IconModify';


import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DoneIcon from '@material-ui/icons/Done';
import ReportProblemIcon from '@material-ui/icons/ReportProblemOutlined';

import Grid from '@material-ui/core/Grid';


import {
  HeaderContent,
  FormDynamic,
  ButtonAdd
} from "../";


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

  const generateClassName = createGenerateClassName({
    productionPrefix: 'jobList',
  });


class PageHdModifiers extends React.Component {
  state = {
    modal: false
  }

  showModal = ()  => {
    this.setState({
      modal: true,
     });
     console.log('modal active !');
  };


  render() {
    const { classes, ...rest } = this.props;
    const { showModal, modal } = this.state;

    return (
        <React.Fragment>
            <Grid container spacing={24}>
                <Grid item xs>
                <Paper>
                    <div>

                    <Table
                        aria-labelledby="tableTitle"
                        padding="dense"
                    >
                        <CustomTableHead
                        columns={6}
                        numSelected={0}
                        rowCount={jobs.length}
                        />
                        <TableBody  {...rest} >
                          {jobs.map(job => {
                            return (
                              <TableRow
                                className={classes.row}
                                style={{
                                  cursor: (job.status == status.finished) ? 'pointer' : 'inherit',
                                }}
                                hoverxs={4}
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
                    </Table>
                    </div>
                    <CustomTablePagination
                    />
                </Paper>

                <Typography variant="caption" >
                    <IconModify /> Add modifier to discovered hosts<ButtonAdd onClick={this.showModal}/>
                </Typography>
                </Grid>

                {modal ?
                  <Grid item classes={{root: classes.checkboxColumn, head: classes.head}}>
                    <Paper>
                        <HeaderContent label="Modifiers edition"/>
                        <FormDynamic/>
                    </Paper>
                  </Grid>
                : null
                }
            </Grid>
        </React.Fragment>
    );
  }
}


PageHdModifiers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageHdModifiers);
