import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor20Hub() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel doors-open" style={{ gap: 20, padding: '28px 22px' }}>
                <div className="elev-display">
                    <span className="elev-range">20F</span>
                    <span className="elev-indicator" />
                </div>

                <div className="hub-grid">
                    <button className="hub-card" onClick={() => navigate('/manual/15f/20/office')}>
                        <div className="hub-title">STARMAKER PRODUCTION 사무실</div>
                        <div className="hub-sub">문서 / 관리자</div>
                    </button>
                    <button className="hub-card" onClick={() => navigate('/manual/15f/20/reception')}>
                        <div className="hub-title">응접실</div>
                        <div className="hub-sub">상담 / 미팅</div>
                    </button>
                </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/15f')}>← 15~20F 패널</button>
                <button className="back-link" onClick={() => navigate('/manual')}>← 매뉴얼 메인</button>
            </div>
        </div>
    );
}
