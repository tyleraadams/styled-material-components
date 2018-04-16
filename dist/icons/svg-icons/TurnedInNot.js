'use strict';

exports.__esModule = true;
exports.TurnedInNotIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TurnedInNotPath = function TurnedInNotPath() {
  return [_react2.default.createElement('path', { d: 'M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z', key: 'path0' })];
};

var TurnedInNotIcon = _icons.Icon.extend.attrs({
  children: TurnedInNotPath
})(_templateObject);

exports.default = TurnedInNotPath;
exports.TurnedInNotIcon = TurnedInNotIcon;