import React from 'react'
import PropTypes from 'prop-types'
import "./style.scss"

function Grid({ children }) {
    return (
        <div className="container">
            {children}
        </div>
    )
}

Grid.propTypes = {

}

export default Grid

