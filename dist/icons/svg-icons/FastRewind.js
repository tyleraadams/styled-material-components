'use strict';

exports.__esModule = true;
exports.FastRewindIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FastRewindPath = function FastRewindPath() {
  return [_react2.default.createElement('path', { d: 'M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z', key: 'path0' })];
};

var FastRewindIcon = _icons.Icon.extend.attrs({
  children: FastRewindPath
})(_templateObject);

exports.default = FastRewindPath;
exports.FastRewindIcon = FastRewindIcon;