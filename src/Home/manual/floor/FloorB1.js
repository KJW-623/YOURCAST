import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function FloorB1() {
    const [selected, setSelected] = useState(null);
    const [open, setOpen] = useState(false);
    const [locking, setLocking] = useState(false);
    const timers = useRef([]);
    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            timers.current.forEach(clearTimeout);
            timers.current = [];
        };
    }, []);

    /** 공통 이동 핸들러: 표시층/도어 애니메이션 후 원하는 경로로 이동 */
    const goTo = (label, path) => {
        if (locking) return;
        setLocking(true);
        setSelected(label);
        setOpen(true);
        timers.current.push(
            setTimeout(() => navigate(path), 600),   // 이동
            setTimeout(() => {                       // 도어 닫힘 & 잠금 해제
                setOpen(false);
                setLocking(false);
            }, 1200)
        );
    };

    // B1 버튼
    const pressB1 = () => goTo('B1', '/manual/b1/b1');

    // ▼ 버튼: 미스터리 층으로
    // 경로가 다르면 '/manual/mystery'만 네 라우트에 맞게 변경
    const pressDownToMystery = () => goTo('??', '/manual/mystery');

    return (
        <div className="elev-page">
            <div className={`elev-panel ${open ? 'doors-open' : ''}`}>
                <div className="elev-display">
                    <span className="elev-range">조심해...</span>
                    <span className="elev-indicator" />
                    <span className="current-floor">{selected ? `>> ${selected}` : '대기 중'}</span>
                </div>

                {/* 중앙 B1 버튼 */}
                <div className="elev-buttons centered" style={{ '--cols': 1 }}>
                    <button
                        className="elev-btn"
                        onClick={pressB1}
                        disabled={locking}
                        aria-label="B1"
                    >
                        B1
                    </button>
                </div>

                {/* 보조 컨트롤 */}
                <div className="elev-controls" aria-hidden="true">
                    <button className="ctrl-btn up" disabled={locking} title="위로">▲</button>
                    <button
                        className="ctrl-btn down"
                        onClick={pressDownToMystery}
                        disabled={locking}
                        title="아래로 (미스터리 층)"
                    >
                        ▼
                    </button>
                    <button className="ctrl-btn alarm" disabled={locking} title="경보">●</button>
                </div>

                <div className="elev-doors" aria-hidden="true">
                    <div className="door left" />
                    <div className="door right" />
                </div>
            </div>

            <button className="back-link" onClick={() => navigate('/manual')}>
                ← 이전 위치로 돌아가기
            </button>
        </div>
    );
}
