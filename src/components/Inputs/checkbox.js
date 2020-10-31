import React from 'react'
import PropTypes from 'prop-types'
import "./style.scss"

function Checkbox({ children, id }) {
    return (
        <label>
            <input type="checkbox" id={id} />
            <span className="label-body">{children}</span>
        </label>
    )
}

Checkbox.propTypes = {
    children: String,
    id: String
}

export default Checkbox

