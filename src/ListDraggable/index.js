import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

import IconMove from '../Icon/IconMove';
import ContainedButtonPrimary from '../Button/ButtonContained';
import InteractiveListItem from './list-item'

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

  let itemsList = [1]
  function generate(element) {
    return itemsList.map(value =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

  class InteractiveList extends React.Component {
    state = {
      dense: false,
      secondary: false,
    };

    render() {
      const { classes, ...rest } = this.props;
      const { dense } = this.state;

      return (
        <div className={classes.root}>
            <div className={classes.demo}>
            <List dragover dense={dense}  {...rest} >
                <InteractiveListItem/>
            </List>
            </div>
        </div>
      );
    }
  }
  InteractiveList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(InteractiveList);