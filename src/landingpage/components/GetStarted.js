import React from 'react'
import './getstarted.css'

const GetStarted = () => {
    const formOne = [`import {FormOne} from 'react-smartmultiparts';`,`const fields = ["Title", "Submitee", "Name", "Comments"];`, `const fileTypes = ["wav","jpg","jpeg","mp3","mp4","png", "pdf"];`, <p>const printData = (data) {"=>"} {"{"}<br/>&emsp;&emsp;console.log(data);<br/>{"}"};</p>, `<FormOne fields={fields} fileTypes={fileTypes} cb={printData}/>`];
    const formTwo = [`import {FormTwo} from 'react-smartmultiparts';`, <p>const printData = (data) {"=>"} {"{"}<br/>&emsp;&emsp;console.log(data);<br/>{"}"};</p>, <p>const formObj = {"{"}<br/>&emsp;&emsp;wav: ["Title", "Artist", "Comments"],<br/>&emsp;&emsp;mp3: ["Title", "Artist"],<br/>&emsp;&emsp;jpg: ["Title", "Subject", "Source"]<br/>{"}"};</p>, `<FormTwo fileTypes={formObj} cb={printData}/>`];
    const select = [<p>const selectObj = {"{"}<br/>&emsp;&emsp;query: "Whats your name?",<br/>&emsp;&emsp;select: ["Chris", "Emeka", "Maya", "Pat", "Arthur"],<br/>&emsp;&emsp;types: ["wav","jpeg","mp3"] {"}"};</p>,`<FormOne ... select={selectObj}/>`];
    
    return (
        <div className="getstarted">
            <div className="code-snippet">
                <code>
                    <span className="cli">$</span>npm i react-smartmultiparts
                </code>
            </div>
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
                            {formOne.map(x => {
                                return (
                                    <div>
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
                            {formTwo.map(x => {
                                    return (
                                        <div>
                                            {x}
                                        </div>
                                    )
                            })}
                        </code>
                    </div>    
                </details>
            </div>

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
                    <span className="bold">Select</span> - You can generate a single select field by providing a select object as a prop to either Form component using the name "select". The select object requires 2 key-values to work. "query", which refers to your question/prompt. "select", which refers to the options you want to display. If you're using Form Two, you can provide a "types" key-value which specifies the file types you would like to generate a select input for.
                <details>
                    <summary>Example</summary>
                    <div className="code-snippet">
                        <code>
                            {select.map(x => {
                                return (
                                    <div>
                                        {x}
                                    </div>
                                )
                            })}
                        </code>
                    </div>
                </details>
                </span>
            </div>

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
                    <span className="bold">Comments</span> - .form-textarea
                </span>
                <span>
                    <span className="bold">Text Inputs</span> - .form-textinput
                </span>
                <span>
                    <span className="bold">Submit Button</span> - .form-button
                </span>
                <span>
                    <span className="bold">Logo</span> - .form-logo-img
                </span>
            </div>
        </div>
    )
};

export default GetStarted;