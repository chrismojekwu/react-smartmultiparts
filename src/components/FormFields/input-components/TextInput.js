import React from "react";

const TextInput = (props) => {
  const label = props.field.replace("!", "");
  const idString = label.split(" ").join("-").toLowerCase();

  const renderDefault = () => {
    return (
      <React.Fragment key={"textinput" + props.index.toString()}>
        <label htmlFor={label} className="form-label">{label}:</label>
        <input type="text form-textinput" name={`${label.toLowerCase()}-${props.index}`} id={idString} />
      </React.Fragment>
    );
  };

  const renderReq = () => {
    return (
      <React.Fragment key={"textinput" + props.index.toString()}>
        <label htmlFor={label} className="form-label">{label}:</label>
        <input type="text form-textinput" name={`${label.toLowerCase()}-${props.index}`} id={idString} required />
      </React.Fragment>
    );
  };
  
  return props.required ? renderReq() : renderDefault();
}

export default TextInput;