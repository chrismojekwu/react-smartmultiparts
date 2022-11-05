import React, { useState } from "react";

const Range = (props) => {
    const [value, setValue] = useState("");

    const handleLabelSide = () => {
        if (props.rangeLeftSide) {
            return (
                <React.Fragment>
                    <label name={`range-${props.index}`} className="form-label" id="smartparts-range-label">
                        {props.label}
                    </label>
                    <span className="form-range-value">{value}</span>
                    <input 
                        type="range" className="form-range-input" name={`range-${props.index}`} id={`smartparts-range-input-${props.index}`}
                        min={props.min} max={props.max} step={props.step} value={value} onChange={(e) => setValue(e.target.value)}
                    />
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <input 
                        type="range" className="form-range-input" name={`range-${props.index}`} id={`smartparts-range-input-${props.index}`}
                        min={props.min} max={props.max} step={props.step} value={value} onChange={(e) => setValue(e.target.value)}
                    />
                    <label name={`range-${props.index}`} className="form-label" id="smartparts-range-label">
                        {props.label}
                    </label>
                    <span className="form-range-value">{value}</span>
                </React.Fragment>
            );
        }
    };

    return handleLabelSide();
};

export default Range;