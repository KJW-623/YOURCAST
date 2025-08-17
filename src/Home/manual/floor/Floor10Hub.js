import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor10Hub() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel doors-open" style={{ gap: 20, padding: '28px 22px' }}>
                <div className="elev-display">
                    <span className="elev-range">10F</span>
                    <span className="elev-indicator" />
                </div>
                <div className="hub-grid">
                    <button className="hub-card" onClick={() => navigate('/manual/9f/10/meeting')}>
                        <div className="hub-title">미팅룸</div>
                        <div className="hub-sub">화이트보드 / 메모 변조</div>
                    </button>
                    <button className="hub-card" onClick={() => navigate('/manual/9f/10/cafeteria')}>
                        <div className="hub-title">사원식당</div>
                        <div className="hub-sub">식판 잔향 / 낮은 웅성</div>
                    </button>
                </div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/9f')}>← 이전 위치로 돌아가기</button>
            </div>
        </div>
    );
}
