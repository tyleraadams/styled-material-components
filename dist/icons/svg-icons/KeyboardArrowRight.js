'use strict';

exports.__esModule = true;
exports.KeyboardArrowRightIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var KeyboardArrowRightPath = function KeyboardArrowRightPath() {
  return [_react2.default.createElement('path', { d: 'M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z', key: 'path0' })];
};

var KeyboardArrowRightIcon = _icons.Icon.extend.attrs({
  children: KeyboardArrowRightPath
})(_templateObject);

exports.default = KeyboardArrowRightPath;
exports.KeyboardArrowRightIcon = KeyboardArrowRightIcon;