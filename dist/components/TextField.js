'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', ';\n'], ['\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  transition: opacity 200ms;\n  opacity: ', ';\n'], ['\n  transition: opacity 200ms;\n  opacity: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  bottom: -2em;\n  font-size: 0.75em;\n  width: 100%;\n'], ['\n  position: absolute;\n  bottom: -2em;\n  font-size: 0.75em;\n  width: 100%;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  color: ', ';\n'], ['\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  color: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  color: ', ';\n'], ['\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  color: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  transition: all 200ms;\n  top: ', ';\n  font-size: 1em;\n  transform: ', ';\n  transform-origin: 0 50%;\n  color: ', ';\n  width: 100%;\n  left: ', ';\n  ', ';\n'], ['\n  position: absolute;\n  transition: all 200ms;\n  top: ', ';\n  font-size: 1em;\n  transform: ', ';\n  transform-origin: 0 50%;\n  color: ', ';\n  width: 100%;\n  left: ', ';\n  ', ';\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  transition: all 200ms;\n  top: ', ';\n  font-size: 1em;\n  transform: ', ';\n  transform-origin: 0 50%;\n  color: ', ';\n  width: 80%;\n  left: 1em;\n  ', ';\n'], ['\n  position: absolute;\n  transition: all 200ms;\n  top: ', ';\n  font-size: 1em;\n  transform: ', ';\n  transform-origin: 0 50%;\n  color: ', ';\n  width: 80%;\n  left: 1em;\n  ', ';\n']),
    _templateObject8 = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  color: ', ';\n  opacity: ', ';\n  width: 100%;\n  left: ', ';\n  ', ';\n'], ['\n  position: absolute;\n  color: ', ';\n  opacity: ', ';\n  width: 100%;\n  left: ', ';\n  ', ';\n']),
    _templateObject9 = _taggedTemplateLiteralLoose(['\n  color: ', ';\n  ', ';\n  ', ';\n  ', ';\n'], ['\n  color: ', ';\n  ', ';\n  ', ';\n  ', ';\n']),
    _templateObject10 = _taggedTemplateLiteralLoose(['\n  color: ', '\n  ', ';\n  text-align: right;\n'], ['\n  color: ', '\n  ', ';\n  text-align: right;\n']),
    _templateObject11 = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  bottom: 0px;\n  border-top: 1.5px solid;\n  border-top-color: ', ';\n  width: 0%;\n  transition: width 200ms;\n  ', ';\n  ', ';\n'], ['\n  position: absolute;\n  bottom: 0px;\n  border-top: 1.5px solid;\n  border-top-color: ', ';\n  width: 0%;\n  transition: width 200ms;\n  ', ';\n  ', ';\n']),
    _templateObject12 = _taggedTemplateLiteralLoose(['\n  width: calc(100% - ', 'em);\n  color: ', ';\n  padding-left: ', ';\n  ', ';\n'], ['\n  width: calc(100% - ', 'em);\n  color: ', ';\n  padding-left: ', ';\n  ', ';\n']),
    _templateObject13 = _taggedTemplateLiteralLoose(['', ''], ['', '']),
    _templateObject14 = _taggedTemplateLiteralLoose(['\n  width: calc(80% - ', 'em);\n  height:  ', 'px;\n  color: ', ';\n  padding-left: ', ';\n  ', ';\n  border-style: ', ';\n  border-width: ', ';\n  border-radius: ', ';\n  border-color: ', ';\n  resize: none;\n  padding: ', ';\n\n  &:focus {\n    border-color: ', ';\n}\n'], ['\n  width: calc(80% - ', 'em);\n  height:  ', 'px;\n  color: ', ';\n  padding-left: ', ';\n  ', ';\n  border-style: ', ';\n  border-width: ', ';\n  border-radius: ', ';\n  border-color: ', ';\n  resize: none;\n  padding: ', ';\n\n  &:focus {\n    border-color: ', ';\n}\n']),
    _templateObject15 = _taggedTemplateLiteralLoose(['\n  width: ', ';\n  font-size: 1em;\n  line-height: 1.5em;\n  position: relative;\n  background-color: transparent;\n  font-family: lato, sans-serif;\n  border-bottom: ', ' ', ';\n  border-bottom-color: ', ';\n'], ['\n  width: ', ';\n  font-size: 1em;\n  line-height: 1.5em;\n  position: relative;\n  background-color: transparent;\n  font-family: lato, sans-serif;\n  border-bottom: ', ' ', ';\n  border-bottom-color: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DropdownMenu = require('./DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-confusing-arrow */


var TextFieldComponent = function (_PureComponent) {
  _inherits(TextFieldComponent, _PureComponent);

  function TextFieldComponent(props) {
    _classCallCheck(this, TextFieldComponent);

    var _this = _possibleConstructorReturn(this, _PureComponent.call(this, props));

    _this.state = {
      text: _this.props.defaultValue || '',
      focus: false,
      error: _this.props.error || false,
      hasBeenFocused: false,
      height: '100%'
    };
    _this.textArea = null;

    _this.onChange = function (e) {
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }

      if (!_this.isControlled) {
        var text = e.target.value;
        var isInvalid = _this.props.validator && !_this.props.validator(text);
        var isEmptyButRequired = _this.props.required ? !e.target.value : false;
        var newHeight = _this.props.textarea ? _this.textArea.scrollHeight : '';

        _this.setState({
          text: text,
          error: _this.props.error || isInvalid || isEmptyButRequired,
          height: !_this.props.multiline || _this.textArea.value === '' ? '100%' : newHeight
        });
      }
    };

    _this.onFocus = function (e) {
      _this.props.onFocus && _this.props.onFocus(e);
      _this.setState({ focus: true, hasBeenFocused: true });
    };

    _this.onBlur = function (e) {
      _this.props.onBlur && _this.props.onBlur(e);
      _this.setState({ focus: false });
    };

    _this.isControlled = props.value !== undefined;
    return _this;
  }

  TextFieldComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.reset) {
      nextProps.onReset && nextProps.onReset();
      this.setState({ text: nextProps.defaultValue || '' });
    }
  };

  TextFieldComponent.prototype.render = function render() {
    var _this2 = this;

    var hasValidOptions = this.props.options && Array.isArray(this.props.options) && this.props.options.length > 0;

    var hasError = Boolean(this.state.error || this.props.error || this.props.errorText);

    // Boolean to add to floating label logic
    var hasControlledValue = this.isControlled && typeof this.props.value === 'string' && this.props.value.length > 0;
    return _react2.default.createElement(
      'div',
      { className: this.props.className + ' smc-text-field-container' },
      _react2.default.createElement(
        Suffix,
        null,
        this.props.suffix
      ),
      _react2.default.createElement(
        Prefix,
        null,
        this.props.prefix
      ),
      _react2.default.createElement(
        FloatingLabel,
        {
          'aria-label': this.props.floatingLabelText,
          className: 'smc-text-field-floating-label',
          error: hasError,
          hasPrefix: !!this.props.prefix,
          focus: this.state.focus,
          floatingLabelStyle: hasError ? this.props.floatingLabelErrorStyle : this.props.floatingLabelStyle,
          floating: this.state.focus || this.props.hintText || this.props.options || this.props.defaultOption || this.state.text.length || hasControlledValue
        },
        this.props.floatingLabelText || '',
        this.props.required ? ' *' : ''
      ),
      _react2.default.createElement(
        FloatingAreaLabel,
        {
          'aria-label': this.props.floatingAreaLabelText,
          className: 'smc-text-area-floating-label',
          error: hasError,
          hasPrefix: !!this.props.prefix,
          focus: this.state.focus,
          floatingLabelStyle: hasError ? this.props.floatingLabelErrorStyle : this.props.floatingLabelStyle,
          floating: this.state.focus || this.props.hintText || this.props.options || this.props.defaultOption || this.state.text.length || hasControlledValue
        },
        this.props.floatingAreaLabelText || null
      ),
      hasValidOptions && _react2.default.createElement(_DropdownMenu2.default, {
        defaultOption: this.props.defaultOption,
        options: this.props.options,
        onItemClick: this.props.onItemClick
      }),
      !this.props.options && _react2.default.createElement(
        HintText,
        {
          className: 'smc-text-field-hint-text',
          hintTextStyle: this.props.hintTextStyle,
          hasPrefix: this.props.prefix,
          error: hasError,
          show: !this.props.defaultValue && !this.state.text.length && !this.props.value
        },
        this.props.hintText
      ),
      this.props.helperText && !this.props.errorText && _react2.default.createElement(
        HelperText,
        {
          className: 'smc-text-field-helper-text',
          helperTextStyle: this.props.helperTextStyle,
          show: !this.state.error && (this.props.helperTextPersistent ? true : this.state.focus)
        },
        this.props.helperText
      ),
      this.props.options && !hasValidOptions && _react2.default.createElement(
        ErrorText,
        {
          show: !hasError,
          className: 'smc-text-field-error-text',
          errorTextStyle: this.props.errorTextStyle
        },
        'Must have an array of at least one option passed in'
      ),
      _react2.default.createElement(
        ErrorText,
        {
          show: hasError,
          className: 'smc-text-field-error-text',
          errorTextStyle: this.props.errorTextStyle
        },
        this.props.errorText
      ),
      this.props.charLimit && _react2.default.createElement(
        CharLimitText,
        {
          show: this.props.charLimit,
          error: this.state.text.length > this.props.charLimit,
          className: 'smc-text-field-char-limit-text'
        },
        this.state.text.length,
        '/',
        this.props.charLimit
      ),
      !this.props.hasBorder && _react2.default.createElement(UnderlineFocus, {
        disabled: this.props.options || this.props.focusDisabled,
        className: 'smc-text-field-underline-focus',
        underlineFocusStyle: this.props.underlineFocusStyle,
        focus: this.state.focus,
        error: hasError
      }),
      this.props.textarea ? _react2.default.createElement(Area, {
        rows: this.props.rows || 1,
        hasPrefix: !!this.props.prefix,
        hasSuffix: !!this.props.suffix,
        hasBorder: this.props.hasBorder,
        inputStyle: this.props.inputStyle,
        disabled: this.props.disabled,
        autoFocus: this.props.autoFocus,
        value: this.props.value || this.state.text,
        charLimit: this.props,
        height: this.state.height,
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        className: 'smc-text-field-area',
        innerRef: function innerRef(ref) {
          _this2.textArea = ref;
        }
      }) : _react2.default.createElement(Input, {
        type: this.props.type || '',
        hasPrefix: !!this.props.prefix,
        hasSuffix: !!this.props.suffix,
        inputStyle: this.props.inputStyle,
        disabled: this.props.options || this.props.disabled,
        autoFocus: this.props.autoFocus,
        value: this.props.value || this.state.text,
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        name: this.props.name,
        className: 'smc-text-field-input'
      })
    );
  };

  return TextFieldComponent;
}(_react.PureComponent);

