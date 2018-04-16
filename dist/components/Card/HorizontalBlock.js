'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  box-sizing: border-box;\n  padding: 0;\n  padding-left: 0;\n  padding-right: 16px;\n  & .card-media-item {\n    margin-left: 16px;\n    margin-right: 0;\n  }\n  & .card-actions {\n    margin: 16px;\n  }\n'], ['\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  box-sizing: border-box;\n  padding: 0;\n  padding-left: 0;\n  padding-right: 16px;\n  & .card-media-item {\n    margin-left: 16px;\n    margin-right: 0;\n  }\n  & .card-actions {\n    margin: 16px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var HorizontalBlockComponent = function HorizontalBlockComponent(props) {
  return _react2.default.createElement(
    'div',
    { className: props.className + ' card-horizontal-block' },
    props.children
  );
};

var HorizontalBlock = (0, _styledComponents2.default)(HorizontalBlockComponent)(_templateObject);

exports.default = HorizontalBlock;
module.exports = exports['default'];