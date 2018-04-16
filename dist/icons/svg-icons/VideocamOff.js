'use strict';

exports.__esModule = true;
exports.VideocamOffIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var VideocamOffPath = function VideocamOffPath() {
  return [_react2.default.createElement('path', { d: 'M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z', key: 'path0' })];
};

var VideocamOffIcon = _icons.Icon.extend.attrs({
  children: VideocamOffPath
})(_templateObject);

exports.default = VideocamOffPath;
exports.VideocamOffIcon = VideocamOffIcon;