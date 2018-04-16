'use strict';

exports.__esModule = true;
exports.StayPrimaryPortraitIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var StayPrimaryPortraitPath = function StayPrimaryPortraitPath() {
  return [_react2.default.createElement('path', { d: 'M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z', key: 'path0' })];
};

var StayPrimaryPortraitIcon = _icons.Icon.extend.attrs({
  children: StayPrimaryPortraitPath
})(_templateObject);

exports.default = StayPrimaryPortraitPath;
exports.StayPrimaryPortraitIcon = StayPrimaryPortraitIcon;