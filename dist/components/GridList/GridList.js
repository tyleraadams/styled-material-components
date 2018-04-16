'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: relative;\n  margin: 0;\n  display: flex;\n  flex-direction: ', ';;\n  flex-wrap: wrap;\n'], ['\n  position: relative;\n  margin: 0;\n  display: flex;\n  flex-direction: ', ';;\n  flex-wrap: wrap;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var GridListComponent = function GridListComponent(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: className + ' smc-grid-list' },
    children
  );
};

var GridList = (0, _styledComponents2.default)(GridListComponent)(_templateObject, function (props) {
  return props.column ? 'column' : 'row';
});

exports.default = GridList;
module.exports = exports['default'];