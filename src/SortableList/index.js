import React, { Component } from "react";
import {
  SortableContainer,
  SortableElement
} from "react-sortable-hoc";

import { withStyles } from "@material-ui/core/styles";

import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import IconMove from "../Icon/IconMove";
let iconUrl = '../../img/icons/icon-button-delete.svg'
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
    paddingInlineStart: '0px',
  },
  closeBtn: {
    position: 'absolute',
    backgroundImage: 'url(' + iconUrl + ')',
    backgroundSize: 'cover',
    width: '47px',
    height: '47px',
    zIndex: '999',
    top: '1px',
    padding: '10px',
    right: '0px',
  },
  moveBtn: {
    height: '47px',
  }
});
class SortableComponent extends Component {
  render() {
    const { classes, items, onDelete, onSort } = this.props;
    const SortableItem = SortableElement(({ value, onDelete }) => (
      <ListItem>
        <ListItemText  primary={value} />
        <ListItemSecondaryAction >
          <IconButton className={classes.moveBtn}>
            <IconMove />
          </IconButton>
          <IconButton className={classes.indexLower}>
            <DeleteIcon />
          </IconButton>
          <IconButton className={classes.closeBtn} aria-label="Delete" onClick={onDelete} >
          </IconButton>
        </ListItemSecondaryAction>
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
