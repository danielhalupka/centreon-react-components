import React, { Component } from "react";

import PropTypes from "prop-types";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from '@material-ui/core/TextField'
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: '0px',
    width: '100%',
  },
  inputForm: {
    height: "2.5rem",
    "&:focus": {
      backgroundColor: "transparent"
    }
  },
  inputCustom: {
    '& input': {
      padding: '9px',
    }
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  selectLabel: {
    position: "relative",
    left: "3px",
    top: "17px",
    marginTop: "0px",
    display: "block",
    '&:placeholder': {
      fontSize: '9px'
    }
  },
  button: {
    margin: '8px 0'
  },
  input: {
    display: "none"
  },
  styledChip: {
    margin : '5px',
    backgroundColor:  '#009fdf',
    color: '#fff',
    '&:hover':{
      backgroundColor: '#007AB8',
      color: '#fff',
    },
    '&:focus':{
      backgroundColor: '#007AB8',
      color: '#fff',
    },
  },
  chipAvatarBlue: {
    backgroundColor: '#007AB8',
    color: '#fff',
    fontWeight: '600',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  btnCentreonBlue: {
    marginTop: '10px',
    backgroundColor:  '#009fdf',
    marginRight: '10px',
    '&:hover': {
      backgroundColor: '#007AB8',
    },
    '&:focus': {
      backgroundColor: '#007AB8',
    }
  }
});
class FormTemplateFields extends Component {
  render() {
    const { classes, handleChange, data, modifier, currentVal, ...rest  } = this.props;
    return (
      <div className={classes.formModifier} autoComplete="on" data={data}  modifier {...rest}>
          <FormControl variant="outlined" className={classes.formControl}>
            {data.map(form => {
              switch (form.input_type) {
              case 'dropdown':
              return (
                <div  key={form.id}>
                    <InputLabel className={classes.selectLabel}
                      ref={ref => {
                        this.InputLabelRef = ref;
                      }}
                        htmlFor={form.forid}
                        value={form.placeholder}
                    >
                      {form.placeholder}
                    </InputLabel>
                    <Select
                      native
                      className={`${classes.formControl} ${classes.inputForm}`}
                      onChange={handleChange}
                      name={form.name}
                      input={
                        <OutlinedInput
                          name="value"
                          id={form.forid}
                        />
                      }
                    >
                      <option value=" "></option>
                      {form.values.map(options => {
                        console.log(options)
                        return (
                         <option value={options}>{options}</option>
                        )
                      })}
                    </Select>
                    </div>
                    )
                break;
              case 'text':
              return (
                <div  key={form.id}>
                    <TextField
                      className={classes.inputCustom}
                      id="outlined-email-input"
                      label={form.value}
                      type="text"
                      name="text"
                      autoComplete="text"
                      margin="normal"
                      variant="outlined"
                    />
                </div>
                )
                break;
              default:
              return <p>No form</p>
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
