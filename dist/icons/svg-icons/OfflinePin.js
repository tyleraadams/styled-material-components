'use strict';

exports.__esModule = true;
exports.OfflinePinIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var OfflinePinPath = function OfflinePinPath() {
  return [_react2.default.createElement('path', { d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z', key: 'path0' })];
};

var OfflinePinIcon = _icons.Icon.extend.attrs({
  children: OfflinePinPath
})(_templateObject);

exports.default = OfflinePinPath;
exports.OfflinePinIcon = OfflinePinIcon;