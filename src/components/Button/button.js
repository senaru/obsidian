import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss";

function Button({ children, href, variant, type, onClick }) {

    const className = `button ${variant}`

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
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: String,
    href: String,
    variant: String,
    onClick: Function,
    type: String,
}

export default Button