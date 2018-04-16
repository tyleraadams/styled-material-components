'use strict';

exports.__esModule = true;
exports.ChromeReaderModeIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ChromeReaderModePath = function ChromeReaderModePath() {
  return [_react2.default.createElement('path', { d: 'M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z', key: 'path0' })];
};

var ChromeReaderModeIcon = _icons.Icon.extend.attrs({
  children: ChromeReaderModePath
})(_templateObject);

exports.default = ChromeReaderModePath;
exports.ChromeReaderModeIcon = ChromeReaderModeIcon;