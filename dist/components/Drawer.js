'use strict';

exports.__esModule = true;
exports.Drawer = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  width: 240px;\n'], ['\n  width: 240px;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  body {\n    &.shift {\n      &.right {\n        &:after {\n          content: "";\n          ', '\n          display: inline-table;\n          box-sizing: border-box;\n        }\n      }\n      &.left {\n        &:before {\n          content: "";\n          ', '\n          display: inline-table;\n          box-sizing: border-box;\n        }\n      }\n    }\n  }\n'], ['\n  body {\n    &.shift {\n      &.right {\n        &:after {\n          content: "";\n          ', '\n          display: inline-table;\n          box-sizing: border-box;\n        }\n      }\n      &.left {\n        &:before {\n          content: "";\n          ', '\n          display: inline-table;\n          box-sizing: border-box;\n        }\n      }\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  background-color: white;\n  ', '\n  bottom: 0;\n  top: 0;\n  overflow: hidden;\n  position: absolute;\n  transition: transform .195s;\n  ', '\n  will-change: transform;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  touch-action: none;\n  ', ';\n\n  &.left {\n    left: 0;\n    transform: translateX(-107%);\n    ', '\n  }\n\n  &.right {\n    right: 0;\n    transform: translateX(107%);\n    ', ';\n  }\n\n  &.open {\n    transition: transform .225s;\n    transform: none;\n  }\n'], ['\n  background-color: white;\n  ', '\n  bottom: 0;\n  top: 0;\n  overflow: hidden;\n  position: absolute;\n  transition: transform .195s;\n  ', '\n  will-change: transform;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  touch-action: none;\n  ', ';\n\n  &.left {\n    left: 0;\n    transform: translateX(-107%);\n    ', '\n  }\n\n  &.right {\n    right: 0;\n    transform: translateX(107%);\n    ', ';\n  }\n\n  &.open {\n    transition: transform .225s;\n    transform: none;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _elevation = require('../mixins/elevation');

var _elevation2 = _interopRequireDefault(_elevation);

var _Portal = require('../components/Portal');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var drawerSizing = (0, _styledComponents.css)(_templateObject);

// eslint-disable-next-line no-unused-expressions
(0, _styledComponents.injectGlobal)(_templateObject2, drawerSizing, drawerSizing);

var BaseDrawer = function BaseDrawer(props) {
  var _classNames;

  var drawerClass = (0, _classnames2.default)((_classNames = {}, _classNames[props.className] = true, _classNames.open = props.open, _classNames.left = props.attachment === 'left', _classNames.right = props.attachment === 'right', _classNames['smc-drawer'] = true, _classNames));
  return _react2.default.createElement(
    'aside',
    { className: drawerClass },
    props.children
  );
};

var StyledDrawer = (0, _styledComponents2.default)(BaseDrawer)(_templateObject3, function (props) {
  return props.temporary && (0, _elevation2.default)(16);
}, drawerSizing, function (props) {
  return props.temporary && '\n    width: 320px;\n    z-index: 5\n  ';
}, function (props) {
  return !props.temporary && 'border-right: 1px solid rgba(0,0,0,0.35);';
}, function (props) {
  return !props.temporary && '\n      border-left: 1px solid rgba(0,0,0,0.35);\n    ';
});

var Drawer = exports.Drawer = function Drawer(_ref) {
  var open = _ref.open,
      children = _ref.children,
      handleRequestClose = _ref.handleRequestClose,
      temporary = _ref.temporary,
      attachment = _ref.attachment;
  return _react2.default.createElement(_Portal.Portal, {
    open: open,
    shift: !temporary,
    attachment: attachment,
    onRequestClose: handleRequestClose,
    renderContents: function renderContents() {
      return _react2.default.createElement(
        StyledDrawer,
        {
          attachment: attachment,
          open: open,
          temporary: temporary
        },
        children
      );
    } });
};

Drawer.defaultProps = {
  temporary: false,
  open: false,
  attachment: 'left',
  handleRequestClose: function handleRequestClose() {}
};

exports.default = Drawer;