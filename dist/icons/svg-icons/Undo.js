'use strict';

exports.__esModule = true;
exports.UndoIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var UndoPath = function UndoPath() {
  return [_react2.default.createElement('path', { d: 'M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z', key: 'path0' })];
};

var UndoIcon = _icons.Icon.extend.attrs({
  children: UndoPath
})(_templateObject);

exports.default = UndoPath;
exports.UndoIcon = UndoIcon;