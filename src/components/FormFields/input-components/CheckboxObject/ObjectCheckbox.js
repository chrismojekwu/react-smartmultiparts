import React, { useState } from "react";

const ObjectCheckbox = (props) => {
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
    if (props.data === "") {
      props.setData(string);
    } else {
      const arr = props.data.split("&=");
      if (checked) {
        arr.push(string);
      } else {
        arr.splice(arr.lastIndexOf(string), 1);
      };
      const newData = arr.join("&=");
      props.setData(newData);
    };
  };

  return (
    <div 
      className="smartparts-object-checkbox-wrapper"
      onClick={(e) => handleCheck(e)}
    >
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

export default ObjectCheckbox;
