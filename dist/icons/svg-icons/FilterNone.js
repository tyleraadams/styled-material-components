'use strict';

exports.__esModule = true;
exports.FilterNoneIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FilterNonePath = function FilterNonePath() {
  return [_react2.default.createElement('path', { d: 'M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z', key: 'path0' })];
};

var FilterNoneIcon = _icons.Icon.extend.attrs({
  children: FilterNonePath
})(_templateObject);

exports.default = FilterNonePath;
exports.FilterNoneIcon = FilterNoneIcon;