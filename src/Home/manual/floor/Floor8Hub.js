import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor8Hub() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel doors-open" style={{ gap: 20, padding: '28px 22px' }}>
                <div className="elev-display">
                    <span className="elev-range">8F</span>
                    <span className="elev-indicator" />
                </div>

                <div className="hub-grid">
                    <button className="hub-card" onClick={() => navigate('/manual/6f/8/recording')}>
                        <div className="hub-title">녹화부스</div>
                        <div className="hub-sub">무인 녹화 / 반향</div>
                    </button>
                    <button className="hub-card" onClick={() => navigate('/manual/6f/8/vocal')}>
                        <div className="hub-title">보컬룸</div>
                        <div className="hub-sub">마이크 주의</div>
                    </button>
                    <button className="hub-card" onClick={() => navigate('/manual/6f/8/shower')}>
                        <div className="hub-title">샤워실</div>
                        <div className="hub-sub">테루테루보즈</div>
                    </button>
                    <button className="hub-card" onClick={() => navigate('/manual/6f/8/band')}>
                        <div className="hub-title">연주 스튜디오</div>
                        <div className="hub-sub">악기 연주</div>
                    </button>
                    <button className="hub-card" onClick={() => navigate('/manual/6f/8/ministudio')}>
                        <div className="hub-title">간이 스튜디오</div>
                        <div className="hub-sub">촬영장</div>
                    </button>
                </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/6f')}>← 이전 위치로 돌아가기</button>
            </div>
        </div>
    );
}
