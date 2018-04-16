'use strict';

exports.__esModule = true;
exports.Image = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  width: auto;\n  ', ' &, ', ' & {\n    max-width: 100%;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n'], ['\n  width: auto;\n  ', ' &, ', ' & {\n    max-width: 100%;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Avatar = require('./Avatar');

var _Circular = require('./Circular');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Image = exports.Image = _styledComponents2.default.img(_templateObject, _Avatar.Avatar, _Circular.Circular);