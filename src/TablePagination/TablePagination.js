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
import TablePagination from '@material-ui/core/TablePagination';

const styles = {
  toolbar: {
    height: '32px',
    minHeight: '32px',
  },
  select: {
    width: 'calc(100% - 29px)',
    paddingRight: '20px',
  },
};

const CustomTablePagination = ({ classes, ...props }) => (
  <TablePagination
    classes={{toolbar: classes.toolbar, select: classes.select}}
    SelectProps={{
      native: true,
    }}
    {...props}
  />
);

export default withStyles(styles)(CustomTablePagination);