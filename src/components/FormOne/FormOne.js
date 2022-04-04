import React, { useState } from "react";
import FormFields from "../FormFields/FormFields";
import {fileTypes} from '../util/helpers';
import "../Form.css";

export const FormOne = (props) => {
  const [fileType, setFileType] = useState("");
  const [fileName, setFileName] = useState("");

  //function to render correct form component for file type
  const detectFile = () => {
    if (fileType === "") return "";
    if (Object.keys(props.fileTypes).length === 0 || props.fields === []) {
      if (props.errorMessage === undefined || props.errorMessage === "") {
        return <span id="smartparts-error">Internal Error</span>;
      } else {
        return <span id="smartparts-error">{props.errorMessage}</span>;
      }
    }
    const ext = fileType[0].name ? fileType[0].name.split(".")[1] : "";
    const re = new RegExp(props.fileTypes.join("|"), "gi");
    if (!ext) return "Invalid Extension";
    if (re.test(ext) === true) {
      return <FormFields fields={props.fields} filename={fileName} select={props.select}/>;
    }
    else setFileType("INVALID");
    return "File type not supported.";
  };

  const dataReturn = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', fileType[0]);
    
    for(let i = 0; i < props.fields.length; i++){
      if (props.fields[i] === "") {
        continue;
      } else if (new RegExp('filename', 'gi').test(props.fields[i]) === true) {
        data.append('filename', fileName);
      } else if (new RegExp('comments', 'gi').test(props.fields[i]) === true) {
        data.append('comments', e.target.comments.value);
      } else if (new RegExp('date', 'gi').test(props.fields[i]) === true) {
        data.append('date', e.target.date.value);
      } else if (new RegExp('select', 'gi').test(props.fields[i]) === true) {
        data.append(`select-${i}`, e.target[`select-${i}`].value);
      } else if (new RegExp('range', 'gi').test(props.fields[i]) === true) {
        data.append(`range-${i}`, e.target[`range-${i}`].value);
      } else
      data.append(props.fields[i], e.target[props.fields[i]].value);
    };

    props.cb(data);
  };

  const handleFile = (file) => {
    if (file[0] === undefined || file[0] === null) {
      return null;
    } else return file;
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
          Supported File Types: {fileTypes(props.fileTypes)}
        </p>

        <form
          onSubmit={(e) => dataReturn(e)}
          className="smartparts-entry-form"
          encType="multipart/form-data"
          method="post"
          name="upload">
          <label htmlFor="file form-label">File:</label>
          <input
            id="smartparts-file"
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
          {detectFile()}
          <input id="smartparts-submit" type="submit" className="button form-button" />  
        </form>
         <br />
      </div>
    </>
  );
}

