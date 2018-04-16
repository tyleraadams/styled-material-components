'use strict';

exports.__esModule = true;
exports.ScannerIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ScannerPath = function ScannerPath() {
  return [_react2.default.createElement('path', { d: 'M19.8 10.7L4.2 5l-.7 1.9L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8zM7 17H5v-2h2v2zm12 0H9v-2h10v2z', key: 'path0' })];
};

var ScannerIcon = _icons.Icon.extend.attrs({
  children: ScannerPath
})(_templateObject);

exports.default = ScannerPath;
exports.ScannerIcon = ScannerIcon;