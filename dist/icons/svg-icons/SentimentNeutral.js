'use strict';

exports.__esModule = true;
exports.SentimentNeutralIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SentimentNeutralPath = function SentimentNeutralPath() {
  return [_react2.default.createElement('path', { d: 'M9 14h6v1.5H9z', key: 'path0' }), _react2.default.createElement('path', { d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z', key: 'path1' })];
};

var SentimentNeutralIcon = _icons.Icon.extend.attrs({
  children: SentimentNeutralPath
})(_templateObject);

exports.default = SentimentNeutralPath;
exports.SentimentNeutralIcon = SentimentNeutralIcon;