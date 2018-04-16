'use strict';

exports.__esModule = true;
exports.contrastingColor = exports.getPrimaryText = exports.getWhite = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n    ', ': ', ';\n  '], ['\n    ', ': ', ';\n  ']);

var _styledComponents = require('styled-components');

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var getWhite = exports.getWhite = function getWhite(_ref) {
  var theme = _ref.theme;
  return theme.white;
};
var getPrimaryText = exports.getPrimaryText = function getPrimaryText(_ref2) {
  var theme = _ref2.theme;
  return theme.textColors.primary;
};

var contrastingColor = exports.contrastingColor = function contrastingColor(style, hexCode) {
  var color = new _color2.default(hexCode);
  var mode = color.luminosity() < 0.26 ? 'WHITE' : 'PRIMARY';
  return (0, _styledComponents.css)(_templateObject, style, mode === 'WHITE' ? getWhite : getPrimaryText);
};