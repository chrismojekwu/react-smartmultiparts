import React, { useState } from 'react'
import './getstarted.css'

const GetStarted = () => {
    const [activeSection, setActiveSection] = useState("");
    const formOne = [`import {FormOne} from 'react-smartmultiparts';`,`const fields = ["Title", "Submitee", "Name", "Comments"];`, `const fileTypes = ["wav","jpg","jpeg","mp3","mp4","png", "pdf"];`, <p>const printData = (data) {"=>"} {"{"}<br/>&emsp;&emsp;console.log(data);<br/>{"}"};</p>, `<FormOne fields={fields} fileTypes={fileTypes} cb={printData}/>`];
    const formTwo = [`import {FormTwo} from 'react-smartmultiparts';`, <p>const printData = (data) {"=>"} {"{"}<br/>&emsp;&emsp;console.log(data);<br/>{"}"};</p>, <p>const formObj = {"{"}<br/>&emsp;&emsp;wav: ["Title", "Artist", "Comments"],<br/>&emsp;&emsp;mp3: ["Title", "Artist"],<br/>&emsp;&emsp;jpg: ["Title", "Subject", "Source"]<br/>{"}"};</p>, `<FormTwo fileTypes={formObj} cb={printData}/>`];
    const select = [<p>const selectObj = {"{"}<br/>&emsp;&emsp;query: "Whats your name?",<br/>&emsp;&emsp;select: ["Chris", "Emeka", "Maya", "Pat", "Arthur"],<br/>&emsp;&emsp;placeholder: "Lorem"<br/>{"}"};</p>,`<FormOne ... select={selectObj}/>`];
    const stylingOptions = [
        {                            
            label: "Body/Container",
            selector: ".form-body"
        },
        {
            label: "File List",
            selector: ".form-file-list"
        },
        {
            label: "File Size Limit(s)",
            selector: ".form-file-limits"
        },
        {
            label: "Logo",
            selector: ".form-logo-img"
        },
        {
            label: "File Input",
            selector: ".form-fileinput"
        },
        {
            label: "Labels",
            selector: ".form-label"
        },
        {
            label: "Filename",
            selector: ".form-filename"
        },
        {
            label: "Comments",
            selector: ".form-text-area"
        },
        {
            label: "Text Input",
            selector: ".form-text-input"
        },
        {
            label: "Select Element",
            selector: ".form-select"
        },
        {
            label: "Select Options",
            selector: ".form-select-option"
        },
        {
            label: "Date Input",
            selector: ".form-date-input"
        },
        {
            label: "Range Input",
            selector: ".form-range-input"
        },
        {
            label: "Range Value",
            selector: ".form-range-value"
        },
        {
            label: "Value Checkbox",
            selector: ".form-checkbox"
        },
        {
            label: "Value Checkbox Label",
            selector: ".form-checkbox-label"
        },
        {
            label: "Query Checkbox Question",
            selector: ".form-checkbox-object-query"
        },
        {
            label: "Query Checkbox Input Div",
            selector: ".form-checkbox-object-input-div"
        },
        {
            label: "Query Checkbox Checkbox",
            selector: ".form-checkbox-object-checkbox"
        },
        {
            label: "Query Checkbox Label",
            selector: ".form-checkbox-object-label"
        },
        {
            label: "Radio Query",
            selector: ".form-radio-query"
        },
        {
            label: "Radio Input Div",
            selector: ".form-radio-input-div"
        },
        {
            label: "Radio Input",
            selector: ".form-radio-radio"
        },
        {
            label: "Submit Button",
            selector: ".form-button"
        },
    ];

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
                        <span className="bold">Value Checkbox</span> - You can generate a value checkbox by using "checkbox" followed by a value surrounded by brackets.
                    </span>
                    <span>
                        <span className="bold">Query Checkbox</span> - You can generate a query checkbox by using "checkbox". You must provide a matching array of checkbox objects to correspond with the number of selects you would like to generate. If using Form Two you must use "checkbox[index]", the index should correspond with the index of the checkbox object needed for that file type. The array should be passed to either form using "checkboxes."
                    </span>
                    <span>
                        <span className="bold">Radio Query</span> - You can generate a radio query by using "radios". You must provide a matching array of radio objects to correspond with the number of radios you would like to generate. If using Form Two you must use "radios[index]", the index should correspond with the index of the radio object needed for that file type.
                    </span>
                    <div>
                        <span className="bold">Select</span> - You can generate a select field by using "select" in a fields array. You must provide a matching array of select objects to correspond with the number of selects you would like to generate. Form One will render selects based on their position in the fields array and the order inside of the select objects array. If using Form Two you must use "select[index]", the index should correspond with the index of the select object needed for that file type.
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
                    </div>
                </div>
            </>
        );
    };

    const renderConfig = () => {
        return (
            <>
                <h3 className="heading">Configuration:</h3>
                <div className="configuration">
                    <h4>Text Config</h4>
                    <span>
                    The user can supply a textConfig prop containing key/value pairs for "typeLabel", "inputLabel", "disabled", "errorMessage", "invalidExt", "logoAlt", and "submitLabel". If the textConfig is supplied, unwanted values should be empty strings.
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
                    {stylingOptions.map((option,i) => {
                        return (
                            <span>
                                <span className="bold">{option.label}</span> - {option.selector}
                            </span>
                        )
                    })}
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