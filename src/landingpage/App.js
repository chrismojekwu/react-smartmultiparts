import React, {useEffect} from 'react';
import Header from './components/Header';
import TryIt from './components/TryIt';
import {jsGraphics} from '../wz_jsgraphics';
import './app.css';

const App = () => {
    // refactor all of this to TryIt component
    useEffect(() => {
        const jg = new jsGraphics("myCanvas");
        jg.setColor("#00ff00"); // green (RIP Walter Zorn) 
        jg.fillEllipse(100, 40, 100, 100);
        jg.paint();

        jg.setColor("#ED87F5");
        jg.drawLine(10, 113, 220, 55);
        jg.drawLine(10, 200, 300, 70);
        jg.paint();

        const jg2 = new jsGraphics("myCanvas2");
        jg2.setColor("#FBEC2F");
        const x = [-110, -100, 250, 300, 222];
        const y = [-80, -10, 300, 12, 400];
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
                <TryIt/>
            </div>
            <div id="myCanvas2"></div>
        </div>
    )
};

export default App;