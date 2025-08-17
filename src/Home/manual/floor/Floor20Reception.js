import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor20Reception() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel">
                <div className="elev-display">
                    <span className="elev-range">20F</span>
                    <span className="elev-indicator" />
                    <span className="current-floor">Reception Room</span>
                </div>

                <div className="manual-doc">
                    <h1 className="doc-title">응접실</h1>
                    <div className="doc-section">
                        <h2>상태</h2>
                        <p className="doc-p">의자 하나가 언제나 테이블에서 살짝 뒤로 빠져 있습니다.</p>
                        <span className="doc-note">문틈으로 대화가 새어 나오지만 녹음엔 잡히지 않습니다.</span>
                    </div>
                    <div className="doc-section">
                        <h2>주의</h2>
                        <div className="doc-warning">빈자리와 눈을 마주치지 말 것.</div>
                    </div>
                    <div className="doc-section">
                        <h2>행동 지침</h2>
                        <ul>
                            <li>대화 요약은 음성 대신 필기.</li>
                            <li>퇴실 시 의자 간격을 맞추고 나가기.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <button className="back-link" onClick={() => navigate('/manual/15f/20')}>← 허브로</button>
        </div>
    );
}
