import React from 'react'
import PropTypes from 'prop-types'
import "./style.scss"

function TextArea({ placeholder, label, id }) {
    return (
        <>
            {label ? <label>{label}</label> : <></>}
            <textarea className="u-full-width" placeholder={placeholder} id={id}></textarea>
        </>
    )
}

TextArea.propTypes = {
    placeholder: String,
    id: String,
    label: String
}

export default TextArea


