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
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  headercontent: {
    backgroundColor: '#009fdf',
    color: theme.palette.common.white,
    padding: '20px',
    minWidth: '600px',
    boxSizing: 'border-box'
  },
  whiteTitleText: {
    color: theme.palette.common.white,
    fontSize: '16px',
    textAlign: 'center',
    fontWeight: '600'
  }
});

const HeaderContent = ({ label, classes, icon, close }) => (
  <div className={classes.headercontent}>
    {close}
    <Typography variant="caption" className={classes.whiteTitleText}>
      {icon}
      {label}
    </Typography>
  </div>
);

export default withStyles(styles)(HeaderContent);
