'use strict';

exports.__esModule = true;
exports.ScreenSizeContext = exports.ScreenSizeConsumer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.withScreenSize = withScreenSize;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _respondable = require('respondable');

var _respondable2 = _interopRequireDefault(_respondable);

var _platform = require('platform');

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file ScreenSizeContext
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Brad Decker <bhdecker84@gmail.com|brad@merlinlabs.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Ari Frankel <ari.l.frankel@gmail.com|ari@merlinlabs.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description Defines a context that will allow all children to
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * access the current screenSize. This is implmented using respondable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * All breakpoints are adjustable by the end user.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Context = (0, _react.createContext)({ size: 'server' });

/**
 * ScreenSizeConsumer
 *
 * This part of the context is a component that must have a single child
 * that is a function. This function is called at render with the value
 * defined in the Context.Provider as an argument.
 */
var ScreenSizeConsumer = exports.ScreenSizeConsumer = Context.Consumer;

var ScreenSizeContextBase = function (_Component) {
  _inherits(ScreenSizeContextBase, _Component);

  function ScreenSizeContextBase() {
    var _temp, _this, _ret;

    _classCallCheck(this, ScreenSizeContextBase);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      screenSize: 'server',
      platformData: {}
    }, _this.getNextHighestScreenSize = function (active) {
      var index = _this.props.theme.layout.screenSizePriority.indexOf(active);
      if (index !== 0) return _this.props.theme.layout.screenSizePriority[index - 1];
      return active;
    }, _this.getNextLowestScreenSize = function (active) {
      var index = _this.props.theme.layout.screenSizePriority.indexOf(active);
      var length = _this.props.theme.layout.screenSizePriority.length;
      if (index !== length - 1) return _this.props.theme.layout.screenSizePriority[index + 1];
      return active;
    }, _this.setScreenSize = function (active, largest) {
      return _this.setState({
        screenSize: largest,
        lowerScreenSize: _this.getNextLowestScreenSize(largest),
        higherScreenSize: _this.getNextHighestScreenSize(largest)
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ScreenSizeContextBase.prototype.componentDidMount = function componentDidMount() {
    // Get platform data using Platform
    // It is necessary to capture the platform data on the client.
    // Platform relies on window.navigator.
    // eslint-disable-next-line
    this.setState({
      platformData: {
        product: _platform2.default.product,
        osFamily: _platform2.default.os ? _platform2.default.os.family : null,
        majorVersion: _platform2.default.version ? parseInt(_platform2.default.version.split('.')[0], 10) : -1,
        majorOsVersion: _platform2.default.os && _platform2.default.os.version ? parseInt(_platform2.default.os.version.split('.')[0], 10) : -1
      }
    });
    // Initialize Respondable
    // first prop is a map in the form of [mediaQuery]: 'string'
    // If the mediaQuery matches, 'string' will be returned as active.
    // Second prop is a callback method to fire when size changes.
    // Third prop is an array specifying the priority of mediaQueries
    this.destroy = (0, _respondable2.default)(this.props.theme.layout.screenSizes, this.setScreenSize, this.props.theme.layout.screenSizePriority);
  };

  ScreenSizeContextBase.prototype.componentWillUnmount = function componentWillUnmount() {
    // Destroy the respondable listener
    this.destroy && this.destroy();
  };

  /**
   * getNextHighestScreenSize
   *
   * this method uses the priorities of screenSizes in the theme
   * to determine which screenSize would be the next highest one
   * relative to the current size. This might be useful for context
   * consumers.
   *
   * @param {String} active current active screenSize
   */


  /**
   * getNextLowestScreenSize
   *
   * this method uses the priorities of screenSizes in the theme
   * to determine which screenSize would be the next lowest one
   * relative to the current size. Columns attempt to match the lower
   * screenSize props when the curren screenSize isn't defined.
   *
   * @param {String} active current active screenSize
   */


  /**
   * setScreenSize
   *
   * this method is a thin wrapper around setState for setting
   * the appropriate screenSizes into the context state. This is
   * used as the respondable callback method. Anytime screensize
   * changes this method will be called.
   *
   * Note: we use largest instead of active prop as active because
   * media queries defined in userland might be competing. Respondable
   * api always provides the largest param even if queries do not
   * compete. largest is the largest active screenSize.
   *
   * @param {String} active  current active screenSize
   * @param {String} largest largest of active screenSizes if any compete
   */


  ScreenSizeContextBase.prototype.render = function render() {
    return _react2.default.createElement(
      Context.Provider,
      {
        value: _extends({}, this.state)
      },
      this.props.children
    );
  };

  return ScreenSizeContextBase;
}(_react.Component);

// withTheme gives us access to the theme without it being a Styled Component


var ScreenSizeContext = exports.ScreenSizeContext = (0, _styledComponents.withTheme)(ScreenSizeContextBase);

function withScreenSize(WrappedComponent) {
  var ScreenSizeAwareComponent = function ScreenSizeAwareComponent(props) {
    return _react2.default.createElement(
      ScreenSizeConsumer,
      null,
      function (screenSizeState) {
        return _react2.default.createElement(WrappedComponent, _extends({}, props, { screenSizeState: screenSizeState }));
      }
    );
  };
  var name = WrappedComponent.displayName || WrappedComponent.name;
  ScreenSizeAwareComponent.displayName = 'screenSizeAware(' + name + ')';
  return ScreenSizeAwareComponent;
}