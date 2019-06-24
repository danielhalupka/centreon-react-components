// /*
//  * Copyright 2005 - 2019 Centreon (https://www.centreon.com/)
//  *
//  * Licensed under the Apache License, Version 2.0 (the "License");
//  * you may not use this file except in compliance with the License.
//  * You may obtain a copy of the License at
//  *
//  * http://www.apache.org/licenses/LICENSE-2.0
//  *
//  * Unless required by applicable law or agreed to in writing, software
//  * distributed under the License is distributed on an "AS IS" BASIS,
//  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  * See the License for the specific language governing permissions and
//  * limitations under the License.
//  *
//  * For more information : contact@centreon.com
//  *
//  */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';

import { withStyles } from '@material-ui/core/styles';
import InputTemplate from './input'
import SelectTemplate from './select'

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
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
  inputCustom: {
    '& input': {
      padding: '9px'
    }
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
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
  button: {
    margin: '8px 0'
  },
  input: {
    display: 'none'
  },
  styledChip: {
    margin: '5px',
    backgroundColor: '#009fdf',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#007AB8',
      color: '#fff'
    },
    '&:focus': {
      backgroundColor: '#007AB8',
      color: '#fff'
    }
  },
  chipAvatarBlue: {
    backgroundColor: '#007AB8',
    color: '#fff',
    fontWeight: '600'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  btnCentreonBlue: {
    marginTop: '10px',
    backgroundColor: '#009fdf',
    marginRight: '10px',
    '&:hover': {
      backgroundColor: '#007AB8'
    },
    '&:focus': {
      backgroundColor: '#007AB8'
    }
  }
});
class FormTemplateFields extends Component {
  render() {
    const {
      classes,
      handleChange,
      data,
      modifier,
      currentVal,
      ...rest
    } = this.props;
    return (
      <div
        className={classes.formModifier}
        autoComplete="on"
        data={data}
        modifier
        {...rest}
      >
        <FormControl variant="outlined" className={classes.formControl}>
          {data.map(form => {
            switch (form.input_type) {
              case 'dropdown':
                return (
                  <SelectTemplate
                    key={form.id}
                    forid={form.forid}
                    value={form.placeholder}
                    placeholder={form.placeholder}
                    name={form.name}
                    input={<OutlinedInput name="value" id={form.forid} />}
                    onChange={handleChange}
                    optionsmap={form.values}
                  />
                );
                break;
              case 'text':
                return (
                  <InputTemplate
                    label={form.value}
                    key={form.id}
                  />
                );
                break;
              default:
                return <p>No form</p>;
            }
          })}
        </FormControl>
      </div>
    );
  }
}

FormTemplateFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormTemplateFields);
