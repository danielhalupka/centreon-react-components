'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('../../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _InputFieldSelect = require('../../InputField/InputFieldSelect');

var _InputFieldSelect2 = _interopRequireDefault(_InputFieldSelect);

require('./list-sortable.scss');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListSortable = function (_Component) {
  _inherits(ListSortable, _Component);

  function ListSortable() {
    _classCallCheck(this, ListSortable);

    return _possibleConstructorReturn(this, (ListSortable.__proto__ || Object.getPrototypeOf(ListSortable)).apply(this, arguments));
  }

  _createClass(ListSortable, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'table',
        { 'class': 'list list-sortable' },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              { scope: 'col' },
              'INDICATORS'
            ),
            _react2.default.createElement(
              'th',
              { scope: 'col' },
              'TYPE'
            ),
            _react2.default.createElement(
              'th',
              { scope: 'col' },
              'DEFINE IMPACT'
            ),
            _react2.default.createElement(
              'th',
              { scope: 'col' },
              'WARNING'
            ),
            _react2.default.createElement(
              'th',
              { scope: 'col' },
              'CRITICAL'
            ),
            _react2.default.createElement(
              'th',
              { scope: 'col' },
              'UNKOWN'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(_Checkbox2.default, { label: 'Lorem Ipsum dolor sit amet', name: 'all-hosts', iconColor: 'green' })
            ),
            _react2.default.createElement(
              'td',
              null,
              'Type 1'
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(_.SwitcherMode, null)
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(_InputFieldSelect2.default, { customClass: 'small' })
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(_InputFieldSelect2.default, { customClass: 'small' })
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(_InputFieldSelect2.default, { customClass: 'small' })
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(_Checkbox2.default, { label: 'Lorem Ipsum dolor sit amet', name: 'all-hosts', iconColor: 'green' })
            ),
            _react2.default.createElement(
              'td',
              null,
              'Type 2'
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(_.SwitcherMode, null)
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(_InputFieldSelect2.default, { customClass: 'small' })
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(_InputFieldSelect2.default, { customClass: 'small' })
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(_InputFieldSelect2.default, { customClass: 'small' })
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(_Checkbox2.default, { label: 'Lorem Ipsum dolor sit amet', name: 'all-hosts', iconColor: 'green' })
            ),
            _react2.default.createElement(
              'td',
              null,
              'Type 3'
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(_.SwitcherMode, null)
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(_InputFieldSelect2.default, { customClass: 'small' })
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(_InputFieldSelect2.default, { customClass: 'small' })
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(_InputFieldSelect2.default, { customClass: 'small' })
            )
          )
        )
      );
    }
  }]);

  return ListSortable;
}(_react.Component);

exports.default = ListSortable;