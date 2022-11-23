import React, { useState } from "react";

const Radios = () => {
    const [checked, setChecked] = useState(false);
    const question = "Does this work?";
    const options = ["Yes", "No", "Maybe"];
    const renderRadios = () => {
        return (
            <>
                {question}
                {options.map((x, i) => {
                    return (
                        <label>
                            <input 
                                type="radio" 
                                name={`radio`} 
                                value={x}/>
                            {x}
                        </label>
                    );
                })}
            </>
        )
    }
    return renderRadios();
};