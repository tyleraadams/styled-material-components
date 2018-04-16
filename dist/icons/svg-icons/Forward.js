'use strict';

exports.__esModule = true;
exports.ForwardIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ForwardPath = function ForwardPath() {
  return [_react2.default.createElement('path', { d: 'M12 8V4l8 8-8 8v-4H4V8z', key: 'path0' })];
};

var ForwardIcon = _icons.Icon.extend.attrs({
  children: ForwardPath
})(_templateObject);

exports.default = ForwardPath;
exports.ForwardIcon = ForwardIcon;