'use strict';

exports.__esModule = true;
exports.LaptopMacIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var LaptopMacPath = function LaptopMacPath() {
  return [_react2.default.createElement('path', { d: 'M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z', key: 'path0' })];
};

var LaptopMacIcon = _icons.Icon.extend.attrs({
  children: LaptopMacPath
})(_templateObject);

exports.default = LaptopMacPath;
exports.LaptopMacIcon = LaptopMacIcon;