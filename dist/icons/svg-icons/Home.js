'use strict';

exports.__esModule = true;
exports.HomeIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var HomePath = function HomePath() {
  return [_react2.default.createElement('path', { d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z', key: 'path0' })];
};

var HomeIcon = _icons.Icon.extend.attrs({
  children: HomePath
})(_templateObject);

exports.default = HomePath;
exports.HomeIcon = HomeIcon;