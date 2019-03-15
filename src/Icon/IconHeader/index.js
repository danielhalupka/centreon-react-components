import React from "react";
import styles from "./icon-header.scss";
import classNames from "classnames";

const IconHeader = ({ iconType, iconName, style, onClick }) => {
  return (
    <span className={styles["icons-wrap"]} style={style}>
      <span onClick={onClick} className={classNames(styles['iconmoon'], {[styles[`icon-${iconType}`]]: true})} />
      <span className={styles["icon__name"]}>{iconName}</span>
    </span>
  );
};

export default IconHeader;
