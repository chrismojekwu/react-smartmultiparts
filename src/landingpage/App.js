import React, {useEffect} from 'react';
import Header from './components/Header';
import TryIt from './components/TryIt';
import GetStarted from './components/GetStarted'
import {jsGraphics} from '../wz_jsgraphics';
import {FormOne} from '../components/FormOne/FormOne';
import {FormTwo} from '../components/FormTwo/FormTwo';
import {Route,Link} from 'react-router-dom';
import './app.css';


const App = () => {
    // refactor all of this to TryIt component
    useEffect(() => {
        
        /*const jg = new jsGraphics("myCanvas");
        jg.setColor("#00ff00"); // green (RIP Walter Zorn) 
        jg.fillEllipse(20, 40, 100, 100);
        jg.paint();

        jg.setColor("#ED87F5");
        jg.drawLine(10, 113, 220, 55);
        jg.drawLine(10, 200, 300, 70);
        jg.paint();

        const jg2 = new jsGraphics("myCanvas2");
        jg2.setColor("#FBEC2F");
        const x = [-110, -100, 250, 300, 222];
        const y = [-80, -10, 200, 12, 300];
        jg2.drawPolygon(x, y);
        jg2.paint();

        jg2.setColor("#E0FFFEab");
        jg2.fillRect(50, 50, 30, 80);
        jg2.paint();*/
        
    }, []);

    const fields = ["Title", "Submitee", "Name", "Comments"];

    const fileTypes = ["wav","jpg","jpeg","mp3","mp4","png", "pdf"];
    
    const printData = (data) => {
      console.log(data);
    };


    return (
        <main className="landing-page">
            <Header/>
            <div id="container">
                <div className="controls">
                    <Link to="/getstarted">
                        <button className="control-btn">
                            Get Started
                        </button>
                    </Link>
                    <Link to="/tryit">
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
                                <FormOne fields={fields} fileTypes={fileTypes} cb={printData}/>
                                </div>
                                <div className="card-back">
                                    smartyparties
                                </div>
                            </div>
                        </div>

                        <div className="card-two">
                            <div className="card-inner">
                                <div className="card-front">
                                <FormOne fields={fields} fileTypes={fileTypes} cb={printData}/>
                                </div>
                                <div className="card-back">
                                    smartparts
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="landing-description">
                    smartmultiparts are file input components for React that return a form with specified fields. FormOne will return a single set of input fields for a group of file types. FormTwo will return a specified set of fields for each individual file type. Upon submission the form will pass the multipart form data into a callback function provided by you.
                    </div>
                </Route>

                <Route exact path="/getstarted">
                    <GetStarted/>
                </Route>

                <Route exact path="/tryit">
                    <TryIt/>
                </Route>
            </div>
            {/*<div id="myCanvas2"></div>*/}
        </main>
    )
};

export default App;