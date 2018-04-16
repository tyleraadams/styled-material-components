'use strict';

exports.__esModule = true;
exports.FastForwardIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FastForwardPath = function FastForwardPath() {
  return [_react2.default.createElement('path', { d: 'M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z', key: 'path0' })];
};

var FastForwardIcon = _icons.Icon.extend.attrs({
  children: FastForwardPath
})(_templateObject);

exports.default = FastForwardPath;
exports.FastForwardIcon = FastForwardIcon;