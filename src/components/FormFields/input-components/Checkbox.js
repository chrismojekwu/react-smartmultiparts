import React, { useState} from "react";

const CheckBox = (props) => {
    const inputValue = props.value;
    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState("");

    const handleCheck = () => {
        if (checked === false) {
            setChecked(true);
            setValue(inputValue);
        } else {
            setChecked(false);
            setValue("");
        } 
    };

    const renderReq = (req) => {
        return req ? (
            <>
                <input 
                    type="checkbox" 
                    className="form-checkbox"
                    id={`smartparts-checkbox-${props.index}`} 
                    data-testid={`smartparts-checkbox-${props.index}`}
                    name={`checkbox-${props.index}`} 
                    value={value}
                    checked={checked}
                    onChange={() => handleCheck()}
                    required
                />
                <label 
                    className="form-checkbox-label"
                    htmlFor={`checkbox-${props.index}`}
                > 
                    {props.value}
                </label>
            </>
        ) : (
            <>
                <input 
                    type="checkbox" 
                    className="form-checkbox"
                    id={`smartparts-checkbox-${props.index}`} 
                    name={`checkbox-${props.index}`} 
                    value={value}
                    checked={checked}
                    onChange={() => handleCheck()}
                />
                <label 
                    className="form-checkbox-label"
                    htmlFor={`checkbox-${props.index}`}
                > 
                    {props.value}
                </label>
            </>
        );
    };
    return renderReq(props.req);
};

export default CheckBox;