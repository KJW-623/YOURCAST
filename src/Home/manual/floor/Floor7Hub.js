import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor7Hub() {
    const navigate = useNavigate();

    return (
        <div className="elev-page">
            <div className="elev-panel doors-open" style={{ gap: 20, padding: '28px 22px' }}>
                <div className="elev-display">
                    <span className="elev-range">7F</span>
                    <span className="elev-indicator" />
                </div>

                <div className="hub-grid">
                    <button className="hub-card" onClick={() => navigate('/manual/6f/7/office')}>
                        <div className="hub-title">NEW DIMENSION</div>
                        <div className="hub-sub">시청 주의</div>
                    </button>

                    <button className="hub-card" onClick={() => navigate('/manual/6f/7/clinic')}>
                        <div className="hub-title">의무실</div>
                        <div className="hub-sub">응급 처치 / 이상 반응 관찰</div>
                    </button>
                </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/6f')}>← 이전 위치로 돌아가기</button>
            </div>
        </div>
    );
}
