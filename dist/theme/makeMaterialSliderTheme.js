'use strict';

exports.__esModule = true;
exports.makeMaterialSliderTheme = exports.makeMaterialSliderSizes = exports.makeMaterialSliderTransitions = exports.makeMaterialSliderColorTheme = undefined;

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _colors = require('./colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_MAIN_COLOR = (0, _color2.default)('#479c10');
var DEFAULT_MAIN_OPACITY = 1;
var DEFAULT_FOCUS_HALO_OPACITY = 0.12;

var DEFAULT_LIGHT_COLOR = _colors.black;
var DEFAULT_LIGHT_PAGE_COLOR = _colors.white;
var DEFAULT_LIGHT_TRACK_OPACITY = 0.26;
var DEFAULT_LIGHT_FOCUSED_TRACK_OPACITY = 0.38;

var DEFAULT_DARK_COLOR = _colors.white;
var DEFAULT_DARK_PAGE_COLOR = _colors.black;
var DEFAULT_DARK_TRACK_OPACITY = 0.3;
var DEFAULT_DARK_FOCUSED_TRACK_OPACITY = DEFAULT_DARK_TRACK_OPACITY;

var makeMaterialSliderColorTheme = exports.makeMaterialSliderColorTheme = function makeMaterialSliderColorTheme() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isLight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var mainColorOverride = overrides.mainColor;
  var mainColorAtZeroOverride = overrides.mainColorAtZero;
  var mainOpacityOverride = overrides.mainOpacity;
  var trackColorOverride = overrides.trackColor;
  var trackOpacityOverride = overrides.trackOpacity;
  var focusHaloColorOverride = overrides.focusHaloColor;
  var focusHaloOpacityOverride = overrides.focusHaloOpacity;
  var focusTrackOpacityOverride = overrides.focusTrackOpacity;
  var disabledColorOverride = overrides.disabledColor;
  var disabledOpacityOverride = overrides.disabledOpacity;
  var pageColorOverride = overrides.pageColor;

  var mainColor = mainColorOverride ? (0, _color2.default)(mainColorOverride) : DEFAULT_MAIN_COLOR;
  var mainOpacity = mainOpacityOverride || DEFAULT_MAIN_OPACITY;

  var mainColorAtZero = isLight ? DEFAULT_LIGHT_COLOR : DEFAULT_DARK_COLOR;
  if (mainColorAtZeroOverride) mainColorAtZero = (0, _color2.default)(mainColorAtZeroOverride);

  var trackColor = mainColorAtZero;
  if (trackColorOverride) trackColor = (0, _color2.default)(trackColorOverride);

  var trackOpacity = isLight ? DEFAULT_LIGHT_TRACK_OPACITY : DEFAULT_DARK_TRACK_OPACITY;
  if (trackOpacityOverride) trackOpacity = trackOpacityOverride;

  var focusHaloColor = isLight ? mainColor : mainColor;
  if (focusHaloColorOverride) focusHaloColor = (0, _color2.default)(focusHaloColorOverride);

  var focusHaloOpacity = focusHaloOpacityOverride || DEFAULT_FOCUS_HALO_OPACITY;

  var focusTrackOpacity = isLight ? DEFAULT_LIGHT_FOCUSED_TRACK_OPACITY : DEFAULT_DARK_FOCUSED_TRACK_OPACITY;
  if (focusTrackOpacityOverride) focusTrackOpacity = focusTrackOpacityOverride;

  var disabledColor = isLight ? DEFAULT_LIGHT_COLOR : DEFAULT_DARK_COLOR;
  if (disabledColorOverride) disabledColor = (0, _color2.default)(disabledColorOverride);

  var disabledOpacity = isLight ? DEFAULT_LIGHT_TRACK_OPACITY : DEFAULT_DARK_TRACK_OPACITY;
  if (disabledOpacityOverride) disabledOpacity = disabledOpacityOverride;

  var pageColor = isLight ? DEFAULT_LIGHT_PAGE_COLOR : DEFAULT_DARK_PAGE_COLOR;
  if (pageColorOverride) pageColor = (0, _color2.default)(pageColorOverride);

  return {
    main: mainColor.alpha(mainOpacity).toString(),
    mainAtZero: mainColorAtZero.alpha(mainOpacity).toString(),
    track: trackColor.alpha(trackOpacity).toString(),
    focusHalo: focusHaloColor.alpha(focusHaloOpacity).toString(),
    focusTrack: trackColor.alpha(focusTrackOpacity).toString(),
    disabled: disabledColor.alpha(disabledOpacity).toString(),
    pageColor: pageColor.toString()
  };
};

var makeMaterialSliderTransitions = exports.makeMaterialSliderTransitions = function makeMaterialSliderTransitions() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var main = overrides.main || '50ms';
  var slider = overrides.slider || '50ms';
  return {
    main: main,
    slider: slider
  };
};

var makeMaterialSliderSizes = exports.makeMaterialSliderSizes = function makeMaterialSliderSizes() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var thumb = overrides.thumb || 10;
  var thumbBorder = overrides.thumbBorder || 2;
  var thumbClicked = overrides.thumbClicked || 14;
  var thumbDisabled = overrides.thumbDisabled || 8;
  var thumbDisabledBorder = overrides.thumbDisabledBorder || 2;
  var focusHalo = overrides.focusHalo || 24;
  var trackHeight = overrides.trackHeight || 2;
  var clickableHeight = overrides.clickableHeight || 10;
  return {
    thumb: thumb,
    thumbBorder: thumbBorder,
    thumbClicked: thumbClicked,
    thumbDisabled: thumbDisabled,
    thumbDisabledBorder: thumbDisabledBorder,
    focusHalo: focusHalo,
    trackHeight: trackHeight,
    clickableHeight: clickableHeight
  };
};

var makeMaterialSliderTheme = exports.makeMaterialSliderTheme = function makeMaterialSliderTheme() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isLight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return {
    colors: makeMaterialSliderColorTheme(overrides.colors, isLight),
    transitions: makeMaterialSliderTransitions(overrides.transitions),
    sizes: makeMaterialSliderSizes(overrides.sizes)
  };
};