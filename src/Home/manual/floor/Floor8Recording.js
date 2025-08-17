import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor8Recording() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel" style={{ padding: '32px 24px' }}>
                <div className="elev-display">
                    <span className="elev-range">8F · 녹화부스</span><span className="elev-indicator" />
                </div>
                <article className="manual-doc">
                    <h1 className="doc-title">녹화부스</h1>
                    <ul>
                        <li>부스 착석 전, <b>적색 신호등</b> 점등 여부 확인.</li>
                        <li>무인 상태에서 <b>녹화 카운트</b>가 시작되면 즉시 퇴장.</li>
                        <li>모니터 프리뷰의 시간코드가 <b>역행</b>하면 전원 차단 후 신고.</li>
                    </ul>
                </article>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/6f/8')}>← 8F 허브</button>
                <button className="back-link" onClick={() => navigate('/manual/6f')}>← 6~8F 패널</button>
            </div>
        </div>
    );
}
