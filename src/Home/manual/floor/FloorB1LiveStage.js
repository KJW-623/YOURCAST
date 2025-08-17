import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function FloorB1LiveStage() {
    const navigate = useNavigate();

    return (
        <div className="elev-page">
            <div className="elev-panel">
                <div className="elev-display">
                    <span className="elev-range">B1</span>
                    <span className="elev-indicator" />
                    <span className="current-floor">Live Stage</span>
                </div>

                <div className="manual-doc">
                    <h1 className="doc-title">라이브 스테이지</h1>

                    <div className="doc-section">
                        <h2>상태</h2>
                        <p className="doc-p">마이크에 손을 대면 피드백이 울린다. 연결된 장비는 없다.</p>
                        <span className="doc-note">바닥의 셋리스트: 앵콜곡만 붉게 번져 식별 불가.</span>
                    </div>

                    <div className="doc-section">
                        <h2>주의</h2>
                        <div className="doc-warning">
                            무대 중앙 원형 표시를 밟지 말 것. 밟는 순간, 소리가 멎는다.
                        </div>
                    </div>

                    <div className="doc-section">
                        <h2>행동 지침</h2>
                        <ul>
                            <li>스피커에서 50cm 이상 거리 유지.</li>
                            <li>무대 뒤편 문은 닫힌 채 유지.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <button className="back-link" onClick={() => navigate('/manual/b1/b1')}>← 이전 위치로 돌아가기</button>
        </div>
    );
}
