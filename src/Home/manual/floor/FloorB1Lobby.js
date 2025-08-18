import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function FloorB1Lobby() {
    const navigate = useNavigate();

    return (
        <div className="elev-page">
            <div className="elev-panel">
                <div className="elev-display">
                    <span className="elev-range">B1</span>
                    <span className="elev-indicator" />
                    <span className="current-floor">Lobby</span>
                </div>

                <div className="manual-doc">
                    <h1 className="doc-title">지하 로비</h1>

                    <div className="doc-section">
                        <h2>상태</h2>
                        <p className="doc-p">
                            불안한 기척은 사라지고, 은은한 정적만이 가득합니다.
                            이곳에서는 잠시 호흡을 고르며 안정을 되찾을 수 있습니다.
                        </p>
                        <span className="doc-note">
                            접수대 위에 희미한 글씨: “여긴 괜찮아. 잠시 머물러도 돼.”
                        </span>
                    </div>

                    <div className="doc-section">
                        <h2>안내</h2>
                        <div className="doc-warning">
                            주변은 희미하게 조명이 깜빡이지만, 위협적인 흔적은 감지되지 않습니다.
                            낯선 발소리도, 쫓아오는 그림자도 이 공간엔 없습니다.
                        </div>
                    </div>

                    <div className="doc-section">
                        <h2>행동 지침</h2>
                        <ul>
                            <li>잠시 멈추어 호흡을 가다듬으십시오.</li>
                            <li>同行者(동행자)가 있다면, 조용히 대화를 나눠도 안전합니다.</li>
                            <li>충분히 안정되었다면, 다음 층으로 이동을 준비하십시오.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <button className="back-link" onClick={() => navigate('/manual/b1/b1')}>
                ← 이전 위치로 돌아가기
            </button>
        </div>
    );
}
