/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './sidebar.scss';
import Logo from '../Logo';
import LogoMini from '../Logo/LogoMini';
import Navigation from '../Navigation';

class Sidebar extends Component {
  state = {
    active: false,
  };

  toggleNavigation = () => {
    const { active } = this.state;
    this.setState({
      active: !active,
    });
  };

  render() {
    const { navigationData, reactRoutes, style } = this.props;
    const { active } = this.state;

    return (
      <nav
        className={classnames(
          styles.sidebar,
          styles[active ? 'active' : 'mini'],
        )}
        id="sidebar"
        style={style}
      >
        <div className={classnames(styles['sidebar-inner'])}>
          {active ? (
            <Logo onClick={this.toggleNavigation} />
          ) : (
            <LogoMini onClick={this.toggleNavigation} />
          )}
          <Navigation
            navigationData={navigationData || []}
            reactRoutes={reactRoutes || {}}
            sidebarActive={active}
          />
          <div
            className={classnames(styles['sidebar-toggle-wrap'])}
            onClick={this.toggleNavigation}
          >
            <span className={classnames(styles['sidebar-toggle-icon'])} />
          </div>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
