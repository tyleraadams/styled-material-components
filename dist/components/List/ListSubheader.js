'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  align-items: center;\n  color: ', ';\n  display: flex;\n  min-height: 48px;\n  position: relative;\n  padding-left: 16px;\n  ', ';\n'], ['\n  align-items: center;\n  color: ', ';\n  display: flex;\n  min-height: 48px;\n  position: relative;\n  padding-left: 16px;\n  ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _typography = require('../../mixins/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ListSubheaderComponent = function ListSubheaderComponent(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    'li',
    { className: className + ' smc-list-subheader' },
    children
  );
};

var ListSubheader = (0, _styledComponents2.default)(ListSubheaderComponent)(_templateObject, function (props) {
  return props.primary ? props.theme.primary : props.theme.textColors.secondary;
}, (0, _typography2.default)('body1'));

exports.default = ListSubheader;
module.exports = exports['default'];