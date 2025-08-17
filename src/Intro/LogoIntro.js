import React from 'react';
import './LogoIntro.css';

const LogoIntro = ({ fadingOut }) => {
    return (
        <div className={`intro-container ${fadingOut ? 'fade-out' : ''}`}>
            <img src="${process.env.PUBLIC_URL}/yourcastLogo.png" alt="Logo" className="intro-logo" />
        </div>
    );
};

export default LogoIntro;
