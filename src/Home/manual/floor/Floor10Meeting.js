import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor10Meeting() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel">
                <div className="elev-display">
                    <span className="elev-range">10F</span>
                    <span className="elev-indicator" />
                    <span className="current-floor">Meeting Room</span>
                </div>
                <div className="manual-doc">
                    <h1 className="doc-title">미팅룸</h1>
                    <div className="doc-section">
                        <h2>상태</h2>
                        <p className="doc-p">화이트보드 글씨가 회의 안건과 다르게 바뀐다.</p>
                        <span className="doc-note">스피커폰에 알 수 없는 참가자 표시.</span>
                    </div>
                    <div className="doc-section">
                        <h2>주의</h2>
                        <div className="doc-warning">끝나지 않은 회의 초대 수락 금지.</div>
                    </div>
                </div>
            </div>
            <button className="back-link" onClick={() => navigate('/manual/9f/10')}>← 이전 위치로 돌아가기</button>
        </div>
    );
}
