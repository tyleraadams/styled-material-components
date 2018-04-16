'use strict';

exports.__esModule = true;
exports.UnfoldLessIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var UnfoldLessPath = function UnfoldLessPath() {
  return [_react2.default.createElement('path', { d: 'M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z', key: 'path0' })];
};

var UnfoldLessIcon = _icons.Icon.extend.attrs({
  children: UnfoldLessPath
})(_templateObject);

exports.default = UnfoldLessPath;
exports.UnfoldLessIcon = UnfoldLessIcon;