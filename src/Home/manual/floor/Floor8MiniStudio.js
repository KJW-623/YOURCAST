import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor8MiniStudio() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel" style={{ padding: '32px 24px' }}>
                <div className="elev-display">
                    <span className="elev-range">8F · 간이 스튜디오</span><span className="elev-indicator" />
                </div>
                <article className="manual-doc">
                    <h1 className="doc-title">간이 스튜디오</h1>
                    <ul>
                        <li>임시 케이블은 <b>색 테이프</b>로 표기. 표기 없는 케이블 사용 금지.</li>
                        <li>삼각대 그림자가 <b>이중</b>으로 겹치면 조명 스위치 고장 — 접근 금지.</li>
                    </ul>
                </article>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/6f/8')}>← 8F 허브</button>
                <button className="back-link" onClick={() => navigate('/manual/6f')}>← 6~8F 패널</button>
            </div>
        </div>
    );
}
