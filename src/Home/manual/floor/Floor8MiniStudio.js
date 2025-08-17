import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor8MiniStudio() {
    const navigate = useNavigate();
    return (
        <div className="elev-page restricted-page">
            <div className="elev-panel" style={{ padding: '32px 24px' }}>
                <div className="elev-display">
                    <span className="elev-range">8F · 간이 스튜디오</span>
                    <span className="elev-indicator" />
                </div>
                <article className="manual-doc">
                    <p className="restricted-message">
                        이 구역의 정보는 현재 공개되지 않습니다.
                    </p>
                </article>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/6f/8')}>
                    ← 이전 위치로 돌아가기
                </button>
            </div>
        </div>
    );
}
