import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './IntroMessage.css';

const IntroMessage = () => {
    const fullText = '당신을 기다리고 있었습니다...';
    const [displayedText, setDisplayedText] = useState('');
    const [noisyChar, setNoisyChar] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [started, setStarted] = useState(false);
    const [finished, setFinished] = useState(false); // 🔥 타이핑 완료 상태
    const audioRef = useRef(null);
    const navigate = useNavigate();

    // 클릭 → 타이핑 시작
    const handleStart = () => {
        setStarted(true);
    };

    // 타이핑 로직
    useEffect(() => {
        if (!started || currentIndex >= fullText.length) return;

        const noiseSet = ['#', '@', '%', '▒', 'ㅁ', '†', '*', 'δ', '¤', '▓', 'Ξ'];

        const noiseTimeout = setTimeout(() => {
            const randomChar = noiseSet[Math.floor(Math.random() * noiseSet.length)];
            setNoisyChar(randomChar);
        }, 100);

        const charTimeout = setTimeout(() => {
            setDisplayedText(prev => prev + fullText[currentIndex]);
            setCurrentIndex(prev => prev + 1);
            setNoisyChar('');

            if (audioRef.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.play().catch(() => { });
            }

            // 🔥 모든 글자 타이핑 완료 후
            if (currentIndex + 1 === fullText.length) {
                setFinished(true);
            }
        }, 300);

        return () => {
            clearTimeout(noiseTimeout);
            clearTimeout(charTimeout);
        };
    }, [currentIndex, started]);

    // 🔥 타이핑 완료 후 3초 뒤에 /home 이동
    useEffect(() => {
        if (finished) {
            const delay = setTimeout(() => {
                navigate('/home');
            }, 3000);

            return () => clearTimeout(delay);
        }
    }, [finished, navigate]);

    return (
        <div className="glitch-background" onClick={!started ? handleStart : undefined}>
            <audio
                ref={audioRef}
                src="https://freesound.org/data/previews/170/170145_2398400-lq.mp3"
                preload="auto"
            />
            {!started ? (
                <div className="start-overlay">
                    <p className="start-text">화면을 터치해서 시작하세요</p>
                </div>
            ) : (
                <h1 className="creepy-text typing-text">
                    {displayedText}
                    <span className="noise-char">{noisyChar}</span>
                </h1>
            )}
        </div>
    );
};

export default IntroMessage;
