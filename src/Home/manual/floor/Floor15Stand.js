import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor15Stand() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel">
                <div className="elev-display">
                    <span className="elev-range">15F</span>
                    <span className="elev-indicator" />
                    <span className="current-floor">Stand Front</span>
                </div>

                <div className="manual-doc">
                    <h1 className="doc-title">스탠드 앞</h1>
                    <div className="doc-section">
                        <h2>상태</h2>
                        <p className="doc-p">조명 스탠드의 각도가 움직이지 않아도 그림자가 이동합니다.</p>
                        <span className="doc-note">스위치를 끄면 3초 뒤에 한 번 더 꺼지는 소리.</span>
                    </div>
                    <div className="doc-section">
                        <h2>주의</h2>
                        <div className="doc-warning">스탠드와 거울 사이 정중앙에 서지 말 것.</div>
                    </div>
                    <div className="doc-section">
                        <h2>행동 지침</h2>
                        <ul>
                            <li>조명 테스트는 8카운트 이내.</li>
                            <li>그림자와 발 위치가 어긋나면 즉시 중단.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <button className="back-link" onClick={() => navigate('/manual/15f/15')}>← 허브로</button>
        </div>
    );
}
