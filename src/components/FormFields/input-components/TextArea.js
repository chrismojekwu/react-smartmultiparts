import React from "react";

const TextArea = (props) => {
    const renderDefault = () => {
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
        );
    };

    const renderReq = () => {
        return (
            <React.Fragment key={"textarea-" + props.index.toString()}>
                <label htmlFor='comments' className='form-label'>Comments:</label>
                <textarea
                  name="comments"
                  className="comments form-textarea"
                  placeholder="Additional Comments"
                  id="smartparts-comments"
                  required
                />
            </React.Fragment>
        )
    };
    
    return props.required ? renderReq() : renderDefault();
}

export default TextArea;