'use strict';

exports.__esModule = true;
exports.SwapVerticalCircleIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SwapVerticalCirclePath = function SwapVerticalCirclePath() {
  return [_react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z', key: 'path0' })];
};

var SwapVerticalCircleIcon = _icons.Icon.extend.attrs({
  children: SwapVerticalCirclePath
})(_templateObject);

exports.default = SwapVerticalCirclePath;
exports.SwapVerticalCircleIcon = SwapVerticalCircleIcon;