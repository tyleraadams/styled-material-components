'use strict';

exports.__esModule = true;
exports.ControlPointIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ControlPointPath = function ControlPointPath() {
  return [_react2.default.createElement('path', { d: 'M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z', key: 'path0' })];
};

var ControlPointIcon = _icons.Icon.extend.attrs({
  children: ControlPointPath
})(_templateObject);

exports.default = ControlPointPath;
exports.ControlPointIcon = ControlPointIcon;