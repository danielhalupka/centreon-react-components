import React, { Component } from "react";
import styles from '../submenu.scss';

class SubmenuItems extends Component {
  render() {
    const { children } = this.props;
    return <ul className={styles["submenu-items"]}>{children}</ul>;
  }
}

export default SubmenuItems;
