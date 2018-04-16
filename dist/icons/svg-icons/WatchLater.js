'use strict';

exports.__esModule = true;
exports.WatchLaterIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var WatchLaterPath = function WatchLaterPath() {
  return [_react2.default.createElement('path', { d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z', key: 'path0' })];
};

var WatchLaterIcon = _icons.Icon.extend.attrs({
  children: WatchLaterPath
})(_templateObject);

exports.default = WatchLaterPath;
exports.WatchLaterIcon = WatchLaterIcon;