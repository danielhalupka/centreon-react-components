import React from "react";
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName } from '@material-ui/core/styles';
import { StateDecorator, Store } from "@sambego/storybook-state";


import {storiesOf, addDecorator} from "@storybook/react";

import { MaterialTabs, MaterialTable, MaterialProgressBar, MaterialButton } from "../src";


import Table from '@material-ui/core/Table';

import Paper from '@material-ui/core/Paper';
import CustomButtons from '../src/TablePagination/CustomButtons';
import CustomLegend from '../src/TablePagination/Legend';
import CustomTableHead from '../src/TablePagination/TableHead';
import CustomTableBody from '../src/TablePagination/TableBody';
import CustomTablePagination from '../src/TablePagination/TablePagination';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';


import {
  HeaderContent,
  FormDynamic
} from "../src";




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


const store = new Store({
    labelWidth: 4,
    name: "name",
    activeForm: true,
    activePreviewButton: false,
    activeSaveButton: false,
    fields: [
      {
        id: 1,
        placeholder: 'Select \"Inclusion\" in the list of operations',
        input_type: 'dropdown',
        values: [
          "Inclusion 1",
          "Inclusion 2",
          "Inclusion 3",
          "Inclusion 4"
        ],
        forId: 'id1',
        required: true
      },
      {
        id: 2,
        placeholder: 'Select source property',
        input_type: 'dropdown',
        values: [
          "Source 1",
          "Source 2",
          "Source 3",
          "Source 4"
        ],
        forId: 'id2',
        required: true
      },
      {
        id: 3,
        placeholder: 'Define regex pattern',
        input_type: 'dropdown',
        values: [
          "Regex 1",
          "Regex 2",
          "Regex 3",
          "Regex 4"
        ],
        forId: 'id3',
        required: true
      },
    ]
});



storiesOf("PageHdModifers", module)
.addDecorator(StateDecorator(store))
.add("Host Discovery Modifiers", () => (
  
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
), {notes: "A very simple component"});
