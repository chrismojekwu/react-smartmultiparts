import React, { useState } from "react";
import FormFields from "../FormFields/FormFields";
import { fileTypes, extension } from '../util/helpers';
import "../Form.css";

export const FormThree = (props) => {
  const [fileType, setFileType] = useState([]);
  const [fileName, setFileName] = useState("");
  const [disabled, setDisabled] = useState(false);
  const fileExtensions = [];

  const detectFile = () => {
    // validate amount of files allowed
    const els = [];

    if (fileType === "") return "";
    if (props.fileLimit !== undefined) {
      if (fileType.length > props.fileLimit) {
        return <span id="smartparts-error">Over File Limit - Maximum {props.fileLimit} Files</span>;
      }
    }
    if (Object.keys(props.fileTypes).length === 0) { 
      if (props.textConfig === undefined || props.textConfig.errorMessage === "") {
        return <span id="smartparts-error">Internal Error</span>;
      } else {
        return <span id="smartparts-error">{props.textConfig.errorMessage}</span>;
      }
    };

      for (let i = 0; i < fileType.length; i++) {
        let ext = extension(fileType[i].name);
        //check extension
        if (!(new RegExp(Object.keys(props.fileTypes).join("|"), "gi")).test(ext)) {
          if (props.textConfig === undefined || props.textConfig.invalidExt === "") {
            return `File type not supported - .${ext.toLowerCase()}`;
          } else {
            return props.textConfig.invalidExt;
          }
        }
        //check for size
        if (props.fileSize !== undefined) {
          if (ext === "jpg" || ext === "jpeg") {
            if (props.fileSize["jpg"] < (fileType[i].size / 1e+6) || props.fileSize["jpeg"] < (fileType[i].size / 1e+6)) {
              if (props.textConfig === undefined || props.textConfig.fileSizeMessage === "") {
                return <span id="smartparts-error">File Over Limit {fileType[i].name} - Limit {props.fileSize[ext]} MB</span>;
              } else {
                return <span id="smartparts-error">{props.textConfig.fileSizeMessage}</span>
              }
            }
          } else {
            if (props.fileSize[ext] < (fileType[i].size / 1e+6)) {
              if (props.textConfig === undefined || props.textConfig.fileSizeMessage === "") {
                return <span id="smartparts-error">File Over Limit - {props.fileSize[ext]} MB</span>;
              } else {
                return <span id="smartparts-error">{props.textConfig.fileSizeMessage}</span>
              }
            }
          }
        }
        fileExtensions.push({ext, name: fileType[i].name});
      }
    return (
      <FormFields 
        fields={props.fileTypes}
        files={fileExtensions} 
        filename={fileName} 
        select={props.select} 
        checkboxes={props.checkboxes} 
        radios={props.radios}
        formThree={true}
      />
    );
  };

  const upload = (e) => {
    e.preventDefault();
    if (Object.keys(props.fileTypes).length === 0 || props.fileTypes === undefined || props.fileTypes === null) return false; 
    const data = new FormData();
    for (let i = 0; i < fileExtensions.length; i++){
      const fieldArr = props.fileTypes[fileExtensions[i].ext];
      data.append(`file-${fileType[i]}`, fileType[i]);
      for (let j = 0; j < fieldArr.length; j++) {
        const fieldNameCleaned = fieldArr[j].replace("!", "");;
        if (fieldArr[j] === "") {
          continue;
        } else if (new RegExp('filename', 'gi').test(fieldNameCleaned) === true) {
          data.append(`filename-${parseInt(`${i}${j}`)}`, fileType[i].name);
        } else if (new RegExp('comments', 'gi').test(fieldNameCleaned) === true) {
          data.append('comments', e.target[`textarea-${parseInt(`${i}${j}`)}`].value);
        } else if (new RegExp('date', 'gi').test(fieldNameCleaned) === true) { 
          data.append('date', e.target[`date-${parseInt(`${i}${j}`)}`].value);
        } else if (new RegExp('radios', 'gi').test(fieldNameCleaned) === true) {
          const val = e.target[`radio-query-${parseInt(`${i}${j}`)}`] === undefined ? "" : e.target[`radio-query-${parseInt(`${i}${j}`)}`].value;
          if (val !== "") {
            data.append(`radio_query_${parseInt(`${i}${j}`)}`, e.target[`radio-query-${parseInt(`${i}${j}`)}`].value);
          }
        } else if (new RegExp('select', 'gi').test(fieldNameCleaned) === true) {
          const val = e.target[`select-${parseInt(`${i}${j}`)}`] === undefined ? "" : e.target[`select-${parseInt(`${i}${j}`)}`].value;
          if (val !== "") {
            data.append(`select_${parseInt(`${i}${j}`)}`, e.target[`select-${parseInt(`${i}${j}`)}`].value);
          }
        } else if (new RegExp('range', 'gi').test(fieldNameCleaned) === true) {
          data.append(`range_${parseInt(`${i}${j}`)}`, e.target[`range-${parseInt(`${i}${j}`)}`].value);
        } else if (new RegExp('checkbox', 'gi').test(fieldNameCleaned) === true) {
          const val =
            e.target[`checkbox-object-${parseInt(`${i}${j}`)}`] !== undefined
              ? e.target[`checkbox-object-${parseInt(`${i}${j}`)}`].value
              : e.target[`checkbox-${parseInt(`${i}${j}`)}`] !== undefined
              ? e.target[`checkbox-${parseInt(`${i}${j}`)}`].value
              : "";
          if (Number.isInteger(parseInt(fieldNameCleaned[9])) && fieldNameCleaned.slice(-1) === "]" && val !== "") {
            if (val === "&=" || val === "") {
              continue;
            } else {
              data.append(`checkboxObject_${parseInt(`${i}${j}`)}`, val);
            }
          } else if (val !== "") {
            data.append(`checkbox_${parseInt(`${i}${j}`)}`, val);
          }
        } else
        data.append(fieldNameCleaned.toLowerCase(), e.target[`${fieldNameCleaned.toLowerCase()}-${parseInt(`${i}${j}`)}`].value);
      };
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

  const handleFileSizeList = () => {
    let sizeString = "";
    for (const file in props.fileSize) {
      sizeString +=  `${file}: ${props.fileSize[file]} MB `
    }
    return sizeString;
  };

  return (  
    <>
      <div className="smartparts-container form-body">
      <div className="smartparts-logo-container">
        {props.logo ? renderLogo(props.logo) : ""}
      </div>
      <p className="form-file-list">
        {props.textConfig !== undefined ? props.textConfig.typeLabel : "Supported File Types: "}
        {Object.keys(props.fileTypes) !== undefined ? fileTypes(Object.keys(props.fileTypes)) : ""}
      </p>
      <div className="form-file-limits">
        {handleFileLabel()}
        {props.fileSize !== undefined ? handleFileSizeList() : ""}
      </div>
      <form
        onSubmit={(e) => upload(e)}
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
              //setFileName(file[0].name);
            }
          }}
          multiple
        />
        <br />
        {!disabled ? detectFile() : handleDisabled()}
        <input 
          id="smartparts-submit" 
          type="submit" 
          className="button form-button" 
          disabled={disabled} 
          value={props.textConfig === undefined ? "Submit" : props.textConfig.submitLabel} 
        />
      </form>
      </div>
    </>
  );
};