'use strict';

exports.__esModule = true;
exports.PregnantWomanIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PregnantWomanPath = function PregnantWomanPath() {
  return [_react2.default.createElement('path', { d: 'M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z', key: 'path0' })];
};

var PregnantWomanIcon = _icons.Icon.extend.attrs({
  children: PregnantWomanPath
})(_templateObject);

exports.default = PregnantWomanPath;
exports.PregnantWomanIcon = PregnantWomanIcon;