import React, { Component } from "react";
import ProgressBarSteps from "./ProgressBarSteps";
import ProgressBarItem from "./ProgressBarItem";
import "./progressbar.scss";

class ProgressBar extends Component {

  getComponent = (step, number) => {
    const { component, active, ...other } = step;

    if (component) {
      const Component = component;
      return (
        <Component {...other}>
          <ProgressBarItem
            number={number + 1}
            active={active}
          />
        </Component>
      )
    }

    return (
      <ProgressBarItem
        number={number + 1}
        active={active}
      />
    )
  }

  render() {
    const { steps } = this.props;

    return (
      <ProgressBarSteps>
        {steps
          ? steps.map((step, number) => (
              this.getComponent(step, number)
            ))
          : null}
      </ProgressBarSteps>
    );
  }
}

export default ProgressBar;
