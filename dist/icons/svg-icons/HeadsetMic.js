'use strict';

exports.__esModule = true;
exports.HeadsetMicIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var HeadsetMicPath = function HeadsetMicPath() {
  return [_react2.default.createElement('path', { d: 'M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z', key: 'path0' })];
};

var HeadsetMicIcon = _icons.Icon.extend.attrs({
  children: HeadsetMicPath
})(_templateObject);

exports.default = HeadsetMicPath;
exports.HeadsetMicIcon = HeadsetMicIcon;