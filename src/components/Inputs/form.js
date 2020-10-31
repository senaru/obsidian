import React from 'react'
import PropTypes from 'prop-types'
import "./style.scss"

function Form({ children }) {
    return (
        <form>
            {children}
        </form>
    )
}

Form.propTypes = {

}

export default Form


