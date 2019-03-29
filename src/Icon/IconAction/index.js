import React from "react";
import classnames from 'classnames';
import styles from './action-icons.scss';

const IconAction = ({ className, iconActionType, iconColor, ...rest }) => (
  <span className={classnames(styles["icon-action"], {[styles[`icon-action-${iconActionType}`]]: true}, styles[iconColor ? iconColor : ''], className)} {...rest}/>
);

export default IconAction;