import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor20Office() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel">
                <div className="elev-display">
                    <span className="elev-range">20F</span>
                    <span className="elev-indicator" />
                    <span className="current-floor">STARMAKER PRODUCTION Office</span>
                </div>

                <div className="manual-doc">
                    <h1 className="doc-title">STARMAKER PRODUCTION 사무실</h1>
                    <div className="doc-section">
                        <h2>상태</h2>
                        <p className="doc-p">응접 후에도 회의실 컵 수가 줄지 않습니다.</p>
                        <span className="doc-note">카펫 위 발자국이 회의 종료 후에도 남아있습니다.</span>
                    </div>
                    <div className="doc-section">
                        <h2>주의</h2>
                        <div className="doc-warning">이름을 세 번 이상 부르지 말 것(반향 동조).</div>
                    </div>
                    <div className="doc-section">
                        <h2>행동 지침</h2>
                        <ul>
                            <li>응접 기록은 대화 직후 작성.</li>
                            <li>빈 컵은 카운터에 두지 않기.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <button className="back-link" onClick={() => navigate('/manual/15f/20')}>← 허브로</button>
        </div>
    );
}
