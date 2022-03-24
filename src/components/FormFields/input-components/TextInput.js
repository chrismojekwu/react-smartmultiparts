import React from "react";

const TextInput = (props) => {
    return (
        <React.Fragment key={"textinput" + props.index.toString()}>
          <label htmlFor={props.field} className="form-label">{props.field}:</label>
          <input type="text form-textinput" name={props.field} id={props.field} />
        </React.Fragment>
    )
}

export default TextInput;