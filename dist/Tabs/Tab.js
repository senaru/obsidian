"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = Tab;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TabModule = _interopRequireDefault(require("./Tab.module.scss"));

var _TabContentModule = _interopRequireDefault(require("./TabContent.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param   {[Array]}  tabs  Takes an array of tabs, each containing an id and a display name.
 */

/**
 * A Simple Tab Component which provides tab switching functionality when used in-conjunction with TabContent Components
 */
function Tab(_ref) {
  var tabs = _ref.tabs;
  console.log(123);

  var handleClick = function handleClick(e) {
    //Remove active from all other TabContent elements
    tabs.forEach(function (e) {
      document.querySelector("#".concat(e[0])).classList.remove(_TabContentModule.default.active);
      document.querySelector("#t".concat(e[0])).classList.remove(_TabModule.default.active);
    }); //Add active to the selected Tab and Content

    e.target.classList.add(_TabModule.default.active);
    document.querySelector("#".concat(e.target.id).replace('t', '')).classList.add(_TabContentModule.default.active);
  };

  return /*#__PURE__*/_react.default.createElement("ul", {
    className: _TabModule.default["tab-nav"]
  }, tabs ? tabs.map(function (tab) {
    return /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
      className: "".concat(_TabModule.default.button),
      id: "t".concat(tab[0]),
      onClick: handleClick
    }, tab[1]));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null));
}

Tab.propTypes = {
  /**
   * Takes an array of tabs, each containing an id and a display name.
   * 
   * Format:
   * 
       tabs = [ [id,displayName], [id,displayName2] ]
   */
  tabs: _propTypes.default.arrayOf([_propTypes.default.string])
};
var _default = Tab;
exports.default = _default;