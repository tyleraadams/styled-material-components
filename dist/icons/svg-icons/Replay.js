'use strict';

exports.__esModule = true;
exports.ReplayIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ReplayPath = function ReplayPath() {
  return [_react2.default.createElement('path', { d: 'M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z', key: 'path0' })];
};

var ReplayIcon = _icons.Icon.extend.attrs({
  children: ReplayPath
})(_templateObject);

exports.default = ReplayPath;
exports.ReplayIcon = ReplayIcon;