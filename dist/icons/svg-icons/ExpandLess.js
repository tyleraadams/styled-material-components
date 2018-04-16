'use strict';

exports.__esModule = true;
exports.ExpandLessIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ExpandLessPath = function ExpandLessPath() {
  return [_react2.default.createElement('path', { d: 'M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z', key: 'path0' })];
};

var ExpandLessIcon = _icons.Icon.extend.attrs({
  children: ExpandLessPath
})(_templateObject);

exports.default = ExpandLessPath;
exports.ExpandLessIcon = ExpandLessIcon;