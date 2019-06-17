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

import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import FormTemplateFields from "../FormTemplate";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import FlipToFrontIcon from '@material-ui/icons/FlipToFront';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from "@material-ui/icons/Done";

import {
  SortableContainer,
  SortableElement
} from "react-sortable-hoc";


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
    padding: '12px',
  },
  maxWidth: {
    backgroundColor: "yellow"
  },
  listCustom: {
    listStyleType: 'none',
    marginTop: '15px',
    marginBottom: '15px',
    paddingInlineStart: '0px',
    maxHeight: '350px',
    overflowY: 'auto',
    '& li': {
      listStyle: 'none',
      '&:nth-child(even)': {
        backgroundColor: 'rgba(0, 162, 220, .1)',
      },
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
    '& span' : {
      paddingLeft: '15px',
      whiteSpace: 'nowrap',
      fontSize: '14px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '430px',
    }
  },
  actionButtons: {
    top: '25px',
    right: '4px',
    position: 'absolute',
  },
  closeBtn: {
    position: 'absolute',
    width: '36px',
    height: '36px',
    zIndex: '999',
    top: '1px',
    padding: '10px',
    right: '0px',
  },
  editBtn: {
    position: 'absolute',
    width: '36px',
    height: '36px',
    zIndex: '999',
    top: '1px',
    padding: '10px',
    right: '34px',
  },
  closeEditingForm: {
    position: 'absolute',
    width: '36px',
    height: '36px',
    zIndex: '999',
    right: '150px',
  },
  paddingSmall: {
   padding: '5px',
  },
  moveBtn: {
    height: '36px',
  },
  formEditing: {
    display: 'block',
    width: '90%',
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
    title: "title",
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
    const { classes, items, onDelete, onSort, editModifier, activeIndex, closeEditingForm, modifier, ...rest } = this.props;
    const { fieldsInclusion} = this.state;
    const SortableItem = SortableElement(({ value, onDelete, editModifier,isEditing, closeEditingForm}) => (

      <ListItem  {...rest} className={classes.listItem}>
        <ListItemText  primary={value} className={classes.listText}/>
        <ListItemSecondaryAction className={classes.actionButtons}>
          <IconButton className={`${classes.moveBtn} ${classes.paddingSmall}`}>
            <FlipToFrontIcon className={classes.iconSmall}/>
          </IconButton>
          {isEditing ?
            <IconButton className={`${classes.indexLower} ${classes.paddingSmall}`}>
              <DoneIcon />
            </IconButton>
          :
          <IconButton className={`${classes.indexLower} ${classes.paddingSmall}`}>
            <EditIcon />
          </IconButton>
          }

          <IconButton className={`${classes.indexLower} ${classes.paddingSmall}`}>
            <DeleteIcon />
          </IconButton>

          {isEditing ?
            <IconButton className={`${classes.editBtn} ${classes.paddingSmall}`} aria-label="Close edit" onClick={closeEditingForm} >
            </IconButton>
          :
            <IconButton className={`${classes.editBtn} ${classes.paddingSmall}`} aria-label="Edit" onClick={editModifier} >
            </IconButton>
          }
          <IconButton className={`${classes.closeBtn} ${classes.paddingSmall}`} aria-label="Delete" onClick={onDelete} >
          </IconButton>
        </ListItemSecondaryAction>

        {isEditing ?
          <form className={classes.formEditing} autoComplete="on">
            <FormTemplateFields  data={fieldsInclusion} onChange={this.handleChange('value')} modifier/>
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
