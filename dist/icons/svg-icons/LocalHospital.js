'use strict';

exports.__esModule = true;
exports.LocalHospitalIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var LocalHospitalPath = function LocalHospitalPath() {
  return [_react2.default.createElement('path', { d: 'M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z', key: 'path0' })];
};

var LocalHospitalIcon = _icons.Icon.extend.attrs({
  children: LocalHospitalPath
})(_templateObject);

exports.default = LocalHospitalPath;
exports.LocalHospitalIcon = LocalHospitalIcon;