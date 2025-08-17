import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor12Garden() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel">
                <div className="elev-display">
                    <span className="elev-range">12F</span>
                    <span className="elev-indicator" />
                    <span className="current-floor">Sky Garden</span>
                </div>

                <div className="manual-doc">
                    <h1 className="doc-title">공중정원</h1>

                    <div className="doc-section">
                        <h2>상태</h2>
                        <p className="doc-p">분수대 물결이 바람과 반대로 움직인다.</p>
                        <span className="doc-note">유리 난간에 손바닥 잔상이 남는다.</span>
                    </div>

                    <div className="doc-section">
                        <h2>주의</h2>
                        <div className="doc-warning">정각에 들리는 합창에 응답하지 말 것.</div>
                    </div>

                    <div className="doc-section">
                        <h2>행동 지침</h2>
                        <ul>
                            <li>난간에 기대지 않기.</li>
                            <li>정각 ±1분 정지 후 이동.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <button className="back-link" onClick={() => navigate('/manual/9f/12')}>← 이전 위치로 돌아가기</button>
        </div>
    );
}
