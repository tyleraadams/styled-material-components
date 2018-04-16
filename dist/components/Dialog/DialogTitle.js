'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  text-align: left;\n  font-weight: 500;\n  font-size: 20px;\n  letter-spacing: 0.4px;\n  line-height: 32px;\n  color: rgb(0, 0, 0);\n  display: flex;\n  align-items: center;\n  padding: 24px 24px 0;\n  margin: 0px;\n'], ['\n  text-align: left;\n  font-weight: 500;\n  font-size: 20px;\n  letter-spacing: 0.4px;\n  line-height: 32px;\n  color: rgb(0, 0, 0);\n  display: flex;\n  align-items: center;\n  padding: 24px 24px 0;\n  margin: 0px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var DialogTitleComponent = function DialogTitleComponent(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    'h2',
    { className: 'smc-dialog-dialog-title ' + className },
    children
  );
};

var DialogTitle = (0, _styledComponents2.default)(DialogTitleComponent)(_templateObject);

exports.default = DialogTitle;
module.exports = exports['default'];