"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = Form;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param   {[Node]}     children      Accepts any HTML/React elements to be displayed inside the form
 * @param   {[String]}   name          Sets the name for the Component
 * @param   {[String]}   action        Specifies where to send the form-data when a form is submitted
 * @param   {[String]}   method        Specifies the HTTP method to use when sending form-data
 * @param   {[String]}   target        Specifies where to send the form-data when the form is submitted
 * @param   {[Boolean]}  autoComplete  If false, auto-completing is disabled for the Form
 * @param   {[Boolean]}  noValidate    If true, the form will not be validated
 *
 * @return  {[Component]}               Returns an HTML Form
 */

/**
 * A simple Form Component similar to an HTML Form Component
 */
function Form(_ref) {
  var children = _ref.children,
      name = _ref.name,
      action = _ref.action,
      method = _ref.method,
      target = _ref.target,
      autoComplete = _ref.autoComplete,
      noValidate = _ref.noValidate;
  return /*#__PURE__*/_react.default.createElement("form", {
    name: name,
    action: action,
    method: method,
    target: target,
    autoComplete: autoComplete,
    noValidate: noValidate
  }, children);
}

Form.propTypes = {
  /** 
   * Accepts any HTML/React elements to be displayed inside the form
   */
  children: _propTypes.default.node,

  /** 
   * Sets the name for the Component
   */
  name: _propTypes.default.string,

  /** 
   * Specifies where to send the form-data when a form is submitted
   */
  action: _propTypes.default.string,

  /** 
   * Specifies where to send the form-data when the form is submitted
   */
  target: _propTypes.default.string,

  /** 
   * Specifies the HTTP method to use when sending form-data
   */
  method: _propTypes.default.string,

  /** 
   * If false, auto completing is disabled for the Form
   */
  autoComplete: _propTypes.default.bool,

  /** 
   * If true, the form will not be validated
   */
  noValidate: _propTypes.default.bool
};
Form.defaultProps = {
  autoComplete: true,
  noValidate: false
};
var _default = Form;
exports.default = _default;