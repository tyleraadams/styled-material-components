'use strict';

exports.__esModule = true;
exports.Crop32Icon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Crop32Path = function Crop32Path() {
  return [_react2.default.createElement('path', { d: 'M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12z', key: 'path0' })];
};

var Crop32Icon = _icons.Icon.extend.attrs({
  children: Crop32Path
})(_templateObject);

exports.default = Crop32Path;
exports.Crop32Icon = Crop32Icon;