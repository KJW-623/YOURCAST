import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function FloorB1Hub() {
    const navigate = useNavigate();

    return (
        <div className="elev-page">
            <div className="elev-panel doors-open" style={{ gap: 20, padding: '28px 22px' }}>
                <div className="elev-display">
                    <span className="elev-range">B1</span>
                    <span className="elev-indicator" />
                </div>

                <div className="hub-grid">
                    <button className="hub-card" onClick={() => navigate('/manual/b1/b1/lobby')}>
                        <div className="hub-title">로비</div>
                        <div className="hub-sub">먼지 속 발자국 / 낮은 울림</div>
                    </button>

                    <button className="hub-card" onClick={() => navigate('/manual/b1/b1/livestage')}>
                        <div className="hub-title">라이브 스테이지</div>
                        <div className="hub-sub">무대 노이즈 / 피드백</div>
                    </button>

                    <button className="hub-card" onClick={() => navigate('/manual/b1/b1/backstage')}>
                        <div className="hub-title">백스테이지</div>
                        <div className="hub-sub">거울 잔상 / 커튼 틈</div>
                    </button>
                </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/b1')}>← 엘리베이터</button>
                <button className="back-link" onClick={() => navigate('/manual')}>← 매뉴얼 메인</button>
            </div>
        </div>
    );
}
