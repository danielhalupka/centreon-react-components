import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import IconMove from '../Icon/IconMove';
import ContainedButtonPrimary from '../Button/ButtonContained';

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
  });

  class InteractiveListItem extends React.Component {
    state = {
      dense: false,
      secondary: false,
    };
    

    render() {
      const { classes, ...rest } = this.props;
      const { secondary } = this.state;

      return (
        <ListItem  {...rest}>
            <ListItemText
                primary="initial"
                secondary={secondary ? 'Secondary text' : null}
                {...rest}
            />
            <ListItemSecondaryAction {...rest}>
                <IconButton >
                    <IconMove {...rest}/>
                </IconButton>
                <IconButton aria-label="Delete" onClick={this.props.deleteCurrentElem} {...rest}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
      );
    }
  }
  InteractiveListItem.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(InteractiveListItem);