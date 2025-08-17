import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor7Clinic() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel" style={{ padding: '32px 24px' }}>
                <div className="elev-display">
                    <span className="elev-range">7F · 의무실 지침서</span>
                    <span className="elev-indicator" />
                </div>

                <article className="manual-doc">
                    <h1 className="doc-title">의무실</h1>
                    <p className="doc-p">침상 주변 저주파 소음과 혈압계 바늘의 미세 진동이 보고됩니다.</p>

                    <section className="doc-section">
                        <h2>1. 이용</h2>
                        <ul>
                            <li>비상 호출(●)은 실제 응답과 동일한 음색을 <b>모사</b>할 수 있음. 시각 신호로 교차 확인.</li>
                            <li>의약품 보관함은 <b>두 명 이상</b> 동행 개봉.</li>
                        </ul>
                    </section>

                    <section className="doc-section">
                        <h2>2. 경고</h2>
                        <ul>
                            <li className="doc-warning">무인 상태의 청진기에서 호흡음이 들릴 경우 접근 금지.</li>
                            <li>침상 시트에 <b>늘어난 주름</b>이 새로 생기면 즉시 퇴실.</li>
                        </ul>
                    </section>
                </article>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/6f/7')}>← 이전 위치로 돌아가기</button>
            </div>
        </div>
    );
}
