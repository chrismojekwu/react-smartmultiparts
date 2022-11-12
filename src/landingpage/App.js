import React from 'react';
import Header from './components/Header';
import TryIt from './components/TryIt';
import GetStarted from './components/GetStarted'
import { FormOne } from '../components/FormOne/FormOne';
import { FormTwo } from '../components/FormTwo/FormTwo';
import { Route, Link } from 'react-router-dom';
import './app.css';


const App = () => {
    const fields = ["Chris Mojekwu", "Comments", "Range[0_12_1_Study Hours]", "Date", "checkbox[C#]", "checkbox","checkbox[C++]","checkbox", "checkbox[JAVA]" ,"checkbox[GO]"];

    const fileTypes = ["wav","jpg","jpeg","mp3","mp4","png", "pdf"];
    
    const printData = (data) => { 
        for (var value of data.values()) {
            console.log(value);
        };
    };

    const formObj = {
        wav: ["Title", "Artist", "Comments"],
        mp3: ["Title", "Artist"],
        jpg: ["Chris Mojekwu", "Comments", "Range[0_12_1_Study Hours]", "Date", "checkbox[C#]", "checkbox[0]","checkbox[C++]","checkbox[1]", "checkbox[JAVA]" ,"checkbox[GO]"]
    };

    const testConfig = {
        typeLabel: "Valid Files: ",
        inputLabel: "Upload - ",
        disabled: "Thanks for the submission!",
        errorMessage: "Something went wrong.",
        invalidExt: "Sorry we dont support that type of file."
    };

    return (
        <main className="landing-page">
            <Header/>
            <div id="container">
                <div className="controls">
                    <Link to="/getstarted" tabIndex="-1">
                        <button className="control-btn">
                            Get Started
                        </button>
                    </Link>
                    <Link to="/tryit" tabIndex="-1">
                        <button className="control-btn">
                            Try It
                        </button>
                    </Link>
                </div>

                <Route exact path="/">
                    <section className="card-container">
                        <div className="card-one">
                            <div className="card-inner">
                                <div className="card-front">
                                <FormTwo
                                    //fields={fields} 
                                    fileTypes={formObj} 
                                    cb={printData} 
                                    textConfig={testConfig}
                                    checkboxes={[
                                        {query: "Languages", boxes: ["Basic", "C", "Java", "Ruby", "JS"]},
                                        {query: "Skills", boxes: ["Frontend", "Backend", "Full-stack"]},
                                    ]}
                                />
                                </div>
                                <div className="card-back">
                                    <div className="card-back-inner">
                                        react-smartmultiparts
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-two">
                            <div className="card-inner">
                                <div className="card-front">
                                <FormOne 
                                    fields={fields} 
                                    fileTypes={fileTypes} 
                                    cb={printData} 
                                    textConfig={testConfig}
                                    checkboxes={[
                                        {query: "whaaaa", boxes: ["a", "b", "c", "d", "e"]},
                                        {query: "whaaaa2", boxes: ["f", "g", "h", "i", "j"]},
                                    ]}
                                />
                                </div>
                                <div className="card-back">
                                    <div className="card-back-inner">
                                        react-smartmultiparts
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*
                    <div className="landing-description">
                    smartmultiparts are file input components for React that return a form with specified fields. FormOne will return a single set of input fields for a group of file types. FormTwo will return a specified set of fields for each individual file type. Upon submission the form will pass the multipart form data into a callback function provided by you.
                    </div>
                        */}
                </Route>

                <Route exact path="/getstarted">
                    <GetStarted/>
                </Route>

                <Route exact path="/tryit">
                    <TryIt/>
                </Route>
            </div>
        </main>
    )
};

export default App;