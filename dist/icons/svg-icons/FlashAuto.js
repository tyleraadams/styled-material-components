'use strict';

exports.__esModule = true;
exports.FlashAutoIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FlashAutoPath = function FlashAutoPath() {
  return [_react2.default.createElement('path', { d: 'M3 2v12h3v9l7-12H9l4-9H3zm16 0h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9L19 2zm-2.15 5.65L18 4l1.15 3.65h-2.3z', key: 'path0' })];
};

var FlashAutoIcon = _icons.Icon.extend.attrs({
  children: FlashAutoPath
})(_templateObject);

exports.default = FlashAutoPath;
exports.FlashAutoIcon = FlashAutoIcon;