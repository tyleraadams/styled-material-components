'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n\n  > .smc-list-text-primary {\n    margin: 0px;\n  }\n\n  > .smc-list-text-secondary {\n    margin-top: 2px;\n    margin-bottom: 0px;\n    p {\n      margin: 0\n    }\n  }\n'], ['\n\n  > .smc-list-text-primary {\n    margin: 0px;\n  }\n\n  > .smc-list-text-secondary {\n    margin-top: 2px;\n    margin-bottom: 0px;\n    p {\n      margin: 0\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ListItemTextComponent = function ListItemTextComponent(_ref) {
  var className = _ref.className,
      primary = _ref.primary,
      secondary = _ref.secondary;
  return _react2.default.createElement(
    'div',
    { className: className + ' smc-list-text-container' },
    primary && _react2.default.createElement(
      'h3',
      { className: 'smc-list-text-primary' },
      primary
    ),
    secondary && _react2.default.createElement(
      'p',
      { className: 'smc-list-text-secondary' },
      secondary
    )
  );
};

var ListItemText = (0, _styledComponents2.default)(ListItemTextComponent)(_templateObject);

exports.default = ListItemText;
module.exports = exports['default'];