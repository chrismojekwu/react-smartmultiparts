import React, { useState } from "react";

const Radios = (props) => {
    //const [checked, setChecked] = useState(false);
    const [value, setValue] = useState("");
    //
    const question = "Does this work?";
    const options = ["Yes", "No", "Maybe"];

    //
    const handleChecked = (index) => {
        const radioInputs = document.getElementById(`smartparts-radio-query-radio-${props.index}`);
        for (let i = 0; i < radioInputs.length; i++) {
            if (i === index) {
                radioInputs[i].checked = true;
                setValue(value);
            } else {
                radioInputs[i].checked = false;
            }
        }
    };

    const renderRadios = () => {
        return (
            <>
                <input 
                    id="smartparts-radio-query-input" 
                    type="hidden" value={value} 
                    name={`checkbox-object-${props.index}`}
                />
                {question}
                {options.map((x, i) => {
                    return (
                        <label>
                            <input 
                                id={`smartparts-radio-query-radio-${props.index}`}
                                type="radio" 
                                name={`radio-${props.index}`} 
                                value={x}
                                onClick={() => handleChecked(i)}
                            />
                            {x}
                        </label>
                    );
                })}
            </>
        )
    }
    return renderRadios();
};

export default Radios;