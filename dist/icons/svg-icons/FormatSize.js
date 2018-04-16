'use strict';

exports.__esModule = true;
exports.FormatSizeIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FormatSizePath = function FormatSizePath() {
  return [_react2.default.createElement('path', { d: 'M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z', key: 'path0' })];
};

var FormatSizeIcon = _icons.Icon.extend.attrs({
  children: FormatSizePath
})(_templateObject);

exports.default = FormatSizePath;
exports.FormatSizeIcon = FormatSizeIcon;