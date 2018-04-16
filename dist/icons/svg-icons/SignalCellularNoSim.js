'use strict';

exports.__esModule = true;
exports.SignalCellularNoSimIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SignalCellularNoSimPath = function SignalCellularNoSimPath() {
  return [_react2.default.createElement('path', { d: 'M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z', key: 'path0' })];
};

var SignalCellularNoSimIcon = _icons.Icon.extend.attrs({
  children: SignalCellularNoSimPath
})(_templateObject);

exports.default = SignalCellularNoSimPath;
exports.SignalCellularNoSimIcon = SignalCellularNoSimIcon;