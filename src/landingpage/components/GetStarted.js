import React, { useState } from 'react'
import './getstarted.css'

const GetStarted = () => {
    const [activeSection, setActiveSection] = useState("");
    const formOne = [`import {FormOne} from 'react-smartmultiparts';`,`const fields = ["Title", "Submitee", "Name", "Comments"];`, `const fileTypes = ["wav","jpg","jpeg","mp3","mp4","png", "pdf"];`, <p>const printData = (data) {"=>"} {"{"}<br/>&emsp;&emsp;console.log(data);<br/>{"}"};</p>, `<FormOne fields={fields} fileTypes={fileTypes} cb={printData}/>`];
    const formTwo = [`import {FormTwo} from 'react-smartmultiparts';`, <p>const printData = (data) {"=>"} {"{"}<br/>&emsp;&emsp;console.log(data);<br/>{"}"};</p>, <p>const formObj = {"{"}<br/>&emsp;&emsp;wav: ["Title", "Artist", "Comments"],<br/>&emsp;&emsp;mp3: ["Title", "Artist"],<br/>&emsp;&emsp;jpg: ["Title", "Subject", "Source"]<br/>{"}"};</p>, `<FormTwo fileTypes={formObj} cb={printData}/>`];
    const select = [<p>const selectObj = {"{"}<br/>&emsp;&emsp;query: "Whats your name?",<br/>&emsp;&emsp;select: ["Chris", "Emeka", "Maya", "Pat", "Arthur"],<br/>&emsp;&emsp;placeholder: "Lorem"<br/>{"}"};</p>,`<FormOne ... select={selectObj}/>`];
    
    const renderUsage = () => {
        return (
            <div>
                <h3 className="heading">Usage:</h3>
                <div className="gist">
                    <span>
                    The <span className="bold">FormOne</span> component accepts a list of file types as a "fileTypes" prop and form fields as "fields" prop.
                    </span>
                    <span>
                    The <span className="bold">FormTwo</span> component allows you to specify an object containing the supported file types as keys and their correspending fields as an array using the "fileTypes" prop.
                    </span>
                    <span>
                    Both Forms must be passed a callback function to handle the multipart data using the "cb" prop.
                    </span>
                </div>
                <details>
                    <summary>Form One</summary>
                    <div className="code-snippet">
                        <code>
                            {formOne.map((x,i) => {
                                return (
                                    <div key={i}>
                                        {x}
                                    </div>
                                )
                            })}
                        </code>
                    </div>
                </details>
                <details>
                    <summary>Form Two</summary>
                    <div className="code-snippet">
                        <code>
                            {formTwo.map((x,i) => {
                                    return (
                                        <div key={i}>
                                            {x}
                                        </div>
                                    )
                            })}
                        </code>
                    </div>    
                </details>
            </div>
        );
    };

    const renderInputs = () => {
        return (
            <>
                <h3 className="heading">Input Types Supported:</h3>
                <div className="inputtypes">
                    <span>
                        <span className="bold">Text Inputs</span> - Any field value supplied will generate a text input.
                    </span>
                    <span>
                        <span className="bold">Text Area</span> - Providing a "comments" field will generate a Text Area Input.
                    </span>
                    <span>
                        <span className="bold">Filename</span> - Using "filename" as a field will generate the filename inside of the form and include it in the multipart data.
                    </span>
                    <span>
                        <span className="bold">Date</span> - Using "date" as a field will generate a date input.
                    </span>
                    <span>
                        <span className="bold">Range</span> - You can generate a range field by using "range" followed by a bracket that specifies min, max, step, & label values separated by an underscore. Optionally you can include left angle bracket to instruct the form to render the label before the input.
                    </span>
                    <span>
                        <span className="bold">Select</span> - You can generate a select field by using "select" in a fields array. You must provide a matching array of select objects to correspond with the number of selects you would like to generate. The form will render selects based on their position in the fields array and the order inside of the select objects array.
                    <details>
                        <summary>Example</summary>
                        <div className="code-snippet">
                            <code>
                                {select.map((x,i) => {
                                    return (
                                        <div key={i}>
                                            {x}
                                        </div>
                                    )
                                })}
                            </code>
                        </div>
                    </details>
                    </span>
                </div>
            </>
        );
    };

    const renderConfig = () => {
        return (
            <>
                <h3 className="heading">Configuration:</h3>
                <div className="configuration">
                    <span>
                        <span className="bold">Required Attribute</span> - You can require applicable input types by using an exclamation point at the end of its field name string.
                    </span>
                    <span>
                        <span className="bold">Form Disable Message</span> - By default the form will display Thanks after it is submitted. You can provide your own message passing the "disabled" prop an object with a single key/value pair using "message".
                    </span>
                    <span>
                        <span className="bold">Error Message</span> - By default the form will display Internal Error on error. You can provide an error message for the form by passing a string into an errorMessage prop.
                    </span>
                </div>
            </>
        );
    };
    const renderStyling = () => {
        return (
            <>
                <h3 className="heading">Styling:</h3>
                <div className="styling">
                    <span>
                        <span className="bold">Logo</span> - You can provide a "logo" prop using a path to an image of your choice. That element can be styled using the "form-logo-img" class selector.
                    </span>
                    <span className="bold">
                    You can style the various aspects of the form using CSS Class selectors.
                    </span>
                    <span>
                        <span className="bold">Body/Container</span> - .form-body
                    </span>
                    <span>
                        <span className="bold">Labels</span> - .form-label
                    </span>
                    <span>
                        <span className="bold">File Input</span> - .form-fileinput
                    </span>
                    <span>
                        <span className="bold">Filename</span> - .form-filename
                    </span>
                    <span>
                        <span className="bold">Comments</span> - .form-text-area
                    </span>
                    <span>
                        <span className="bold">Text Inputs</span> - .form-text-input
                    </span>
                    <span>
                        <span className="bold">Select Element</span> - .form-select
                    </span>
                    <span>
                        <span className="bold">Select Options</span> - .form-select-option
                    </span>
                    <span>
                        <span className="bold">Date Input</span> - .form-date-input
                    </span>
                    <span>
                        <span className="bold">Range Input</span> - .form-range-input
                    </span>
                    <span>
                        <span className="bold">Range Value</span> - .form-range-value
                    </span>
                    <span>
                        <span className="bold">Submit Button</span> - .form-button
                    </span>
                    <span>
                        <span className="bold">Logo</span> - .form-logo-img
                    </span>
                </div>
            </>
        );
    };

    const renderBody = (section) => {
        switch (section) {
            case "usage":
                return renderUsage();
            case "inputs":
                return renderInputs();
            case "config":
                return renderConfig();
            case "style":
                return renderStyling();
            default:
                return "";
        };
    };

    const handleActiveSection = (section, index) => {
        setActiveSection(section);
        let sections = document.getElementsByClassName("getstarted-btn-inner");
        for (let i = 0; i < sections.length; i++) {
            sections[i].classList.remove("button-slide");
        };
        sections[index].classList.add("button-slide");
    };

    return (
        <section className="getstarted-container">
            <aside className="getstarted-buttons">
                {["Usage-usage", "Input Types-inputs", "Configuration-config", "Styling-style"].map((x, i) => {
                    return (
                        <button 
                            className="getstarted-btn" 
                            key={`get-started-btn-${i}`}
                            onClick={() => handleActiveSection(x.split("-")[1], i)}
                        >
                            <div className="getstarted-btn-inner" >
                                {x.split("-")[0]}
                            </div>
                        </button>
                    )
                })}
            </aside>
            <div className="getstarted">
                <div className="code-snippet-wrapper">
                    <div className="code-snippet">
                        <code>
                            <span className="cli">$</span>npm i react-smartmultiparts
                        </code>
                    </div>
                </div>
                <div className="getstarted-body">
                    {renderBody(activeSection)}
                </div>
            </div>
        </section>
    )
};

export default GetStarted;