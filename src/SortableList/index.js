import React, { Component } from "react";
import {
  SortableContainer,
  SortableElement
} from "react-sortable-hoc";

import { withStyles } from "@material-ui/core/styles";

import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from '@material-ui/core/TextField'
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import ContainedButtonPrimary from "../Button/ButtonContained";

import IconMove from "../Icon/IconMove";
import IconEdit from "../Icon/IconEdit";
import CloseEdit from "../Icon/CloseEdit";
const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 52,
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  },
  indexLower: {
    zIndex: "888",
  },
  maxWidth: {
    backgroundColor: "yellow"
  },
  listCustom: {
    listStyleType: 'none',
    paddingInlineStart: '20px',
    marginBottom: '0px',
    '& li': {
      listStyle: 'none',
    }
  },
  listItem: {
    minHeight: '54px',
    paddingRight: '0px',
    paddingLeft: '0px',
  },
  listText: {
    position: 'absolute',
    top: '15px',
    paddingLeft: '0px',
    height: '30px',
  },
  actionButtons: {
    top: '25px',
    right: '4px',
    position: 'absolute',
  },
  closeBtn: {
    position: 'absolute',
    width: '47px',
    height: '47px',
    zIndex: '999',
    top: '1px',
    padding: '10px',
    right: '0px',
  },
  editBtn: {
    position: 'absolute',
    width: '47px',
    height: '47px',
    zIndex: '999',
    top: '1px',
    padding: '10px',
    right: '50px',
  },
  closeEditingForm: {
    position: 'absolute',
    width: '47px',
    height: '47px',
    zIndex: '999',
    border: '1px solid red',
    right: '150px',
  },
  moveBtn: {
    height: '47px',
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
  },
  formControl: {
    margin: '8px 0',
    minWidth: "calc(100% - 15px)"
  },
  formEditing: {
    display: 'block',
    maxWidth: '350px',
    padding: '10px 0px',
    top: '12px',
    position: 'relative',
    marginBottom: '29px',
  },
  formEditModifier: {
    display: 'none',
  },
  active: {
    'formEditModifier': {
      display: 'block',
    },
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
  editForm: {
    display: 'none',
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
});
class SortableComponent extends Component {

  state = {
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
  }

  handleChange = name => event => {
    let source = event.target.value;
    console.log(source);
    this.setState({
      [name]: source,
      activeSaveButton: true
    });
    return source
  };

  render() {
    const { classes, items, onDelete, onSort, editModifier, activeIndex, closeEditingForm, ...rest } = this.props;
    const { fieldsInclusion} = this.state;
    const SortableItem = SortableElement(({ value, onDelete, editModifier,isEditing, closeEditingForm}) => (

      <ListItem  {...rest} className={classes.listItem}>
        <ListItemText  primary={value} className={classes.listText}/>
        <ListItemSecondaryAction className={classes.actionButtons}>
          <IconButton className={classes.moveBtn}>
            <IconMove />
          </IconButton>

          {isEditing ?
            <IconButton className={classes.indexLower}>
              <CloseEdit />
            </IconButton>
          :
          <IconButton className={classes.indexLower}>
            <IconEdit />
          </IconButton>
          }

          <IconButton className={classes.indexLower}>
            <DeleteIcon />
          </IconButton>

          {isEditing ?
            <IconButton className={classes.editBtn} aria-label="Close edit" onClick={closeEditingForm} >
            </IconButton>
          :
            <IconButton className={classes.editBtn} aria-label="Edit" onClick={editModifier} >
            </IconButton>
          }

          <IconButton className={classes.closeBtn} aria-label="Delete" onClick={onDelete} >
          </IconButton>
        </ListItemSecondaryAction>

        {isEditing ?
          <form className={classes.formEditing} autoComplete="on">
            <FormControl variant="outlined" className={classes.formControl}>
              <Typography variant="caption">
                <h3>
                  {`Veuillez editer les paramètres de votre : ${
                    this.state.title
                  } `}
                </h3>
              </Typography>

              {fieldsInclusion.map(form => {
                switch (form.input_type) {
                case 'dropdown':
                return (
                  <div  key={form.id} >
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
            </FormControl>
          </form>
          : null
        }
      </ListItem>
    ));

    const SortableList = SortableContainer(({ items }) => {
      return (
        <ul className={classes.listCustom} >
          {items.map((value, index) => (
            <SortableItem
              key={`item-${index}`}
              index={index}
              value={value}
              onDelete={() => {
                onDelete(index);
              }}
              editModifier={() => {
                editModifier(index);
              }}
              closeEditingForm={() => {
                closeEditingForm();
              }}
              isEditing={activeIndex == index}
            />
          ))}
        </ul>
      );
    });
    return (
      <SortableList
        className={classes.maxWidth}
        items={items}
        onSortEnd={onSort}
      />
    );
  }
}

export default withStyles(styles)(SortableComponent);
