import React, { useEffect, useRef } from 'react';
import './ErrorPage.css';

const ErrorPage = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().catch(() => { });
        }
    }, []);

    return (
        <div className="error-container">
            <div className="glitch-bg" />
            <img src="/images/eye-shadow.png" alt="눈 그림자" className="ghost-eyes" />

            <h1 className="error-title">여긴 네가 올 곳이 아니야.</h1>
            <p className="error-sub">돌아가지 않으면... 무언가가 널 알아챌 거야.</p>

            <audio
                ref={audioRef}
                src="https://freesound.org/data/previews/456/456491_5121236-lq.mp3"
                preload="auto"
            />
        </div>
    );
};

export default ErrorPage;
