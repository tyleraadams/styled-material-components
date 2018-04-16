'use strict';

exports.__esModule = true;
exports.NearMeIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var NearMePath = function NearMePath() {
  return [_react2.default.createElement('path', { d: 'M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z', key: 'path0' })];
};

var NearMeIcon = _icons.Icon.extend.attrs({
  children: NearMePath
})(_templateObject);

exports.default = NearMePath;
exports.NearMeIcon = NearMeIcon;