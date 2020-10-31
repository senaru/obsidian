import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"

function List({ items, listType, subListType }) {
    const LT = listType === "ordered" ? "ol" : "ul";
    const SLT = subListType === "ordered" ? "ol" : "ul";

    return (
        <LT>{items ?
            items.map((item) =>
                typeof (item) === "object" ?
                    <SLT>{
                        item.map((subItem) => <li>{subItem}</li>)}
                    </SLT> : <li>item</li>
            ) : <></>
        }</LT>
    )
}

List.propTypes = {
    items: Array,
    listType: String,
    subListType: String
}

export default List

