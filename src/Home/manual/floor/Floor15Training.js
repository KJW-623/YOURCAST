import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor15Training() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel">
                <div className="elev-display">
                    <span className="elev-range">15F</span>
                    <span className="elev-indicator" />
                    <span className="current-floor">Training Room</span>
                </div>

                <div className="manual-doc">
                    <h1 className="doc-title">트레이닝 룸</h1>
                    <div className="doc-section">
                        <h2>상태</h2>
                        <p className="doc-p">스탠드 불빛이 박자와 어긋나 깜빡입니다.</p>
                        <span className="doc-note">거울 카운트가 실제보다 1박 빨라요.</span>
                    </div>
                    <div className="doc-section">
                        <h2>주의</h2>
                        <div className="doc-warning">동일 동작 4회 이상 반복 금지(패턴 고정).</div>
                    </div>
                    <div className="doc-section">
                        <h2>행동 지침</h2>
                        <ul>
                            <li>박자 체크는 소리보다 그림자 길이로.</li>
                            <li>거울 정면 응시는 10초 이내.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <button className="back-link" onClick={() => navigate('/manual/15f/15')}>← 허브로</button>
        </div>
    );
}
