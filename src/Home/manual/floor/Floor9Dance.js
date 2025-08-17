import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor9Dance() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel">
                <div className="elev-display">
                    <span className="elev-range">9F</span>
                    <span className="elev-indicator" />
                    <span className="current-floor">Dance Room</span>
                </div>

                <div className="manual-doc">
                    <h1 className="doc-title">댄스룸</h1>

                    <div className="doc-section">
                        <h2>상태</h2>
                        <p className="doc-p">메트로놈이 멈춘 뒤에도 누군가 박자를 밟는다.</p>
                        <span className="doc-note">거울 속 인원수가 실제보다 많아짐.</span>
                    </div>

                    <div className="doc-section">
                        <h2>주의</h2>
                        <div className="doc-warning">3번 이상 같은 동작 반복 금지(패턴 고정 현상).</div>
                    </div>

                    <div className="doc-section">
                        <h2>행동 지침</h2>
                        <ul>
                            <li>거울을 등지고 동작 점검.</li>
                            <li>음악이 멈춰도 카운트를 끝까지.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <button className="back-link" onClick={() => navigate('/manual/9f/9')}>← 이전 위치로 돌아가기</button>
        </div>
    );
}
