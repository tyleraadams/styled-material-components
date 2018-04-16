'use strict';

exports.__esModule = true;
exports.ExposureNeg1Icon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ExposureNeg1Path = function ExposureNeg1Path() {
  return [_react2.default.createElement('path', { d: 'M4 11v2h8v-2H4zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3v13z', key: 'path0' })];
};

var ExposureNeg1Icon = _icons.Icon.extend.attrs({
  children: ExposureNeg1Path
})(_templateObject);

exports.default = ExposureNeg1Path;
exports.ExposureNeg1Icon = ExposureNeg1Icon;