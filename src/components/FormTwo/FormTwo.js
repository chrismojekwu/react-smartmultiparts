import React, { useState } from "react";
import FormFields from "../FormFields/FormFields";
import { fileTypes } from '../util/helpers';

import "../Form.css";

export const FormTwo = (props) => {
  const [fileType, setFileType] = useState("");
  const [fileName, setFileName] = useState("");
  const [disabled, setDisabled] = useState(false);

  //function to render correct form component for file type
  const detectFile = () => {
    if (fileType === "") return "";
    if (Object.keys(props.fileTypes).length === 0) { 
      if (props.errorMessage === undefined || props.errorMessage === "") {
        return <span id="smartparts-error">Internal Error</span>;
      } else {
        return <span id="smartparts-error">{props.errorMessage}</span>;
      }
    }

    const ext = fileType[0].name ? fileType[0].name.split(".")[1].toLowerCase() : "";

    const re = new RegExp(Object.keys(props.fileTypes).join("|"), "gi");

    if (!ext) return "Invalid Extention";

    if (re.test(ext) === true) {
      return <FormFields fields={props.fileTypes[ext]} filename={fileName} select={props.select}/>;
    }

    else setFileType("INVALID");

    return "File type not supported.";
  };

  const upload = (e) => {
    e.preventDefault();
    if (Object.keys(props.fileTypes).length === 0 || props.fileTypes === undefined || props.fileTypes === null) return false; 
    const ext = fileType[0].name ? fileType[0].name.split(".")[1].toLowerCase() : "";
    const data = new FormData();
    data.append('file', fileType[0]);
    const fieldArr = props.fileTypes[ext];

    for(let i = 0; i < fieldArr.length; i++){
      if (fieldArr[i] === "") {
        continue;
      } else if (new RegExp('filename', 'gi').test(fieldArr[i]) === true) {
        data.append('filename', fileName);
      } else if (new RegExp('comments', 'gi').test(fieldArr[i]) === true) {
        data.append('comments', e.target.comments.value);
      } else if (new RegExp('date', 'gi').test(fieldArr[i]) === true) { 
        data.append('date', e.target.date.value);
      } else if (new RegExp('select', 'gi').test(fieldArr[i]) === true) {
        data.append(`select-${i}`, e.target[`select-${i}`].value);
      } else if (new RegExp('range', 'gi').test(fieldArr[i]) === true) {
        data.append(`range-${i}`, e.target[`range-${i}`].value);
      } else
      data.append(fieldArr[i].toLowerCase(), e.target[fieldArr[i].toLowerCase()].value);
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
    const message = props.disabled !== undefined ? props.disabled.message : "Thanks";
    return <span className="smartparts-disabled-message">{message}</span>;
  };

  const renderLogo = (path) => {
    return <img src={path} className="form-logo-img"/>
  };


  return (  
    <>
      <div className="smartparts-container form-body">
      <div className="smartparts-logo-container">
        {props.logo ? renderLogo(props.logo) : ""}
      </div>
          <p>
            Supported File Types: {Object.keys(props.fileTypes) !== undefined ? fileTypes(Object.keys(props.fileTypes)) : ""}
          </p>

          <form
            onSubmit={(e) => upload(e)}
            className="smartparts-entry-form"
            encType="multipart/form-data"
            method="post"
            name="upload"
            disabled={disabled}
          >
            <label htmlFor="file form-label">File:</label>
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
            <input id="smartparts-submit" type="submit" className="button form-button" disabled={disabled}/>
          </form>
      </div>
    </>
  );
};

