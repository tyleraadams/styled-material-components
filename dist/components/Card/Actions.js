'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  box-sizing: border-box;\n  padding: 8px;\n  color: ', ';\n  & button {\n    margin: 0 8px 0 0;\n  }\n  ', '\n'], ['\n  display: flex;\n  box-sizing: border-box;\n  padding: 8px;\n  color: ', ';\n  & button {\n    margin: 0 8px 0 0;\n  }\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ActionsComponent = function ActionsComponent(props) {
  return _react2.default.createElement(
    'section',
    { className: props.className + ' card-actions' },
    props.children
  );
};

var Actions = (0, _styledComponents2.default)(ActionsComponent)(_templateObject, function (props) {
  return props.theme.textColors.primary;
}, function (props) {
  return props.vertical && '\n    flex-flow: column;\n    align-items: flex-start;\n    & button {\n      margin: 0 0 4px;\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n  ';
});

exports.default = Actions;
module.exports = exports['default'];