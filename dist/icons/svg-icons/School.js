'use strict';

exports.__esModule = true;
exports.SchoolIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SchoolPath = function SchoolPath() {
  return [_react2.default.createElement('path', { d: 'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z', key: 'path0' })];
};

var SchoolIcon = _icons.Icon.extend.attrs({
  children: SchoolPath
})(_templateObject);

exports.default = SchoolPath;
exports.SchoolIcon = SchoolIcon;