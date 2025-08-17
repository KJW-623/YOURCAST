import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor5Hub() {
    const navigate = useNavigate();

    return (
        <div className="elev-page">
            <div className="elev-panel doors-open" style={{ gap: 20, padding: '28px 22px' }}>
                <div className="elev-display">
                    <span className="elev-range">5F</span>
                    <span className="elev-indicator" />
                </div>

                <div className="hub-grid">
                    <button className="hub-card" onClick={() => navigate('/manual/1f/5/learn')}>
                        <div className="hub-title">배움터</div>
                        <div className="hub-sub">의도적 단련 / 자격 확인</div>
                    </button>

                    <button className="hub-card" onClick={() => navigate('/manual/1f/5/library')}>
                        <div className="hub-title">대도구실도서관</div>
                        <div className="hub-sub">변이된 도서관 / 인지 왜곡</div>
                    </button>
                </div>
            </div>

            <button className="back-link" onClick={() => navigate('/manual/1f')}>
                ← 이전 위치로 돌아가기
            </button>
        </div>
    );
}
