import React from "react";
import classnames from 'classnames';
import styles from '../src/global-sass-files/_grid.scss';
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName, withStyles } from '@material-ui/core/styles';


import {storiesOf} from "@storybook/react";

import { MaterialTabs, MaterialTable, MaterialProgressBar, MaterialButton } from "../src";


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';
import TableHead from '../src/TablePagination/TableHead';
import TablePagination from '../src/TablePagination/TablePagination';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DoneIcon from '@material-ui/icons/Done';
import ReportProblemIcon from '@material-ui/icons/ReportProblemOutlined';

import ModalAdd from '../src/TablePagination/ModalAdd';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';





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


const generateClassName = createGenerateClassName({
  productionPrefix: 'jobList',
});

const style = theme => ({
  divWrapper: {
    height: 'calc(100vh - 82px)',
    display: 'flex',
    flexDirection: 'column',
  },
  filters: {
    display: 'flex',
    padding: '6px',
    backgroundColor: '#f9f9f9',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing.unit * 2,
    marginTop: '4px',
    marginBottom: theme.spacing.unit,
  },
  inputSearch: {
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    marginLeft: '12px',
  },
  switchGroup: {
    paddingLeft: '50px',
  },
  switchBase: {
    height: 'inherit',
    '&$colorChecked': {
      color: '#009fdf',
      '& + $colorBar': {
        backgroundColor: '#009fdf',
      },
    },
  },
  colorBar: {},
  colorChecked: {},
  switchLabel: {
    fontSize: '12px',
  },
  tableContentWrapper: {
    overflow: 'auto',
    flex: 1,
  },
  row: {
    height: "26px",
    '&:nth-of-type(odd)': {
      backgroundColor: blue[50],
    },
  },
  checkbox: {
    paddingBottom: 0,
    paddingTop: 0
  },
  topButtons: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    marginTop: '4px',
  },
  topButton: {
    backgroundColor: '#009fdf',
    color: theme.palette.common.white,
  },
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
  },
  legend: {
    display: 'flex',
    alignItems: 'center',
    height: '30px',
    marginLeft: 'auto',
    paddingRight: '10px',
  },
  legendContent: {
    display: 'flex',
  },
  legendIcon: {
    margin: '0px 5px 0px 10px',
    fontSize: 30,
  },
  legendText: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  accessTimeIcon: {
    color: 'black'
  },
  doneIcon: {
    color: 'green'
  },
  reportProblemIcon: {
    color: 'red'
  },
  cellIcon: {
    paddingTop: '0px',
    paddingBottom: '0px',
  },
  icon: {
    marginTop: '2px',
    fontSize: '20px',
  },
  errorTooltip: {
    maxWidth: 600,
    backgroundColor: theme.palette.common.black,
    fontSize: 12,
  },

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
  toolbar: {
    height: '32px',
    minHeight: '32px',
  },
  select: {
    width: 'calc(100% - 29px)',
    paddingRight: '20px',
  }
});


storiesOf("PageHdModifers", module).add("Host Discovery Modifiers", () => (
  <React.Fragment>
    <JssProvider generateClassName={generateClassName}>

        <div className={style.divWrapper}>
          <Grid container spacing={24}>
            <Grid item xs={8}>
              <div className={style.topButtons}>
                <Button  variant="contained" size="small" classes={{root: style.topButton}}>
                  Add
                </Button>
                <Paper className={style.actions}>
                  <IconButton
                    classes={{ root: style.buttonRefreshRoot }}
                    aria-label="Refresh Page"
                  >
                    <RefreshIcon classes={{ root: style.refreshRoot }} />
                  </IconButton>
                </Paper>
                <Paper className={style.legend}>
                  <div className={style.legendContent}>
                    <AccessTimeIcon className={classnames(style.legendIcon, style.accessTimeIcon)}/>
                    <Typography variant="caption" className={style.legendText}>
                      running
                    </Typography>
                  </div>
                  <div className={style.legendContent}>
                    <ReportProblemIcon className={classnames(style.legendIcon, style.reportProblemIcon)}/>
                    <Typography variant="caption" className={style.legendText}>
                      failed
                    </Typography>
                  </div>
                  <div className={style.legendContent}>
                    <DoneIcon className={classnames(style.legendIcon, style.doneIcon)}/>
                    <Typography variant="caption" className={style.legendText}>
                      finished
                    </Typography>
                  </div>
                </Paper>
              </div>
              <Paper className={style.root}>
                <div className={style.tableContentWrapper}>
                  <Table
                    className={style.tableRow}
                    aria-labelledby="tableTitle"
                    padding="dense"
                  >
                    <TableHead
                      columns={6}
                      numSelected={0}
                      rowCount={jobs.length}
                    />
                    <TableBody>
                      {jobs.map(job => {
                        return (
                          <TableRow
                            className={style.row}
                            style={{
                              cursor: (job.status == status.finished) ? 'pointer' : 'inherit',
                            }}
                            hover
                            tabIndex={-1}
                            key={job.id}
                          >
                            <TableCell classes={{root: style.cellIcon}}>
                              {job.status == "running" &&
                                <AccessTimeIcon classes={{root: style.icon}}/>
                              }
                              {job.status == "finished" &&
                                <DoneIcon classes={{root: style.icon}}/>
                              }
                              {job.status == "failed" &&
                                <Tooltip
                                  classes={{ tooltip: style.errorTooltip }}
                                  title={job.message ? job.message : 'Unknown error : please check autodiscovery log file.'}
                                >
                                  <ReportProblemIcon classes={{ root: style.icon }}/>
                                </Tooltip>
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
                <TablePagination
                  // rowsPerPageOptions={pagination.rowsPerPageOptions}
                  // colSpan={3}
                  // count={pagination.count}
                  // rowsPerPage={pagination.rowsPerPage}
                  // ActionsComponent={TablePaginationActions}
                />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={style.paper}>
              custom discovery modifiers</Paper>
            </Grid>
          </Grid>
        </div>
      </JssProvider>
  </React.Fragment>
), {notes: "A very simple component"});
