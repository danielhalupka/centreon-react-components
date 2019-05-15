import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Field, reduxForm } from "redux-form";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const radioButton = ({ input, providers, classes, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      {providers.map((provider, index) => (
        <FormControlLabel
          value={provider.value}
          control={<Radio classes={{root: classes.checkbox, checked: classes.checked}} />}
          label={provider.label}
        />
      ))}
    </RadioGroup>
  </FormControl>
)

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
  group: {
    margin: `${theme.spacing.unit}px 0`,
    alignItems: 'center',
  },
  checkbox: {
    color: '#009fdf',
    '&$checked': {
      color: '#009fdf',
    },
  },
  checked: {},
  buttons: {
    marginLeft: 'auto',
    marginRight: '12px',
  },
  button: {
    backgroundColor: '#009fdf',
    color: theme.palette.common.white,
    margin: theme.spacing.unit,
  },
});

class Step1 extends Component {
  render() {
    const { providers, error, handleSubmit, pristine, submitting, classes } = this.props;

    return (
      <div className={classes.root}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Provider</FormLabel>
            <Field name="provider" component={radioButton} classes={classes} providers={providers}>
              {providers.map(provider => (
                <Radio
                  value={provider.value}
                  label={provider.label}
                />
              ))}
            </Field>
          </FormControl>
          <div className={classes.buttons}>
            <Button
              type="submit"
              disabled={pristine || submitting}
              variant="contained"
              size="small"
              classes={{root: classes.button}}
            >
              Next
            </Button>
          </div>
          {error ? <div class="error-block">{error.message}</div> : null}
        </form>
      </div>
    );
  }
};


const validate = values => {
  const errors = {};

  if (!values.provider) {
    errors.provider = 'Required';
  }

  return errors;
};

export default reduxForm({
  form: "hostDiscoveryJobAdd",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(withStyles(styles)(Step1));