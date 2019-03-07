'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./textarea.scss');

var _IconInfo = require('../../Icon/IconInfo');

var _IconInfo2 = _interopRequireDefault(_IconInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputFieldTextarea = function InputFieldTextarea(_ref) {
  var error = _ref.error,
      label = _ref.label,
      textareaType = _ref.textareaType,
      iconName = _ref.iconName,
      iconColor = _ref.iconColor;

  return _react2.default.createElement(
    'div',
    { className: 'form-group textarea ' + textareaType + (error ? ' has-danger' : '') },
    label ? _react2.default.createElement(
      'label',
      null,
      iconName ? _react2.default.createElement(_IconInfo2.default, { iconName: iconName, iconColor: iconColor }) : null,
      ' ',
      label,
      ' '
    ) : null,
    _react2.default.createElement('textarea', { className: 'form-control', rows: '3' }),
    error ? _react2.default.createElement(
      'div',
      { className: 'form-error' },
      error
    ) : null
  );
};

exports.default = InputFieldTextarea;