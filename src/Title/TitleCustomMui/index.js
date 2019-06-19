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
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  titlestyle: {
    padding: '5px 20px',
    minWidth: '350px',
    boxSizing: 'border-box',
    fontSize: '12px'
  }
});

const TitleCustom = ({ label, classes, color, fsize }) => (
  <div className={classes.titlestyle}>
    <Typography variant='h6' style={{ color, fontSize: fsize }}>
      {label}
    </Typography>
  </div>
);

export default withStyles(styles)(TitleCustom);
