/*
 * Copyright 2005 - 2019 Centreon (https://www.centreon.com/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * For more information : contact@centreon.com
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DoneIcon from '@material-ui/icons/Done';
import ReportProblemIcon from '@material-ui/icons/ReportProblemOutlined';

const styles = theme => ({
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
});

const CustomLegend = ({ classes }) => (
  <div className={classes.topButtons}>
    <Paper className={classes.legend}>
      <div className={classes.legendContent}>
        <AccessTimeIcon className={classnames(classes.legendIcon, classes.accessTimeIcon)}/>
        <Typography variant='caption' className={classes.legendText}>
          running
        </Typography>
      </div>
      <div className={classes.legendContent}>
        <ReportProblemIcon className={classnames(classes.legendIcon, classes.reportProblemIcon)}/>
        <Typography variant='caption' className={classes.legendText}>
          failed
        </Typography>
      </div>
      <div className={classes.legendContent}>
        <DoneIcon className={classnames(classes.legendIcon, classes.doneIcon)}/>
        <Typography variant='caption' className={classes.legendText}>
          finished
        </Typography>
      </div>
    </Paper>
  </div>
);

export default withStyles(styles)(CustomLegend);