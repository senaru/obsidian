import React from 'react'
import PropTypes from 'prop-types'
import "./style.scss"

function TextArea({ placeholder, label, id, onChange }) {
    return (
        <>
            {label ? <label>{label}</label> : <></>}
            <textarea className="u-full-width" placeholder={placeholder} id={id} onChange={onChange}></textarea>
        </>
    )
}

TextArea.propTypes = {
    placeholder: String,
    id: String,
    label: String,
    onChange: Function
}

export default TextArea