var primaryTextColor = (0, _styledComponents.css)(_templateObject, function (props) {
  return props.theme.textColors.primary;
});
var secondaryTextColor = (0, _styledComponents.css)(_templateObject, function (props) {
  return props.theme.textColors.secondary;
});
var hintTextColor = (0, _styledComponents.css)(_templateObject, function (props) {
  return props.theme.textColors.hint;
});
var primary = (0, _styledComponents.css)(_templateObject, function (props) {
  return props.theme.inputColorOverrides.textField || props.theme.primary;
});
var error = (0, _styledComponents.css)(_templateObject, function (props) {
  return props.theme.textColors.error || '#d50000';
});

var fadeInOut = (0, _styledComponents.css)(_templateObject2, function (props) {
  return +props.show;
});

var placeBelow = (0, _styledComponents.css)(_templateObject3);

/*
This is the code for the red asterisk for required fields
Leaving this in in case there is further deliberation on this subject.
const RequiredStar = styled.span`
  ::after{
    color: ${props => props.hasBeenFocused ? error : hintTextColor};
    content: '*';
    show: ${props => props.show ? 'inline-block' : 'none'}
  }
  ${props => props.requiredStarStyle};
`;
*/

var SuffixComponent = function SuffixComponent(props) {
  return _react2.default.createElement(
    'div',
    { className: props.className + ' smc-textfield-suffix' },
    props.children
  );
};

