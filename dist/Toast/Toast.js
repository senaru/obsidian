"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toast = Toast;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ToastModule = _interopRequireDefault(require("./Toast.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 *
 * @param   {[String]}  variant     Gets the variant which decides the styling for the component
 * @param   {[Node]}    children    Gets the children node for the component
 * @param   {[Number]}  duration    Gets the duration the component will be visible for
 *
 * @return  {[Component]}           Return the Toast Component
 */

/**
 * A Simple Toast component that accepts a header, content and a duration, which then disappears after
 */
function Toast(_ref) {
  var variant = _ref.variant,
      children = _ref.children,
      duration = _ref.duration;
  //Object with variant icons
  var variantIcons = {
    info: "info",
    warning: "alert",
    danger: "cancel-circle",
    success: "circle-check"
  }; //State for toast Class

  var _useState = (0, _react.useState)("toast-open"),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1]; //Timer to hide the Toast 


  (0, _react.useEffect)(function () {
    var timer = setTimeout(function () {
      setState("");
    }, duration !== null && duration !== void 0 ? duration : 5000);
    return function () {
      return clearTimeout(timer);
    };
  }, []); //Change state when close btn clicked

  var handleClose = function handleClose(e) {
    e.preventDefault();
    setState("");
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_ToastModule.default.toast, " ").concat(_ToastModule.default[state])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _ToastModule.default["toast-inner"]
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _ToastModule.default["toast-content"]
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _ToastModule.default["toast-close-icon"]
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#close",
    className: "".concat(_ToastModule.default["close-toast"], " ").concat(_ToastModule.default[variant]),
    onClick: handleClose
  }, "X")), /*#__PURE__*/_react.default.createElement("div", {
    className: _ToastModule.default["toast-content-inner"]
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_ToastModule.default.icons, " ").concat(_ToastModule.default.clearfix)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _ToastModule.default.icon
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "".concat(_ToastModule.default["ddc-icon"], " ").concat(_ToastModule.default["ddc-icon-".concat(variantIcons[variant])], " ").concat(_ToastModule.default[variant])
  }), children))))));
}

Toast.propTypes = {
  /**
   * Gets the children node for the component
   */
  children: _propTypes.default.node,

  /**
   * Gets the duration the component will be visible for
   */
  duration: _propTypes.default.number,

  /**
   * Gets the variant which decides the styling for the component
   */
  variant: _propTypes.default.oneOf(["info", "warning", "danger", "success"])
};
Toast.defaultProps = {
  duration: 5000
};
var _default = Toast;
exports.default = _default;