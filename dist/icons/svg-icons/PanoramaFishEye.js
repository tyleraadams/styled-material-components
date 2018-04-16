'use strict';

exports.__esModule = true;
exports.PanoramaFishEyeIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PanoramaFishEyePath = function PanoramaFishEyePath() {
  return [_react2.default.createElement('path', { d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z', key: 'path0' })];
};

var PanoramaFishEyeIcon = _icons.Icon.extend.attrs({
  children: PanoramaFishEyePath
})(_templateObject);

exports.default = PanoramaFishEyePath;
exports.PanoramaFishEyeIcon = PanoramaFishEyeIcon;