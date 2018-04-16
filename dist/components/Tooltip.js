'use strict';

exports.__esModule = true;
exports.Tooltip = exports.TooltipIcon = exports.TooltipContents = exports.TooltipLink = exports.TooltipPortal = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  && {\n    box-sizing: border-box;\n    background: rgba(0, 0, 0, .9);\n    left: ', 'px;\n    top: ', 'px;\n    width: ', 'px;\n    height: ', 'px;\n    min-height: ', 'px;\n    color: white;\n    font-size: ', 'px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n  }\n'], ['\n  && {\n    box-sizing: border-box;\n    background: rgba(0, 0, 0, .9);\n    left: ', 'px;\n    top: ', 'px;\n    width: ', 'px;\n    height: ', 'px;\n    min-height: ', 'px;\n    color: white;\n    font-size: ', 'px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  :hover {\n    cursor: pointer;\n  }\n'], ['\n  display: inline-block;\n  :hover {\n    cursor: pointer;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  width: ', ';\n  padding: ', ';\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  '], ['\n  width: ', ';\n  padding: ', ';\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  ']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  fill: rgba(0, 0, 0, .54);\n  '], ['\n  fill: rgba(0, 0, 0, .54);\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Portal = require('./Portal');

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var MOBILE_MARGIN = 24;
var DESKTOP_MARGIN = 14;
var MOBILE_FONT_SIZE = 14;
var DESKTOP_FONT_SIZE = 10;
var MOBILE_SIDE_PADDING = 16;
var DESKTOP_SIDE_PADDING = 8;
var DESKTOP_MIN_HEIGHT = 22;
var MOBILE_MIN_HEIGHT = 32;
var DESKTOP_TOP_PADDING = (DESKTOP_MIN_HEIGHT - DESKTOP_FONT_SIZE) / 2;
var MOBILE_TOP_PADDING = (MOBILE_MIN_HEIGHT - MOBILE_FONT_SIZE) / 2;
var ROBOTO_RATIO = 0.51; // This is a guess

var TooltipPortal = exports.TooltipPortal = (0, _styledComponents2.default)(_Portal.Portal)(_templateObject, function (props) {
  return props.left || 0;
}, function (props) {
  return props.top || 0;
}, function (props) {
  return props.width;
}, function (props) {
  return props.height;
}, function (props) {
  return props.mobile ? MOBILE_MIN_HEIGHT : DESKTOP_MIN_HEIGHT;
}, function (props) {
  return props.mobile ? MOBILE_FONT_SIZE : DESKTOP_FONT_SIZE;
});

var TooltipLink = exports.TooltipLink = _styledComponents2.default.a.attrs({
  children: function children(props) {
    return props.children;
  }
})(_templateObject2);
var TooltipContents = exports.TooltipContents = _styledComponents2.default.div(_templateObject3, function (_ref) {
  var contentWidth = _ref.contentWidth,
      childStringLength = _ref.childStringLength,
      mobile = _ref.mobile;

  var contentSize = 30;
  if (typeof contentWidth === 'number') contentSize = contentWidth;else if (childStringLength !== null) {
    contentSize = (mobile ? MOBILE_FONT_SIZE : DESKTOP_FONT_SIZE) * childStringLength * ROBOTO_RATIO;
  }
  var paddingSize = 2 * (mobile ? MOBILE_SIDE_PADDING : DESKTOP_SIDE_PADDING);
  return contentSize - paddingSize + 'px';
}, function (_ref2) {
  var mobile = _ref2.mobile;
  return mobile ? MOBILE_TOP_PADDING + 'px ' + MOBILE_SIDE_PADDING + 'px' : DESKTOP_TOP_PADDING + 'px ' + DESKTOP_SIDE_PADDING + 'px';
});

var TooltipIcon = exports.TooltipIcon = _icons.Icon.extend(_templateObject4);

var Tooltip = exports.Tooltip = function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip() {
    var _temp, _this, _ret;

    _classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      portalContentsHeight: 0,
      portalContentsWidth: 0,
      linkBottom: 0,
      linkLeft: 0,
      linkWidth: 0,
      open: false,
      countedInitialClick: true
    }, _this.getTooltipLink = function (el) {
      if (_this.tooltipLink) return;
      _this.tooltipLink = el;
      _this.getTooltipLinkPosition();
    }, _this.getTooltipContents = function (el) {
      if (_this.portalContents) return;
      _this.portalContents = el;
      _this.calculatePortalContents();
    }, _this.getTooltipLinkPosition = function () {
      if (!_this.tooltipLink) return;
      var _window = window,
          pageYOffset = _window.pageYOffset,
          pageXOffset = _window.pageXOffset;

      var _this$tooltipLink$get = _this.tooltipLink.getBoundingClientRect(),
          left = _this$tooltipLink$get.left,
          width = _this$tooltipLink$get.width,
          bottom = _this$tooltipLink$get.bottom;

      _this.setState({
        linkBottom: bottom + pageYOffset,
        linkLeft: left + pageXOffset,
        linkWidth: width
      });
    }, _this.calculatePortalContents = function () {
      if (!_this.portalContents) return;

      var _this$portalContents$ = _this.portalContents.getBoundingClientRect(),
          height = _this$portalContents$.height,
          width = _this$portalContents$.width;

      _this.setState({
        portalContentsHeight: height,
        portalContentsWidth: width
      });
    }, _this.showTooltip = function () {
      _this.setState({ open: true });
      window.addEventListener('scroll', _this.hideTooltip);
    }, _this.hideTooltip = function () {
      _this.setState({ open: false });
      window.removeEventListener('scroll', _this.hideTooltip);
      if (_this.props.mobile) {
        window.removeEventListener('click', _this.handleClickAnywhere);
      }
    }, _this.handleMouseEnter = function () {
      if (!_this.props.mobile) _this.showTooltip();
    }, _this.handleMouseLeave = function () {
      if (!_this.props.mobile) _this.hideTooltip();
    }, _this.handleClickAnywhere = function () {
      if (_this.state.countedInitialClick) {
        _this.hideTooltip();
      } else {
        _this.setState({ countedInitialClick: true });
      }
    }, _this.handleClick = function () {
      if (!_this.props.mobile) return;
      if (_this.state.open) {
        _this.hideTooltip();
      } else {
        _this.setState({ countedInitialClick: false }, function () {
          _this.showTooltip();
          window.addEventListener('click', _this.handleClickAnywhere);
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Tooltip.prototype.componentDidMount = function componentDidMount() {
    window.addEventListener('scroll', this.getTooltipLinkPosition);
    window.addEventListener('resize', this.getTooltipLinkPosition);
    window.addEventListener('resize', this.calculatePortalContents);
  };

  Tooltip.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('scroll', this.getTooltipLinkPosition);
    window.removeEventListener('resize', this.getTooltipLinkPosition);
    window.removeEventListener('resize', this.calculatePortalContents);
  };

  Tooltip.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        mobile = _props.mobile,
        Link = _props.link;
    var _state = this.state,
        open = _state.open,
        portalContentsHeight = _state.portalContentsHeight,
        portalContentsWidth = _state.portalContentsWidth,
        linkBottom = _state.linkBottom,
        linkLeft = _state.linkLeft,
        linkWidth = _state.linkWidth;

    var left = linkLeft + (linkWidth / 2 - portalContentsWidth / 2);
    var top = linkBottom + (mobile ? MOBILE_MARGIN : DESKTOP_MARGIN);
    var customIconPassedIn = Boolean(Link) && typeof Link !== 'string';
    return _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(
        TooltipLink,
        {
          innerRef: this.getTooltipLink,
          onClick: this.handleClick,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        },
        customIconPassedIn ? _react2.default.createElement(Link, null) : _react2.default.createElement(_icons.Icon, { icon: Link || 'info_outline' })
      ),
      _react2.default.createElement(TooltipPortal, {
        open: open,
        top: top,
        left: left,
        height: portalContentsHeight,
        width: portalContentsWidth,
        mobile: mobile,
        renderContents: function renderContents() {
          return _react2.default.createElement(
            TooltipContents,
            {
              contentWidth: _this2.props.contentWidth,
              innerRef: _this2.getTooltipContents,
              childStringLength: typeof _this2.props.children === 'string' ? _this2.props.children.length : null,
              mobile: mobile
            },
            _this2.props.children
          );
        }
      })
    );
  };

  return Tooltip;
}(_react2.default.Component);