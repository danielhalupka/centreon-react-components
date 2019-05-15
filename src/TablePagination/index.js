import React, { Component } from "react";
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName, withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import blue from '@material-ui/core/colors/blue';

import withLicenseCheck from './LicenseCheckHOC';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';
import TableHead from './TableHead';
import TablePagination from './TablePagination';
import TablePaginationActions from './TablePaginationActions';
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

import ModalAdd from './ModalAdd';

const generateClassName = createGenerateClassName({
  productionPrefix: 'jobList',
});

const status = {
  "running": 0,
  "finished": 1,
  "failed": 2
}

const styles = theme => ({
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
});

class HDJobsPage extends Component {

  constructor(props) {
    super(props);

    this.initFiltersValues = {
      search: '',
      status: {
        running: true,
        finished: true,
        failed: true,
      },
    };

    this.initPagination = {
      rowsPerPageOptions: [10, 25, 50, 100],
      rowsPerPage: 25,
      page: 0,
      count: 0,
    }

    this.state = {
      jobs: [],
      pagination: this.initPagination,
      filters: this.initFiltersValues,
      order: 'desc',
      orderBy: 'generate_date',
      openModal: false,
    };

    this.columns = [
      {
        id: 'status',
        label: 'Status',
        sortable: true,
        disablePadding: false,
        filter: false,
        width: '30px',
      },
      {
        id: 'alias',
        label: 'Discovery Source',
        sortable: true,
        disablePadding: false,
        filter: false,
      },
      {
        id: 'connection_name',
        label: 'Connection parameters',
        sortable: true,
        disablePadding: false,
        filter: false,
      },
      {
        id: 'generate_date',
        label: 'Start Time',
        sortable: true,
        disablePadding: false,
        filter: false,
      },
      {
        id: 'duration',
        label: 'Duration',
        numeric: true,
        sortable: true,
        disablePadding: true,
        filter: false,
      },
      {
        id: 'items_discovered',
        label: 'Discovered Items',
        numeric: true,
        sortable: true,
        disablePadding: false,
        filter: false,
      },
    ];

    this.searchTimeout = null;
    this.refreshTimeout = null;
  }

  componentDidMount() {
    this.getJobs();
  }

  getJobs = () => {
    clearTimeout(this.refreshTimeout);

    const { centreonAxios } = this.props;
    const { filters, pagination, order, orderBy } = this.state;
    let search = {
      "$and": [
        {
          "$or": [
            {
              "connection_name": { "$lk": filters.search }
            },
            {
              "alias": { "$lk": filters.search }
            },
            {
              "generate_date": { "$lk": filters.search }
            },
          ]
        }
      ]
    };

    let filteredStatus = [];
    for (const [key, value] of Object.entries(filters.status)) {
      if (value === true && status.hasOwnProperty(key)) {
        filteredStatus.push(String(status[key]));
      }
    }

    // do not fetch data if no one status is selected
    if (filteredStatus.length === 0) {
      this.setState(state => ({
        jobs: [],
        pagination: {
          ...this.initPagination,
          rowsPerPage: state.pagination.rowsPerPage, // do not change rowsPerPage if user has updated the value
        }
      }));

      return;
    }

    search["$and"].push(
      {
        ["$or"]: filteredStatus.map(item => ({ "status": { "$eq": item }}))
      }
    );

    centreonAxios(
      `internal.php?object=centreon_host_discovery&action=jobs` +
      `&search=${JSON.stringify(search)}` +
      `&page=${pagination.page + 1}&limit=${pagination.rowsPerPage}` +
      `&sort_by=${orderBy}&order_by=${order}`
    )
      .get()
      .then(({ data }) => {
        const formattedData = data.result.map(item => {
          return {
            ...item,
            duration: [status.running, status.failed].includes(item.status) ? "N/A" : item.duration + 's',
            items_discovered: [status.running, status.failed].includes(item.status) ? "N/A" : item.items_discovered,
          }
        });

        let { rowsPerPageOptions } = pagination;
        if (data._meta.pagination.total > 100) {
          rowsPerPageOptions[4] = data._meta.pagination.total;
        }

        this.setState(state => ({
          jobs: formattedData,
          pagination: {
            ...state.pagination,
            count: data._meta.pagination.total,
            rowsPerPageOptions,
          }
        }), () => {
          // refresh jobs every 15 seconds
          this.refreshTimeout = setTimeout(() => {
            this.getJobs();
          }, 15000);
        });
      }).catch(() => {

      });
  }

