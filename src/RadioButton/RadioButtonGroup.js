import React from "react";
import "./radio-button.scss";

const RadioButtonGroup = ({ name, options, input, meta, ...rest }) => {
  const { error, touched } = meta;
  return (
  <div class={`custom-control custom-radio form-group`}>
    {options.map(option =>
      <div key={option.id} name={name} className='radio-input'>
        <input
          className="form-check-input"
          id={option.id}
          type='radio'
          {...input}
          value={option.value}
          checked={option.value === input.value}
        />
        <label htmlFor={option.id} className="custom-control-label">
          {option.label}
        </label>
        {touched && error ? (
          <div className="invalid-feedback">
            <i className="fas fa-exclamation-triangle" />
            <div className="field__msg  field__msg--error">{error}</div>
          </div>
        ) : null}
      </div>
    )}
  </div>
)};

export default RadioButtonGroup;
