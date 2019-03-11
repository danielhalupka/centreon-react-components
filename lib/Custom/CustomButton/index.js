'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./custom-button.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomButton = function CustomButton(_ref) {
  var color = _ref.color,
      label = _ref.label;

  return _react2.default.createElement(
    'button',
    { className: 'custom-button custom-button-' + color },
    label
  );
};

exports.default = CustomButton;