import React from 'react'
import PropTypes from 'prop-types'

function Row({ children }) {
    return (
        <div className="row">
            {children}
        </div>
    )
}

Row.propTypes = {

}

export default Row

