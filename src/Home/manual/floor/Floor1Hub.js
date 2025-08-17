import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor1Hub() {
    const navigate = useNavigate();

    return (
        <div className="elev-page">
            <div className="elev-panel doors-open" style={{ gap: 20, padding: '28px 22px' }}>
                <div className="elev-display">
                    <span className="elev-range">1F</span>
                    <span className="elev-indicator" />
                </div>

                <div className="hub-grid">
                    <button className="hub-card" onClick={() => navigate('/manual/1f/1/lobby')}>
                        <div className="hub-title">로비</div>
                        <div className="hub-sub">방문자 확인 / 출입 절차</div>
                    </button>

                    <button className="hub-card" onClick={() => navigate('/manual/1f/1/cafe')}>
                        <div className="hub-title">카페 시나몬</div>
                        <div className="hub-sub">저음의 속삭임 / 잔향</div>
                    </button>
                </div>
            </div>

            <button className="back-link" onClick={() => navigate('/manual/1f')}>
                ← 1~5F 패널로
            </button>
        </div>
    );
}
