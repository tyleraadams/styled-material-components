'use strict';

exports.__esModule = true;
exports.PriorityHighIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PriorityHighPath = function PriorityHighPath() {
  return [_react2.default.createElement('path', { d: 'M10 3h4v12h-4z', key: 'path0' })];
};

var PriorityHighIcon = _icons.Icon.extend.attrs({
  children: PriorityHighPath
})(_templateObject);

exports.default = PriorityHighPath;
exports.PriorityHighIcon = PriorityHighIcon;