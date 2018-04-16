'use strict';

exports.__esModule = true;
exports.FormatUnderlinedIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FormatUnderlinedPath = function FormatUnderlinedPath() {
  return [_react2.default.createElement('path', { d: 'M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z', key: 'path0' })];
};

var FormatUnderlinedIcon = _icons.Icon.extend.attrs({
  children: FormatUnderlinedPath
})(_templateObject);

exports.default = FormatUnderlinedPath;
exports.FormatUnderlinedIcon = FormatUnderlinedIcon;