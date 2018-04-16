'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: relative;\n  display: flex;\n  align-items: center;\n  min-height: 48px;\n  padding: 8px 0px 8px 16px;\n\n  > .smc-list-avatar {\n    box-sizing: border-box;\n    padding-right: 16px;\n    min-width: 72px;\n  }\n\n  > .smc-list-content {\n    width: 100%;\n  }\n'], ['\n  position: relative;\n  display: flex;\n  align-items: center;\n  min-height: 48px;\n  padding: 8px 0px 8px 16px;\n\n  > .smc-list-avatar {\n    box-sizing: border-box;\n    padding-right: 16px;\n    min-width: 72px;\n  }\n\n  > .smc-list-content {\n    width: 100%;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Avatar = require('../Avatar');

var _Divider = require('../Divider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ListItemComponent = function ListItemComponent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      leftAvatar = _ref.leftAvatar,
      avatarSize = _ref.avatarSize,
      withDivider = _ref.withDivider;
  return _react2.default.createElement(
    'li',
    { className: className },
    leftAvatar && _react2.default.createElement(
      'div',
      { className: 'smc-list-avatar' },
      _react2.default.createElement(_Avatar.Avatar, { src: leftAvatar, size: avatarSize })
    ),
    _react2.default.createElement(
      'div',
      { className: 'smc-list-content' },
      children,
      Boolean(withDivider) && _react2.default.createElement(_Divider.Divider, null)
    )
  );
};

var ListItem = (0, _styledComponents2.default)(ListItemComponent)(_templateObject);

exports.default = ListItem;
module.exports = exports['default'];