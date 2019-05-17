import React, { Component } from "react";
import classnames from 'classnames';

import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import ContainedButtonPrimary from '../Button/ButtonContained';
import ButtonAdd from '../Add/ButtonAdd';



import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: '97%',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  selectLabel: {
    position: 'relative',
    left: '-14px',
    top: '7px',
    marginTop: '10px',
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  }
});

class FormDynamic extends React.Component {
  state = {
    labelWidth: 4,
    name: "name",
    activeForm: true,
    activePreviewButton: false,
    activeSaveButton: false,
    fields: [
      {
        id: 1,
        placeholder: 'Select \"Inclusion\" in the list of operations',
        input_type: 'dropdown',
        values: [
          "Inclusion 1",
          "Inclusion 2",
          "Inclusion 3",
          "Inclusion 4"
        ],
        forId: 'id1',
        required: true
      },
      {
        id: 2,
        placeholder: 'Select source property',
        input_type: 'dropdown',
        values: [
          "Source 1",
          "Source 2",
          "Source 3",
          "Source 4"
        ],
        forId: 'id2',
        required: true
      },
      {
        id: 3,
        placeholder: 'Define regex pattern',
        input_type: 'dropdown',
        values: [
          "Regex 1",
          "Regex 2",
          "Regex 3",
          "Regex 4"
        ],
        forId: 'id3',
        required: true
      },
    ]
  };

  componentDidMount() {
    this.setState({
      // labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = (event , key)  => {
    this.setState({ [event.target.name]: this[key].event.target.value });
    console.log('name: ' + [key] + [event.target.name] +  'value: ' + event.target.value + 'this key value:' +  this[key].event.target.value)
  };

  activeForm = (e)  => {
    this.setState({
      activeForm: true,
     });
     console.log('active form');
     console.log( e + ' ' + this.state.activeForm + 'test')
  };
  activeSaveButton = ()  => {
    this.setState({
      activeSaveButton: true,
     });
     console.log('save button form');
  };
  activePreviewButton = ()  => {
    this.setState({
      activePreviewButton: true,
     });
  };

  render() {
    const { classes } = this.props;
    const { fields, activeForm, activeSaveButton,activePreviewButton } = this.state;

    return (
      <React.Fragment>
        <ButtonAdd onClick={this.activeForm}/>
        {activeForm ?
          <form className={classes.root} autoComplete="on">
          <FormControl variant="outlined" className={classes.formControl}>
            <Typography variant="caption" >
              <h3>Veuillez selectionner les paramètres: </h3>
            </Typography>
            {fields.map(form => {
              return (
                <React.Fragment key={form.id}>
                  <InputLabel className={classes.selectLabel}
                    ref={ref => {
                      this.InputLabelRef = ref;
                    }}
                    htmlFor={form.forid}
                  >
                    {form.placeholder}
                  </InputLabel>
                  <Select
                    value={form.placeholder}
                    onChange={this.handleChange}
                    name={form.name}
                    input={
                      <OutlinedInput
                        labelWidth={form.labelWidth}
                        name={form.placeholder}
                        id={form.forid}
                      />
                    }
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={form.values[0]}>{form.values[0]}</MenuItem>
                    <MenuItem value={form.values[1]}>{form.values[1]}</MenuItem>
                    <MenuItem value={form.values[2]}>{form.values[2]}</MenuItem>
                  </Select>
                </React.Fragment>
              )
            })}
          <div>
          {activePreviewButton &&
            <ContainedButtonPrimary label="Preview"/>
          }
          {activeSaveButton ?
            <ContainedButtonPrimary label="Save"/>
            :
            <ContainedButtonPrimary disabled label="Save"/>
          }
          </div>
          </FormControl>
        </form>
        :
          null
        }
      </React.Fragment>
    );
  }
}

FormDynamic.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormDynamic);
