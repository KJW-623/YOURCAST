import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor18Office() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel">
                <div className="elev-display">
                    <span className="elev-range">18F</span>
                    <span className="elev-indicator" />
                    <span className="current-floor">COSMIC PRODUCTION Office</span>
                </div>

                <div className="manual-doc">
                    <h1 className="doc-title">COSMIC PRODUCTION 사무실</h1>
                    <div className="doc-section">
                        <h2>상태</h2>
                        <p className="doc-p">메일 알림음이 동시에 울리지만 받은편지함엔 남지 않습니다.</p>
                        <span className="doc-note">벽시계 두 개가 서로 다른 시간을 가리킵니다.</span>
                    </div>
                    <div className="doc-section">
                        <h2>주의</h2>
                        <div className="doc-warning">닫힌 회의실에서 들리는 속삭임에 응답하지 말 것.</div>
                    </div>
                    <div className="doc-section">
                        <h2>행동 지침</h2>
                        <ul>
                            <li>중요 통신은 수기 기록 병행.</li>
                            <li>시계가 일치할 때만 결재 진행.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <button className="back-link" onClick={() => navigate('/manual/15f/18')}>← 허브로</button>
        </div>
    );
}
