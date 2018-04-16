'use strict';

exports.__esModule = true;
exports.ChipDeleteIcon = exports.ChipAvatar = exports.ChipLabel = exports.ChipWrapper = exports.Chip = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 8px;\n  background-color: rgba(0, 0, 0, 0.08);\n  height: 32px;\n  border-radius: 16px;\n  font-size: 13px;\n  color: ', ';\n  ', ';\n  ', ';\n  :focus {\n    outline: none;\n    ', ';\n    ', ';\n  }\n'], ['\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 8px;\n  background-color: rgba(0, 0, 0, 0.08);\n  height: 32px;\n  border-radius: 16px;\n  font-size: 13px;\n  color: ', ';\n  ', ';\n  ', ';\n  :focus {\n    outline: none;\n    ', ';\n    ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: 32px;\n  height: 32px;\n  color: #616161;\n  background-color: #bdbdbd;\n  margin-right: -4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  ', ';\n  font-size: 16px;\n'], ['\n  width: 32px;\n  height: 32px;\n  color: #616161;\n  background-color: #bdbdbd;\n  margin-right: -4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  ', ';\n  font-size: 16px;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  margin: 0 12px;\n'], ['\n  margin: 0 12px;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  width: 24px;\n  height: 24px;\n  margin: 0 4px 0 -8px;\n  fill: ', ';\n  :hover {\n    fill: rgba(0, 0, 0, 0.4);\n  }\n'], ['\n  width: 24px;\n  height: 24px;\n  margin: 0 4px 0 -8px;\n  fill: ', ';\n  :hover {\n    fill: rgba(0, 0, 0, 0.4);\n  }\n']),
    _templateObject5 = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _typography = require('../mixins/typography');

var _typography2 = _interopRequireDefault(_typography);

var _elevation = require('../mixins/elevation');

var _elevation2 = _interopRequireDefault(_elevation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ChipWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.textColors.primary;
}, function (props) {
  return props.clickable && '\n    :hover {\n      background-color: #CECECE\n    }';
}, function (props) {
  return props.removed && 'display: none';
}, _elevation.elevationTransition, (0, _elevation2.default)(3));

var ChipAvatar = _styledComponents2.default.div(_templateObject2, (0, _typography2.default)('body'));

var ChipLabel = _styledComponents2.default.span(_templateObject3);

var DeleteIconSvg = _styledComponents2.default.svg(_templateObject4, function (props) {
  return props.theme.disabledCheckbox;
});

var ChipDeleteIcon = (0, _styledComponents2.default)(function (_ref) {
  var onDelete = _ref.onDelete,
      className = _ref.className;
  return _react2.default.createElement(
    DeleteIconSvg,
    { className: className, onClick: onDelete },
    _react2.default.createElement('path', { d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z' })
  );
})(_templateObject5);

var ChipComponent = function (_PureComponent) {
  _inherits(ChipComponent, _PureComponent);

  function ChipComponent() {
    var _temp, _this, _ret;

    _classCallCheck(this, ChipComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.state = {
      removed: false
    }, _this.handleDeleteIconClick = function (e) {
      var _this$props = _this.props,
          onDelete = _this$props.onDelete,
          removable = _this$props.removable;

      if (onDelete) {
        onDelete(e);
      }
      if (removable) {
        _this.setState({ removed: true });
      }
    }, _this.handleKeyDown = function (e) {
      var _this$props2 = _this.props,
          onClick = _this$props2.onClick,
          onDelete = _this$props2.onDelete,
          removable = _this$props2.removable;
      // fire onClick when Enter or Spacebar pressed

      if (onClick && (e.keyCode === 13 || e.keyCode === 32)) {
        e.preventDefault();
        onClick(e);
        // fire onDelete when Backspace or Delete pressed
      } else if ((onDelete || removable) && (e.keyCode === 8 || e.Keycode === 46)) {
        e.preventDefault();
        _this.handleDeleteIconClick(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ChipComponent.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        avatar = _props.avatar,
        label = _props.label,
        onClick = _props.onClick,
        removable = _props.removable,
        onDelete = _props.onDelete,
        removedProp = _props.removed;
    // determine if chip is managing its own removal (uncontrolled)
    // or if it's being managed by the parent (controlled)

    var removed = removedProp !== undefined ? removedProp : this.state.removed;

    return _react2.default.createElement(
      ChipWrapper,
      {
        className: className,
        onKeyDown: this.handleKeyDown,
        tabIndex: 0,
        clickable: onClick,
        removed: removed
      },
      avatar && _react2.default.createElement(
        ChipAvatar,
        null,
        avatar
      ),
      _react2.default.createElement(
        ChipLabel,
        { onClick: onClick },
        label
      ),
      (removable || onDelete) && _react2.default.createElement(ChipDeleteIcon, { onDelete: this.handleDeleteIconClick })
    );
  };

  return ChipComponent;
}(_react.PureComponent);

var Chip = (0, _styledComponents2.default)(ChipComponent)(_templateObject5);
exports.Chip = Chip;
exports.ChipWrapper = ChipWrapper;
exports.ChipLabel = ChipLabel;
exports.ChipAvatar = ChipAvatar;
exports.ChipDeleteIcon = ChipDeleteIcon;