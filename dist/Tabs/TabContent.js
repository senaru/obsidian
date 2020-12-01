"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabContent = TabContent;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TabContentModule = _interopRequireDefault(require("./TabContent.module.scss"));

var _TabModule = _interopRequireDefault(require("./Tab.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @param   {[String]}      id        The id matching the id of the related Tab Button
 * @param   {[Node]}        children  The Child Nodes of the Component
 * @param   {[Boolean]}     active    If true, this Tab and Tab Content will be active by default
 */

/** 
 * A Simple Component that contains the Tab Content, to  be used in-conjunction with the Tab Component
 */
function TabContent(_ref) {
  var id = _ref.id,
      children = _ref.children,
      active = _ref.active;
  //Make the Tab Button Active for the selected Tab Content
  (0, _react.useEffect)(function () {
    if (active === true) {
      document.querySelector("#t".concat(id)).classList.add(_TabModule.default.active);
    }
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    class: _TabContentModule.default["tab-content"]
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "".concat(_TabContentModule.default["tab-pane"], " ").concat(active === true ? _TabContentModule.default.active : ""),
    id: id
  }, children));
}

TabContent.propTypes = {
  /**
   * The id matching the id of the related Tab Button
   */
  id: _propTypes.default.string,

  /**
   * The Child Nodes of the Component
   */
  children: _propTypes.default.node,

  /**
   * If true, this Tab and Tab Content will be active by default
   */
  active: _propTypes.default.bool
};
TabContent.defaultProps = {
  active: false
};
var _default = TabContent;
exports.default = _default;