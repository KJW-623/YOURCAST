import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
    const audioRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().catch(() => { });
        }
    }, []);

    const goBackOrMain = () => {
        if (window.history.length > 1) navigate(-1);
        else navigate('/profileMain');
    };

    return (
        <div className="error-container">
            <div className="glitch-bg" />
            {/* GH Pages 서브경로 대응 */}
            <img
                src={`${process.env.PUBLIC_URL}/images/eye-shadow.png`}
                alt="눈 그림자"
                className="ghost-eyes"
            />

            <h1 className="error-title">여긴 네가 올 곳이 아니야.</h1>
            <p className="error-sub">돌아가지 않으면... 무언가가 널 알아챌 거야.</p>

            <p className="error-hint" aria-live="off">
                시계가 73분 10초에 멈추는 순간...
            </p>
            {/* ── 엘리베이터식 이전 위치 버튼 ── */}
            <div className="elev-home-wrap" aria-hidden="false">
                <button
                    className="elev-home-btn"
                    onClick={goBackOrMain}
                    aria-label="이전 위치로 돌아가기"
                >
                    <span className="elev-dot" aria-hidden="true"></span>
                    <span className="elev-label">이전 위치로 돌아가기</span>
                </button>
            </div>

            <audio
                ref={audioRef}
                src="https://freesound.org/data/previews/456/456491_5121236-lq.mp3"
                preload="auto"
            />
        </div>
    );
};

export default ErrorPage;
