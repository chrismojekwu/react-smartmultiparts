import React, { useState } from "react";
import FormFields from "../FormFields/FormFields";
import Select from '../Select/Select';
import {stringInArr, fileTypes} from '../util/helpers';

import "../Form.css";

export const FormTwo = (props) => {
  const [fileType, setFileType] = useState("");
  const [fileName, setFileName] = useState("");
  const [select, setSelect] = useState();
  const [selectValue, setSelectValue] = useState("");

  //function to render correct form component for file type
  const detectFile = () => {
    if (fileType === "") return "";
    if (Object.keys(props.fileTypes).length === 0) return <span id="smartparts-error">Internal Error</span>;

    const ext = fileType[0].name ? fileType[0].name.split(".")[1].toLowerCase() : "";

    const re = new RegExp(Object.keys(props.fileTypes).join("|"), "gi");

    if (!ext) return "Invalid Extention";

    if (re.test(ext) === true) {
      return <FormFields fields={props.fileTypes[ext]} filename={fileName}/>;
    }

    else setFileType("INVALID");

    return "File type not supported.";
  };

  const upload = (e) => {
    e.preventDefault();
    const ext = fileType[0].name ? fileType[0].name.split(".")[1].toLowerCase() : "";
    const data = new FormData();
    data.append('file', fileType[0]);
    const fieldArr = props.fileTypes[ext];

    //check for select prop and add value
    if(props.select && select === true){
      data.append(props.select.query, selectValue);
    }

    for(let i = 0; i < fieldArr.length; i++){
      if(fieldArr[i] === ""){
        continue;
      } else if(new RegExp('filename', 'gi').test(fieldArr[i]) === true){
        data.append('filename', fileName);
      } else if(new RegExp('comments', 'gi').test(fieldArr[i]) === true){
        data.append('comments', e.target.comments.value);
      } else if(new RegExp('date', 'gi').test(fieldArr[i]) === true){
        data.append('date', e.target.date.value);
      } else
      data.append(fieldArr[i], e.target[fieldArr[i]].value);
    };

    props.cb(data);
  };

  const handleFile = (file) => {
    if (file[0] === undefined || file[0] === null) {
      return null;
    } else return file;
  };

  const generateSelect = (selectObj) => {
    return (
      <Select obj={selectObj} setValue={setSelectValue}/>
    );
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
            Supported File Types: {Object.keys(props.fileTypes) != undefined ? fileTypes(Object.keys(props.fileTypes)) : ""}
          </p>

          <form
            onSubmit={(e) => upload(e)}
            className="smartparts-entry-form"
            encType="multipart/form-data"
            method="post"
            name="upload"
          >
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

                  //checks for Select prop
                  if (props.select) setSelect(true)
                }
              }}
            />
            <br />
            {select === true && stringInArr(props.select.types, fileType[0].name ? fileType[0].name.split(".")[1].toLowerCase() : "") === true
              ? generateSelect(props.select)
              : ""}

            {detectFile()}
            <input id="smartparts-submit" type="submit" className="button form-button" />
            
          </form>
          <br />
      </div>
    </>
  );
};

