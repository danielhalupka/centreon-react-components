import React, { Component } from "react";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Field, reduxForm } from "redux-form";

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const renderTextField = ({
  label,
  input,
  type,
  classes,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    autoComplete="new-password"
    label={type === 'hidden' ? null : label}
    InputProps={{
      disableUnderline: (type === 'hidden'),
      classes: { input: classes.input }
    }}
    style={{
      marginTop: (type === 'hidden') ? '0px' : '8px',
      marginBottom: (type === 'hidden') ? '0px' : '4px',
    }}
    InputLabelProps={{
      shrink: true
    }}
    margin="dense"
    error={touched && invalid}
    helperText={touched && error}
    type={type}
    {...input}
    {...custom}
  />
);

const renderSelectField = ({
  id,
  name,
  input,
  label,
  classes,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <InputLabel
      shrink={true}
      htmlFor={id}
    >
      {label}
    </InputLabel>
    <Select
      classes={{ select: classes.select }}
      name={name}
      native
      {...input}
      {...custom}
      inputProps={{
        name: name,
        id: id
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

const styles = theme => ({
  root: {
    minWidth: '350px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
    textAlign: 'center',
  },
  nameExistsHelper: {
    color: 'orange',
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    alignItems: 'center',
  },
  buttons: {
    marginLeft: 'auto',
    marginRight: '12px',
  },
  button: {
    backgroundColor: '#009fdf',
    color: theme.palette.common.white,
    margin: theme.spacing.unit,
  },
  input: {
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    paddingBottom: '4px',
  },
  select: {
    height: '16px',
    border: '1px solid #ced4da',
  },
  divider: {
    marginTop: '30px',
    marginBottom: '20px',
  },
  legend: {
    marginBottom: '10px',
  },
  errorMessage: {
    color: 'orange',
    fontWeight: 'bold',
  },
});

class Step2 extends Component {

  constructor(props) {
    super(props);

    this.typingNameTimeout = null;

    this.state = {
      connectionParametersList: [],
      nameExists: false,
    };
  }

  componentDidMount() {
    const { centreonAxios, provider } = this.props;

    centreonAxios(`internal.php?object=centreon_host_discovery&action=connectionParameters&provider=${provider}`)
      .get()
      .then(({ data }) => {
        this.setState({ connectionParametersList: data.result});
      })
  }

  handleChangeName = value => {
    const { connectionParametersList } = this.state;

    clearTimeout(this.typingNameTimeout);
    this.typingNameTimeout = setTimeout(() => {
      let nameExists = false;
      if (value.trim() !== "") {
        connectionParametersList.map(connection => {
          if (connection.name.trim() === value.trim()) {
            nameExists = true;
          }
        });
      }
      this.setState({ nameExists });
    }, 200);
  }

  handleChangeConnection = event => {
    const { centreonAxios, formInputs, change } = this.props;
    const { connectionParametersList } = this.state;
    const { value } = event.target;

    // do not get connection parameters if select field is empty
    if (value === "") {
      return;
    }

    centreonAxios(`internal.php?object=centreon_host_discovery&action=connectionParameters&id=${value}`)
      .get()
      .then(({ data }) => {
        const connectionParameters = data.result.reduce((acc, connection) => {
          acc[connection.name] = connection.value;
          return acc;
        }, {});

        // replace connection name by selected one
        const name = connectionParametersList.reduce((acc, item) => {
          if (value === item.id) {
            acc = item.name;
          }
          return acc;
        }, "");
        change("name", name);
        this.handleChangeName(name);

        // update connection parameters fields
        formInputs.map(formInput => {
          if (connectionParameters[formInput.name]) {
            change(formInput.name, connectionParameters[formInput.name]);
          }
        });
      });
  }

  render() {
    const { formInputs, handleSubmit, pristine, submitting, classes } = this.props;
    const { connectionParametersList, nameExists } = this.state;

    return (
      <div className={classes.root}>
        <form noValidate className={classes.form} onSubmit={handleSubmit}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend" classes={{root: classes.legend}}>General informations</FormLabel>
            <Field
              classes={classes}
              id="connectionParametersList"
              name="connectionParametersList"
              component={renderSelectField}
              label="Load data from existing configuration"
              onChange={this.handleChangeConnection}
            >
              <option value="" />
              {connectionParametersList.map(connection => (
                <option value={connection.id}>{connection.name}</option>
              ))}
            </Field>
            <Field
              classes={classes}
              name={"name"}
              component={renderTextField}
              label={"Name of connection parameters"}
              required={true}
              onChange={event => this.handleChangeName(event.target.value)}
            />
            {nameExists &&
              <FormHelperText classes={{ root: classes.nameExistsHelper }}>
                You will update this configuration
              </FormHelperText>
            }
            <Divider variant="middle" classes={{root: classes.divider}} />
            <FormLabel component="legend" classes={{root: classes.legend}}>Connection parameters</FormLabel>
            {formInputs.map(input => (
              <Field
                classes={classes}
                name={input.name}
                type={input.hidden ? 'hidden' : input.type}
                component={renderTextField}
                label={input.description}
                value={input.value}
                required={input.mandatory}
                disabled={input.locked}
              />
            ))}
          </FormControl>
          <div className={classes.buttons}>
            <Button
              type="submit"
              disabled={pristine || submitting}
              variant="contained"
              size="small"
              classes={{root: classes.button}}
            >
              Save & Run
            </Button>
          </div>
        </form>
      </div>
    );
  }
};

const validate = (values, props) => {
  const { formInputs } = props;
  let errors = {};

  for (const formInput of formInputs) {
    if (formInput.mandatory) {
      if (!values.hasOwnProperty(formInput.name)
        || !values[formInput.name]
        || (typeof values[formInput.name] === 'string' && values[formInput.name].trim() == "")
      ) {
        errors[formInput.name] = 'Required';
      }
    }
  }

  if (!values.name || (typeof values.name === 'string' && values.name.trim() == "")) {
    errors.name = 'Required';
  }

  return errors;
};

const Step2Form = reduxForm({
  form: "hostDiscoveryJobAdd",
  destroyOnUnmount: true,
  validate
})(withStyles(styles)(Step2));

export default connect(
  (state, props) => {
    const { provider, formInputs } = props;

    let initialValues = formInputs.reduce((acc, formInput) => {
      acc[formInput.name] = formInput.value;
      return acc;
    }, {});

    initialValues.provider = provider;

    return { initialValues };
  }
)(Step2Form);