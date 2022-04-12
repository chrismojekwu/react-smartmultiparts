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
      return <Select obj={selectObj} index={index} required={true}/>;
    } else {
      return <Select obj={selectObj} index={index} required={false}/>;
    };
  };

  const generateRange = (index, field) => {
    // [minValue, maxValue, stepValue, label, <]
    const values = field.slice(6, -1).split("_");
    if (values[4] !== undefined && values[4] === "<") {
      return <Range index={index} min={values[0]} max={values[1]} step={values[2]} label={values[3]} rangeLeftSide={true}/>;
    } else {
      return <Range index={index} min={values[0]} max={values[1]} step={values[2]} label={values[3]} rangeLeftSide={false}/>;
    };
  };


  const renderFields = () => {
    return (
      <>
        {props.fields.map((field, index) => {
          if (field.trim().match(/comments/gi)) {
            if (field.trim().includes("!")) {
              return <TextArea index={index} required={true}/>;
            } else {
              return <TextArea index={index} required={false}/>;
            }
          } else if (field.trim().match(/date/gi)) {
            if (field.trim().includes("!")) {
              return <Date required={true} index={index}/>;
            } else {
              return <Date required={false} index={index}/>;
            }
          } else if (field.trim().match(/range/gi)) {
            return generateRange(index, field.trim());
          } else if (field.trim().match(/select/gi)) {
              return selectObjs[selectCount] === undefined ? ""
                : generateSelect(selectObjs[selectCount], index, field.trim());
          } else if (field.trim().match(/filename/gi)) {
            return <span id="filename-span" className="form-filename" key={index}>Filename: {props.filename}</span>
          } else if (field === "") {
            return "";
          } else {
            if (field.trim().includes("!")) {
              return <TextInput field={field} index={index} required={true} />
            } else {
              return <TextInput field={field} index={index} required={false} />;;
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