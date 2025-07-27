import React, { useState, useEffect } from 'react';
import LogoIntro from './LogoIntro';
import IntroMessage from './IntroMessage';

const IntroRoute = () => {
    const [stage, setStage] = useState('logo');

    useEffect(() => {
        const fadeDelay = setTimeout(() => setStage('fade'), 3500); // 4.5초 동안 로고 유지
        const switchDelay = setTimeout(() => setStage('message'), 5500); // 그 후 메시지로 전환

        return () => {
            clearTimeout(fadeDelay);
            clearTimeout(switchDelay);
        };
    }, []);

    if (stage === 'message') return <IntroMessage />;
    return <LogoIntro fadingOut={stage === 'fade'} />;
};

export default IntroRoute;
