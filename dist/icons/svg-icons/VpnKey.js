'use strict';

exports.__esModule = true;
exports.VpnKeyIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var VpnKeyPath = function VpnKeyPath() {
  return [_react2.default.createElement('path', { d: 'M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z', key: 'path0' })];
};

var VpnKeyIcon = _icons.Icon.extend.attrs({
  children: VpnKeyPath
})(_templateObject);

exports.default = VpnKeyPath;
exports.VpnKeyIcon = VpnKeyIcon;