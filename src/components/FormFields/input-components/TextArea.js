import React from "react";

const TextArea = (props) => {
    return (
        <React.Fragment key={"textarea-" + props.index.toString()}>
            <label htmlFor='comments' className='form-label'>Comments:</label>
            <textarea
              name="comments"
              className="comments form-textarea"
              placeholder="Additional Comments"
              id="smartparts-comments"
            />
        </React.Fragment>
    )
}

export default TextArea;