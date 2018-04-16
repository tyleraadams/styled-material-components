'use strict';

exports.__esModule = true;
exports.Battery60Icon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Battery60Path = function Battery60Path() {
  return [_react2.default.createElement('path', { fillOpacity: '.3', d: 'M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h10V5.33z', key: 'path0' }), _react2.default.createElement('path', { d: 'M7 11v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11H7z', key: 'path1' })];
};

var Battery60Icon = _icons.Icon.extend.attrs({
  children: Battery60Path
})(_templateObject);

exports.default = Battery60Path;
exports.Battery60Icon = Battery60Icon;