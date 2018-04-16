'use strict';

exports.__esModule = true;
exports.SubdirectoryArrowRightIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SubdirectoryArrowRightPath = function SubdirectoryArrowRightPath() {
  return [_react2.default.createElement('path', { d: 'M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z', key: 'path0' })];
};

var SubdirectoryArrowRightIcon = _icons.Icon.extend.attrs({
  children: SubdirectoryArrowRightPath
})(_templateObject);

exports.default = SubdirectoryArrowRightPath;
exports.SubdirectoryArrowRightIcon = SubdirectoryArrowRightIcon;