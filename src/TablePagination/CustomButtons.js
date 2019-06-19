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
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';

const styles = () => ({
  actions: {
    display: 'flex',
    alignItems: 'center',
    height: '30px',
    marginLeft: '20px'
  },
  buttonRefreshRoot: {
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  refreshRoot: {
    fontSize: '18px'
  }
});

const CustomButtons = ({ classes }) => (
  <div className={classes.topButtons}>
    <Button
      variant='contained'
      size='small'
      styles={{ root: classes.topButton }}
    >
      Add
    </Button>
    <Paper className={classes.actions}>
      <IconButton
        styles={{ root: classes.buttonRefreshRoot }}
        aria-label='Refresh Page'
      >
        <RefreshIcon styles={{ root: classes.refreshRoot }} />
      </IconButton>
    </Paper>
  </div>
);

export default withStyles(styles)(CustomButtons);
