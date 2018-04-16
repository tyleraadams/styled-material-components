'use strict';

exports.__esModule = true;
exports.DehazeIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var DehazePath = function DehazePath() {
  return [_react2.default.createElement('path', { d: 'M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z', key: 'path0' })];
};

var DehazeIcon = _icons.Icon.extend.attrs({
  children: DehazePath
})(_templateObject);

exports.default = DehazePath;
exports.DehazeIcon = DehazeIcon;