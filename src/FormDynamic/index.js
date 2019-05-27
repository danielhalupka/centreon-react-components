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

import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import SortableComponent from '../SortableList'

import ContainedButtonPrimary from '../Button/ButtonContained';
import ButtonAdd from '../Add/ButtonAdd';
import List from '@material-ui/core/List';
import InteractiveListItem from '../ListDraggable/list-item'
import Chips from '../Chip'

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Chip } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 'calc(100% - 15px)',
  },
  inputForm: {
    height: '2.5rem',
    '&:focus' : {
      backgroundColor: 'transparent',
    }
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  selectLabel: {
    position: 'relative',
    left: '3px',
    top: '17px',
    marginTop: '10px',
    display: 'block',
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  marginAround: {
    margin : '5px',
  }
});

class FormDynamic extends React.Component {
  state = {
    labelWidth: 4,
    name: "name",
    activeForm: false,
    activePreviewButton: false,
    activeSaveButton: false,
    title: '',
    modifiersList: [],
    fieldsInclusion: [
      {
        id: 1,
        title: 'Inclusion',
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
        title: 'Inclusion',
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
        title: 'Inclusion',
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
    ],
    fieldsExclusion: [
      {
        id: 1,
        title: 'Exclusion',
        placeholder: 'Select \"Exclusion\" in the list of operations',
        input_type: 'dropdown',
        values: [
          "Exclusion 1",
          "Exclusion 2",
          "Exclusion 3",
          "Exclusion 4"
        ],
        forId: 'id4',
        required: true
      }
    ],
    fieldsLowercase: [
      {
        id: 1,
        title: 'Lower Case',
        placeholder: 'Select \"Lowercase\" in the list of operations',
        input_type: 'dropdown',
        values: [
          "Lowercase 1",
          "Lowercase 2",
          "Lowercase 3",
          "Lowercase 4"
        ],
        forId: 'id5',
        required: true
      }
    ],
    fieldsUppercase: [
      {
        id: 1,
        title: 'Upper Case',
        placeholder: 'Select \"Lowercase\" in the list of operations',
        input_type: 'dropdown',
        values: [
          "Lowercase 1",
          "Lowercase 2",
          "Lowercase 3",
          "Lowercase 4"
        ],
        forId: 'id5',
        required: true
      }
    ],
    fieldsCapitalize: [
      {
        id: 1,
        title: 'Word Capitalizer',
        placeholder: 'Select \"Lowercase\" in the list of operations',
        input_type: 'dropdown',
        values: [
          "Lowercase 1",
          "Lowercase 2",
          "Lowercase 3",
          "Lowercase 4"
        ],
        forId: 'id5',
        required: true
      }
    ],
    itemsList: [],
    tempActiveList: false
  };

  componentDidMount() {
    console.log('did moount');
    this.setState({
    });
  }


  handleChange = name => event => {
    this.setState({
       [name]: event.target.value,
       activeSaveButton: true,
      });
  };


  activeForm = ()  => {
    console.log(this.state.fieldsInclusion[0].title);
    let text = this.state.fieldsInclusion[0].title;
    let number = Math.floor(Math.random() * 10);
    this.setState({
      activeForm: true,
      title: number + text
     });
    
  };
  activeSaveButton = ()  => {
    this.setState({
      activeSaveButton: true
     });
     console.log('save button form');
  };


  outputList = ()  => {
    let text = this.state.fieldsInclusion[0].title;

    let modifiersArr = this.state.modifiersList;
    modifiersArr.push(this.state.title.toString());
    console.log('saved!' + modifiersArr );
    this.setState({
      tempActiveList: true,
      activePreviewButton: true,
      activeForm: false,
      activeSaveButton: false,
      modifiersList: modifiersArr,
      title: text
     });
  };

  // deleteCurrentModifier = index => {
  //   console.log('delete modifier')
  //   let modifiersArr = this.state.modifiersList;
  //   modifiersArr.splice(index, 1);
  //   this.setState({
  //     modifiersList: modifiersArr,
  //    });
  // }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      modifiersList: arrayMove(this.state.modifiersList, oldIndex, newIndex),
    });
  };

  onDeleteCurrentElement = index => {
    console.log('delete modifier')
    let modifiersArr = this.state.modifiersList;
    this.setState({
      items: modifiersArr.splice(index, 1),
     });
  }
  

  render() {
    const { classes, ...rest } = this.props;
    const { fieldsInclusion, activeForm, activeSaveButton,activePreviewButton, tempActiveList, title, deleteModifier , deleteCurrentModifier, modifiersList} = this.state;

    return (
      <React.Fragment>
        <div>
          <Chip color="primary" avatar={<Avatar>+</Avatar>} className={classes.marginAround} label={this.state.fieldsInclusion[0].title} onClick={this.activeForm} />
          <Chip color="primary" avatar={<Avatar>+</Avatar>} className={classes.marginAround} label={this.state.fieldsExclusion[0].title}/>
          <Chip color="primary" avatar={<Avatar>+</Avatar>} className={classes.marginAround} label={this.state.fieldsLowercase[0].title}/>
        </div>
        <div>
          <Chip color="primary" avatar={<Avatar>+</Avatar>} className={classes.marginAround} label={this.state.fieldsUppercase[0].title}/>
          <Chip color="primary" avatar={<Avatar>+</Avatar>} className={classes.marginAround} label={this.state.fieldsCapitalize[0].title}/>
        </div>
    
        {tempActiveList ?
        <>
          <SortableComponent 
            items={modifiersList} 
            sortEnd={this.onSortEnd}
            
            currentdelete={() => {this.onDeleteCurrentElement}}
            {...rest}
          />
        </>
        : null}
     
          <form className={classes.root} autoComplete="on">
          {activeForm &&
          <FormControl variant="outlined" className={classes.formControl} >
            <Typography variant="caption" >
              <h3>{`Veuillez selectionner les paramètres de votre : ${this.state.title} `}</h3>
            </Typography>

            {fieldsInclusion.map(form => {
            return (
                <div  key={form.id}>
                    <InputLabel className={classes.selectLabel}
                      ref={ref => {
                        this.InputLabelRef = ref;
                      }}
                        htmlFor={form.forid}
                      {...rest}
                      value={form.placeholder}
                    >
                      {form.placeholder}
                    </InputLabel>
                    <Select
                      native
                      className={`${classes.formControl} ${classes.inputForm}`}
                      // value={this.state.age}
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
        } )}
         
          </FormControl>
        }
        <div>
          {activePreviewButton ?
            <ContainedButtonPrimary label="Preview"/>
            :
            null
          }
          {activeSaveButton ?
            <ContainedButtonPrimary  variant="contained" color="primary" label="Save" onClick={this.outputList} />
            :
            <ContainedButtonPrimary variant="contained" color="secondary" disabled className={classes.button} label="Save"/>
          }
          </div>
        </form>
    
      </React.Fragment>
    );
  }
}

FormDynamic.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormDynamic);
