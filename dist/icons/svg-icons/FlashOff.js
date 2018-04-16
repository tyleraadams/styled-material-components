'use strict';

exports.__esModule = true;
exports.FlashOffIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FlashOffPath = function FlashOffPath() {
  return [_react2.default.createElement('path', { d: 'M3.27 3L2 4.27l5 5V13h3v9l3.58-6.14L17.73 20 19 18.73 3.27 3zM17 10h-4l4-8H7v2.18l8.46 8.46L17 10z', key: 'path0' })];
};

var FlashOffIcon = _icons.Icon.extend.attrs({
  children: FlashOffPath
})(_templateObject);

exports.default = FlashOffPath;
exports.FlashOffIcon = FlashOffIcon;