'use strict';

exports.__esModule = true;
exports.defaultTheme = exports.generateBreakpoint = undefined;

var _screenSizes;

var _colors = require('./colors');

var _makeMaterialSliderTheme = require('./makeMaterialSliderTheme');

var sliderTheme = (0, _makeMaterialSliderTheme.makeMaterialSliderTheme)();

var PREFIX = 'screen and';
var minW = function minW(min) {
  return '(min-width: ' + min + 'px)';
};
var maxW = function maxW(max) {
  return '(max-width: ' + max + 'px)';
};
var o = function o(or) {
  return '(orientation: ' + or + ')';
};

var generateBreakpoint = exports.generateBreakpoint = function generateBreakpoint(_ref) {
  var min = _ref.min,
      max = _ref.max,
      orientation = _ref.orientation,
      enforceAspectRatio = _ref.enforceAspectRatio;

  var breakpoint = PREFIX + ' ' + minW(min);
  if (max) {
    breakpoint += ' and ' + maxW(max);
  }

  if (orientation) {
    breakpoint += ' and ' + o(orientation);
  }

  if (enforceAspectRatio) {
    breakpoint += ' and (max-aspect-ratio: 4/3)';
  }

  return breakpoint;
};

var xs = generateBreakpoint({
  min: 0,
  max: 600
});

var sm = generateBreakpoint({
  min: 601,
  max: 960
});

var md = generateBreakpoint({
  min: 961,
  max: 1280
});

var lg = generateBreakpoint({
  min: 1281,
  max: 1960
});

var xl = generateBreakpoint({
  min: 1961
});

var defaultTheme = exports.defaultTheme = {
  primary: '#3f51b5',
  accent: '#ff4081',
  white: '#ffffff',
  layout: {
    baseGridSize: 12,
    // When using the layout features, what screensize should we default to when it is unknown
    defaultScreenSize: 'xs',
    gutterSize: '16px',
    screenSizePriority: ['xl', 'lg', 'md', 'sm', 'xs'],
    screenSizes: (_screenSizes = {}, _screenSizes[xs] = 'xs', _screenSizes[sm] = 'sm', _screenSizes[md] = 'md', _screenSizes[lg] = 'lg', _screenSizes[xl] = 'xl', _screenSizes)
  },
  // Elevation theme
  elevation: {
    // What property to use to apply depth
    property: 'box-shadow',
    // Transition for animating buttons
    transition: {
      duration: '280ms',
      effect: 'cubic-bezier(.4, 0, .2, 1)'
    },
    colors: {
      umbra: _colors.black.alpha(0.2).toString(),
      penumbra: _colors.black.alpha(0.14).toString(),
      ambient: _colors.black.alpha(0.12).toString()
    }
  },
  textColors: {
    primary: _colors.black.alpha(0.87).toString(),
    secondary: _colors.black.alpha(0.54).toString(),
    hint: _colors.black.alpha(0.38).toString(),
    disabled: _colors.black.alpha(0.38).toString(),
    icon: _colors.black.alpha(0.38).toString()
  },
  inputColorOverrides: {
    textField: null
  },
  slider: sliderTheme,
  disabledCheckbox: _colors.black.alpha(0.26).toString(),
  toolbar: {
    horizontalPaddingDesktop: '24px',
    horizontalPaddingMobile: '16px',
    iconSize: '24px',
    iconPadding: '12px'
  }
};