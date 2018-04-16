'use strict';

exports.__esModule = true;
exports.Circular = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ', 'px;\n  height: ', 'px;\n  background: #bdbdbd;\n  border-radius: 50%;\n  overflow: hidden;\n'], ['\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ', 'px;\n  height: ', 'px;\n  background: #bdbdbd;\n  border-radius: 50%;\n  overflow: hidden;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Circular = exports.Circular = _styledComponents2.default.div(_templateObject, function (props) {
  return props.size || 40;
}, function (props) {
  return props.size || 40;
});