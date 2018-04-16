'use strict';

exports.__esModule = true;
exports.transition = exports.easingCurves = exports.durations = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n    transition-duration: ', 'ms;\n  '], ['\n    transition-duration: ', 'ms;\n  ']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n    transition-duration: 225ms;\n  '], ['\n    transition-duration: 225ms;\n  ']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n    transition-duration: 195ms;\n  '], ['\n    transition-duration: 195ms;\n  ']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  '], ['\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  ']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  '], ['\n    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  ']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n  '], ['\n    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n  ']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n    transition-timing-function: cubic-bezier(0.4, 0, 0.6, 1);\n  '], ['\n    transition-timing-function: cubic-bezier(0.4, 0, 0.6, 1);\n  ']),
    _templateObject8 = _taggedTemplateLiteralLoose(['\n  ', ';\n  ', ';\n'], ['\n  ', ';\n  ', ';\n']);

var _platform = require('platform');

var _platform2 = _interopRequireDefault(_platform);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var isMobile = _platform2.default.os.family.match(/^(Android|iOS|Windows Phone)$/);

var durations = exports.durations = {
  complex: (0, _styledComponents.css)(_templateObject, isMobile ? 375 : 200),
  standard: (0, _styledComponents.css)(_templateObject, isMobile ? 300 : 150),
  enteringScreen: (0, _styledComponents.css)(_templateObject2),
  leavingScreen: (0, _styledComponents.css)(_templateObject3)
};

var easingCurves = exports.easingCurves = {
  standard: (0, _styledComponents.css)(_templateObject4),
  deceleration: (0, _styledComponents.css)(_templateObject5),
  acceleration: (0, _styledComponents.css)(_templateObject6),
  sharp: (0, _styledComponents.css)(_templateObject7)
};

var transition = exports.transition = function transition() {
  var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'standard';
  var easing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'standard';
  return (0, _styledComponents.css)(_templateObject8, durations[duration], easingCurves[easing]);
};