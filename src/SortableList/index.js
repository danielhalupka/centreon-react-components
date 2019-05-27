import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import IconMove from '../Icon/IconMove';

import InteractiveListItem from '../ListDraggable/list-item'
const styles = theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    },
    indexTop: {
      zIndex: '999',
      backgroundColor: 'red'
    },
    indexLower: {
      zIndex: '999',
      backgroundColor: 'grey'
    },
    maxWidth: {
      maxWidth: 'calc(100%-30px)',
      backgroundColor: 'yellow'
    }
  });


class SortableComponent extends Component {
  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
  };

  
  deleteCurrentElement = index => {
    console.log('delete modifier')
    let modifiersArr = this.state.items;

    this.setState({
      items: modifiersArr.splice(index, 1),
     });
  }
  
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  render() {
    const {classes, ...rest } = this.props;
    const SortableItem = SortableElement(({value}) =>

    <ListItem  {...rest}>
      <ListItemText  className={classes.indexLower}
          primary={value}
      />
      <ListItemSecondaryAction  className={classes.indexTop} >
          <IconButton >
              <IconMove/>
          </IconButton>
          <button aria-label="Delete"  onClick={this.props.currentdelete} >
              <DeleteIcon />
          </button>
      </ListItemSecondaryAction>
    </ListItem>

    );

    const SortableList = SortableContainer(({items}) => {
    return (
        <ul>
            {items.map((value, index) => (
                <SortableItem
                    key={`item-${index}`}
                    index={index}
                    value={value}
                    currentdelete= {() => {this.deleteCurrentElement(index)}}
                    {...rest}
            />
            ))}
        </ul>
    );
    });
    return <SortableList className={classes.maxWidth} items={this.state.items} onSortEnd={this.props.sortEnd} {...rest}/>;
  }
}



export default withStyles(styles)(SortableComponent);