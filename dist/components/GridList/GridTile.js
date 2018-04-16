'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: relative,\n  display: block;\n  height: 100%;\n  overflow: hidden;\n  align-items: center;\n  margin: 0 2px;\n  min-height: 0;\n\n  > .smc-grid-tile-content {\n    width: 100%;\n    height: 100%;\n    min-height: 0;\n  }\n'], ['\n  position: relative,\n  display: block;\n  height: 100%;\n  overflow: hidden;\n  align-items: center;\n  margin: 0 2px;\n  min-height: 0;\n\n  > .smc-grid-tile-content {\n    width: 100%;\n    height: 100%;\n    min-height: 0;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var GridTileComponent = function GridTileComponent(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: className + ' smc-grid-tile-content' },
    children
  );
};

var GridTile = (0, _styledComponents2.default)(GridTileComponent)(_templateObject);

exports.default = GridTile;
module.exports = exports['default'];