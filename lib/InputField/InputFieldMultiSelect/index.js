'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('../../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _ScrollBar = require('../../ScrollBar');

var _ScrollBar2 = _interopRequireDefault(_ScrollBar);

var _IconToggleSubmenu = require('../../Icon/IconToggleSubmenu');

var _IconToggleSubmenu2 = _interopRequireDefault(_IconToggleSubmenu);

require('./input-multi-select.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputFieldMultiSelect = function (_Component) {
  _inherits(InputFieldMultiSelect, _Component);

  function InputFieldMultiSelect() {
    _classCallCheck(this, InputFieldMultiSelect);

    return _possibleConstructorReturn(this, (InputFieldMultiSelect.__proto__ || Object.getPrototypeOf(InputFieldMultiSelect)).apply(this, arguments));
  }

  _createClass(InputFieldMultiSelect, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          size = _props.size,
          active = _props.active;

      return _react2.default.createElement(
        'div',
        { className: 'multi-select ' + (size ? size : '') + ' ' + (active ? active : '') },
        _react2.default.createElement(
          'div',
          { className: 'multi-select-wrap' },
          _react2.default.createElement('input', { className: 'multi-select-input', type: 'text', placeholder: 'Search' }),
          _react2.default.createElement(_IconToggleSubmenu2.default, { iconType: 'arrow' })
        ),
        _react2.default.createElement(
          _ScrollBar2.default,
          null,
          _react2.default.createElement(
            'div',
            { className: 'multi-select-dropdown' },
            _react2.default.createElement(_Checkbox2.default, { label: 'Test', name: 'test', id: 'test', iconColor: 'green', checked: true }),
            _react2.default.createElement(_Checkbox2.default, { label: 'Test 2', name: 'test2', id: 'test2', iconColor: 'green', checked: true }),
            _react2.default.createElement(_Checkbox2.default, { label: 'Test 3', name: 'test3', id: 'test3', iconColor: 'green' }),
            _react2.default.createElement(_Checkbox2.default, { label: 'Test 4', name: 'test4', id: 'test4', iconColor: 'green' })
          )
        )
      );
    }
  }]);

  return InputFieldMultiSelect;
}(_react.Component);

exports.default = InputFieldMultiSelect;