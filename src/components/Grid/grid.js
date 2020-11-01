import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Grid.module.scss"

function Grid({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

Grid.propTypes = {

}

export default Grid

