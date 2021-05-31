import React from 'react';
import {FormOne} from '../components/FormOne/FormOne'
import {FormTwo} from '../components/FormTwo/FormTwo'
import './app.css'

const App = () => {
    const fields = ["Title", "Submitee", "Name", "Comments"];

    const fileTypes = ["wav","jpg","jpeg","mp3","mp4","png", "pdf"];

    const printData = (data) => { 
        console.log(data);
    };

    const formObj = {
        wav: ["Title", "Artist", "Comments"],
        mp3: ["Title", "Artist"],
        jpg: ["Title", "Subject", "Source"]
    };

    return (
        <div className="landing-container">
            <div className="landing-page">
                <h1>smart multiparts!</h1>
            </div>
            <FormOne fields={fields} fileTypes={fileTypes} cb={printData}/>
            <FormTwo fileTypes={formObj} cb={printData}/>
        </div>
    )
};

export default App;