import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor8Band() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel" style={{ padding: '32px 24px' }}>
                <div className="elev-display">
                    <span className="elev-range">8F · 연주 스튜디오</span><span className="elev-indicator" />
                </div>
                <article className="manual-doc">
                    <h1 className="doc-title">연주 스튜디오</h1>
                    <ul>
                        <li>튜너가 <b>440Hz를 벗어나 고정</b>되면 기기 전환.</li>
                        <li>무인 드럼 패드가 <b>규칙적 반응</b>하면 룸 전원 전체 차단.</li>
                    </ul>
                </article>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/6f/8')}>← 이전 위치로 돌아가기</button>
            </div>
        </div>
    );
}
