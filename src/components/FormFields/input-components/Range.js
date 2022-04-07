import React, { useState } from "react";

const Range = (props) => {
    const [value, setValue] = useState("");

    const handleLabelSide = () => {
        if (props.rangeLeftSide) {
            return (
                <React.Fragment>
                    <label name={`range-${props.index.toString()}`} className="form-label" id="smartparts-range-label">
                        {props.label}
                    </label>
                    <input 
                        type="range" className="form-rangeinput" name={`range-${props.index.toString()}`} id="smartparts-range-input"
                        min={props.min} max={props.max} step={props.step} value={value} onChange={(e) => setValue(e.target.value)}
                    />
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <input 
                        type="range" className="form-rangeinput" name={`range-${props.index.toString()}`} id="smartparts-range-input"
                        min={props.min} max={props.max} step={props.step} value={value} onChange={(e) => setValue(e.target.value)}
                    />
                    <label name={`range-${props.index.toString()}`} className="form-label" id="smartparts-range-label">
                        {props.label}
                    </label>
                </React.Fragment>
            );
        }
    };

    return handleLabelSide();
};

export default Range;