var Suffix = (0, _styledComponents2.default)(SuffixComponent)(_templateObject4, hintTextColor);

var PrefixComponent = function PrefixComponent(props) {
  return _react2.default.createElement(
    'div',
    { className: props.className + ' smc-textfield-prefix' },
    props.children
  );
};

var Prefix = (0, _styledComponents2.default)(PrefixComponent)(_templateObject5, hintTextColor);

var FloatingLabel = _styledComponents2.default.div(_templateObject6, function (props) {
  return props.floating ? '-1.5em' : '0em';
}, function (props) {
  return 'scale(' + (props.floating ? 0.75 : 1) + ')';
}, function (props) {
  if (props.error) return error;
  return props.focus && props.floating ? primary : secondaryTextColor;
}, function (props) {
  return props.hasPrefix ? '1em' : '0em';
}, function (props) {
  return props.floatingLabelStyle;
});

var FloatingAreaLabel = _styledComponents2.default.div(_templateObject7, function (props) {
  return props.floating ? '0' : '1em';
}, function (props) {
  return 'scale(' + (props.floating ? 0.75 : 1) + ')';
}, function (props) {
  if (props.error) return error;
  return props.focus && props.floating ? primary : secondaryTextColor;
}, function (props) {
  return props.floatingLabelStyle;
});

