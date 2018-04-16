'use strict';

exports.__esModule = true;
exports.ArrowForwardIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ArrowForwardPath = function ArrowForwardPath() {
  return [_react2.default.createElement('path', { d: 'M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z', key: 'path0' })];
};

var ArrowForwardIcon = _icons.Icon.extend.attrs({
  children: ArrowForwardPath
})(_templateObject);

exports.default = ArrowForwardPath;
exports.ArrowForwardIcon = ArrowForwardIcon;