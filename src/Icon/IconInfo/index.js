import React from "react";
import "./info-state-icon.scss";

const IconInfo = ({ iconName, iconText }) => {
  return (
    <React.Fragment>
      <span className={`info info-${iconName}`} />
      {iconText && <span className="info-text">{iconText}</span>}
    </React.Fragment>
  )
};

export default IconInfo;
