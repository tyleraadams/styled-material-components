'use strict';

exports.__esModule = true;
exports.Crop169Icon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Crop169Path = function Crop169Path() {
  return [_react2.default.createElement('path', { d: 'M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z', key: 'path0' })];
};

var Crop169Icon = _icons.Icon.extend.attrs({
  children: Crop169Path
})(_templateObject);

exports.default = Crop169Path;
exports.Crop169Icon = Crop169Icon;