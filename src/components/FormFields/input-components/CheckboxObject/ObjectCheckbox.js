import React, { useState } from "react";

const CheckboxObject = (props) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = (e) => {
    if (checked === false) {
      setChecked(true);
      handleString(e.target.value, true);
    } else {
      setChecked(false);
      handleString(e.target.value, false);
    } 
  };

  const handleString = (string, checked) => {
    const arr = props.data.split("&=");
    if (checked) {
      arr.push(string);
    } else {
      arr.splice(arr.lastIndexOf(string), 1);
    };
    const newData = arr.join("&=");
    props.setData(newData);
  };

  return (
    <div>
      <input
        type="checkbox"
        className="form-checkbox-object-checkbox"
        id="smartparts-object-checkbox"
        data-testid="smartparts-object-checkbox"
        value={props.value}
        checked={checked}
        onChange={(e) => handleCheck(e)}
      />
      <label 
        className="form-checkbox-object-label"
        htmlFor={`smartparts-object-checkbox-${props.index}`}
      > 
        {props.value}
      </label>
    </div>
  );
};

export default CheckboxObject;
