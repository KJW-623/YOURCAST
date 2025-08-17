import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor19Resting() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel">
                <div className="elev-display">
                    <span className="elev-range">19F</span>
                    <span className="elev-indicator" />
                    <span className="current-floor">Resting Room</span>
                </div>

                <div className="manual-doc">
                    <h1 className="doc-title">레스팅룸</h1>
                    <div className="doc-section">
                        <h2>상태</h2>
                        <p className="doc-p">누워 있다가 눈을 감으면, 뒤쪽 소파에 누군가가 더 앉아있는 느낌.</p>
                        <span className="doc-note">스탠드 조명은 꺼도 미약한 잔광이 남습니다.</span>
                    </div>
                    <div className="doc-section">
                        <h2>주의</h2>
                        <div className="doc-warning">이어폰을 낀 채 잠들지 말 것(호흡 동조 현상).</div>
                    </div>
                    <div className="doc-section">
                        <h2>행동 지침</h2>
                        <ul>
                            <li>휴식 타이머 20분 제한.</li>
                            <li>전등은 두 사람이 동시에 끄기.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <button className="back-link" onClick={() => navigate('/manual/15f/19')}>← 허브로</button>
        </div>
    );
}
