'use strict';

exports.__esModule = true;
exports.PermScanWifiIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PermScanWifiPath = function PermScanWifiPath() {
  return [_react2.default.createElement('path', { d: 'M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z', key: 'path0' })];
};

var PermScanWifiIcon = _icons.Icon.extend.attrs({
  children: PermScanWifiPath
})(_templateObject);

exports.default = PermScanWifiPath;
exports.PermScanWifiIcon = PermScanWifiIcon;