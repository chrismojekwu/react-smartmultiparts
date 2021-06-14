import React, { useState } from "react";
import FormFields from "../FormFields/FormFields";
import Select from '../Select/Select';
import {stringInArr} from '../util/helpers';

import "../Form.css";

export const FormTwo = (props) => {
  const [fileType, setFileType] = useState("");
  const [fileName, setFileName] = useState("");
  const [select, setSelect] = useState();
  const [selectValue, setSelectValue] = useState("");

  //function to render correct form component for file type
  const detectFile = () => {
    if (fileType === "") return "";

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
      if(new RegExp('filename', 'gi').test(fieldArr[i]) === true){
        data.append('filename', fileName);
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

  return (  
    <>
      <div className="container form-body">
          <p>
            Supported File Types: {Object.keys(props.fileTypes).map(x => {
              return `.${x}`
            }).join(" ")}
          </p>

          <form
            onSubmit={(e) => upload(e)}
            className="entry-form"
            encType="multipart/form-data"
            method="post"
            name="upload"
          >
            <label htmlFor="file">File:</label>
            <input
              id="file"
              type="file"
              name="upload"
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
            <input id="submit" type="submit" className="button" />
            
          </form>
          <br />
      </div>
    </>
  );
};

