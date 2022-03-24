import React, {useState} from "react";

const Select = (props) => {
    const [value, setValue] = useState(props.obj.placeholder);

    const generateOptions = () => {
        return props.obj.select.map((options, index) => {
            return (
                <option value={options} id={options} key={index}>{options}</option>
            )
        })
    };

    const handleChange = (e) => {
        setValue(e.target.value)
    };

    return (
        <>
            <label htmlFor={`select-${props.index} form-label`}>{props.obj.query}</label>
            <select name={`select-${props.index}`} className="form-select" onChange={handleChange}>
                <option defaultValue>{value}</option>
                {generateOptions()}
            </select>
        </>
    )
};

export default Select;