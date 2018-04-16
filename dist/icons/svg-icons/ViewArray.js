'use strict';

exports.__esModule = true;
exports.ViewArrayIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ViewArrayPath = function ViewArrayPath() {
  return [_react2.default.createElement('path', { d: 'M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z', key: 'path0' })];
};

var ViewArrayIcon = _icons.Icon.extend.attrs({
  children: ViewArrayPath
})(_templateObject);

exports.default = ViewArrayPath;
exports.ViewArrayIcon = ViewArrayIcon;