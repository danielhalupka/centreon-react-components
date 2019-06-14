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

const styles = theme => ({
  menuPortal: base => ({ ...base, zIndex: 9999 }),
  select: {
    border: '1px solid #ced4da',
    backgroundColor: "white",
  },
  root: {
    flexGrow: 1,
    height: 250,
  },
  input: {
    display: 'flex',
    padding: 0,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: "10px",
  },
  chipFocused: {
    backgroundColor: "#F4F4F4"
  },
  noOptionsMessage: {
    fontSize: 13,
    padding: "10px"
  },
  singleValue: {
    fontSize: 13,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 13,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: "10px",
    left: 0,
    right: 0,
  },
  divider: {
    height: "auto",
  },
});

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontSize: 13,
        padding: 3,
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  const { isDisabled } = props;

  return (
    <Typography
      className={props.selectProps.classes.singleValue}
      style={{
        color: isDisabled ? 'grey' : 'black'
      }}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

function Menu(props) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
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
        color: "#F4F4F4",
        '& input': {
          font: 'inherit',
        },
      }),
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