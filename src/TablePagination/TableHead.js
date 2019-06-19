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
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

const styles = (theme) => ({
  tableRow: {
    height: '36px'
  },
  head: {
    backgroundColor: '#009fdf',
    color: theme.palette.common.white,
    zIndex: 1,
    position: 'sticky',
    top: 0
  },
  checkboxColumn: {
    width: '60px'
  },
  checkboxRoot: {
    padding: '0px 12px'
  },
  sortLabel: {
    color: theme.palette.common.white,
    '&:focus': {
      color: theme.palette.common.white
    },
    '&:hover': {
      color: theme.palette.common.white,
      '& $icon': {
        opacity: 1,
        color: theme.palette.common.white
      }
    }
  },
  inputSearch: {
    backgroundColor: theme.palette.common.white,
    marginLeft: '30px'
  }
});

const CustomTableHead = ({
  checkboxColumn,
  onSelectAllClick,
  numSelected,
  numEnabled,
  classes
}) => (
  <TableHead>
    <TableRow classes={{ root: classes.tableRow }}>
      {checkboxColumn && (
        <TableCell
          padding='checkbox'
          classes={{ root: classes.checkboxColumn, head: classes.head }}
        >
          <Checkbox
            classes={{ root: classes.checkboxRoot }}
            indeterminate={numSelected > 0 && numSelected < numEnabled}
            checked={numSelected !== 0 && numSelected === numEnabled}
            onChange={onSelectAllClick}
            style={{
              color: 'white'
            }}
          />
        </TableCell>
      )}
      <TableCell classes={{ head: classes.head }}>Hosts</TableCell>
      <TableCell classes={{ head: classes.head }}>Templates</TableCell>
    </TableRow>
  </TableHead>
);

export default withStyles(styles)(CustomTableHead);
