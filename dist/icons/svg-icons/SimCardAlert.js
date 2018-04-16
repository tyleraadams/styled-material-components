'use strict';

exports.__esModule = true;
exports.SimCardAlertIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SimCardAlertPath = function SimCardAlertPath() {
  return [_react2.default.createElement('path', { d: 'M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 15h-2v-2h2v2zm0-4h-2V8h2v5z', key: 'path0' })];
};

var SimCardAlertIcon = _icons.Icon.extend.attrs({
  children: SimCardAlertPath
})(_templateObject);

exports.default = SimCardAlertPath;
exports.SimCardAlertIcon = SimCardAlertIcon;