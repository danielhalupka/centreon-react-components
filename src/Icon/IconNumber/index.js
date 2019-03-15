import React from "react";
import styles from "./icon-number.scss";
import classNames from "classnames";

const IconNumber = ({ iconColor, iconType, iconNumber, iconLink }) => {
  return (
    <a
      className={classNames(styles['icons'], styles['icons-number'], styles[`${iconType}`], styles[`${iconColor}`])}
      {...iconLink && { href: iconLink }}
    >
      <span className={styles["number-wrap"]}>
        <span className={styles["number-count"]}>{iconNumber}</span>
      </span>
    </a>
  );
};

export default IconNumber;
