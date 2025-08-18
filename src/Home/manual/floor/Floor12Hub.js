import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor12Hub() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel doors-open" style={{ gap: 20, padding: '28px 22px' }}>
                <div className="elev-display">
                    <span className="elev-range">12F</span>
                    <span className="elev-indicator" />
                </div>

                <div className="hub-grid">
                    <button className="hub-card" onClick={() => navigate('/manual/9f/12/office')}>
                        <div className="hub-title">Rhythm Link</div>
                        <div className="hub-sub">제안 여부</div>
                    </button>

                    <button className="hub-card" onClick={() => navigate('/manual/9f/12/garden')}>
                        <div className="hub-title">공중정원</div>
                        <div className="hub-sub">특수 식물</div>
                    </button>
                </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/9f')}>← 이전 위치로 돌아가기</button>
            </div>
        </div>
    );
}
