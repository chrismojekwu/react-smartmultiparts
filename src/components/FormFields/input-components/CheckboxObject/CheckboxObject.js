import React, { useState } from "react";
import ObjectCheckbox from './ObjectCheckbox';

const CheckboxObject = (props) => {
    const [data, setData] = useState("");

    return (
        <>
            <span 
                data-testid="smartparts-checkbox-object-query"
                id="smartparts-checkbox-object-query"
                className="form-checkbox-object-query"
                style={{
                    fontWeight: "bold"
                }}
            >
                {props.checks.query}
            </span>
            <input 
                data-testid="smartparts-checkbox-object-input" 
                id="smartparts-checkbox-object-input" 
                type="hidden" value={data === "" ? "" : data} 
                name={`checkbox-object-${props.index}`}
            />
            <div 
                className="form-checkbox-object-input-div"
            >
                {props.checks.boxes.map((x, i) => {
                  return (
                    <ObjectCheckbox
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