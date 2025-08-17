import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor6Wardrobe() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel" style={{ padding: '32px 24px' }}>
                <div className="elev-display">
                    <span className="elev-range">6F · 의상룸 지침서</span>
                    <span className="elev-indicator" />
                </div>

                <article className="manual-doc">
                    <h1 className="doc-title">의상룸</h1>
                    <p className="doc-p">사이즈 표와 거울이 보고된 것과 다르게 보일 수 있습니다.</p>

                    <section className="doc-section">
                        <h2>1. 접근</h2>
                        <ul>
                            <li>거울 앞에서 장시간 정면凝視 금지. 반사체가 <b>한 템포 늦게</b> 움직일 수 있음.</li>
                            <li>사이즈 태그가 <b>자꾸 바뀌면</b> 해당 의상 사용 금지.</li>
                        </ul>
                    </section>

                    <section className="doc-section">
                        <h2>2. 사용 수칙</h2>
                        <ul>
                            <li>탈의실 커튼이 스스로 흔들리면 즉시 퇴장.</li>
                            <li>마네킹은 이동하지 않습니다. <b>자세가 바뀌었다면</b> 근처 체류 금지.</li>
                        </ul>
                    </section>
                </article>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/6f/6')}>← 6F 허브</button>
                <button className="back-link" onClick={() => navigate('/manual/6f')}>← 6~8F 패널</button>
            </div>
        </div>
    );
}
