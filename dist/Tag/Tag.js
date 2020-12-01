"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tag = Tag;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TagModule = _interopRequireDefault(require("./Tag.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * [export description]
 *
 * @param   {[String]}  variant   Gets the variant which decides the styling
 * @param   {[Node]}  children  Gets the child nodes for the component
 *
 * @return  {[Component]}       Returns the Tag Component
 */

/**
 * A Simple Tag component that accepts a variant and child nodes
 */
function Tag(_ref) {
  var variant = _ref.variant,
      children = _ref.children;

  if (variant === "primary") {
    return /*#__PURE__*/_react.default.createElement("span", {
      class: "".concat(_TagModule.default.tag, " ").concat(_TagModule.default.primary)
    }, children);
  }

  return /*#__PURE__*/_react.default.createElement("span", {
    class: _TagModule.default.tag
  }, children);
}

Tag.propTypes = {
  /**
   * Gets the variant which decides the styling
   */
  variant: _propTypes.default.oneOf(["primary", "default"]),

  /**
   * Gets the child nodes for the component
   */
  children: _propTypes.default.node
};
Tag.defaultProps = {
  variant: "default"
};
var _default = Tag;
exports.default = _default;