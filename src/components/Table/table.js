import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss";


function Table({ headings, body }) {
    return (
        <table class="u-full-width">
            <thead>
                <tr>
                    {/* Take an array of strings */}
                    {headings ?
                        headings.map((h) => <th>{h}</th>) : <></>
                    }
                </tr>
            </thead>
            <tbody>
                {/* Take an array of arrays
                    Format:
                            obj = [
                            [Item, Item Weight],
                            [Item2, Item2 Weight]
                            ]
                */}
                {body ?
                    body.map((row) => <tr>{
                        row.map((field) => <td>{field}</td>)
                    }</tr>) : <></>
                }
            </tbody>
        </table>
    )
}

Table.propTypes = {
    headings: Array,
    body: Array
}

export default Table

