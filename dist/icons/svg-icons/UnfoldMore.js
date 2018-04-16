'use strict';

exports.__esModule = true;
exports.UnfoldMoreIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var UnfoldMorePath = function UnfoldMorePath() {
  return [_react2.default.createElement('path', { d: 'M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z', key: 'path0' })];
};

var UnfoldMoreIcon = _icons.Icon.extend.attrs({
  children: UnfoldMorePath
})(_templateObject);

exports.default = UnfoldMorePath;
exports.UnfoldMoreIcon = UnfoldMoreIcon;