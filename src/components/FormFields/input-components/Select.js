import React, {useState} from "react";

const Select = (props) => {
    const [value, setValue] = useState(props.obj.placeholder);

    const generateOptions = () => {
        return props.obj.select.map((option, index) => {
            return (
                <option value={option} id={`smartparts-select-option-${props.index}-${index}`} className="form-select-option" key={`select-option-${index}`}>
                    {option}
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
                <label htmlFor={`select-${props.index}`} className="form-label">
                    {props.obj.query}
                </label>
                <select 
                    id={`smartparts-select-input-${props.index}`}
                    name={`select-${props.index}`} 
                    className="form-select" 
                    onChange={handleChange}
                >
                    <option className="form-select-option" key={`select-option-default`} defaultValue>
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
                <label htmlFor={`select-${props.index}`} className="form-label">
                    {props.obj.query}
                </label>
                <select 
                    id={`smartparts-select-input-${props.index}`}
                    name={`select-${props.index}`} 
                    className="form-select" 
                    onChange={handleChange} 
                    required
                >
                    <option defaultValue value="">
                        {props.obj.placeholder}
                    </option>
                    {generateOptions()}
                </select>
            </>
        )
    };

    return props.required ? renderReq() : renderDefault();
};

export default Select;