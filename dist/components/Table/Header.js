'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  font-size: 20px;\n  color: ', ';\n  text-align: left;\n  line-height: 64px;\n'], ['\n  font-size: 20px;\n  color: ', ';\n  text-align: left;\n  line-height: 64px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var HeaderComponent = function HeaderComponent(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return _react2.default.createElement(
    'div',
    { className: 'smc-table-header ' + className },
    children
  );
};

var Header = (0, _styledComponents2.default)(HeaderComponent)(_templateObject, function (props) {
  return props.theme.textColors.primary;
});

exports.default = Header;
module.exports = exports['default'];