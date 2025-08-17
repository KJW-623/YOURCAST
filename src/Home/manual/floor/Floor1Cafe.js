import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor1Cafe() {
    const navigate = useNavigate();

    return (
        <div className="elev-page">
            <div className="elev-panel" style={{ padding: '32px 24px' }}>
                <div className="elev-display">
                    <span className="elev-range">1F · 카페 시나몬 지침서</span>
                    <span className="elev-indicator" />
                </div>

                <article className="manual-doc">
                    <h1 className="doc-title">카페 시나몬</h1>
                    <p className="doc-p">
                        낮에는 평온하나, 폐점 직전부터 커피 향과 맞지 않는 <b>금속성 잔향</b>이 보고됩니다.
                        간헐적으로 계산대 주변에서 저주파 대역의 <b>속삭임</b>이 감지됩니다.
                    </p>

                    <section className="doc-section">
                        <h2>1. 이용 수칙</h2>
                        <ul>
                            <li>폐점 30분 전 이후 착석 금지. 테이블 하부 그림자 이동 보고.</li>
                            <li>화재 경보 오작동 발생 시, <b>주방 쪽으로 이동하지 말 것</b>.</li>
                            <li className="doc-warning">메뉴판의 특정 항목이 스스로 추가/삭제되는 경우가 있습니다. 주문 금지.</li>
                        </ul>
                    </section>

                    <section className="doc-section">
                        <h2>2. 비상 대응</h2>
                        <ul>
                            <li>잔향이 강해지면 즉시 퇴장, 로비 경유 후 보안요원 호출.</li>
                            <li>커피 표면에 <b>동심원</b> 파형이 반복되면 진동원 추적 중지 — 주변 대화 중단.</li>
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
