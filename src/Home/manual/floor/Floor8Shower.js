import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor8Shower() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel" style={{ padding: '32px 24px' }}>
                <div className="elev-display">
                    <span className="elev-range">8F · 샤워실</span><span className="elev-indicator" />
                </div>
                <article className="manual-doc">
                    <h1 className="doc-title">샤워실</h1>
                    <ul>
                        <li>증기 농도가 <b>갑자기 낮아지면</b> 배수구 막힘 여부 확인, 소리 발생 시 즉시 퇴장.</li>
                        <li>거울 김서림에 <b>글자</b>가 나타나면 벽면 터치 금지.</li>
                    </ul>
                </article>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/6f/8')}>← 이전 위치로 돌아가기</button>
            </div>
        </div>
    );
}
