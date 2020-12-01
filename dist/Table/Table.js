"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = Table;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TableModule = _interopRequireDefault(require("./Table.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param   {[Array]}  headings  Gets an Array of headings for the table component
 * @param   {[Array]}  body      Gets an Array of Arrays as the body for the component
 *
 * @return  {[Component]}        Returns the Table Component
 */

/**
 * A simple Table component that accepts an array as headings and an array of arrays as the body content
 */
function Table(_ref) {
  var headings = _ref.headings,
      body = _ref.body;
  return /*#__PURE__*/_react.default.createElement("table", {
    class: _TableModule.default["u-full-width"]
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, headings ? headings.map(function (h) {
    return /*#__PURE__*/_react.default.createElement("th", null, h);
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null))), /*#__PURE__*/_react.default.createElement("tbody", null, body ? body.map(function (row) {
    return /*#__PURE__*/_react.default.createElement("tr", null, row.map(function (field) {
      return /*#__PURE__*/_react.default.createElement("td", null, field);
    }));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null)));
}

Table.propTypes = {
  /**
   * Gets an Array of headings for the table component
   */
  headings: Array,

  /**
   * Gets an Array of Arrays as the body for the component
   */
  body: Array
};
var _default = Table;
exports.default = _default;