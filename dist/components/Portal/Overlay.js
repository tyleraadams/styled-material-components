'use strict';

exports.__esModule = true;
exports.Overlay = exports.BaseOverlay = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  background: rgba(0, 0, 0, .6);\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  opacity: ', ';\n  transition: opacity 0.3s 0ms cubic-bezier(0, 0, .2, 1);\n  will-change: opacity;\n  pointer-events: ', ';\n  contain: strict;\n  overflow: hidden;\n  z-index: 4;\n'], ['\n  background: rgba(0, 0, 0, .6);\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  opacity: ', ';\n  transition: opacity 0.3s 0ms cubic-bezier(0, 0, .2, 1);\n  will-change: opacity;\n  pointer-events: ', ';\n  contain: strict;\n  overflow: hidden;\n  z-index: 4;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// This prevents clicks on the contents of the portal from dismissing the portal
var stopPropagation = function stopPropagation(e) {
  return e.stopPropagation();
};

var BaseOverlay = exports.BaseOverlay = function BaseOverlay(props) {
  return _react2.default.createElement(
    'div',
    { className: props.className + ' smc-overlay', onClick: props.onClick },
    _react2.default.createElement(
      'div',
      { className: 'smc-portal-content', onClick: stopPropagation },
      props.children
    )
  );
};

var Overlay = exports.Overlay = (0, _styledComponents2.default)(BaseOverlay)(_templateObject, function (props) {
  return props.open ? 1 : 0;
}, function (props) {
  return props.open ? 'inherit' : 'none';
});