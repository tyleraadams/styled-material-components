'use strict';

exports.__esModule = true;
exports.FiberSmartRecordIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FiberSmartRecordPath = function FiberSmartRecordPath() {
  return [_react2.default.createElement('path', { d: 'M17 4.26v2.09c2.33.82 4 3.04 4 5.65s-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z', key: 'path0' })];
};

var FiberSmartRecordIcon = _icons.Icon.extend.attrs({
  children: FiberSmartRecordPath
})(_templateObject);

exports.default = FiberSmartRecordPath;
exports.FiberSmartRecordIcon = FiberSmartRecordIcon;