'use strict';

exports.__esModule = true;
exports.FilterBAndWIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FilterBAndWPath = function FilterBAndWPath() {
  return [_react2.default.createElement('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16l-7-8v8H5l7-8V5h7v14z', key: 'path0' })];
};

var FilterBAndWIcon = _icons.Icon.extend.attrs({
  children: FilterBAndWPath
})(_templateObject);

exports.default = FilterBAndWPath;
exports.FilterBAndWIcon = FilterBAndWIcon;