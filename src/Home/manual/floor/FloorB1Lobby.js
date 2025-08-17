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
                        <p className="doc-p">복도 끝에서 들려오는 일정한 발소리. 멈추면, 같이 멈춘다.</p>
                        <span className="doc-note">접수대 표면엔 손가락으로 긁은 흔적: “올라가지 마…”</span>
                    </div>

                    <div className="doc-section">
                        <h2>주의</h2>
                        <div className="doc-warning">
                            출입문 오른쪽 문틀에 녹슨 못 protrusion 존재. 밤에 더 잘 걸린다.
                        </div>
                    </div>

                    <div className="doc-section">
                        <h2>행동 지침</h2>
                        <ul>
                            <li>조명 깜빡임 시, 10초간 정지 후 이동.</li>
                            <li>한 번 들은 이름을 되풀이하지 않는다.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <button className="back-link" onClick={() => navigate('/manual/b1/b1')}>← 허브로</button>
        </div>
    );
}
