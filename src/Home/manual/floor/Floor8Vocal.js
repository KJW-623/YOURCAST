import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor8Vocal() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel" style={{ padding: '32px 24px' }}>
                <div className="elev-display">
                    <span className="elev-range">8F · 보컬룸</span><span className="elev-indicator" />
                </div>
                <article className="manual-doc">
                    <h1 className="doc-title">보컬룸</h1>
                    <ul>
                        <li>마이크 게인이 <b>자체 상승</b>하면 케이블 교체 후도 지속 시 사용 중단.</li>
                        <li>팝필터에 <b>미세한 속삭임</b>이 남으면 창문을 열지 말고 전원 먼저 차단.</li>
                    </ul>
                </article>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/6f/8')}>← 이전 위치로 돌아가기</button>
            </div>
        </div>
    );
}
