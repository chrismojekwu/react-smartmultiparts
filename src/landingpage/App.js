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
        gif: ["Title", "Artist", "Comments"],
        pdf: ["Title", "Artist"],
        jpg: ["Chris Mojekwu", "Comments", "Range[0_12_1_Study Hours]", "Date", "checkbox[C#]", "checkbox[0]","checkbox[C++]","checkbox[1]", "checkbox[JAVA]" ,"checkbox[GO]"]
    };

    const testConfig = {
        typeLabel: "Valid Files: ",
        inputLabel: "Upload - ",
        disabled: "Thanks for the submission!",
        errorMessage: "Something went wrong.",
        invalidExt: "Sorry we dont support that type of file.",
        logoAlt: "",
        submitLabel: "Send",
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
                </div>

                <Route exact path="/">
                    <section className="card-container">
                        <div className="card-one">
                            <div className="card-inner">
                                <div className="card-front">
                                <FormTwo
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
                                        {query: "Words", boxes: ["apple", "banana", "cheese", "dog", "ear"]},
                                        {query: "Words 2", boxes: ["float", "grow", "hide", "icon", "jar"]},
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
                    <div className="landing-description">
                    smartmultiparts
                    </div>
                </Route>

                <Route exact path="/getstarted">
                    <GetStarted/>
                </Route>
            </div>
        </main>
    )
};

export default App;