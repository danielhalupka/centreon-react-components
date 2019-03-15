import React, { Component } from "react";
import styles from './card.scss';
import classNames from 'classnames';

class CardItem extends Component {
  render() {
    const {
      children,
      itemBorderColor,
      itemFooterColor,
      itemFooterLabel,
      customClass,
      style
    } = this.props;
    return (
      <div
        className={classNames(styles['card-item'], styles[`card-item-bordered-${itemBorderColor}`], customClass)}
        style={style}
      >
        {children}
        <span
          className={classNames(styles['card-item-footer'], styles[`card-item-footer-${itemFooterColor}`])}
        >
          {itemFooterLabel}
        </span>
      </div>
    );
  }
}

export default CardItem;
