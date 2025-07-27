import React from 'react';
import './LogoIntro.css';

const LogoIntro = ({ fadingOut }) => {
    return (
        <div className={`intro-container ${fadingOut ? 'fade-out' : ''}`}>
            <img src="/yourcastLogo.png" alt="Logo" className="intro-logo" />
        </div>
    );
};

export default LogoIntro;
