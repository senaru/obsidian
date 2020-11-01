import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Button.module.scss";

/**
 * Button Component
 *
 * @param   {[type]}  children    Children node of the component
 * @param   {[type]}  href        Get an href for an Anchor Button
 * @param   {[type]}  variant     Get the variant to determine the style of the button
 * @param   {[type]}  type        Select type for Input Buttons
 * @param   {[type]}  onClick     onClick function of the component
 * @param   {[type]}  disabled    Disables the button component
 * @param   {[type]}  formAction  Provides a formAction for the component
 * @param   {[type]}  size        Determine the size of the Button component
 *
 * @return  {[type]}              Returns Button Component
 */
/**
 * A simple functional component that accepts filtered props similar to an HTML button
 */
export function Button({ children, href, variant, type, onClick, disabled, formAction, size }) {

    const className = `${styles.button} ${styles[variant]} ${styles[size]}`

    if (href) {
        return (
            <a className={className} href={href}>
                {children}
            </a>
        )
    } else if (type) {
        return (
            <input className={className} type={type} value={children}></input>
        )
    }

    return (
        <button className={className} onClick={onClick} disabled={disabled} formAction={formAction}>
            {children}
        </button>
    )
}

Button.propTypes = {
    /**
     * Children node of the component
     */
    children: PropTypes.node,
    /**
     * Get an href for an Anchor Button
     */
    href: PropTypes.string,
    /**
     * Get the variant to determine the style of the button
     */
    variant: PropTypes.string,
    /**
     * Select type for Input Buttons
     */
    type: PropTypes.oneOf(["submit", "reset", "button"]),
    /**
     * Determine the size of the Button component
     */
    size: PropTypes.string,
    /**
     * onClick function of the component
     */
    onClick: PropTypes.func,
    /**
     * Disables the button component
     */
    disabled: PropTypes.bool,
    /**
     * Provides a formAction for the component
     */
    formAction: PropTypes.string
}

Button.defaultProps = {
    variant: "Default",
    disabled: false
}

export default Button