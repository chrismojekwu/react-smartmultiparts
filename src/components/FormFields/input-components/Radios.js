import React, { useState, Fragment } from "react";

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
                <div
                    className="form-radio-query"
                >
                    {props.obj.query}
                </div>
                <div className="form-radio-input-div">
                    {props.obj.options.map((x, i) => {
                        return (
                            <div
                                key={`radio-query-radio-${props.index}-${i}`}
                            >
                                <input 
                                    data-testid="smartparts-radio-query-radio"
                                    id={`smartparts-radio-query-radio-${props.index}`}
                                    className={`smartparts-radio-query-radio-${props.index} form-radio-radio`}
                                    type="radio" 
                                    name={`radios-${props.index}`} 
                                    value={x}
                                    onClick={(e) => handleChecked(e, i)}
                                    tabIndex="0"
                                />
                                <label>
                                    {x}
                                </label>
                            </div>
                        );
                    })}
                </div>

            </>
        )
    };
    return renderRadios();
};

export default Radios;