  handleSearch = event => {
    const { value } = event.target;

    this.setState(state => ({
      filters: {
        ...state.filters,
        search: value
      }
    }), () => {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.getJobs();
      }, 200);
    });
  }

  handleFilterStatus = event => {
    const { target } = event;
    this.setState(state => ({
      filters: {
        ...state.filters,
        status: {
          ...state.filters.status,
          [target.value]: target.checked
        }
      }
    }), this.getJobs);
  }

  createDiscoveryTask = () => {
    this.setState({
      openModal: true,
    });
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy }, this.getJobs);
  };

  handleRowClick = (event, id) => {
    const { history } = this.props;
    history.push(`/configuration/hosts/discovery/jobs/${id}`)
  }

  handleChangePage = (event, page) => {
    this.setState(
      state => ({
        pagination: {
          ...state.pagination,
          page
        }
      }),
      this.getJobs
    );
  };

  handleChangeRowsPerPage = event => {
    const { value } = event.target;

    this.setState(
      state => ({
        pagination: {
          ...state.pagination,
          page: 0,
          rowsPerPage: value
        }
      }),
      this.getJobs
    );
  };

  handleModalClose = () => {
    this.setState({
      openModal: false,
    }, this.getJobs);
  }

  render() {
    const { classes, centreonAxios } = this.props;
    const { jobs, filters, pagination, order, orderBy, openModal } = this.state;

    return (
      <JssProvider generateClassName={generateClassName}>
        <div className={classes.divWrapper}>
          <div className={classes.filters}>
            <Input
              classes={{root: classes.inputSearch}}
              label="Filter"
              value={filters.search}
              onChange={this.handleSearch}
            />
            <FormGroup
              classes={{root: classes.switchGroup}}
              row={true}
            >
              <FormControlLabel
                classes={{label: classes.switchLabel}}
                control={
                  <Switch
                    classes={{
                      switchBase: classes.switchBase,
                      checked: classes.colorChecked,
                      bar: classes.colorBar
                    }}
                    checked={filters.status.running}
                    onChange={this.handleFilterStatus}
                    value="running"
                  />
                }
                labelPlacement="top"
                label="Running"
              />
              <FormControlLabel
                classes={{label: classes.switchLabel}}
                control={
                  <Switch
                    classes={{
                      switchBase: classes.switchBase,
                      checked: classes.colorChecked,
                      bar: classes.colorBar
                    }}
                    checked={filters.status.failed}
                    onChange={this.handleFilterStatus}
                    value="failed"
                  />
                }
                labelPlacement="top"
                label="Failed"
              />
              <FormControlLabel
                classes={{label: classes.switchLabel}}
                control={
                  <Switch
                    classes={{
                      switchBase: classes.switchBase,
                      checked: classes.colorChecked,
                      bar: classes.colorBar
                    }}
                    checked={filters.status.finished}
                    onChange={this.handleFilterStatus}
                    value="finished"
                  />
                }
                labelPlacement="top"
                label="Finished"
              />
            </FormGroup>
          </div>
          <div className={classes.topButtons}>
            <Button onClick={this.createDiscoveryTask} variant="contained" size="small" classes={{root: classes.topButton}}>
              Add
            </Button>
            <Paper className={classes.actions}>
              <IconButton
                classes={{ root: classes.buttonRefreshRoot }}
                onClick={this.getJobs}
                aria-label="Refresh Page"
              >
                <RefreshIcon classes={{ root: classes.refreshRoot }} />
              </IconButton>
            </Paper>
            <Paper className={classes.legend}>
              <div className={classes.legendContent}>
                <AccessTimeIcon className={classNames(classes.legendIcon, classes.accessTimeIcon)}/>
                <Typography variant="caption" className={classes.legendText}>
                  running
                </Typography>
              </div>
              <div className={classes.legendContent}>
                <ReportProblemIcon className={classNames(classes.legendIcon, classes.reportProblemIcon)}/>
                <Typography variant="caption" className={classes.legendText}>
                  failed
                </Typography>
              </div>
              <div className={classes.legendContent}>
                <DoneIcon className={classNames(classes.legendIcon, classes.doneIcon)}/>
                <Typography variant="caption" className={classes.legendText}>
                  finished
                </Typography>
              </div>
            </Paper>
          </div>
          <Paper className={classes.root}>
            <div className={classes.tableContentWrapper}>
              <Table
                className={classes.table}
                aria-labelledby="tableTitle"
                padding="dense"
              >
                <TableHead
                  columns={this.columns}
                  numSelected={0}
                  order={order}
                  orderBy={orderBy}
                  filters={filters}
                  onRequestSort={this.handleRequestSort}
                  rowCount={jobs.length}
                />
                <TableBody>
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
                        onClick={(job.status == status.finished) ? event => this.handleRowClick(event, job.id) : null}
                      >
                        <TableCell classes={{root: classes.cellIcon}}>
                          {job.status == status.running &&
                            <AccessTimeIcon classes={{root: classes.icon}}/>
                          }
                          {job.status == status.finished &&
                            <DoneIcon classes={{root: classes.icon}}/>
                          }
                          {job.status == status.failed &&
                            <Tooltip
                              classes={{ tooltip: classes.errorTooltip }}
                              title={job.message ? job.message : 'Unknown error : please check autodiscovery log file.'}
                            >
                              <ReportProblemIcon classes={{ root: classes.icon }}/>
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
              rowsPerPageOptions={pagination.rowsPerPageOptions}
              colSpan={3}
              count={pagination.count}
              rowsPerPage={pagination.rowsPerPage}
              page={pagination.page}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </Paper>
          {openModal &&
            <ModalAdd
              centreonAxios={centreonAxios}
              open={true}
              onClose={this.handleModalClose}
            />
          }
        </div>
      </JssProvider>
    );
  }
}

export default withLicenseCheck(withStyles(styles, { withTheme: true })(HDJobsPage));
