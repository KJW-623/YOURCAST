import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor19Hub() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel doors-open" style={{ gap: 20, padding: '28px 22px' }}>
                <div className="elev-display">
                    <span className="elev-range">19F</span>
                    <span className="elev-indicator" />
                </div>

                <div className="hub-grid">
                    <button className="hub-card" onClick={() => navigate('/manual/15f/19/resting')}>
                        <div className="hub-title">레스팅룸</div>
                        <div className="hub-sub">휴식 공간 / 저소음</div>
                    </button>
                </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/15f')}>← 이전 위치로 돌아가기</button>
            </div>
        </div>
    );
}
