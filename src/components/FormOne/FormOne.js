import React, { useState } from "react";
import FormFields from "../FormFields/FormFields";
import Select from '../Select/Select';
import {fileTypes} from '../util/helpers';
import "../Form.css";

export const FormOne = (props) => {
  const [fileType, setFileType] = useState("");
  const [fileName, setFileName] = useState("");
  const [select, setSelect] = useState();
  const [selectValue, setSelectValue] = useState("");

  //function to render correct form component for file type
  const detectFile = () => {
    if (fileType === "") return "";
    if (Object.keys(props.fileTypes).length === 0 || props.fields === []) return <span id="smartparts-error">Internal Error</span>;
    const ext = fileType[0].name ? fileType[0].name.split(".")[1] : "";
    const re = new RegExp(props.fileTypes.join("|"), "gi");
    if (!ext) return "Invalid Extention";
    if (re.test(ext) === true) {
      return <FormFields fields={props.fields} filename={fileName}/>;
    }
    else setFileType("INVALID");
    return "File type not supported.";
  };

  const dataReturn = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', fileType[0]);
    
    //check for select prop and add value
    if(props.select && select === true){
      data.append(props.select.query, selectValue);
    }

    for(let i = 0; i < props.fields.length; i++){
      if(props.fields[i] === ""){
        continue;
      }else if(new RegExp('filename', 'gi').test(props.fields[i]) === true){
        data.append('filename', fileName);
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
              //checks for Select prop
              if (props.select) setSelect(true);
              }
            }}
          />
          <br />
          {select === true && Object.keys(props.fileTypes).length != 0
            ? generateSelect(props.select)
            : "" }
          {detectFile()}
          <input id="smartparts-submit" type="submit" className="button form-button" />  
        </form>
         <br />
      </div>
    </>
  );
}

