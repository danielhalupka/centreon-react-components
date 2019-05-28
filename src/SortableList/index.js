import React, { Component } from "react";
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from "react-sortable-hoc";

import { withStyles } from "@material-ui/core/styles";

import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import IconMove from "../Icon/IconMove";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  },
  indexTop: {
    zIndex: "999",
  },
  indexLower: {
    zIndex: "999",
  },
  maxWidth: {
    maxWidth: "calc(100%-30px)",
    backgroundColor: "yellow"
  }
});

class SortableComponent extends Component {
  render() {
    const { classes, items, onDelete, onSort } = this.props;
    const SortableItem = SortableElement(({ value, onDelete }) => (
      <ListItem>
        <ListItemText className={classes.indexLower} primary={value} />
        <ListItemSecondaryAction className={classes.indexTop}>
          <IconButton>
            <IconMove />
          </IconButton>
          <button aria-label="Delete" onClick={onDelete}>
            <DeleteIcon />
          </button>
        </ListItemSecondaryAction>
      </ListItem>
    ));

    const SortableList = SortableContainer(({ items }) => {
      return (
        <ul>
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
