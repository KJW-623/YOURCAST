import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor12Office() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel">
                <div className="elev-display">
                    <span className="elev-range">12F</span>
                    <span className="elev-indicator" />
                    <span className="current-floor">Rhythm Link Office</span>
                </div>

                <div className="manual-doc">
                    <h1 className="doc-title">Rhythm Link 사무실</h1>

                    <div className="doc-section">
                        <h2>상태</h2>
                        <p className="doc-p">전화기가 동시에 울렸다가 기록이 남지 않는다.</p>
                        <span className="doc-note">문서철의 날짜가 하루씩 앞서간다.</span>
                    </div>

                    <div className="doc-section">
                        <h2>주의</h2>
                        <div className="doc-warning">폐쇄된 회의실에 단독 진입 금지(반향 지연).</div>
                    </div>

                    <div className="doc-section">
                        <h2>행동 지침</h2>
                        <ul>
                            <li>문서 이동 시 라벨 이중 표기.</li>
                            <li>수신 기록은 필기와 사진을 병행.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <button className="back-link" onClick={() => navigate('/manual/9f/12')}>← 허브로</button>
        </div>
    );
}
