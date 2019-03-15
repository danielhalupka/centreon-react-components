import React, { Component } from "react";
import styles from './submenu.scss';
import classNames from 'classnames';
class SubmenuHeader extends Component {
  render() {
    const { submenuType, children } = this.props;
    console.log(styles)
    console.log(`submenu-${submenuType}`)
    console.log(styles[`submenu-${submenuType}`])
    return <div className={classNames({[styles[`submenu-${submenuType}`]]: true})}>{children}</div>;
  }
}

export default SubmenuHeader;
