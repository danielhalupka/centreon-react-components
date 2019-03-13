"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./info-state-icon.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconInfo = function IconInfo(_ref) {
  var iconName = _ref.iconName,
      iconText = _ref.iconText,
      iconColor = _ref.iconColor;

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    iconName && _react2.default.createElement("span", { className: "info info-" + iconName + " " + (iconColor ? iconColor : '') }),
    iconText && _react2.default.createElement(
      "span",
      { className: "info-text" },
      iconText
    )
  );
};

exports.default = IconInfo;