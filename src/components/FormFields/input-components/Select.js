import React, {useState} from "react";

const Select = (props) => {
    const [value, setValue] = useState(props.obj.placeholder);

    const generateOptions = () => {
        return props.obj.select.map((options, index) => {
            return (
                <option value={options} id={options} className="form-select-option" key={`select-option-${index}`}>
                    {options}
                </option>
            )
        })
    };

    const handleChange = (e) => {
        setValue(e.target.value)
    };

    const renderDefault = () => {
        return (
            <>
                <label htmlFor={`select-${props.index} form-label`}>{props.obj.query}</label>
                <select name={`select-${props.index}`} className="form-select" onChange={handleChange}>
                    <option className="form-select-option" key={`select-option-default`}defaultValue>
                        {value}
                    </option>
                    {generateOptions()}
                </select>
            </>
        )
    };

    const renderReq = () => {
        return (
            <>
                <label htmlFor={`select-${props.index} form-label`}>{props.obj.query}</label>
                <select name={`select-${props.index}`} className="form-select" onChange={handleChange} required>
                    <option defaultValue>{value}</option>
                    {generateOptions()}
                </select>
            </>
        )
    };

    return props.required ? renderReq() : renderDefault();
};

export default Select;