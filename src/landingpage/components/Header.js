import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="landing-header">
            <a href="https://chrismojekwu.github.io/react-smartmultiparts/" className="header-anchor">
                 <h1 className="landing-title-header">react-<span className="multiparts">smart<span className="hover-color">multiparts</span></span></h1>
            </a>
        </div>
    )
};

export default Header;