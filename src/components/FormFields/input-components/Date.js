import React, { useState } from "react";

const Date = (props) => {
  const [date, setDate] = useState("2099-01-01");

  const renderDefault = () => {
    return (
      <React.Fragment>
        <label htmlFor='date' className="form-label">Date:&#9;<span aria-hidden="true">(YYYY-MM-DD)</span></label>
        <input type="date" name="date" id="smartparts-date-input" value={date} onChange={(e) => setDate(e.target.value)}/>
      </React.Fragment>
    );
  };

  const renderReq = () => {
    return (
      <React.Fragment>
        <label htmlFor='date' className="form-label">Date:&#9;<span aria-hidden="true">(YYYY-MM-DD)</span></label>
        <input type="date" name="date" id="smartparts-date-input" value={date} onChange={(e) => setDate(e.target.value)} required/>
      </React.Fragment>
    );
  };

  return props.required ? renderReq() : renderDefault();
};

export default Date;