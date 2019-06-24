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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  inputCustom: {
      '& input': {
        padding: '9px'
      }
  },
});
class InputTemplate extends Component {
  render() {
    const {
      classes,
      data,
      label,
      key,
      modifier,
      ...rest
    } = this.props;
    return (
      <div
        className={classes.formModifier}
        autoComplete="on"
        data
        key
        modifier
        {...rest}
      >
      <TextField
        className={classes.inputCustom}
        id="outlined-email-input"
        label
        type="text"
        name="text"
        autoComplete="text"
        margin="normal"
        variant="outlined"
      />
      </div>
    );
  }
}

InputTemplate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InputTemplate);
