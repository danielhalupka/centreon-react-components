import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, styled } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Box from '@material-ui/core/Box';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';

import IconClose from '../Icons/IconClose';
import ExpandableSection from './ExpandableSection';

const PANEL_WIDTH = 560;

const Header = styled(Box)({
  paddingRight: 140,
  paddingLeft: 20,
  boxShadow: '0px 3px 4px 0px rgba(0,0,0,0.15)',
  WebkitBoxShadow: '0px 3px 4px 0px rgba(0,0,0,0.15)',
  MozBoxShadow: '0px 3px 4px 0px rgba(0,0,0,0.15)',
  width: '100%',
  height: 49,
});

const useDrawerStyles = makeStyles({
  modal: {
    pointerEvents: 'none',
  },
  backdrop: {
    backgroundColor: 'transparent',
  },
  paper: {
    top: 52,
    right: 0,
    backgroundColor: '#ededed',
    minWidth: PANEL_WIDTH,
    position: 'absolute',
    pointerEvents: 'all',
    height: '100%',
  },
});

const Body = styled(Box)({
  height: '100%',
});

const MainPanel = styled(Box)({
  width: 540,
});

const SecondaryPanelBar = styled(Box)({
  border: '1px solid #D6D6D8',
  width: 20,
  height: '100%',
  cursor: 'pointer',
});

const SecondaryPanel = styled('div')({
  width: ({ active }) => (active ? 500 : 0),
  transition: '.3s ease-in-out',
  overflow: 'hidden',
  backgroundColor: '#c7c8c9',
  padding: ({ active }) => (active ? 15 : 0),
});

const ToggleSecondaryPanelIcon = (Icon) =>
  styled(Icon)({
    width: 15,
    margin: 'auto',
  });

const OpenSecondaryPanelIcon = ToggleSecondaryPanelIcon(ArrowBackIos);

const CloseSecondaryPanelIcon = ToggleSecondaryPanelIcon(ArrowForwardIos);

const RightPanel = ({
  active,
  headerComponent,
  secondaryPanelComponent,
  onSecondaryPanelClose,
  sections,
  onClose,
}) => {
  const [secondaryPanelActive, setSecondaryPanelActive] = useState(false);
  const { modal, backdrop, paper } = useDrawerStyles();

  useEffect(() => {
    setSecondaryPanelActive(secondaryPanelComponent !== undefined);
  }, [secondaryPanelComponent])

  const toggleSecondaryPanel = () => {
    if (!secondaryPanelComponent) {
      return;
    }
    setSecondaryPanelActive(!secondaryPanelActive);
  };

  const onAnimationEnd = () => {
    if (!secondaryPanelActive) {
      onSecondaryPanelClose();
    }
  }

  return (
    <Drawer
      ModalProps={{ className: modal }}
      BackdropProps={{ className: backdrop, onClick: onClose }}
      PaperProps={{ className: paper }}
      open={active}
      anchor="right"
    >
      <Header display="flex" flexDirection="row">
        <Box flexGrow={1}>{headerComponent}</Box>
        <Box>
          <IconClose onClick={onClose} />
        </Box>
      </Header>
      <Body display="flex" flexDirection="row" flexGrow={1}>
        <MainPanel flexGrow={1}>
          <List>
            {sections.map(({ title, component, expandable }) =>
              expandable ? (
                <ExpandableSection title={title}>{component}</ExpandableSection>
              ) : (
                <ListItem>{component}</ListItem>
              ),
            )}
          </List>
        </MainPanel>
        <SecondaryPanelBar
          display="flex"
          alignItems="center"
          alignContent="center"
          onClick={toggleSecondaryPanel}
        >
          {secondaryPanelActive ? (
            <CloseSecondaryPanelIcon />
          ) : (
            <OpenSecondaryPanelIcon />
          )}
        </SecondaryPanelBar>
        <SecondaryPanel active={secondaryPanelActive} onAnimationEnd={onAnimationEnd}>
          {secondaryPanelComponent}
        </SecondaryPanel>
      </Body>
    </Drawer>
  );
};

RightPanel.defaultProps = {
  onClose: () => {},
};

RightPanel.propTypes = {
  active: PropTypes.bool.isRequired,
  headerComponent: PropTypes.node.isRequired,
  secondaryPanelComponent: PropTypes.node.isRequired,
  sections: PropTypes.arrayOf.isRequired,
  onClose: PropTypes.func,
};

export default RightPanel;
