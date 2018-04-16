'use strict';

exports.__esModule = true;
exports.ViewHeadlineIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ViewHeadlinePath = function ViewHeadlinePath() {
  return [_react2.default.createElement('path', { d: 'M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z', key: 'path0' })];
};

var ViewHeadlineIcon = _icons.Icon.extend.attrs({
  children: ViewHeadlinePath
})(_templateObject);

exports.default = ViewHeadlinePath;
exports.ViewHeadlineIcon = ViewHeadlineIcon;