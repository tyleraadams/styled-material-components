'use strict';

exports.__esModule = true;
exports.VolumeDownIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var VolumeDownPath = function VolumeDownPath() {
  return [_react2.default.createElement('path', { d: 'M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z', key: 'path0' })];
};

var VolumeDownIcon = _icons.Icon.extend.attrs({
  children: VolumeDownPath
})(_templateObject);

exports.default = VolumeDownPath;
exports.VolumeDownIcon = VolumeDownIcon;