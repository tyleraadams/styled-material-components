'use strict';

exports.__esModule = true;
exports.PublishIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PublishPath = function PublishPath() {
  return [_react2.default.createElement('path', { d: 'M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z', key: 'path0' })];
};

var PublishIcon = _icons.Icon.extend.attrs({
  children: PublishPath
})(_templateObject);

exports.default = PublishPath;
exports.PublishIcon = PublishIcon;