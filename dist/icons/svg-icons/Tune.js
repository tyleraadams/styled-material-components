'use strict';

exports.__esModule = true;
exports.TuneIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TunePath = function TunePath() {
  return [_react2.default.createElement('path', { d: 'M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z', key: 'path0' })];
};

var TuneIcon = _icons.Icon.extend.attrs({
  children: TunePath
})(_templateObject);

exports.default = TunePath;
exports.TuneIcon = TuneIcon;