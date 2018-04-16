'use strict';

exports.__esModule = true;
exports.Filter1Icon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Filter1Path = function Filter1Path() {
  return [_react2.default.createElement('path', { d: 'M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 10h2V5h-4v2h2v8zm7-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z', key: 'path0' })];
};

var Filter1Icon = _icons.Icon.extend.attrs({
  children: Filter1Path
})(_templateObject);

exports.default = Filter1Path;
exports.Filter1Icon = Filter1Icon;