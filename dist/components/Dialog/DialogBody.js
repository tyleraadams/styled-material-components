'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  text-align: left;\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: 0.56px;\n  line-height: 20px;\n  display: block;\n  color: rgba(0, 0, 0, .54);\n  margin-top: 20px;\n  padding: 0 24px 24px;\n'], ['\n  text-align: left;\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: 0.56px;\n  line-height: 20px;\n  display: block;\n  color: rgba(0, 0, 0, .54);\n  margin-top: 20px;\n  padding: 0 24px 24px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var DialogBodyComponent = function DialogBodyComponent(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'smc-dialog-dialog-body ' + className },
    children
  );
};

var DialogBody = (0, _styledComponents2.default)(DialogBodyComponent)(_templateObject);

exports.default = DialogBody;
module.exports = exports['default'];