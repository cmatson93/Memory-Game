import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="title">Memory Game</div>
            <div className="text">Click on an image. Once you click on an image don't click it again.</div>
            <div className="text">Each click is worth a divoint. Highest score wins!</div>
        </div>  
    )
};

export default Header;