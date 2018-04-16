'use strict';

exports.__esModule = true;
exports.PermDeviceInformationIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PermDeviceInformationPath = function PermDeviceInformationPath() {
  return [_react2.default.createElement('path', { d: 'M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z', key: 'path0' })];
};

var PermDeviceInformationIcon = _icons.Icon.extend.attrs({
  children: PermDeviceInformationPath
})(_templateObject);

exports.default = PermDeviceInformationPath;
exports.PermDeviceInformationIcon = PermDeviceInformationIcon;