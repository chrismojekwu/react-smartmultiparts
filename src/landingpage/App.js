import React from 'react';
import Header from './components/Header';
import TryIt from './components/TryIt';
import './app.css';

const App = () => {
    return (
        <div className="landing-page">
            <Header/>
            <TryIt/>
        </div>
    )
};

export default App;