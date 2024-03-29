import React from "react";

const TextArea = (props) => {
    const renderDefault = () => {
        return (
            <React.Fragment>
                <label htmlFor='comments' className='form-label'>Comments:</label>
                <textarea
                  name={`textarea-${props.index}`}
                  className="comments form-text-area"
                  placeholder="Comments"
                  id={`smartparts-comments-${props.index}`}
                  data-testid={`smartparts-comments-${props.index}`}
                />
            </React.Fragment>
        );
    };

    const renderReq = () => {
        return (
            <React.Fragment>
                <label htmlFor='comments' className='form-label'>Comments:</label>
                <textarea
                  name={`textarea-${props.index}`}
                  className="comments form-text-area"
                  placeholder="Comments"
                  id={`smartparts-comments-${props.index}`}
                  data-testid={`smartparts-comments-${props.index}`}
                  required
                />
            </React.Fragment>
        )
    };
    
    return props.required ? renderReq() : renderDefault();
}

export default TextArea;