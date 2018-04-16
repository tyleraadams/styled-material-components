'use strict';

exports.__esModule = true;
exports.LocalPharmacyIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var LocalPharmacyPath = function LocalPharmacyPath() {
  return [_react2.default.createElement('path', { d: 'M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-5 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z', key: 'path0' })];
};

var LocalPharmacyIcon = _icons.Icon.extend.attrs({
  children: LocalPharmacyPath
})(_templateObject);

exports.default = LocalPharmacyPath;
exports.LocalPharmacyIcon = LocalPharmacyIcon;