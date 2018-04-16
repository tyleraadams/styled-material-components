'use strict';

exports.__esModule = true;
exports.Divider = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  border: none;\n  background-color: rgba(0, 0, 0, 0.12);\n  height: 1px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  margin-right: 0px;\n  margin-left: ', ';\n  '], ['\n  border: none;\n  background-color: rgba(0, 0, 0, 0.12);\n  height: 1px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  margin-right: 0px;\n  margin-left: ', ';\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Divider = exports.Divider = _styledComponents2.default.hr.attrs({
  'data-smc': 'Divider'
})(_templateObject, function (_ref) {
  var inset = _ref.inset;

  var realInset = inset;
  if (typeof realInset === 'number') realInset = inset + 'px';
  if (!realInset) return '0px';
  return typeof realInset === 'string' ? realInset : '16px';
});