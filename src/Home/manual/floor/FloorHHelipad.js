import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function FloorHHelipad() {
    const navigate = useNavigate();

    return (
        <div className="elev-page">
            <div className="elev-panel">
                <div className="elev-display">
                    <span className="elev-range">H</span>
                    <span className="elev-indicator" />
                    <span className="current-floor">Helipad</span>
                </div>

                <div className="manual-doc">
                    <h1 className="doc-title">헬리포트</h1>

                    <div className="doc-section">
                        <h2>상태</h2>
                        <p className="doc-p">경계등이 간헐적으로 점멸. 바람이 없는 날에도 소용돌이.</p>
                        <span className="doc-note">‘H’ 중앙 원 내에 오래 머물지 말 것.</span>
                    </div>

                    <div className="doc-section">
                        <h2>주의</h2>
                        <div className="doc-warning">강풍 시 추락 위험. 난간 바깥 접근 금지.</div>
                    </div>

                    <div className="doc-section">
                        <h2>행동 지침</h2>
                        <ul>
                            <li>야간엔 두 명 이상 동행.</li>
                            <li>경계등 점멸 패턴이 변하면 즉시 철수.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <button className="back-link" onClick={() => navigate('/manual/h/h')}>← 허브로</button>
        </div>
    );
}
