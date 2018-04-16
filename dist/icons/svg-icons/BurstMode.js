'use strict';

exports.__esModule = true;
exports.BurstModeIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var BurstModePath = function BurstModePath() {
  return [_react2.default.createElement('path', { d: 'M1 5h2v14H1zm4 0h2v14H5zm17 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM11 17l2.5-3.15L15.29 16l2.5-3.22L21 17H11z', key: 'path0' })];
};

var BurstModeIcon = _icons.Icon.extend.attrs({
  children: BurstModePath
})(_templateObject);

exports.default = BurstModePath;
exports.BurstModeIcon = BurstModeIcon;