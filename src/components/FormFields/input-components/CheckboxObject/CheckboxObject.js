import React, { useState } from "react";
import ObjectCheckBox from './ObjectCheckbox';

const CheckboxObject = (props) => {
    const [data, setData] = useState("");

    return (
        <>
            <span 
                id="smartparts-checkbox-object-query"
                className="form-checkbox-object-query"
                style={{
                    fontWeight: "bold"
                }}
            >
                {props.checks.query}
            </span>
            <input 
                id="smartparts-checkbox-object-input" 
                type="hidden" value={data === "" ? "" : data} 
                name={`checkbox-object-${props.index}`}
            />
            <div 
                className="form-checkbox-object-input-div"
            >
                {props.checks.boxes.map((x, i) => {
                  return (
                    <ObjectCheckBox
                        value={x}
                        index={i}
                        data={data}
                        key={`object-checkbox-${i}`}
                        setData={setData}
                    />
                  );
                })}
            </div>
        </>
    );
};

export default CheckboxObject;