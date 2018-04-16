'use strict';

exports.__esModule = true;
exports.ExposurePlus1Icon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ExposurePlus1Path = function ExposurePlus1Path() {
  return [_react2.default.createElement('path', { d: 'M10 7H8v4H4v2h4v4h2v-4h4v-2h-4V7zm10 11h-2V7.38L15 8.4V6.7L19.7 5h.3v13z', key: 'path0' })];
};

var ExposurePlus1Icon = _icons.Icon.extend.attrs({
  children: ExposurePlus1Path
})(_templateObject);

exports.default = ExposurePlus1Path;
exports.ExposurePlus1Icon = ExposurePlus1Icon;