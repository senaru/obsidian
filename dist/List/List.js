"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = List;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./List.module.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 *
 * @param   {[Array]}   items        Gets the items to be displayed in the List
 * @param   {[String]}  listType     Defines the type of list that should be returned
 * @param   {[String]}  subListType  Defines the type of sub-list that should be returned with the List Component
 *
 * @return  {[Component]}           Returns a List Component
 */

/**
 * A Simple list Component that accepts an Array and returns an HTML list
 */
function List(_ref) {
  var items = _ref.items,
      listType = _ref.listType,
      subListType = _ref.subListType;
  var LT = listType === "ordered" ? "ol" : "ul";
  var SLT = subListType === "ordered" ? "ol" : "ul";
  return /*#__PURE__*/_react.default.createElement(LT, null, items ? items.map(function (item) {
    return _typeof(item) === "object" ? /*#__PURE__*/_react.default.createElement(SLT, null, item.map(function (subItem) {
      return /*#__PURE__*/_react.default.createElement("li", null, subItem);
    })) : /*#__PURE__*/_react.default.createElement("li", null, item);
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null));
}

List.propTypes = {
  /**
   * Gets the items to be displayed in the List
   */
  items: _propTypes.default.arrayOf([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),

  /**
   * Defines the type of list that should be returned
   */
  listType: _propTypes.default.oneOf(["ordered", "unordered"]),

  /**
   * Defines the type of sub-list that should be returned with the List Component
   */
  subListType: _propTypes.default.oneOf(["ordered", "unordered"])
};
var _default = List;
exports.default = _default;