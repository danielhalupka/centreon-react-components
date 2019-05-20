import React, { Component } from "react";
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName } from '@material-ui/core/styles';
import { StateDecorator, Store } from "@sambego/storybook-state";

import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

// import { MaterialTabs, MaterialTable, MaterialProgressBar, MaterialButton } from "../";


import Table from '@material-ui/core/Table';

import Paper from '@material-ui/core/Paper';
import CustomTableHead from '../TablePagination/TableHead';
import CustomTableBody from '../TablePagination/TableBody';
import CustomTablePagination from '../TablePagination/TablePagination';

import Grid from '@material-ui/core/Grid';


import {
  HeaderContent,
  FormDynamic
} from "../";

const styles = theme => ({
    p: {

    }
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

  render() {
    // const { classes } = this.props;
    // const { fields, activeForm, activeSaveButton,activePreviewButton } = this.state;


    return (
        <React.Fragment>
            <JssProvider generateClassName={generateClassName}>
                <Grid container spacing={24}>
                    <Grid item xs={8}>
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
                            <CustomTableBody
                            columns={6}
                            numSelected={0}
                            rowCount={jobs.length}
                            />
                        </Table>
                        </div>
                        <CustomTablePagination
                        />
                    </Paper>
                    </Grid>
                    <Grid item xs={4}>
                    <Paper>
                    <HeaderContent label="Modifiers edition"/>
                    <FormDynamic/>
                    </Paper>
                    </Grid>
                </Grid>
            </JssProvider>
        </React.Fragment>
    );
  }
}

PageHdModifiers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageHdModifiers);
