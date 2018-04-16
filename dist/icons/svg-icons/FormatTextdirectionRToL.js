'use strict';

exports.__esModule = true;
exports.FormatTextdirectionRToLIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FormatTextdirectionRToLPath = function FormatTextdirectionRToLPath() {
  return [_react2.default.createElement('path', { d: 'M10 10v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4zm-2 7v-3l-4 4 4 4v-3h12v-2H8z', key: 'path0' })];
};

var FormatTextdirectionRToLIcon = _icons.Icon.extend.attrs({
  children: FormatTextdirectionRToLPath
})(_templateObject);

exports.default = FormatTextdirectionRToLPath;
exports.FormatTextdirectionRToLIcon = FormatTextdirectionRToLIcon;