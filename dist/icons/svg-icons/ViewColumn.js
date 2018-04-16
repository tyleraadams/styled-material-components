'use strict';

exports.__esModule = true;
exports.ViewColumnIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ViewColumnPath = function ViewColumnPath() {
  return [_react2.default.createElement('path', { d: 'M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z', key: 'path0' })];
};

var ViewColumnIcon = _icons.Icon.extend.attrs({
  children: ViewColumnPath
})(_templateObject);

exports.default = ViewColumnPath;
exports.ViewColumnIcon = ViewColumnIcon;