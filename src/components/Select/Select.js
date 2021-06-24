import React from "react";

const Select = (props) => {

    const generateOptions = () => {
        return props.obj.select.map((options, index) => {
            return (
                <option value={options} id={options} key={index}>{options}</option>
            )
        })
    };

    const handleChange = (e) => {
        props.setValue(e.target.value)
    };

    return (
        <>
            <label htmlFor="select form-label">{props.obj.query}</label>
            <select name="select form-select" onChange={handleChange}>
                <option defaultValue>{props.obj.placeholder}</option>
                {generateOptions()}
            </select>
        </>
    )
};

export default Select;