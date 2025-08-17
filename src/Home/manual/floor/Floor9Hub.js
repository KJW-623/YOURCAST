import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor9Hub() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel doors-open" style={{ gap: 20, padding: '28px 22px' }}>
                <div className="elev-display">
                    <span className="elev-range">9F</span>
                    <span className="elev-indicator" />
                </div>

                <div className="hub-grid">
                    <button className="hub-card" onClick={() => navigate('/manual/9f/9/dance')}>
                        <div className="hub-title">댄스룸</div>
                        <div className="hub-sub">거울 잔상 / 박자 어긋남</div>
                    </button>
                </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/9f')}>← 이전 위치로 돌아가기</button>
            </div>
        </div>
    );
}
