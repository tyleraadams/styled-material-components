'use strict';

exports.__esModule = true;
exports.Looks4Icon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Looks4Path = function Looks4Path() {
  return [_react2.default.createElement('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 14h-2v-4H9V7h2v4h2V7h2v10z', key: 'path0' })];
};

var Looks4Icon = _icons.Icon.extend.attrs({
  children: Looks4Path
})(_templateObject);

exports.default = Looks4Path;
exports.Looks4Icon = Looks4Icon;