var HintText = _styledComponents2.default.div(_templateObject8, function (props) {
  return props.error ? error : hintTextColor;
}, function (props) {
  return +props.show;
}, function (props) {
  return props.hasPrefix ? '1em' : '0em';
}, function (props) {
  return props.hintTextStyle;
});

var ErrorText = _styledComponents2.default.div(_templateObject9, error, fadeInOut, placeBelow, function (props) {
  return props.errorTextStyle;
});

var CharLimitText = _styledComponents2.default.div(_templateObject10, function (props) {
  return props.error ? error : hintTextColor;
}, placeBelow);

var HelperText = _styledComponents2.default.div(_templateObject9, secondaryTextColor, fadeInOut, placeBelow, function (props) {
  return props.helperTextStyle;
});

var UnderlineFocus = _styledComponents2.default.div(_templateObject11, function (props) {
  return props.error ? error : primary;
}, function (props) {
  return props.focus && !props.disabled && 'width: 100%';
}, function (props) {
  return props.underlineFocusStyle;
});

/*
 * Styles that will be shared between textfield and text area
 */
var inputStyles = '\n  position: relative;\n  border: none;\n  outline: none;\n  cursor: inherit;\n  background-color: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  font-weight: inherit;\n  font-stretch: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n';

/*
 * Since these styles depend on props, they can't live in the template literal
 * above
 */
var Input = _styledComponents2.default.input(_templateObject13, inputStyles).extend(_templateObject12, function (_ref) {
  var hasSuffix = _ref.hasSuffix;
  return hasSuffix ? 1 : 0;
}, primaryTextColor, function (props) {
  return props.hasPrefix ? '1em' : '0';
}, function (props) {
  return props.inputStyle;
});

var Area = _styledComponents2.default.textarea(_templateObject13, inputStyles).extend(_templateObject14, function (_ref2) {
  var hasSuffix = _ref2.hasSuffix;
  return hasSuffix ? 1 : 0;
}, function (props) {
  return props.height - 4;
}, primaryTextColor, function (props) {
  return props.hasPrefix ? '1em' : '0';
}, function (props) {
  return props.inputStyle;
}, function (props) {
  return props.hasBorder ? 'solid' : 'none';
}, function (props) {
  return props.hasBorder ? '1px' : 'none';
}, function (props) {
  return props.hasBorder ? '4px' : 'none';
}, function (props) {
  return props.error ? error : hintTextColor;
}, function (props) {
  return props.hasBorder ? '1em 1em 0 1em' : 'none';
}, primary);

var TextField = (0, _styledComponents2.default)(TextFieldComponent)(_templateObject15, function (props) {
  return props.fullWidth ? '100%' : '167px';
}, function (props) {
  return props.hasBorder ? 'none' : '0.5px';
}, function (props) {
  return props.disabled ? 'dotted' : 'solid';
}, function (props) {
  return props.error ? error : hintTextColor;
});

exports.default = TextField;
module.exports = exports['default'];