"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ButtonModule = _interopRequireDefault(require("./Button.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Button Component
 *
 * @param   {[Node]}      children    Children node of the component
 * @param   {[String]}    href        Get an href for an Anchor Button
 * @param   {[Variant]}   variant     Get the variant to determine the style of the button
 * @param   {[String]}    type        Select type for Input Buttons
 * @param   {[Function]}  onClick     onClick function of the component
 * @param   {[Boolean]}   disabled    Disables the button component
 * @param   {[String]}    formAction  Provides a formAction for the component
 * @param   {[String]}    size        Determine the size of the Button component
 *
 * @return  {[Component]}                  Returns Button Component
 */

/**
 * A simple functional component that accepts filtered props similar to an HTML button
 */
function Button(_ref) {
  var children = _ref.children,
      href = _ref.href,
      variant = _ref.variant,
      type = _ref.type,
      onClick = _ref.onClick,
      disabled = _ref.disabled,
      formAction = _ref.formAction,
      size = _ref.size;
  var className = "".concat(_ButtonModule.default.button, " ").concat(_ButtonModule.default[variant], " ").concat(_ButtonModule.default[size]);

  if (href) {
    return /*#__PURE__*/_react.default.createElement("a", {
      className: className,
      href: href
    }, children);
  } else if (type) {
    return /*#__PURE__*/_react.default.createElement("input", {
      className: className,
      type: type,
      value: children
    });
  }

  return /*#__PURE__*/_react.default.createElement("button", {
    className: className,
    onClick: onClick,
    disabled: disabled,
    formAction: formAction
  }, children);
}

Button.propTypes = {
  /**
   * Children node of the component
   */
  children: _propTypes.default.node,

  /**
   * Get an href for an Anchor Button
   */
  href: _propTypes.default.string,

  /**
   * Get the variant to determine the style of the button
   */
  variant: _propTypes.default.string,

  /**
   * Select type for Input Buttons
   */
  type: _propTypes.default.oneOf(["submit", "reset", "button"]),

  /**
   * Determine the size of the Button component
   */
  size: _propTypes.default.string,

  /**
   * onClick function of the component
   */
  onClick: _propTypes.default.func,

  /**
   * Disables the button component
   */
  disabled: _propTypes.default.bool,

  /**
   * Provides a formAction for the component
   */
  formAction: _propTypes.default.string
};
Button.defaultProps = {
  variant: "Default",
  disabled: false
};
var _default = Button;
exports.default = _default;