import React, {useEffect} from 'react';
import Header from './components/Header';
import TryIt from './components/TryIt';
import GetStarted from './components/GetStarted'
import {jsGraphics} from '../wz_jsgraphics';
import {Route,Link} from 'react-router-dom';
import './app.css';


const App = () => {
    // refactor all of this to TryIt component
    useEffect(() => {
        
        const jg = new jsGraphics("myCanvas");
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
        jg2.paint();
        
    }, []);

    return (
        <div className="landing-page">
            <Header/>
            <div id="myCanvas">
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
                    <div class="landing-description">
                    smartmultiparts are file input components for React that return a form with specified fields. Upon submission the form will pass the multipart form data into a callback function provided by you. FormOne will return a single set of input fields for a group of file types. FormTwo will return a specified set of fields for each individual file type.
                    </div>
                </Route>

                <Route exact path="/getstarted">
                    <GetStarted/>
                </Route>

                <Route exact path="/tryit">
                    <TryIt/>
                </Route>
            </div>
            <div id="myCanvas2"></div>
        </div>
    )
};

export default App;