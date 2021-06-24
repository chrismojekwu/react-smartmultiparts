import React, { useState } from "react";
import FormFields from "../FormFields/FormFields";
import Select from '../Select/Select';
import "../Form.css";

export const FormOne = (props) => {
  const [fileType, setFileType] = useState("");
  const [fileName, setFileName] = useState("");
  const [select, setSelect] = useState();
  const [selectValue, setSelectValue] = useState("");

  //function to render correct form component for file type
  const detectFile = () => {
    if (fileType === "") return "";
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
      if(new RegExp('filename', 'gi').test(props.fields[i]) === true){
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

 
  return (
    <>
      <div className="container form-body">
          <p>
            Supported File Types: {props.fileTypes.map(x => {
              return `.${x}`
            }).join(" ")}
          </p>

          <form
            onSubmit={(e) => dataReturn(e)}
            className="entry-form"
            encType="multipart/form-data"
            method="post"
            name="upload"
          >
            <label htmlFor="file form-label">File:</label>
            <input
              id="file"
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
            {select === true 
              ? generateSelect(props.select)
              : ""}

            {detectFile()}
            <input id="submit" type="submit" className="button form-button" />
            
          </form>
          <br />
      </div>
    </>
  );
}

