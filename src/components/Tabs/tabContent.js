import React from 'react'
import PropTypes from 'prop-types'
import "./style.scss"

function TabContent({ id, children, active }) {
    return (
        <div class="tab-content">
            <div class={`tab-pane ${active === true ? "active" : ""}`} id={id}>{children}</div>
        </div>
    )
}

TabContent.propTypes = {
    id: String,
    active: Boolean
}

export default TabContent

