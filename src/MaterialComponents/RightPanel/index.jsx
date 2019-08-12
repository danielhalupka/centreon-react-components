import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconClose from '../Icons/IconClose';

import ExpandableSection from './ExpandableSection';

const PANEL_WIDTH = 560;

const Header = styled('div')(() => ({
  paddingRight: 140,
  paddingLeft: 20,
  boxShadow: '0px 3px 4px 0px rgba(0,0,0,0.15)',
  WebkitBoxShadow: '0px 3px 4px 0px rgba(0,0,0,0.15)',
  MozBoxShadow: '0px 3px 4px 0px rgba(0,0,0,0.15)',
  width: PANEL_WIDTH,
}));

const HeaderTitle = styled(Typography)({
  display: 'inline-block',
  verticalAlign: 'middle',
  margin: 0,
  marginLeft: 7,
  fontSize: 20,
  lineHeight: '49px',
  fontWeight: 600,
});

const useStyles = makeStyles({
  modal: {
    pointerEvents: 'none',
  },
  backdrop: {
    backgroundColor: 'transparent',
  },
  paper: {
    top: 52,
    right: 0,
    bottom: 30,
    backgroundColor: '#ededed',
    minWidth: PANEL_WIDTH,
    width: PANEL_WIDTH,
    position: 'absolute',
    pointerEvents: 'all',
  },
});

const RightPanel = ({ active, sections, onClose }) => {
  const { modal, backdrop, paper } = useStyles();

  return (
    <Drawer
      ModalProps={{ className: modal }}
      BackdropProps={{ className: backdrop, onClick: onClose }}
      PaperProps={{ className: paper }}
      open={active}
      anchor="right"
    >
      <Header>
        <HeaderTitle variant="h3">Africa office availability</HeaderTitle>
        <IconClose onClick={onClose} />
      </Header>
      <List>
        {sections.map(({ title, component, expandable }) =>
          expandable ? (
            <ExpandableSection title={title}>{component}</ExpandableSection>
          ) : (
            <ListItem>{component}</ListItem>
          ),
        )}
      </List>
    </Drawer>
  );
};

RightPanel.defaultProps = {
  onClose: () => {},
};

RightPanel.propTypes = {
  active: PropTypes.bool.isRequired,
  sections: PropTypes.arrayOf().isRequired,
  onClose: PropTypes.func,
};

export default RightPanel;
