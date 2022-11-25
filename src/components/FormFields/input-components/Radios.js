import React, { useState } from "react";

const Radios = (props) => {
    const [value, setValue] = useState("");

    const handleChecked = (e, index) => {
        const radioInputs = document.getElementsByClassName(`smartparts-radio-query-radio-${props.index}`);
        for (let i = 0; i < radioInputs.length; i++) {
            if (i === index) {
                radioInputs[i].checked = true;
            } else {
                radioInputs[i].checked = false;
            }
        };
        setValue(e.target.value);
    };

    const renderRadios = () => {
        return (
            <>
                <input 
                    id="smartparts-radio-query-input" 
                    type="hidden" 
                    value={value} 
                    name={`radio-query-${props.index}`}
                />
                {props.obj.query}
                {props.obj.options.map((x, i) => {
                    return (
                        <>
                            <input 
                                id={`smartparts-radio-query-radio-${props.index}`}
                                className={`smartparts-radio-query-radio-${props.index}`}
                                type="radio" 
                                name={`radios-${props.index}`} 
                                value={x}
                                onClick={(e) => handleChecked(e, i)}
                            />
                            <label>{x}</label>
                        </>
                    );
                })}
            </>
        )
    };
    return renderRadios();
};

export default Radios;