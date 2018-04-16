'use strict';

exports.__esModule = true;
exports.DragHandleIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var DragHandlePath = function DragHandlePath() {
  return [_react2.default.createElement('path', { d: 'M20 9H4v2h16V9zM4 15h16v-2H4v2z', key: 'path0' })];
};

var DragHandleIcon = _icons.Icon.extend.attrs({
  children: DragHandlePath
})(_templateObject);

exports.default = DragHandlePath;
exports.DragHandleIcon = DragHandleIcon;