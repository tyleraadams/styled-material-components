'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: relative;\n  margin: 8px 0;\n  padding: 0;\n  list-style: none;\n'], ['\n  position: relative;\n  margin: 8px 0;\n  padding: 0;\n  list-style: none;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ListComponent = function ListComponent(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    'ul',
    { className: className + ' smc-list' },
    children
  );
};

var List = (0, _styledComponents2.default)(ListComponent)(_templateObject);

exports.default = List;
module.exports = exports['default'];