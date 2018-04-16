'use strict';

exports.__esModule = true;
exports.SystemUpdateAltIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SystemUpdateAltPath = function SystemUpdateAltPath() {
  return [_react2.default.createElement('path', { d: 'M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z', key: 'path0' })];
};

var SystemUpdateAltIcon = _icons.Icon.extend.attrs({
  children: SystemUpdateAltPath
})(_templateObject);

exports.default = SystemUpdateAltPath;
exports.SystemUpdateAltIcon = SystemUpdateAltIcon;