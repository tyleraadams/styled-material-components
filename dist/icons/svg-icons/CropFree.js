'use strict';

exports.__esModule = true;
exports.CropFreeIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var CropFreePath = function CropFreePath() {
  return [_react2.default.createElement('path', { d: 'M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2zm2 10H3v4c0 1.1.9 2 2 2h4v-2H5v-4zm14 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zm0-16h-4v2h4v4h2V5c0-1.1-.9-2-2-2z', key: 'path0' })];
};

var CropFreeIcon = _icons.Icon.extend.attrs({
  children: CropFreePath
})(_templateObject);

exports.default = CropFreePath;
exports.CropFreeIcon = CropFreeIcon;