'use strict';

exports.__esModule = true;
exports.BottomSheet = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  height: 0;\n  bottom: 5;\n'], ['\n  height: 0;\n  bottom: 5;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  background-color: white;\n  ', '\n  left: 0;\n  right: 0;\n  overflow: hidden;\n  position: absolute;\n  transition: transform .195s;\n  ', '\n  will-change: transform;\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n  touch-action: none;\n  ', '\n\n  &.bottom {\n    transform: translateY(100%);\n    ', '\n  }\n\n  &.open {\n    bottom: 0;\n    height: calc(100% - 56px);\n    max-height: 200px;\n    width: 100%;\n    @media (min-width: 600px) {\n      height: calc(100% - 64px);\n      max-height: 200px;\n    }\n    transition: transform .225s;\n    transform: none;\n  }\n'], ['\n  background-color: white;\n  ', '\n  left: 0;\n  right: 0;\n  overflow: hidden;\n  position: absolute;\n  transition: transform .195s;\n  ', '\n  will-change: transform;\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n  touch-action: none;\n  ', '\n\n  &.bottom {\n    transform: translateY(100%);\n    ', '\n  }\n\n  &.open {\n    bottom: 0;\n    height: calc(100% - 56px);\n    max-height: 200px;\n    width: 100%;\n    @media (min-width: 600px) {\n      height: calc(100% - 64px);\n      max-height: 200px;\n    }\n    transition: transform .225s;\n    transform: none;\n  }\n']);

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

var bottomSheetSizing = (0, _styledComponents.css)(_templateObject);

var BaseBottomSheet = function BaseBottomSheet(props) {
  var _classNames;

  var bottomSheetClass = (0, _classnames2.default)((_classNames = {}, _classNames[props.className] = true, _classNames.open = props.open, _classNames.bottom = props.attachment === 'bottom', _classNames['smc-bottomsheet'] = true, _classNames));
  return _react2.default.createElement(
    'aside',
    { className: bottomSheetClass },
    props.children
  );
};

var StyledBottomSheet = (0, _styledComponents2.default)(BaseBottomSheet)(_templateObject2, function (props) {
  return props.modal && (0, _elevation2.default)(16);
}, bottomSheetSizing, function (props) {
  return props.modal && 'z-index: 5';
}, function (props) {
  return !props.modal && 'border-top: 1px solid rgba(0,0,0,0.35);';
});

var BottomSheet = exports.BottomSheet = function BottomSheet(_ref) {
  var open = _ref.open,
      children = _ref.children,
      handleRequestClose = _ref.handleRequestClose,
      modal = _ref.modal,
      attachment = _ref.attachment;
  return _react2.default.createElement(_Portal.Portal, {
    open: open,
    shift: !modal,
    attachment: attachment,
    onRequestClose: handleRequestClose,
    renderContents: function renderContents() {
      return _react2.default.createElement(
        StyledBottomSheet,
        { attachment: attachment, open: open },
        children
      );
    } });
};

BottomSheet.defaultProps = {
  modal: false,
  open: false,
  attachment: 'bottom',
  handleRequestClose: function handleRequestClose() {}
};

exports.default = BottomSheet;