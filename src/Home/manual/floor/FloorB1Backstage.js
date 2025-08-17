import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function FloorB1Backstage() {
    const navigate = useNavigate();

    return (
        <div className="elev-page">
            <div className="elev-panel">
                <div className="elev-display">
                    <span className="elev-range">B1</span>
                    <span className="elev-indicator" />
                    <span className="current-floor">Backstage</span>
                </div>

                <div className="manual-doc">
                    <h1 className="doc-title">백스테이지</h1>

                    <div className="doc-section">
                        <h2>상태</h2>
                        <p className="doc-p">분장 거울에 손자국이 남아 있다. 불을 끄면 더 선명해진다.</p>
                        <span className="doc-note">커튼은 바람이 없어도 흔들린다. 틈은 항상 일정하다.</span>
                    </div>

                    <div className="doc-section">
                        <h2>주의</h2>
                        <div className="doc-warning">
                            거울 앞에서 이름을 말하지 말 것. 반사가 늦게 따른다.
                        </div>
                    </div>

                    <div className="doc-section">
                        <h2>행동 지침</h2>
                        <ul>
                            <li>커튼 뒤 소리엔 응답하지 않는다.</li>
                            <li>거울 닦기 금지(문구 재등장 사례 다수).</li>
                        </ul>
                    </div>
                </div>
            </div>

            <button className="back-link" onClick={() => navigate('/manual/b1/b1')}>← 허브로</button>
        </div>
    );
}
