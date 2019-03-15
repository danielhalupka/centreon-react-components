import React from "react";
import styles from "./icon-toggle-submenu.scss";
import classNames from "classnames";

const IconToggleSubmenu = ({ iconType, ...rest }) => {
  return <span className={classNames({[styles[`icons-toggle-${iconType}`]]: true})} {...rest} />;
};

export default IconToggleSubmenu;
