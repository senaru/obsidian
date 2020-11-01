import React from 'react'
import PropTypes from 'prop-types'
import style from "./style.scss"

function Tag({ variant, children }) {
    if (variant === "primary") {
        return (
            <span class="tag primary">{children}</span>
        )
    }

    return (
        <span class="tag">{children}</span>
    )
}

Tag.propTypes = {
    variant: String,
    children: String
}

export default Tag

