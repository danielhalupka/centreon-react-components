'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('../../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

require('./list-sortable.scss');

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
            _react2.default.createElement('th', { scope: 'col' }),
            _react2.default.createElement('th', { scope: 'col' }),
            _react2.default.createElement('th', { scope: 'col' }),
            _react2.default.createElement('th', { scope: 'col' })
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
              _react2.default.createElement(_Checkbox2.default, { label: 'ALL HOSTS', name: 'all-hosts', iconColor: 'green' })
            ),
            _react2.default.createElement(
              'td',
              null,
              'Mark'
            ),
            _react2.default.createElement(
              'td',
              null,
              'Otto'
            ),
            _react2.default.createElement(
              'td',
              null,
              '@mdo'
            ),
            _react2.default.createElement(
              'td',
              null,
              '@mdo'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(_Checkbox2.default, { label: 'ALL HOSTS', name: 'all-hosts', iconColor: 'green' })
            ),
            _react2.default.createElement(
              'td',
              null,
              'Jacob'
            ),
            _react2.default.createElement(
              'td',
              null,
              'Thornton'
            ),
            _react2.default.createElement(
              'td',
              null,
              '@fat'
            ),
            _react2.default.createElement(
              'td',
              null,
              'Thornton'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(_Checkbox2.default, { label: 'ALL HOSTS', name: 'all-hosts', iconColor: 'green' })
            ),
            _react2.default.createElement(
              'td',
              null,
              'Larry'
            ),
            _react2.default.createElement(
              'td',
              null,
              'the Bird'
            ),
            _react2.default.createElement(
              'td',
              null,
              '@twitter'
            ),
            _react2.default.createElement(
              'td',
              null,
              'the Bird'
            )
          )
        )
      );
    }
  }]);

  return ListSortable;
}(_react.Component);

exports.default = ListSortable;