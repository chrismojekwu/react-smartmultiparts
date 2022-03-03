import React, {useState} from "react";

const Date = (props) => {
    const [date, setDate] = useState("2099-01-01");
    return (
        <React.Fragment>
          <label htmlFor='date' className="form-label">Date:</label>
          <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)}/>
        </React.Fragment>
    )
}

export default Date;