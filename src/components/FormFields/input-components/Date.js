import React, { useState } from "react";

const Date = (props) => {
  const [date, setDate] = useState("2099-01-01");

  const renderDefault = () => {
    return (
      <React.Fragment>
        <label htmlFor='date' className="form-label">Date:</label>
        <input type="date" name={`date-${props.index}`} id="smartparts-date-input" value={date} 
          onChange={(e) => setDate(e.target.value)} className="form-date-input"
        />
      </React.Fragment>
    );
  };

  const renderReq = () => {
    return (
      <React.Fragment>
        <label htmlFor='date' className="form-label">Date:</label>
        <input type="date" name={`date-${props.index}`} id="smartparts-date-input" value={date} 
          onChange={(e) => setDate(e.target.value)} className="form-date-input" required
        />
      </React.Fragment>
    );
  };

  return props.required ? renderReq() : renderDefault();
};

export default Date;