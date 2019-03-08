import React from 'react';
import './custom-button.scss';

const CustomButton = ({color, label}) => { 
  return (
    <button className={`custom custom-button-${color}`}>
      {label}
    </button>
  )
}

export default CustomButton;