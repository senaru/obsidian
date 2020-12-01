"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = Modal;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ModalModule = _interopRequireDefault(require("./Modal.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param   {[Node]}     children    Accepts any HTML/React elements tp be displayed inside the Modal
 * @param   {[String]}   header      The header to be displayed inside the Modal
 * @param   {[String]}   buttonText  The Text to be displayed on the modal open button
 * @param   {[Boolean]}  opened      If true the Modal is opened by default when the element is loaded
 *
 * @return  {[Component]}            Returns the Modal Component
 */

/**
 * A simple Modal Component that accepts any child node
 */
function Modal(_ref) {
  var children = _ref.children,
      header = _ref.header,
      buttonText = _ref.buttonText,
      opened = _ref.opened;

  var handleOpen = function handleOpen(e) {
    e.target.parentElement.nextElementSibling.classList.toggle(_ModalModule.default["modal-open"]);
  };

  var handleClose = function handleClose(e) {
    e.preventDefault();
    e.target.parentElement.parentElement.parentElement.parentElement.classList.remove(_ModalModule.default["modal-open"]);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("main", null, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("button", {
    className: "".concat(_ModalModule.default.button, " ").concat(_ModalModule.default["open-modal"]),
    onClick: handleOpen
  }, buttonText)), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_ModalModule.default.modal, " ").concat(opened === true ? "modal-open" : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _ModalModule.default["modal-inner"]
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _ModalModule.default["modal-content"]
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _ModalModule.default["modal-close-icon"]
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#close",
    className: _ModalModule.default["close-modal"],
    onClick: handleClose
  }, "X")), /*#__PURE__*/_react.default.createElement("div", {
    className: _ModalModule.default["modal-content-inner"]
  }, /*#__PURE__*/_react.default.createElement("h4", null, header), children)))));
}

Modal.propTypes = {
  /**
   * Accepts any HTML/React elements tp be displayed inside the Modal
   */
  children: _propTypes.default.node,

  /**
   * The header to be displayed inside the Modal
   */
  header: _propTypes.default.string,

  /**
   * The Text to be displayed on the modal open button
   */
  buttonText: _propTypes.default.string,

  /**
   * If true the Modal is opened by default when the element is loaded
   */
  opened: _propTypes.default.bool
};
Modal.defaultProps = {
  opened: false
};
var _default = Modal;
exports.default = _default;