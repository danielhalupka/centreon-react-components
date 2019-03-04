"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./swithcer-input-field.scss");

var _IconClose = require("../../Icon/IconClose");

var _IconClose2 = _interopRequireDefault(_IconClose);

var _IconAction = require("../../Icon/IconAction");

var _IconAction2 = _interopRequireDefault(_IconAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwitcherInputField = function (_React$Component) {
  _inherits(SwitcherInputField, _React$Component);

  function SwitcherInputField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SwitcherInputField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SwitcherInputField.__proto__ || Object.getPrototypeOf(SwitcherInputField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: true,
      toggled: false
    }, _this.UNSAFE_componentDidMount = function () {
      var value = _this.props.value;

      if (value) {
        _this.setState({
          value: value
        });
      }
    }, _this.UNSAFE_componentWillReceiveProps = function (nextProps) {
      var value = nextProps.value;

      if (_this.state.value != value) {
        _this.setState({
          toggled: !value,
          value: value
        });
      }
    }, _this.onChange = function () {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          filterKey = _this$props.filterKey;
      var _this$state = _this.state,
          value = _this$state.value,
          toggled = _this$state.toggled;

      _this.setState({
        value: !value,
        toggled: !toggled
      });
      if (onChange) {
        onChange(!value, filterKey);
      }
    }, _this.toggled = function () {
      var toggled = _this.state.toggled;

      _this.setState({
        toggled: !toggled
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SwitcherInputField, [{
    key: "render",
    value: function render() {
      var customClass = this.props.customClass;
      var _state = this.state,
          value = _state.value,
          toggled = _state.toggled;

      return _react2.default.createElement(
        "div",
        { className: "switcher-input " + customClass },
        _react2.default.createElement(
          "label",
          {
            className: "switch" + (toggled ? " switch-active" : " switch-hide")
          },
          _react2.default.createElement("input", {
            type: "checkbox",
            checked: !value,
            onClick: this.onChange.bind(this)
          }),
          _react2.default.createElement(
            "span",
            { className: "switch-slider switch-round" },
            _react2.default.createElement(_IconClose2.default, { iconType: "small" }),
            _react2.default.createElement(_IconAction2.default, { iconActionType: "check" })
          )
        )
      );
    }
  }]);

  return SwitcherInputField;
}(_react2.default.Component);

exports.default = SwitcherInputField;