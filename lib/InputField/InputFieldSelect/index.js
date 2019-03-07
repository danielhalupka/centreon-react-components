'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

require('./input-field-select.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var options = [{ value: 'remote1', label: 'Remote Server 1' }, { value: 'remote2', label: 'Remote Server 2' }, { value: 'remote3', label: 'Remote Server 3' }];

var InputFieldSelect = function (_Component) {
  _inherits(InputFieldSelect, _Component);

  function InputFieldSelect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InputFieldSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputFieldSelect.__proto__ || Object.getPrototypeOf(InputFieldSelect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedOption: null
    }, _this.handleChange = function (selectedOption) {
      _this.setState({ selectedOption: selectedOption });
      console.log('Option selected:', selectedOption);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InputFieldSelect, [{
    key: 'render',
    value: function render() {
      var customClass = this.props.customClass;
      var selectedOption = this.state.selectedOption;

      return _react2.default.createElement(_reactSelect2.default, {
        className: 'select-option ' + (customClass ? customClass : ''),
        value: selectedOption,
        onChange: this.handleChange,
        options: options,
        isMulti: true,
        placeholder: 'Search here'
      });
    }
  }]);

  return InputFieldSelect;
}(_react.Component);

exports.default = InputFieldSelect;