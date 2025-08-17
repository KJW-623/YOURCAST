import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor10Cafeteria() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel">
                <div className="elev-display">
                    <span className="elev-range">10F</span>
                    <span className="elev-indicator" />
                    <span className="current-floor">Cafeteria</span>
                </div>
                <div className="manual-doc">
                    <h1 className="doc-title">사원식당</h1>
                    <div className="doc-section">
                        <h2>상태</h2>
                        <p className="doc-p">배식대에 놓인 식판 수가 조금씩 변한다.</p>
                        <span className="doc-note">메뉴판 날짜가 오늘로 고정.</span>
                    </div>
                    <div className="doc-section">
                        <h2>주의</h2>
                        <div className="doc-warning">빈 의자에 인사하지 말 것.</div>
                    </div>
                </div>
            </div>
            <button className="back-link" onClick={() => navigate('/manual/9f/10')}>← 허브로</button>
        </div>
    );
}
