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
import classNames from 'classnames';
import AsyncPaginate from 'react-select-async-paginate';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';

const styles = () => ({
  menuPortal: base => ({ ...base, zIndex: 9999 }),
  select: {
    border: '1px solid #ced4da',
    backgroundColor: 'white',
  },
  root: {
    flexGrow: 1,
    height: 250
  },
  input: {
    display: 'flex',
    padding: 0
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden'
  },
  chip: {
    margin: '10px'
  },
  chipFocused: {
    backgroundColor: '#F4F4F4'
  },
  noOptionsMessage: {
    fontSize: 13,
    padding: '10px'
  },
  singleValue: {
    fontSize: 13
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 13
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: '10px',
    left: 0,
    right: 0
  },
  divider: {
    height: 'auto'
  }
});

function NoOptionsMessage(props) {
  const { selectProps, innerProps, children} = props;
  return (
    <Typography
      color="textSecondary"
      className={selectProps.classes.noOptionsMessage}
      {...innerProps}
    >
      {children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  const { selectProps, innerProps, innerRef, children} = props;
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: selectProps.classes.input,
          inputRef: innerRef,
          children: children,
          ...innerProps,
        },
      }}
      {...selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  const { innerRef, isFocused, isSelected, innerProps, children} = props;
  return (
    <MenuItem
      buttonRef={innerRef}
      selected={isFocused}
      component="div"
      style={{
        fontSize: 13,
        padding: 3,
        fontWeight: isSelected ? 500 : 400,
      }}
      {...innerProps}
    >
      {children}
    </MenuItem>
  );
}

function Placeholder(props) {
  const { selectProps, innerProps, children} = props;
  return (
    <Typography
      color="textSecondary"
      className={selectProps.classes.placeholder}
      {...innerProps}
    >
      {children}
    </Typography>
  );
}

function SingleValue(props) {
  const { isDisabled , selectProps, innerProps, children} = props;

  return (
    <Typography
      className={selectProps.classes.singleValue}
      style={{
        color: isDisabled ? 'grey' : 'black'
      }}
      {...innerProps}
    >
      {children}
    </Typography>
  );
}

function ValueContainer(props) {
  const { selectProps, children} = props;
  return (
    <div className={selectProps.classes.valueContainer}>
      {children}
    </div>
  )
}

function MultiValue(props) {
  const { selectProps, children, isFocused, removeProps} = props;
  return (
    <Chip
      tabIndex={-1}
      label={children}
      className={classNames(selectProps.classes.chip, {
        [selectProps.classes.chipFocused]: isFocused,
      })}
      onDelete={removeProps.onClick}
      deleteIcon={<CancelIcon {...removeProps} />}
    />
  );
}

function Menu(props) {
  const { selectProps, children, innerProps} = props;
  return (
    <Paper square className={selectProps.classes.paper} {...innerProps}>
      {children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

class AsyncSelect extends React.Component {
  render() {
    const { classes, ...props } = this.props;

    const selectStyles = {
      input: base => ({
        ...base,
        color: '#F4F4F4',
        '& input': {
          font: 'inherit',
        }
      })
    };

    return (
      <NoSsr>
        <AsyncPaginate
          className={classes.select}
          classes={classes}
          styles={selectStyles}
          components={components}
          menuPortalTarget={document.body}
          menuPosition={'fixed'}
          additional={{
            page: 1,
          }}
          {...props}
        />
      </NoSsr>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AsyncSelect);
