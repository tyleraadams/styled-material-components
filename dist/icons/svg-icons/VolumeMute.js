'use strict';

exports.__esModule = true;
exports.VolumeMuteIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var VolumeMutePath = function VolumeMutePath() {
  return [_react2.default.createElement('path', { d: 'M7 9v6h4l5 5V4l-5 5H7z', key: 'path0' })];
};

var VolumeMuteIcon = _icons.Icon.extend.attrs({
  children: VolumeMutePath
})(_templateObject);

exports.default = VolumeMutePath;
exports.VolumeMuteIcon = VolumeMuteIcon;