import React, { Component } from "react";
import styles from '../submenu.scss';
import classNames from 'classnames';

class SubmenuItem extends Component {
  render() {
    const { dotColored, submenuTitle, submenuCount } = this.props;
    return (
      <li className={styles["submenu-item"]}>
        <span className={styles["submenu-item-title"]}>
          <span className={classNames(styles['submenu-item-dot'], {[styles[`dot-${dotColored}`]]: true})} />
          {submenuTitle}
        </span>
        <span className={styles["submenu-item-count"]}>{submenuCount}</span>
      </li>
    );
  }
}

export default SubmenuItem;
