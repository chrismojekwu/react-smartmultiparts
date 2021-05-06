import React, { useState } from "react";
import FormFields from "../FormFields/FormFields";

import "../Form.css";

export const FormOne = (props) => {
  const [fileType, setFileType] = useState("");
  const [fileName, setFileName] = useState("");

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

    for(let i = 0; i < props.fields.length; i++){
      if(new RegExp('filename', 'gi').test(props.fields[i]) === true){
        data.append('filename', fileType[0].name);
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

  return (
    <>
      <div className="container">
          <p>
            Select your file, fill out the form and submit.
            <br />
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
            <label htmlFor="file">Upload a file</label>
            <input
              id="file"
              type="file"
              name="upload"
              onChange={(e) => {
                let file = handleFile(e.target.files);

                if (file === null) {
                  return false;
                } else setFileType(file);
                setFileName(file[0].name);
              }}
            />
            <br />
            {detectFile()}
            <input id="submit" type="submit" className="button" />
            
          </form>
          <br />
      </div>
    </>
  );
}

