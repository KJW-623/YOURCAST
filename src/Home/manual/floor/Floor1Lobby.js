import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor1Lobby() {
    const navigate = useNavigate();

    return (
        <div className="elev-page">
            <div className="elev-panel" style={{ padding: '32px 24px' }}>
                <div className="elev-display">
                    <span className="elev-range">1F · 로비 지침서</span>
                    <span className="elev-indicator" />
                </div>

                <article className="manual-doc">
                    <h1 className="doc-title">로비</h1>
                    <p className="doc-p">
                        본 구역은 방문자 확인과 출입 절차가 진행되는 장소입니다. 간헐적으로 조도가 흔들리거나,
                        벽면의 표시등이 규칙성 없이 깜빡일 수 있습니다.
                    </p>

                    <section className="doc-section">
                        <h2>1. 출입 절차</h2>
                        <ul>
                            <li>출입카드 인식 불가 시, 측면의 호출벨(●)을 눌러 관리자 호출.</li>
                            <li>신원 확인 중에는 정면 카메라를凝시하지 마십시오. 잔상 보고가 있습니다.</li>
                        </ul>
                    </section>

                    <section className="doc-section">
                        <h2>2. 이상 징후</h2>
                        <ul>
                            <li>소음, 급격한 온도 변화, 붉은 점멸등 감지 시 즉시 후퇴.</li>
                            <li className="doc-warning">엘리베이터 문틈의 속삭임은 안내 방송이 아닙니다. 접근 금지.</li>
                        </ul>
                    </section>
                </article>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/1f/1')}>← 1F 허브</button>
                <button className="back-link" onClick={() => navigate('/manual/1f')}>← 1~5F 패널</button>
            </div>
        </div>
    );
}
