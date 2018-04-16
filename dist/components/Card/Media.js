'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  padding: 16px;\n\n  ', '\n'], ['\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  padding: 16px;\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n    background-image: url("', '");\n    background-size: cover;\n    background-repeat: no-repeat;\n    height: 12.313rem;\n  '], ['\n    background-image: url("', '");\n    background-size: cover;\n    background-repeat: no-repeat;\n    height: 12.313rem;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var MediaComponent = function MediaComponent(props) {
  return _react2.default.createElement(
    'section',
    { className: props.className + ' card-media' },
    props.children
  );
};

var Media = (0, _styledComponents2.default)(MediaComponent)(_templateObject, function (props) {
  return props.wide && (0, _styledComponents.css)(_templateObject2, props.src);
});

exports.default = Media;
module.exports = exports['default'];