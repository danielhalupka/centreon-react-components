import React, { Component } from "react";

import PropTypes from "prop-types";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from '@material-ui/core/TextField'
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { arrayMove } from "react-sortable-hoc";
import SortableComponent from "../SortableList";

import ContainedButtonPrimary from "../Button/ButtonContained";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Chip } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: '8px 0',
    minWidth: "calc(100% - 15px)"
  },
  formModifier: {
    maxWidth: '350px',
    padding: '10px',

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
  listCustom: {
    '& li': {
      listStyle: 'none',
    }
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  selectLabel: {
    position: "relative",
    left: "3px",
    top: "17px",
    marginTop: "10px",
    display: "block"
  },
  button: {
    margin: theme.spacing.unit
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

class FormDynamic extends Component {
  state = {
    labelWidth: 4,
    name: "name",
    activeForm: false,
    activePreviewButton: false,
    activeSaveButton: false,
    title: "",
    modifiersList: [],
    fieldsInclusion: [
      {
        id: 1,
        title: 'Inclusion',
        placeholder: 'Select source property',
        input_type: 'dropdown',
        values: [
          "Source 1",
          "Source 2",
          "Source 3",
          "Source 4"
        ],
        forId: 'id1',
        required: true
      },
      {
        id: 2,
        title: 'Inclusion',
        placeholder: 'Define regex pattern',
        input_type: 'text',
        value: 'Regex pattern',
        forId: 'id2',
        required: true
      },
    ],
    fieldsExclusion: [
      {
        id: 1,
        title: "Exclusion",
        placeholder: 'Select "Exclusion" in the list of operations',
        input_type: "dropdown",
        values: ["Exclusion 1", "Exclusion 2", "Exclusion 3", "Exclusion 4"],
        forId: "id4",
        required: true
      }
    ],
    fieldsLowercase: [
      {
        id: 1,
        title: "Lower Case",
        placeholder: 'Select "Lowercase" in the list of operations',
        input_type: "dropdown",
        values: ["Lowercase 1", "Lowercase 2", "Lowercase 3", "Lowercase 4"],
        forId: "id5",
        required: true
      }
    ],
    fieldsUppercase: [
      {
        id: 1,
        title: "Upper Case",
        placeholder: 'Select "Lowercase" in the list of operations',
        input_type: "dropdown",
        values: ["Lowercase 1", "Lowercase 2", "Lowercase 3", "Lowercase 4"],
        forId: "id5",
        required: true
      }
    ],
    fieldsCapitalize: [
      {
        id: 1,
        title: "Word Capitalizer",
        placeholder: 'Select "Lowercase" in the list of operations',
        input_type: "dropdown",
        values: ["Lowercase 1", "Lowercase 2", "Lowercase 3", "Lowercase 4"],
        forId: "id5",
        required: true
      }
    ],
    itemsList: [],
    tempActiveList: false
  };

  handleChange = name => event => {
    let source = event.target.value;
    console.log(source);
    this.setState({
      [name]: source,
      activeSaveButton: true
    });
    return source
  };

  activeForm = () => {
    let name = event.target.value;
    let text = this.state.fieldsInclusion[0].title;
    let number = Math.floor(Math.random() * 10);
    this.setState({
      activeForm: true,
      title: number + text + ' - ' + name
    });
  };
  activeSaveButton = () => {
    this.setState({
      activeSaveButton: true
    });
  };

  outputList = () => {
    let text = this.state.fieldsInclusion[0].title;

    let modifiersArr = this.state.modifiersList;
    modifiersArr.push(this.state.title.toString());
    this.setState({
      tempActiveList: true,
      activePreviewButton: true,
      activeForm: false,
      activeSaveButton: false,
      modifiersList: modifiersArr,
      title: text
    });
    console.log(modifiersArr);
  };

  onSortModifier = ({ oldIndex, newIndex }) => {
    let { modifiersList } = this.state;
    modifiersList = arrayMove(modifiersList, oldIndex, newIndex);
    this.setState({
      modifiersList
    });
  };

  onDeleteModifier = index => {
    let { modifiersList } = this.state;
    modifiersList.splice(index, 1);
    this.setState({
      modifiersList
    });
  };

  render() {
    const { classes } = this.props;
    const {
      fieldsInclusion,
      activeForm,
      activeSaveButton,
      activePreviewButton,
      tempActiveList,
      modifiersList
    } = this.state;

    return (
      <React.Fragment>
        <div>
          <Chip
            avatar={<Avatar className={classes.chipAvatarBlue} >+</Avatar>}
            className={classes.styledChip}
            label={this.state.fieldsInclusion[0].title}
            onClick={this.activeForm}
          />
          <Chip
            avatar={<Avatar className={classes.chipAvatarBlue} >+</Avatar>}
            className={classes.styledChip}
            label={this.state.fieldsExclusion[0].title}
          />
          <Chip
            avatar={<Avatar className={classes.chipAvatarBlue} >+</Avatar>}
            className={classes.styledChip}
            label={this.state.fieldsLowercase[0].title}
          />
        </div>
        <div>
          <Chip
            avatar={<Avatar className={classes.chipAvatarBlue} >+</Avatar>}
            className={classes.styledChip}
            label={this.state.fieldsUppercase[0].title}
          />
          <Chip
            avatar={<Avatar className={classes.chipAvatarBlue} >+</Avatar>}
            className={classes.styledChip}
            label={this.state.fieldsCapitalize[0].title}
          />
        </div>

        {tempActiveList ? (
          <>
            <SortableComponent
              className={classes.listCustom}
              items={modifiersList}
              onSort={this.onSortModifier}
              onDelete={this.onDeleteModifier}
            />
          </>
        ) : null}

        <form className={classes.formModifier} autoComplete="on">
          {activeForm && (
            <FormControl variant="outlined" className={classes.formControl}>
              <Typography variant="caption">
                <h3>{`Veuillez selectionner les paramètres de votre : ${
                  this.state.title
                } `}</h3>
              </Typography>

              {fieldsInclusion.map(form => {
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
                        onChange={this.handleChange('value')}
                        name={form.name}
                        input={
                          <OutlinedInput
                            name="value"
                            labelWidth={this.state.labelWidth}
                            id={form.forid}
                          />
                        }
                      >
                        <option value="" />
                        <option value={form.values[0]}>{form.values[0]}</option>
                        <option value={form.values[1]}>{form.values[1]}</option>
                        <option value={form.values[2]}>{form.values[2]}</option>
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
                return <p>No modifiers</p>
              }
              })}
              <ContainedButtonPrimary
                className={classes.btnCentreonBlue}
                variant="contained"
                label="Add this modifier"
                onClick={this.outputList}
              />
            </FormControl>
          )}
          {!activeForm && <div>
            {activePreviewButton ? (
              <ContainedButtonPrimary
                className={classes.btnCentreonBlue}
                label="Preview"
              />
            ) : null}
            {modifiersList.length > 0  || activeSaveButton ? (
              <ContainedButtonPrimary
                className={classes.btnCentreonBlue}
                variant="contained"
                label="Save Modifiers"
              />
            ) : (
              <ContainedButtonPrimary
                className={classes.btnCentreonBlue}
                variant="contained"
                color="secondary"
                disabled
                className={classes.button}
                label="Save Modifiers"
              />
            )}
          </div>}
        </form>
      </React.Fragment>
    );
  }
}

FormDynamic.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormDynamic);
