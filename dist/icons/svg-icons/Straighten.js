'use strict';

exports.__esModule = true;
exports.StraightenIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var StraightenPath = function StraightenPath() {
  return [_react2.default.createElement('path', { d: 'M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z', key: 'path0' })];
};

var StraightenIcon = _icons.Icon.extend.attrs({
  children: StraightenPath
})(_templateObject);

exports.default = StraightenPath;
exports.StraightenIcon = StraightenIcon;