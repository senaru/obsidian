import React from 'react'
import PropTypes from 'prop-types'
import "./style.scss"

function Checkbox({ children, id, onChange, onClick }) {
    return (
        <label>
            <input type="checkbox" id={id} onChange={onChange} onClick={onClick} />
            <span className="label-body">{children}</span>
        </label>
    )
}

Checkbox.propTypes = {
    children: String,
    id: String,
    onChange: Function,
    onClick: Function
}

export default Checkbox

