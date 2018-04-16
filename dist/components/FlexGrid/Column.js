'use strict';

exports.__esModule = true;
exports.Column = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n    ', ': ', ';\n  '], ['\n    ', ': ', ';\n  ']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n    order: ', ';\n  '], ['\n    order: ', ';\n  ']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n    flex-basis: ', ';\n    max-width: ', ';\n  '], ['\n    flex-basis: ', ';\n    max-width: ', ';\n  ']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: column;\n  ', ';\n  flex: 0 0 auto;\n  max-width: none;\n  order: 0;\n  ', '\n  ', '\n  ', '\n'], ['\n  display: flex;\n  flex-direction: column;\n  ', ';\n  flex: 0 0 auto;\n  max-width: none;\n  order: 0;\n  ', '\n  ', '\n  ', '\n']),
    _templateObject5 = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _recompose = require('recompose');

var _ScreenSizeContext = require('../../contexts/ScreenSizeContext');

var _Row = require('./Row');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * @file Column
                                                                                                                                                                                                                              * @author Brad Decker <bhdecker84@gmail.com|brad@merlinlabs.com>
                                                                                                                                                                                                                              * @description Defines a flex grid column that responds to the size
                                                                                                                                                                                                                              * of the screen to grow, shrink, reorder as described by the end
                                                                                                                                                                                                                              * user via size props.
                                                                                                                                                                                                                              */


/**
 * getResponsiveProp
 *
 * Returns the appropriate column prop based on the current screenSize
 * will return an exact match first, then will evaluate the next lowest
 * screen size to see if that prop was provided, finally it looks for
 * the default screenSize based on the theme. If a key is provided this
 * method will return that subkey, otherwise it returns the whole object.
 * @param {Object} props           Props provided by the user
 * @param {Object} layout          theme layout from the sc theme
 * @param {String} screenSize      current screen size provided by context
 * @param {String} lowerScreenSize Screen size one lower than the current
 * @param {String} key             The subkey to return from the prop object
 */
var getResponsiveProp = function getResponsiveProp(props, layout, screenSize, lowerScreenSize, key) {
  var responsiveProp = props[screenSize] || props[lowerScreenSize] || props[layout.defaultScreenSize];
  if (!responsiveProp) return null;
  if (key) return responsiveProp[key];
  return responsiveProp;
};

/**
 * computePercentage
 *
 * Returns a string representing the percentage of baseSize that size fulfills
 * @param {Integer} size      size that the current column should take up
 * @param {Integer} baseSize  the baseSize of the theme
 */
var computePercentage = function computePercentage(size, baseSize) {
  return size / baseSize * 100 + '%';
};

/**
 * calcPlus
 *
 * generates a 'calc' attribute with all provided arguments as addends
 * @param {string}        primaryAddend  We require a starting addend
 * @param {Array<String>} addends        Any number of additional addends
 */
var calcPlus = function calcPlus(primaryAddend) {
  for (var _len = arguments.length, addends = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    addends[_key - 1] = arguments[_key];
  }

  if (addends.length === 0) return primaryAddend;
  var str = 'calc(' + primaryAddend + ' + ';
  addends.forEach(function (addend, i) {
    str += addend;
    if (i !== addends.length - 1) str += ' + ';else str += ')';
  });
  return str;
};

/**
 * calcMinus
 *
 * generates a 'calc' attribute with a minuend and all provided arguments
 * as subtrahend
 * @param {string}        minuend     The starting number to subtract from
 * @param {Array<String>} subtrahend  Any number of subtrahends
 */
var calcMinus = function calcMinus(minuend) {
  for (var _len2 = arguments.length, subtrahend = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    subtrahend[_key2 - 1] = arguments[_key2];
  }

  if (subtrahend.length === 0) return minuend;
  var str = 'calc(' + minuend + ' - ';
  subtrahend.forEach(function (sub, i) {
    str += sub;
    if (i !== subtrahend.length - 1) str += ' - ';else str += ')';
  });
  return str;
};

/**
 * offsetMixin
 *
 * This mixin generates the appropriate margin to add an offset to a column
 * within a row. It relies on the row prop from the Row context provider.
 * @param {object}  props                 Object of props for the component
 * @param {string}  props.screenSize      The current active screensize
 * @param {string}  props.lowerScreenSize The next lowest screensize
 * @param {boolean} props.noGutters       Boolean indication to render gutters
 * @param {object}  props.theme.layout    The layout theme options
 * @param {object}  props.row             Props provided by the parent row context
 */
