'use strict';

exports.__esModule = true;
exports.SubdirectoryArrowLeftIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SubdirectoryArrowLeftPath = function SubdirectoryArrowLeftPath() {
  return [_react2.default.createElement('path', { d: 'M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z', key: 'path0' })];
};

var SubdirectoryArrowLeftIcon = _icons.Icon.extend.attrs({
  children: SubdirectoryArrowLeftPath
})(_templateObject);

exports.default = SubdirectoryArrowLeftPath;
exports.SubdirectoryArrowLeftIcon = SubdirectoryArrowLeftIcon;