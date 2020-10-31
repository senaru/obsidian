import React from 'react'
import PropTypes from 'prop-types'
import "./style.scss"

function InputField({ placeholder, label, type, id }) {
    return (
        <>
            { label ? <label>{label}</label> : <></>}
            <input className="u-full-width" type={type} placeholder={placeholder} id={id}></input>
        </>
    )
}

InputField.propTypes = {
    placeholder: String,
    id: String,
    label: String,
    type: String
}

export default InputField


