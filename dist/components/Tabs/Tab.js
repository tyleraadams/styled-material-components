'use strict';

exports.__esModule = true;
exports.TabContent = exports.Tab = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  align-items: center;\n  background: transparent;\n  border: none;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-height: 72px;\n  max-width: 264px;\n  min-height: 48px;\n  min-width: 72px;\n  overflow: hidden;\n  outline: none;\n  padding-left: 12px;\n  padding-right: 12px;\n  text-transform: uppercase;\n  user-select: none;\n  -webkit-appearance: none;\n'], ['\n  align-items: center;\n  background: transparent;\n  border: none;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-height: 72px;\n  max-width: 264px;\n  min-height: 48px;\n  min-width: 72px;\n  overflow: hidden;\n  outline: none;\n  padding-left: 12px;\n  padding-right: 12px;\n  text-transform: uppercase;\n  user-select: none;\n  -webkit-appearance: none;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  padding: 4px 12px;\n  ', ';\n'], ['\n  padding: 4px 12px;\n  ', ';\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  opacity: ', ';\n  height: ', 'px;\n'], ['\n  opacity: ', ';\n  height: ', 'px;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  padding: 24px;\n  width: 100%;\n'], ['\n  padding: 24px;\n  width: 100%;\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _typography = require('../../mixins/typography');

var _typography2 = _interopRequireDefault(_typography);

var _withRipple = require('../../enhancers/withRipple');

var _withRipple2 = _interopRequireDefault(_withRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TabButton = _styledComponents2.default.button(_templateObject);

var RippleTab = (0, _withRipple2.default)(TabButton);

var TabLabel = _styledComponents2.default.span(_templateObject2, (0, _typography2.default)('body2'));

var TabComponent = function TabComponent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      Icon = _ref.Icon,
      index = _ref.index,
      _onClick = _ref.onClick;
  return React.createElement(
    RippleTab,
    { className: className, onClick: function onClick(event) {
        return _onClick(event, index);
      }, 'data-smc': 'Tab' },
    Icon,
    React.createElement(
      TabLabel,
      { 'data-smc': 'TabLabel' },
      children
    )
  );
};

var Tab = exports.Tab = (0, _styledComponents2.default)(TabComponent)(_templateObject3, function (props) {
  return props.selected ? 1 : 0.7;
}, function (props) {
  return props.Icon && props.children ? 72 : 48;
});

var TabContent = exports.TabContent = _styledComponents2.default.div(_templateObject4);