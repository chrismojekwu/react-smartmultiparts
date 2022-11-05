import React, { useEffect } from "react";

const CheckBox = (props) => {
    const renderReq = (req) => {
        return req ? (
            <>
                <input 
                    type="checkbox" 
                    className="form-checkbox"
                    id={`smartparts-checkbox-${props.index}`} 
                    name={`checkbox-${props.index}`} 
                    value={props.value}
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
                    value={props.value}
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