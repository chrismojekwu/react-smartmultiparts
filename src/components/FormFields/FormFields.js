import React from "react";

//Add support for more input elements

function FormFields(props) {
  const renderFields = () => {
    return (
      <>
        {props.fields.map((field, index) => {
          if (field.trim().match(/comments/gi)) {
            return (
              <React.Fragment key={"textarea-" + index.toString()}>
                <label htmlFor='comments' className='form-label'>Comments:</label>
                <textarea
                  name="comments"
                  className="comments form-textarea"
                  placeholder="Additional Comments"
                  id="smartparts-comments"
                />
              </React.Fragment>
            );
          } else if (field.trim().match(/filename/gi)){
            return <span id="filename-span" className="form-filename" key={index}>Filename: {props.filename}</span>
          } else if (field.trim().match(/date/gi)) {
            return (
              <React.Fragment>
                <label htmlFor='date' className="form-label">Date:</label>
                <input type="date"/>
              </React.Fragment>
            )
          } else if (field === "") {
            return "";
          } else {
            return (
              <React.Fragment key={"textinput" + index.toString()}>
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