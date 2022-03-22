import React from "react";
import TextArea from './input-components/TextArea';
import TextInput from "./input-components/TextInput";
import Date from './input-components/Date';
import Select from "../Select/Select";

//Add support for more input elements

function FormFields(props) {
  const selectObjs = props.select;
  let selectCount = 0;

  const generateSelect = (selectObj, index) => {
    selectCount++;
    return (
      <Select obj={selectObj} index={index}/>
    );
  };

  const renderFields = () => {
    return (
      <>
        {props.fields.map((field, index) => {
          if (field.trim().match(/comments/gi)) {
            return <TextArea index={index}/>;
          } else if (field.trim().match(/filename/gi)) {
            return <span id="filename-span" className="form-filename" key={index}>Filename: {props.filename}</span>
          } else if (field.trim().match(/date/gi)) {
            return <Date/>;
          } else if (field.trim().match(/select/gi)) {
            return generateSelect(selectObjs[selectCount], index);
          } else if (field === "") {
            return "";
          } else {
            return <TextInput field={field} index={index}/>
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