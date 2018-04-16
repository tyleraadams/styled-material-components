'use strict';

exports.__esModule = true;
exports.Crop54Icon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Crop54Path = function Crop54Path() {
  return [_react2.default.createElement('path', { d: 'M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z', key: 'path0' })];
};

var Crop54Icon = _icons.Icon.extend.attrs({
  children: Crop54Path
})(_templateObject);

exports.default = Crop54Path;
exports.Crop54Icon = Crop54Icon;