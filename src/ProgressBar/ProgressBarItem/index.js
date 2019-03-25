import React from 'react';
import '../progressbar.scss';

const ProgressBarItem = ({active, number}) => {
  return (
    <li className="progress-bar-item">
      <span className={`progress-bar-link ${active ? 'active' : ''}`}>
        {number}
      </span>
    </li>
  )
}

export default ProgressBarItem;