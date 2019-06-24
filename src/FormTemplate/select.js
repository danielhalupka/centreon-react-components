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
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  formControl: {
    margin: '0px',
    width: '100%'
  },
  inputForm: {
    height: '2.5rem',
    '&:focus': {
      backgroundColor: 'transparent'
    }
  },
  selectLabel: {
    position: 'relative',
    left: '3px',
    top: '17px',
    marginTop: '0px',
    display: 'block',
    '&:placeholder': {
      fontSize: '9px'
    }
  },
});
class SelectTemplate extends Component {
  render() {
    const {
      classes,
      forid,
      placeholder,
      input,
      optionsmap,
      change,
    } = this.props;
    return (
      <div key>
        <InputLabel
          className={classes.selectLabel}
          htmlFor={forid}
          value={placeholder}
        >
          {placeholder}
        </InputLabel>
        <Select
          native
          className={`${classes.formControl} ${classes.inputForm}`}
          onChange={change}
          name
          input={input}
          optionsmap
        >
          <option value=" " />
          {optionsmap.map(options => {
            return <option value={options}>{options}</option>;
          })}
        </Select>
      </div>
    );
  }
}

SelectTemplate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SelectTemplate);
