'use strict';

exports.__esModule = true;
exports.WebAssetIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var WebAssetPath = function WebAssetPath() {
  return [_react2.default.createElement('path', { d: 'M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z', key: 'path0' })];
};

var WebAssetIcon = _icons.Icon.extend.attrs({
  children: WebAssetPath
})(_templateObject);

exports.default = WebAssetPath;
exports.WebAssetIcon = WebAssetIcon;