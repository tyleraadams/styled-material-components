'use strict';

exports.__esModule = true;
exports.Toolbar = exports.ToolbarActions = exports.ToolbarTitle = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: inline-flex;\n  flex: 1;\n  align-items: start;\n  justify-content: center;\n  box-sizing: border-box;\n  min-width: 0;\n  height: 100%;\n  padding: 8px;\n  z-index: 1;\n'], ['\n  display: inline-flex;\n  flex: 1;\n  align-items: start;\n  justify-content: center;\n  box-sizing: border-box;\n  min-width: 0;\n  height: 100%;\n  padding: 8px;\n  z-index: 1;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  ', '\n  justify-content: flex-start;\n  order: -1;\n  padding-left: 12px;\n  padding-right: 0px;\n'], ['\n  ', '\n  justify-content: flex-start;\n  order: -1;\n  padding-left: 12px;\n  padding-right: 0px;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  ', '\n  ', '\n  align-self: center;\n  padding: 12px 0;\n  line-height: 1.5rem;\n  z-index: 1;\n  margin: 0;\n  margin-left: ', ';\n'], ['\n  ', '\n  ', '\n  align-self: center;\n  padding: 12px 0;\n  line-height: 1.5rem;\n  z-index: 1;\n  margin: 0;\n  margin-left: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  ', '\n  justify-content: flex-end;\n  order: 1;\n  padding-left: 0px;\n  padding-right: 12px;\n'], ['\n  ', '\n  justify-content: flex-end;\n  order: 1;\n  padding-left: 0px;\n  padding-right: 12px;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  ', '\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 4;\n'], ['\n  ', '\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 4;\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  justify-content: space-between;\n  box-sizing: border-box;\n  width: 100%;\n  background-color: ', ';\n  ', '\n\n  ', '\n\n  & ', ' {\n    position: relative;\n    box-sizing: border-box;\n    width: 100%;\n    height: auto;\n    min-height: 64px;\n  }\n\n  & [data-smc~=Icon] {\n    display: flex;\n    position: relative;\n    align-items: start;\n    align-self: center;\n    justify-content: center;\n    width: ', ';\n    height: ', ';\n    padding: ', ';\n    border: none;\n    outline: none;\n    background-color: transparent;\n    fill: currentColor;\n    color: inherit;\n    text-decoration: none;\n    cursor: pointer;\n  }\n  & [data-smc~=Icon] + ', ' {\n    margin-left: 8px;\n  }\n'], ['\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  justify-content: space-between;\n  box-sizing: border-box;\n  width: 100%;\n  background-color: ', ';\n  ', '\n\n  ', '\n\n  & ', ' {\n    position: relative;\n    box-sizing: border-box;\n    width: 100%;\n    height: auto;\n    min-height: 64px;\n  }\n\n  & [data-smc~=Icon] {\n    display: flex;\n    position: relative;\n    align-items: start;\n    align-self: center;\n    justify-content: center;\n    width: ', ';\n    height: ', ';\n    padding: ', ';\n    border: none;\n    outline: none;\n    background-color: transparent;\n    fill: currentColor;\n    color: inherit;\n    text-decoration: none;\n    cursor: pointer;\n  }\n  & [data-smc~=Icon] + ', ' {\n    margin-left: 8px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _FlexGrid = require('../FlexGrid');

var _theme = require('../../mixins/theme');

var _typography = require('../../mixins/typography');

var _typography2 = _interopRequireDefault(_typography);

var _elevation = require('../../mixins/elevation');

var _elevation2 = _interopRequireDefault(_elevation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var toolbarSectionStyles = (0, _styledComponents.css)(_templateObject);

var TitleContainer = _styledComponents2.default.section(_templateObject2, toolbarSectionStyles);

var ToolbarTitleComponent = function ToolbarTitleComponent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      Icon = _ref.Icon;
  return _react2.default.createElement(
    TitleContainer,
    null,
    Icon && Icon,
    _react2.default.createElement(
      'span',
      { className: className },
      children
    )
  );
};

var ToolbarTitle = exports.ToolbarTitle = (0, _styledComponents2.default)(ToolbarTitleComponent)(_templateObject3, (0, _typography2.default)('title'), _typography.overflowEllipsis, function (_ref2) {
  var theme = _ref2.theme;
  return theme.toolbar.horizontalPaddingDesktop;
});

var ToolbarActions = exports.ToolbarActions = _styledComponents2.default.section(_templateObject4, toolbarSectionStyles);

var ToolbarRedux = function ToolbarRedux(_ref3) {
  var className = _ref3.className,
      children = _ref3.children;
  return _react2.default.createElement(
    'header',
    { className: className, 'data-smc': 'Toolbar' },
    _react2.default.createElement(
      _FlexGrid.Row,
      { horizontal: 'center' },
      children
    )
  );
};

var fixedToolbarMixin = (0, _styledComponents.css)(_templateObject5, (0, _elevation2.default)(4));

var Toolbar = exports.Toolbar = (0, _styledComponents2.default)(ToolbarRedux)(_templateObject6, function (_ref4) {
  var theme = _ref4.theme;
  return theme.primary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return (0, _theme.contrastingColor)('color', theme.primary);
}, function (props) {
  return props.fixed && fixedToolbarMixin;
}, _FlexGrid.Row, function (_ref6) {
  var theme = _ref6.theme;
  return theme.toolbar.iconSize;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.toolbar.iconSize;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.toolbar.iconPadding;
}, ToolbarTitle);