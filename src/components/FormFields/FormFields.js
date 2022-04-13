import React from "react";
import TextArea from "./input-components/TextArea";
import TextInput from "./input-components/TextInput";
import Date from "./input-components/Date";
import Select from "./input-components/Select";
import Range from "./input-components/Range";

//Add support for more input elements

function FormFields(props) {
  const selectObjs = props.select;
  let selectCount = 0;

  const generateSelect = (selectObj, index, field) => {
    selectCount++;
    if (field.trim().includes("!")) {
      return <Select obj={selectObj} index={index} required={true} key={`select-input-${index}`}/>;
    } else {
      return <Select obj={selectObj} index={index} required={false} key={`select-input-${index}`}/>;
    };
  };

  const generateRange = (index, field) => {
    const values = field.slice(6, -1).split("_");
    if (values[4] !== undefined && values[4] === "<") {
      return (
        <Range index={index} min={values[0]} max={values[1]} step={values[2]} label={values[3]} 
          rangeLeftSide={true} key={`range-input-${index}`}
        />
        );
    } else {
      return (
        <Range index={index} min={values[0]} max={values[1]} step={values[2]} label={values[3]} 
          rangeLeftSide={false} key={`range-input-${index}`}
        />
        );
    };
  };


  const renderFields = () => {
    return (
      <>
        {props.fields.map((field, index) => {
          if (field.trim().match(/comments/gi)) {
            if (field.trim().includes("!")) {
              return <TextArea index={index} required={true} key={`text-area-${index}`}/>;
            } else {
              return <TextArea index={index} required={false} key={`text-area-${index}`}/>;
            }
          } else if (field.trim().match(/date/gi)) {
            if (field.trim().includes("!")) {
              return <Date required={true} index={index} key={`date-input-${index}`}/>;
            } else {
              return <Date required={false} index={index} key={`date-input-${index}`}/>;
            }
          } else if (field.trim().match(/range/gi)) {
            return generateRange(index, field.trim());
          } else if (field.trim().match(/select/gi)) {
              return selectObjs[selectCount] === undefined ? ""
                : generateSelect(selectObjs[selectCount], index, field.trim());
          } else if (field.trim().match(/filename/gi)) {
            return <span id="filename-span" className="form-filename" key={`filename-${index}`}>Filename: {props.filename}</span>
          } else if (field === "") {
            return "";
          } else {
            if (field.trim().includes("!")) {
              return <TextInput field={field} index={index} required={true} key={`text-input-${index}`}/>
            } else {
              return <TextInput field={field} index={index} required={false} key={`text-input-${index}`}/>;;
            }
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