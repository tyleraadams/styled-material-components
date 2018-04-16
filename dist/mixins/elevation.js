'use strict';

exports.__esModule = true;
exports.elevationTransition = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  will-change: ', ';\n  transition: ', ' 280ms cubic-bezier(.4, 0, .2, 1);\n'], ['\n  will-change: ', ';\n  transition: ', ' 280ms cubic-bezier(.4, 0, .2, 1);\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  ', ': ', ',\n    ', ',\n    ', ';\n'], ['\n  ', ': ', ',\n    ', ',\n    ', ';\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/**
 * Elevation Constants
 * These are not able to be overwritten by the theme
 */
var depth = {
  umbra: ['0px 0px 0px 0px', '0px 2px 1px -1px', '0px 3px 1px -2px', '0px 3px 3px -2px', '0px 2px 4px -1px', '0px 3px 5px -1px', '0px 3px 5px -1px', '0px 4px 5px -2px', '0px 5px 5px -3px', '0px 5px 6px -3px', '0px 6px 6px -3px', '0px 6px 7px -4px', '0px 7px 8px -4px', '0px 7px 8px -4px', '0px 7px 9px -4px', '0px 8px 9px -5px', '0px 8px 10px -5px', '0px 8px 11px -5px', '0px 9px 11px -5px', '0px 9px 12px -6px', '0px 10px 13px -6px', '0px 10px 13px -6px', '0px 10px 14px -6px', '0px 11px 14px -7px', '0px 11px 15px -7px'],
  penumbra: ['0px 0px 0px 0px', '0px 1px 1px 0px', '0px 2px 2px 0px', '0px 3px 4px 0px', '0px 4px 5px 0px', '0px 5px 8px 0px', '0px 6px 10px 0px', '0px 7px 10px 1px', '0px 8px 10px 1px', '0px 9px 12px 1px', '0px 10px 14px 1px', '0px 11px 15px 1px', '0px 12px 17px 2px', '0px 13px 19px 2px', '0px 14px 21px 2px', '0px 15px 22px 2px', '0px 16px 24px 2px', '0px 17px 26px 2px', '0px 18px 28px 2px', '0px 19px 29px 2px', '0px 20px 31px 3px', '0px 21px 33px 3px', '0px 22px 35px 3px', '0px 23px 36px 3px', '0px 24px 38px 3px'],
  ambient: ['0px 0px 0px 0px', '0px 1px 3px 0px', '0px 1px 5px 0px', '0px 1px 8px 0px', '0px 1px 10px 0px', '0px 1px 14px 0px', '0px 1px 18px 0px', '0px 2px 16px 1px', '0px 3px 14px 2px', '0px 3px 16px 2px', '0px 4px 18px 3px', '0px 4px 20px 3px', '0px 5px 22px 4px', '0px 5px 24px 4px', '0px 5px 26px 4px', '0px 6px 28px 5px', '0px 6px 30px 5px', '0px 6px 32px 5px', '0px 7px 34px 6px', '0px 7px 36px 6px', '0px 8px 38px 7px', '0px 8px 40px 7px', '0px 8px 42px 7px', '0px 9px 44px 8px', '0px 9px 46px 8px']
};

/**
 * Export this mixing separately as we only would want or need to apply it once.
 */
var elevationTransition = exports.elevationTransition = (0, _styledComponents.css)(_templateObject, function (props) {
  return props.theme.elevation.property;
}, function (props) {
  return props.theme.elevation.property;
});

// helper to generate box shadow setting
var addDepth = function addDepth(type, z) {
  return (0, _styledComponents.css)(_templateObject2, function (props) {
    return depth[type][z] + ' ' + props.theme.elevation.colors[type];
  });
};

var elevationMixin = function elevationMixin(z) {
  return (0, _styledComponents.css)(_templateObject3, function (props) {
    return props.theme.elevation.property;
  }, addDepth('umbra', z), addDepth('penumbra', z), addDepth('ambient', z));
};

exports.default = elevationMixin;