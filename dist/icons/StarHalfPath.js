"use strict";

exports.__esModule = true;
exports.StarHalfPath = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StarHalfPath = exports.StarHalfPath = function StarHalfPath() {
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", { d: "M0 0h24v24H0V0z", id: "a" })
    ),
    _react2.default.createElement(
      "clipPath",
      { id: "b" },
      _react2.default.createElement("use", { overflow: "visible", xlinkHref: "#a" })
    ),
    _react2.default.createElement("path", {
      clipPath: "url(#b)",
      d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
    })
  );
};