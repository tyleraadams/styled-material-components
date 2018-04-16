'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  top: calc(50% - ', '%);\n  left: calc(50% - ', '%);\n  width: ', '%;\n  height: ', '%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  background-color: rgba(0,0,0,0.06);\n  content: "";\n'], ['\n  position: absolute;\n  top: calc(50% - ', '%);\n  left: calc(50% - ', '%);\n  width: ', '%;\n  height: ', '%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  background-color: rgba(0,0,0,0.06);\n  content: "";\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  &:after {\n    transform-origin: center center;\n    ', '\n  }\n  &:before {\n    ', '\n  }\n  &:hover:before,\n  &:focus:before,\n  &:active:after {\n    transition-duration: 85ms;\n    opacity: .6;\n  }\n'], ['\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  &:after {\n    transform-origin: center center;\n    ', '\n  }\n  &:before {\n    ', '\n  }\n  &:hover:before,\n  &:focus:before,\n  &:active:after {\n    transition-duration: 85ms;\n    opacity: .6;\n  }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /**
                                                                                           * @file declares mixins for the CSS only version of the
                                                                                           * ripple effect. We will rely on a HOC to provide true
                                                                                           * ripple effects with javascript.
                                                                                           */


var rippleEffect = function rippleEffect(radius) {
  return (0, _styledComponents.css)(_templateObject, radius, radius, radius * 2, radius * 2);
};

var rippleMixin = function rippleMixin() {
  var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  return (0, _styledComponents.css)(_templateObject2, rippleEffect(radius), rippleEffect(radius));
};

exports.default = rippleMixin;
module.exports = exports['default'];