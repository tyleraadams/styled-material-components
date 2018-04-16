'use strict';

exports.__esModule = true;
exports.Crop75Icon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Crop75Path = function Crop75Path() {
  return [_react2.default.createElement('path', { d: 'M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z', key: 'path0' })];
};

var Crop75Icon = _icons.Icon.extend.attrs({
  children: Crop75Path
})(_templateObject);

exports.default = Crop75Path;
exports.Crop75Icon = Crop75Icon;