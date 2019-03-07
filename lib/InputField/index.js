'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputField = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./input-text.scss');

var _IconInfo = require('../Icon/IconInfo');

var _IconInfo2 = _interopRequireDefault(_IconInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var InputField = function InputField(_ref) {
  var type = _ref.type,
      label = _ref.label,
      placeholder = _ref.placeholder,
      topRightLabel = _ref.topRightLabel,
      name = _ref.name,
      inputSize = _ref.inputSize,
      error = _ref.error,
      iconName = _ref.iconName,
      iconColor = _ref.iconColor,
      rest = _objectWithoutProperties(_ref, ['type', 'label', 'placeholder', 'topRightLabel', 'name', 'inputSize', 'error', 'iconName', 'iconColor']);

  return _react2.default.createElement(
    'div',
    { className: 'form-group ' + inputSize + (error ? ' has-danger' : '') },
    _react2.default.createElement(
      'label',
      { htmlFor: rest.id },
      _react2.default.createElement(
        'span',
        null,
        iconName ? _react2.default.createElement(_IconInfo2.default, { iconName: iconName, iconColor: iconColor }) : null,
        ' ',
        label
      ),
      _react2.default.createElement(
        'span',
        { className: 'label-option required' },
        topRightLabel ? topRightLabel : null
      )
    ),
    _react2.default.createElement('input', {
      name: name,
      type: type,
      placeholder: placeholder,
      className: 'form-control'
    }),
    error ? _react2.default.createElement(
      'div',
      { 'class': 'form-error' },
      error
    ) : null
  );
};

exports.InputField = InputField;
exports.default = InputField;