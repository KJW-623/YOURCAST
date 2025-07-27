import React, { useState, useEffect } from 'react';
import LogoIntro from './LogoIntro';
import App from '../App';

const IntroPage = () => {
    const [showApp, setShowApp] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowApp(true);
        }, 3000); // 3초 후 App으로 전환
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showApp ? <App /> : <LogoIntro />}
        </>
    );
};

export default IntroPage;
