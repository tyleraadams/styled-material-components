'use strict';

exports.__esModule = true;
exports.ChangeHistoryIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ChangeHistoryPath = function ChangeHistoryPath() {
  return [_react2.default.createElement('path', { d: 'M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z', key: 'path0' })];
};

var ChangeHistoryIcon = _icons.Icon.extend.attrs({
  children: ChangeHistoryPath
})(_templateObject);

exports.default = ChangeHistoryPath;
exports.ChangeHistoryIcon = ChangeHistoryIcon;