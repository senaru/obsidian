import React from 'react'
import PropTypes from 'prop-types'

function Form({ children, action, method, target, autoComplete }) {
    return (
        <form action={action} method={method} target={target} autoComplete={autoComplete}>
            {children}
        </form>
    )
}

Form.propTypes = {
    action: String,
    target: String,
    method: String,
    autoComplete: String
}

export default Form


