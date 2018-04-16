'use strict';

exports.__esModule = true;
exports.StayPrimaryLandscapeIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var StayPrimaryLandscapePath = function StayPrimaryLandscapePath() {
  return [_react2.default.createElement('path', { d: 'M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z', key: 'path0' })];
};

var StayPrimaryLandscapeIcon = _icons.Icon.extend.attrs({
  children: StayPrimaryLandscapePath
})(_templateObject);

exports.default = StayPrimaryLandscapePath;
exports.StayPrimaryLandscapeIcon = StayPrimaryLandscapeIcon;