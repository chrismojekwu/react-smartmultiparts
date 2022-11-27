import React from "react";

const TextInput = (props) => {
  const label = props.field.replace("!", "");

  const renderDefault = () => {
    return (
      <>
        <label htmlFor={label} className="form-label">{label}:</label>
        <input 
          type="text" 
          className="form-text-input" 
          name={`${label.toLowerCase()}-${props.index}`} 
          id={`smartparts-text-input-${props.index}`}
          data-testid={`smartparts-text-input-${props.index}`}
        />
      </>
    );
  };

  const renderReq = () => {
    return (
      <>
        <label htmlFor={label} className="form-label">{label}:</label>
        <input 
          type="text" 
          className="form-text-input" 
          name={`${label.toLowerCase()}-${props.index}`} 
          id={`smartparts-text-input-${props.index}`}
          data-testid={`smartparts-text-input-${props.index}`}
          required 
        />
      </>
    );
  };
  
  return props.required ? renderReq() : renderDefault();
}

export default TextInput;