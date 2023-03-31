import React, { useState } from "react";
import FormFields from "../FormFields/FormFields";
import { fileTypes , extension } from '../util/helpers';
import "../Form.css";

export const FormOne = (props) => {
  const [fileType, setFileType] = useState("");
  const [fileName, setFileName] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState(false);
  const id =  Math.floor(Math.random() * 10000);

  const detectFile = () => {
    if (fileType === "") return "";
    const ext = fileType[0].name ? extension(fileType[0].name) : "";
    if (Object.keys(props.fileTypes).length === 0 || props.fields === []) {
      if (props.textConfig === undefined || props.textConfig.errorMessage === "") {
        return <span id={`smartparts-error-${id}`} className="smartparts-error">Internal Error</span>;
      } else {
        return <span id={`smartparts-error-${id}`} className="smartparts-error">{props.textConfig.errorMessage}</span>;
      }
    };
    // bytes to mb (bytes / 1e+6)
    if (props.fileSize !== undefined) {
      if (props.fileSize < (fileType[0].size / 1e+6)) {
        //setSize(true);
        if (props.textConfig === undefined || props.textConfig.fileSizeMessage === "") {
          return <span id={`smartparts-error-${id}`} className="smartparts-error">File Over Limit - {props.fileSize} MB</span>;
        } else {
          return <span id={`smartparts-error-${id}`} className="smartparts-error">{props.textConfig.fileSizeMessage}</span>
        }
      } else {
        //setSize(false);
      }
    };
    const re = new RegExp(props.fileTypes.join("|"), "gi");
    if (!ext) return props.textConfig !== undefined ? props.textConfig.invalidExt : "Invalid Extension";
    if (re.test(ext)) {
      return (
        <FormFields 
          fields={props.fields} 
          filename={fileName} 
          select={props.select} 
          checkboxes={props.checkboxes}
          radios={props.radios}
        />
      );
    } else {
      setFileType("INVALID");
      return "File type not supported.";
    }
  };

  const dataReturn = (e) => {
    e.preventDefault();
    const err = document.getElementById(`smartparts-error-${id}`);
    if (props.fileTypes.length === 0 || props.fileTypes === undefined || props.fileTypes === null || err !== null) return false; 
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
      } else if (new RegExp('radios', 'gi').test(fieldNameCleaned) === true) {
        const val = e.target[`radio-query-${i}`] === undefined ? "" : e.target[`radio-query-${i}`].value;
        if (val !== "") {
          data.append(`radio_query_${i}`, e.target[`radio-query-${i}`].value);
        }
      } else if (new RegExp('select', 'gi').test(fieldNameCleaned) === true) {
        const val = e.target[`select-${i}`] === undefined ? "" : e.target[`select-${i}`].value;
        if (val !== "") {
          data.append(`select_${i}`, e.target[`select-${i}`].value);
        }
      } else if (new RegExp('range', 'gi').test(fieldNameCleaned) === true) {
        data.append(`range_${i}`, e.target[`range-${i}`].value);
      } else if (new RegExp('checkbox', 'gi').test(fieldNameCleaned) === true) {
        const val =
          e.target[`checkbox-object-${i}`] !== undefined
            ? e.target[`checkbox-object-${i}`].value
            : e.target[`checkbox-${i}`] !== undefined
            ? e.target[`checkbox-${i}`].value
            : "";
        if (fieldNameCleaned.length === 8 && val !== "") {
          if (val === "&=" || val === "") {
            continue;
          } else {
            data.append(`checkboxObject_${i}`, val);
          }
        } else if (val !== "") {
          data.append(`checkbox_${i}`, val);
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
    return <img src={path} className="form-logo-img" alt={props.textConfig === undefined ? "Company Logo" : props.textConfig.logoAlt}/>
  };

  const handleFileLabel = () => {
    if (props.fileSize !== undefined && props.textConfig !== undefined && props.textConfig.fileSizeLabel !== "") {
      return props.textConfig.fileSizeLabel; 
    } else if (props.fileSize !== undefined) {
      return "Size Limit: ";
    } else return "";
  };
 
  return (
    <>
      <div className="smartparts-container form-body">
        <div className="smartparts-logo-container">
          {props.logo ? renderLogo(props.logo) : ""}
        </div>
        <p className="form-file-list">
          {props.textConfig !== undefined ? props.textConfig.typeLabel : "Supported File Types: "}
          {fileTypes(props.fileTypes)}
        </p>
        <div className="form-file-limits">
          {handleFileLabel()}
          {props.fileSize !== undefined ? `${props.fileSize} MB` : ""}
        </div>
        <form
          onSubmit={(e) => dataReturn(e)}
          className="smartparts-entry-form"
          encType="multipart/form-data"
          method="post"
          name="upload"
          disabled={disabled}
        >
          <label htmlFor="form-file-label" className="form-file-label">
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
            value={props.textConfig === undefined ? "Submit" : props.textConfig.submitLabel} 
            className="button form-button" 
            disabled={fileType === "" ? true : disabled}
          />  
        </form>
      </div>
    </>
  );
}

