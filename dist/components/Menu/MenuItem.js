'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n'], ['\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  position: relative;\n  display: flex;\n  align-items: center;\n  min-height: 48px;\n  padding: 0px 40px 0px 16px;\n  z-index: 15;\n  transition-duration: 0.3s;\n  &:hover {\n    background-color: rgba(232, 232, 232, 1);\n    cursor: pointer;\n  } \n\n  &:focus {\n    background-color: rgba(232, 232, 232, 1);\n    outline: none;\n  }\n'], ['\n  position: relative;\n  display: flex;\n  align-items: center;\n  min-height: 48px;\n  padding: 0px 40px 0px 16px;\n  z-index: 15;\n  transition-duration: 0.3s;\n  &:hover {\n    background-color: rgba(232, 232, 232, 1);\n    cursor: pointer;\n  } \n\n  &:focus {\n    background-color: rgba(232, 232, 232, 1);\n    outline: none;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _withRipple = require('../../enhancers/withRipple');

var _withRipple2 = _interopRequireDefault(_withRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var StyledListItem = _styledComponents2.default.li(_templateObject);
var RippleListItem = (0, _withRipple2.default)(StyledListItem);

var MenuItemComponent = function MenuItemComponent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      onClick = _ref.onClick,
      onKeyDown = _ref.onKeyDown;
  return _react2.default.createElement(
    RippleListItem,
    {
      className: className + ' smc-menu-list-item',
      onClick: onClick,
      onKeyPress: onKeyDown,
      tabIndex: '0' },
    children
  );
};

var MenuItem = (0, _styledComponents2.default)(MenuItemComponent)(_templateObject2);

exports.default = MenuItem;
module.exports = exports['default'];