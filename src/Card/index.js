import React, { Component, Children } from "react";
import styles from './card.scss';

class Card extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.card}>
        <div className={styles["card-items"]}>{children}</div>
      </div>
    );
  }
}

export default Card;
