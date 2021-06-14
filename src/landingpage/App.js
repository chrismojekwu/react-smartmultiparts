import React from 'react';
import {FormOne} from '../components/FormOne/FormOne'
import {FormTwo} from '../components/FormTwo/FormTwo'
import './app.css'

const App = () => {
    const fields = ["Title", "Submitee", "Name", "Comments", "Filename"];

    const fileTypes = ["wav","jpg","jpeg","mp3","mp4","png", "pdf"];

    const printData = (data) => { 
        console.log(data);
    };

    const formObj = {
        wav: ["Title", "Artist", "Comments"],
        mp3: ["Title", "Artist"],
        jpg: ["Title", "Subject", "Source"]
    };

    const selectObj = {
        query: "Whats your name?",
        select: ["Chris", "Emeka", "Maya", "Pat", "Arthur"],
        types: ["wav","jpeg","mp3"]
    };

    return (
        <div className="landing-container">
            <div className="landing-page">
                <h1 className="landing-title">react-smart-<span className="hover-color">multiparts</span></h1>
                <h5 className="landing-subtitle">a file detecting multipart form library...for react!</h5>
            </div>
            <section className="forms">
                <h3 className="landing-title">Form One:</h3>
                <FormOne fields={fields} fileTypes={fileTypes} cb={printData}/>
                <h3 className="landing-title">Form Two:</h3>
                <FormTwo fileTypes={formObj} cb={printData} select={selectObj}/>
            </section>
        </div>
    )
};

export default App;