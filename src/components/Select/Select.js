import React from "react";

export const Select = (props) => {
    return (
        <>
            <label htmlFor="select">{props.obj.query}</label>
            <select name="select">
                {props.obj.select.map((options, index) => {
                    return (
                        <option value={options} key={index}>{options}</option>
                    )
                })}
            </select>
        </>
    )
};