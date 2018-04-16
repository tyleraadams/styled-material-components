'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  body {\n    background-color: #f4f4f4;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    display: flex;\n    flex-direction: row;\n    font-family: Roboto,sans-serif;\n  }\n'], ['\n  body {\n    background-color: #f4f4f4;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    display: flex;\n    flex-direction: row;\n    font-family: Roboto,sans-serif;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _lodash = require('lodash.merge');

var _lodash2 = _interopRequireDefault(_lodash);

var _ScreenSizeContext = require('../contexts/ScreenSizeContext');

var _defaultTheme = require('./defaultTheme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/* eslint-disable no-unused-expressions */
(0, _styledComponents.injectGlobal)(_templateObject);
/* eslint-enable */

var MaterialThemeProvider = function MaterialThemeProvider(_ref) {
  var children = _ref.children,
      _ref$theme = _ref.theme,
      theme = _ref$theme === undefined ? {} : _ref$theme;
  return _react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: (0, _lodash2.default)(_defaultTheme.defaultTheme, theme) },
    _react2.default.createElement(
      _ScreenSizeContext.ScreenSizeContext,
      null,
      children
    )
  );
};

exports.default = MaterialThemeProvider;
module.exports = exports['default'];