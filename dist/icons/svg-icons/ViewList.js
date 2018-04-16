'use strict';

exports.__esModule = true;
exports.ViewListIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ViewListPath = function ViewListPath() {
  return [_react2.default.createElement('path', { d: 'M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z', key: 'path0' })];
};

var ViewListIcon = _icons.Icon.extend.attrs({
  children: ViewListPath
})(_templateObject);

exports.default = ViewListPath;
exports.ViewListIcon = ViewListIcon;