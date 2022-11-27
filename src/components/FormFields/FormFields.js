import React from "react";
import TextArea from "./input-components/TextArea";
import TextInput from "./input-components/TextInput";
import Date from "./input-components/Date";
import Select from "./input-components/Select";
import Range from "./input-components/Range";
import CheckBox from "./input-components/Checkbox";
import CheckboxObject from "./input-components/CheckboxObject/CheckboxObject";
import Radios from "./input-components/Radios";

//Add support for more input elements

function FormFields(props) {
  const selectObjs = props.select;
  let selectCount = 0;
  const checkboxObjs = props.checkboxes;
  let checkboxObjCount = 0;
  const radioObjs = props.radios;
  let radioCount = 0;

  const generateSelect = (selectObj, index, field) => {
    const req = field.includes("!") ? true : false;
    if (props.formTwo === undefined) selectCount++;
    return <Select obj={selectObj} index={index} required={req} key={`select-input-${index}`}/>;
  };

  const generateRadios = (radioObj, index) => {
    if (props.formTwo === undefined) radioCount++;
    return <Radios obj={radioObj} index={index} key={`radio-input-${index}`}/>;
  };

  const generateCheckbox = (checkboxObj, index, field, objBool) => {
    if (field.length === 8 || props.formTwo && objBool) {
      if (props.formTwo === undefined) {
        checkboxObjCount++;
      }
      return <CheckboxObject index={index} checks={checkboxObj} key={`checkbox-object-${index}`}/>;
    } else {
      let value;
      let req = false;
      if (field[8] === "!") {
        value = field.slice(10, -1);
        req = true;
      } else {
        value = field.slice(9, -1);
      };
      return <CheckBox index={index} value={value} key={`checkbox-input-${index}`} req={req}/>;
    }
  };

  const generateRange = (index, field) => {
    const values = field.slice(6, -1).split("_");
    const side = values[4] !== undefined && values[4] === "<" ? true : false;
    return (
      <Range 
        index={index} 
        min={values[0]} 
        max={values[1]} 
        step={values[2]} 
        label={values[3]} 
        rangeLeftSide={side} 
        key={`range-input-${index}`}
      />
    );
  };

  const renderFields = () => {
    return (
      <>
        {props.fields.map((field, index) => {
          let req = "";
          if (field.trim().match(/comments/gi)) {
            req = field.trim().includes("!");
            return <TextArea index={index} required={req} key={`text-area-${index}`}/>;
          } else if (field.trim().match(/date/gi) && field.trim().length <= 5) {
            req = field.trim().includes("!");
            return <Date required={req} index={index} key={`date-input-${index}`}/>;
          } else if (field.trim().match(/range/gi)) {
            return generateRange(index, field.trim());
          } else if (field.trim().match(/radios/gi) && field.trim().length <= 9){
            if (props.formTwo !== undefined && props.formTwo) radioCount = parseInt(field.trim().slice(7,-1));
            return radioObjs[radioCount] === undefined ? "" : generateRadios(radioObjs[radioCount], index, field.trim());
          } else if (field.trim().match(/select/gi)) {
            if (props.formTwo !== undefined && props.formTwo) selectCount = parseInt(field.trim().slice(7,-1));
            return selectObjs[selectCount] === undefined ? "" : generateSelect(selectObjs[selectCount], index, field.trim());
          } else if (field.trim().match(/checkbox/gi)) {
            let chkbxObj = false;
            if (props.formTwo && Number.isInteger(parseInt(field[9])) && field.slice(-1) === "]") {
              chkbxObj = true;
              checkboxObjCount = parseInt(field.split("").filter(x => /[0-9]/.test(x)).join(""));
            } 
            const activeCheckboxObj = checkboxObjs === undefined ? null : checkboxObjs[checkboxObjCount];
            return generateCheckbox(activeCheckboxObj, index, field.trim(), chkbxObj);
          } else if (field.trim().match(/filename/gi)) {
            return <span id={`smartparts-filename-span-${index}`} className="form-filename" key={`filename-${index}`}>Filename: {props.filename}</span>
          } else if (field === "") {
            return "";
          } else {
            req = field.trim().includes("!");
            return <TextInput field={field} index={index} required={req} key={`text-input-${index}`}/>;
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