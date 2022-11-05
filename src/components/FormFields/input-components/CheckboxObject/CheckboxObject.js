import React, { useState } from "react";
import CheckBox from "./Checkbox";

const CheckboxObject = (props) => {
    return (
        <div>
            <span id="smartparts-checkbox-obj-query">
                {props.query}
            </span>
            {props.boxes.map((x, i) => {
                return <CheckBox index={props.index > 0 ? props.index + i : i} value={x} key={`checkbox-input-${i}`} req={false}/>;
            })}
        </div>
    );
};

export default CheckboxObject;