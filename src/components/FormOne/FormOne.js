import React, { useState } from "react";
import FormFields from "../FormFields/FormFields";
import {fileTypes} from '../util/helpers';
import "../Form.css";

export const FormOne = (props) => {
  const [fileType, setFileType] = useState("");
  const [fileName, setFileName] = useState("");
  const [disabled, setDisabled] = useState(false);

  //function to render correct form component for file type
  const detectFile = () => {
    if (fileType === "") return "";
    if (Object.keys(props.fileTypes).length === 0 || props.fields === []) {
      if (props.textConfig === undefined || props.textConfig.errorMessage === "") {
        return <span id="smartparts-error">Internal Error</span>;
      } else {
        return <span id="smartparts-error">{props.textConfig.errorMessage}</span>;
      }
    }
    const ext = fileType[0].name ? fileType[0].name.split(".")[1] : "";
    const re = new RegExp(props.fileTypes.join("|"), "gi");
    if (!ext) return props.textConfig !== undefined ? props.textConfig.invalidExt : "Invalid Extension";
    if (re.test(ext)) {
      return <FormFields fields={props.fields} filename={fileName} select={props.select} checkboxes={props.checkboxes}/>;
    } else {
      setFileType("INVALID");
      return "File type not supported.";
    }
  };

  const dataReturn = (e) => {
    e.preventDefault();
    if (props.fileTypes.length === 0 || props.fileTypes === undefined || props.fileTypes === null) return false; 
    const data = new FormData();
    data.append('file', fileType[0]);
    
    for(let i = 0; i < props.fields.length; i++){
      const fieldNameCleaned = props.fields[i].replace("!", "");
      if (props.fields[i] === "") {
        continue;
      } else if (new RegExp('filename', 'gi').test(fieldNameCleaned) === true) {
        data.append('filename', fileName);
      } else if (new RegExp('comments', 'gi').test(fieldNameCleaned) === true) {
        data.append('comments', e.target[`textarea-${i}`].value);
      } else if (new RegExp('date', 'gi').test(fieldNameCleaned) === true && fieldNameCleaned.length === 4) {
        data.append('date', e.target[`date-${i}`].value);
      } else if (new RegExp('select', 'gi').test(fieldNameCleaned) === true) {
        data.append(`select_${i}`, e.target[`select-${i}`].value);
      } else if (new RegExp('range', 'gi').test(fieldNameCleaned) === true) {
        data.append(`range_${i}`, e.target[`range-${i}`].value);
      } else if (new RegExp('checkbox', 'gi').test(fieldNameCleaned) === true) {
        if (fieldNameCleaned.length === 8 && e.target[`checkbox-object-${i}`].value !== "") {
          if (e.target[`checkbox-object-${i}`].value == "&") {
            continue;
          } else {
            data.append(`checkboxObject_${i}`, e.target[`checkbox-object-${i}`].value);
          }
        } else if (e.target[`checkbox-${i}`].value !== "") {
          data.append(`checkbox_${i}`, e.target[`checkbox-${i}`].value);
        }
      } else {
        data.append(fieldNameCleaned.toLowerCase(), e.target[`${fieldNameCleaned.toLowerCase()}-${i}`].value);
      }
    };

    props.cb(data);
    setDisabled(true);
  };

  const handleFile = (file) => {
    if (file[0] === undefined || file[0] === null) {
      return null;
    } else return file;
  };

  const handleDisabled = () => {
    const message = props.textConfig !== undefined ? props.textConfig.disabled : "Thanks";
    return <span className="smartparts-disabled-message">{message}</span>;
  };

  const renderLogo = (path) => {
    return <img src={path} className="form-logo-img" alt={props.textConfig.logoAlt === "" ? "Company Logo" : props.textConfig.logoAlt}/>
  };
 
  return (
    <>
      <div className="smartparts-container form-body">
        <div className="smartparts-logo-container">
          {props.logo ? renderLogo(props.logo) : ""}
        </div>
        <p>
          {props.textConfig !== undefined ? props.textConfig.typeLabel : "Supported File Types: "}
          {fileTypes(props.fileTypes)}
        </p>

        <form
          onSubmit={(e) => dataReturn(e)}
          className="smartparts-entry-form"
          encType="multipart/form-data"
          method="post"
          name="upload"
          disabled={disabled}
        >
          <label htmlFor="file form-label">
            {props.textConfig !== undefined ? props.textConfig.inputLabel : "File:"}
          </label>
          <input
            id="smartparts-file"
            data-testid="smartparts-file"
            type="file"
            name="upload"
            className="form-fileinput"
            onChange={(e) => {
              let file = handleFile(e.target.files);
              if (file === null) {
                return false;
              } else {
              setFileType(file);
              setFileName(file[0].name);
              }
            }}
          />
          <br />
          {!disabled ? detectFile() : handleDisabled()}
          <input 
            id="smartparts-submit" 
            type="submit" 
            value={props.textConfig.submitLabel === "" ? "Submit" : props.textConfig.submitLabel} 
            className="button form-button" 
            disabled={disabled}
          />  
        </form>
      </div>
    </>
  );
}

