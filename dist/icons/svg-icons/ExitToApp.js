'use strict';

exports.__esModule = true;
exports.ExitToAppIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ExitToAppPath = function ExitToAppPath() {
  return [_react2.default.createElement('path', { d: 'M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z', key: 'path0' })];
};

var ExitToAppIcon = _icons.Icon.extend.attrs({
  children: ExitToAppPath
})(_templateObject);

exports.default = ExitToAppPath;
exports.ExitToAppIcon = ExitToAppIcon;