import React from "react";

//Add support for more input elements

function FormFields(props) {
  const renderFields = () => {
    return (
      <>
        {props.fields.map((field, index) => {
          if (field.match(/comments/gi)) {
            return (
              <React.Fragment key={"textarea-" + index.toString()}>
                <label htmlFor='comments form-label'>Comments:</label>
                <textarea
                  name="comments"
                  className="comments form-textarea"
                  placeholder="Additional Comments"
                  id="comments"
                />
              </React.Fragment>
            );
          } else if (field.match(/filename/gi)){
            return <span id="filename-span" className="form-filename" key={index}>Filename: {props.filename}</span>
          } else if (field === "") {
            return "";
          } else {
            return (
              <React.Fragment key={index}>
                <label htmlFor={field} className="form-label">{field}:</label>
                <input type="text form-textinput" name={field} id={field} />
              </React.Fragment>
            );
          }
        })}
      </>
    );
  };

  return (
    <>
      {renderFields()}
    </>
    );
}

export default FormFields;