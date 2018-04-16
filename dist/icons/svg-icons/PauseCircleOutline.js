'use strict';

exports.__esModule = true;
exports.PauseCircleOutlineIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PauseCircleOutlinePath = function PauseCircleOutlinePath() {
  return [_react2.default.createElement('path', { d: 'M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z', key: 'path0' })];
};

var PauseCircleOutlineIcon = _icons.Icon.extend.attrs({
  children: PauseCircleOutlinePath
})(_templateObject);

exports.default = PauseCircleOutlinePath;
exports.PauseCircleOutlineIcon = PauseCircleOutlineIcon;