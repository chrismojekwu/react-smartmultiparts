import React from "react";

const TextInput = (props) => {
  const label = props.field.replace("!", "");
  const idString = label.split(" ").join("-").toLowerCase();

  const renderDefault = () => {
    return (
      <>
        <label htmlFor={label} className="form-label">{label}:</label>
        <input type="text" className="form-text-input" name={`${label.toLowerCase()}-${props.index}`} id={idString}/>
      </>
    );
  };

  const renderReq = () => {
    return (
      <>
        <label htmlFor={label} className="form-label">{label}:</label>
        <input type="text" className="form-text-input" name={`${label.toLowerCase()}-${props.index}`} id={idString} required />
      </>
    );
  };
  
  return props.required ? renderReq() : renderDefault();
}

export default TextInput;