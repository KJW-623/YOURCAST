import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor6Hub() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel doors-open" style={{ gap: 20, padding: '28px 22px' }}>
                <div className="elev-display">
                    <span className="elev-range">6F</span>
                    <span className="elev-indicator" />
                </div>

                <div className="hub-grid">
                    <button className="hub-card" onClick={() => navigate('/manual/6f/6/wardrobe')}>
                        <div className="hub-title">의상룸</div>
                        <div className="hub-sub">사이즈 표 식별 / 거울 반응</div>
                    </button>
                </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/6f')}>← 이전 위치로 돌아가기</button>
            </div>
        </div>
    );
}
