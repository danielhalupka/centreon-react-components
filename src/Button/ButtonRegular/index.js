import React from "react";
import IconAction from "../../Icon/IconAction";
import classnames from 'classnames';
import styles from './button.scss';


const Button = ({
  children,
  label,
  onClick,
  buttonType,
  color,
  iconActionType,
  customClass,
  customSecond,
  style,
  iconColor,
  iconPosition
}) => (
  <button
    className={classnames(styles.button, {[styles[`button-${buttonType}-${color}`]]: true}, styles.linear, styles[customClass ? customClass : ''], styles[customSecond ? customSecond : ''], styles[`button-${iconPosition}`])}
    onClick={onClick}
    style={style}
  >
    {iconActionType ? <IconAction className={classnames({[styles[`button-icon`]]: true})} iconColor={iconColor} iconActionType={iconActionType} /> : null}
    {label}
    {children}
  </button>
);
export default Button;
