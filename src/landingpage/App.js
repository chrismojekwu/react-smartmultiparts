import React from 'react';
import Header from './components/Header';
import GetStarted from './components/GetStarted'
import { FormOne } from '../components/FormOne/FormOne';
import { FormTwo } from '../components/FormTwo/FormTwo';
import { Route, Link } from 'react-router-dom';
import './app.css';


const App = () => {
    const fields = ["Appointment Name", "select[1]", "Library Name", "select[0]!", "Comments", "Range[0_12_1_Meeting Length (Hours)]", "Date", "checkbox", "checkbox", "select!", "select", "checkbox[ Include Lunch Order]", "radios"];

    const fileTypes = ["wav", "jpg", "jpeg", "ics", "dmg"];
    
    const printData = (data) => { 
        for (var value of data.values()) {
            console.log(value);
        };
    };

    const formObj = {
        pdf: ["Appointment Name!", "select[1]", "Library Name!", "select[0]!", "CheckBox[1]", "CheckBox[0]", "Comments", "radios[1]", "radios[0]", "checkbox[Include Lunch Order]"],
        ics: ["Appointment Name", "select[1]", "Library Name", "select[0]!", "CheckBox[1]", "CheckBox[0]", "Comments"],
        mp3: ["Artist", "Title", "Date"],
        jpg: ["Chris Mojekwu", "Comments", "Range[0_12_1_Study Hours]", "Date", "checkbox[C#]", "checkbox[0]","checkbox[C++]","checkbox[1]", "checkbox[JAVA]" ,"checkbox[GO]"]
    };

    const testConfig = {
        typeLabel: "Valid Files: ",
        inputLabel: "Upload:",
        disabled: "Thanks for the submission!",
        errorMessage: "Something went wrong.",
        invalidExt: "Sorry we cant handle that file.",
        logoAlt: "",
        submitLabel: "Send",
        fileSizeLabel: "",
        fileSizeMessage: ""
    };

    const selectObjs = [
        {
            query: "Preferred Day",
            select: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            placeholder: "Choose a day"
        },
        {
            query: "Library Wing",
            select: ["North", "South", "East", "West"],
            placeholder: "Choose a direction"
        }
    ];

    const radioObjs = [
        {
            query: "Is this useful?",
            options: ["Yes", "No"]
        },
        {
            query: "Does this work?",
            options: ["Yes", "No", "Maybe"]
        },
    ];

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
                    <section className="form-container">
                        <div>
                            <FormTwo
                                fileTypes={formObj} 
                                cb={printData} 
                                textConfig={testConfig}
                                checkboxes={[
                                    {
                                        query: "Languages", 
                                        boxes: ["Basic", "C", "Java", "Ruby", "JS"]
                                    },
                                    {
                                        query: "Skills", 
                                        boxes: ["Frontend", "Backend", "Full-stack"]
                                    },
                                ]}
                                select={selectObjs}
                                radios={radioObjs}
                            />
                        </div>
                        <div>
                            <FormOne 
                                fields={fields} 
                                fileTypes={fileTypes} 
                                cb={printData} 
                                textConfig={testConfig}
                                checkboxes={[
                                    {
                                        query: "Languages", 
                                        boxes: ["Basic", "C", "Java", "Ruby", "JS"]
                                    },
                                    {
                                        query: "Skills", 
                                        boxes: ["Frontend", "Backend", "Full-stack"]
                                    },
                                ]}
                                select={selectObjs}
                                radios={radioObjs}
                            />
                        </div>       
                    </section>
                    <div className="landing-description">
                        smartmultiparts
                        <div
                            style={{
                                width: "200px"
                            }}
                        >
                        ...on submit data will print to the console
                        </div>
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