var offsetMixin = function offsetMixin(_ref) {
  var screenSize = _ref.screenSize,
      lowerScreenSize = _ref.lowerScreenSize,
      noGutters = _ref.noGutters,
      layout = _ref.theme.layout,
      row = _ref.row,
      props = _objectWithoutProperties(_ref, ['screenSize', 'lowerScreenSize', 'noGutters', 'theme', 'row']);

  var offset = getResponsiveProp(props, layout, screenSize, lowerScreenSize, 'offset');
  if (!offset) return '';
  var margin = calcPlus(computePercentage(offset, layout.baseGridSize), noGutters ? '0px' : layout.gutterSize);
  return (0, _styledComponents.css)(_templateObject, row && row.horizontal === 'right' ? 'margin-right' : 'margin-left', margin);
};

/**
 * orderMixin
 *
 * This mixin generates the flex order for the column
 * @param {object}  props                 Object of props for the component
 * @param {string}  props.screenSize      The current active screensize
 * @param {string}  props.lowerScreenSize The next lowest screensize
 * @param {object}  props.theme.layout    The layout theme options
 */
var orderMixin = function orderMixin(_ref2) {
  var screenSize = _ref2.screenSize,
      lowerScreenSize = _ref2.lowerScreenSize,
      layout = _ref2.theme.layout,
      props = _objectWithoutProperties(_ref2, ['screenSize', 'lowerScreenSize', 'theme']);

  var order = getResponsiveProp(props, layout, screenSize, lowerScreenSize, 'order');
  if (!order) return '';
  return (0, _styledComponents.css)(_templateObject2, order);
};

/**
 * flexSizeMixin
 *
 * Styled mixin to generate the appropriate max-with and flex-basis for
 * this column based on screensize and provided props.
 * @param {object}  props                 Object of props for the component
 * @param {integer} props.size            static size for this column
 * @param {string}  props.screenSize      The current active screensize
 * @param {string}  props.lowerScreenSize The next lowest screensize
 * @param {boolean} props.noGutters       Boolean indication to render gutters
 * @param {object}  props.theme.layout    The layout theme options
 */
var flexSizeMixin = function flexSizeMixin(_ref3) {
  var size = _ref3.size,
      noGutters = _ref3.noGutters,
      screenSize = _ref3.screenSize,
      lowerScreenSize = _ref3.lowerScreenSize,
      layout = _ref3.theme.layout,
      props = _objectWithoutProperties(_ref3, ['size', 'noGutters', 'screenSize', 'lowerScreenSize', 'theme']);

  var targetSize = size || getResponsiveProp(props, layout, screenSize, lowerScreenSize, 'size');
  if (!targetSize) return '';
  var value = calcMinus(computePercentage(targetSize, layout.baseGridSize), noGutters ? '0px' : layout.gutterSize, noGutters ? '0px' : layout.gutterSize);
  return (0, _styledComponents.css)(_templateObject3, value, value);
};

/**
 * SizedColumn
 *
 * styled component used internally only. The reason this
 * exists is because the ColumnComponent needs to extend the
 * props that the Column has access to. You can still override
 * any styled on this component by importing Column and .extend'ing
 * it. The reason for this is because the className generated will
 * be added at the END of the SizedColumn which will give it priority
 * over the styled generated by Styled Components for this component
 */
var SizedColumn = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.noGutters ? '' : 'padding: 0 ' + props.theme.layout.gutterSize;
}, offsetMixin, flexSizeMixin, orderMixin);

/**
 * ColumnComponent
 *
 * This component utilizes the Row context consumer and the ScreenSize
 * context consumer to provide additional props to the SizedColumn SMC
 * component. Note that while it APPEARS that there are two components
 * here only one will actually be created. Column is a blank slate
 * styled component to be used for .extend'ing and for targeting in other
 * components styles. The class name generated for Column is attached onto
 * SizedColumn. When you pass a className into a styled component it gets
 * added to the end of the generated classNames for that component. Because
 * order of classes matters in css this className takes precedent.
 */
var enhancer = (0, _recompose.compose)(_ScreenSizeContext.withScreenSize, _Row.withRowState);

var BaseColumnComponent = function BaseColumnComponent(_ref4) {
  var className = _ref4.className,
      children = _ref4.children,
      screenSizeState = _ref4.screenSizeState,
      rowState = _ref4.rowState,
      props = _objectWithoutProperties(_ref4, ['className', 'children', 'screenSizeState', 'rowState']);

  return _react2.default.createElement(
    SizedColumn,
    _extends({}, props, {
      'data-smc': 'Column',
      row: rowState,
      screenSize: screenSizeState.screenSize,
      lowerScreenSize: screenSizeState.lowerScreenSize,
      className: className
    }),
    children
  );
};

var Column = exports.Column = (0, _styledComponents2.default)(enhancer(BaseColumnComponent))(_templateObject5);