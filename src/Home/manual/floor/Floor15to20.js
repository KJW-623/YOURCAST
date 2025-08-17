import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor15to20() {
    const [selected, setSelected] = useState(null);
    const [open, setOpen] = useState(false);
    const [locking, setLocking] = useState(false);
    const timers = useRef([]);
    const navigate = useNavigate();

    useEffect(() => () => { timers.current.forEach(clearTimeout); }, []);

    const press = (f) => {
        if (locking) return;
        setLocking(true);
        setSelected(f);
        setOpen(true);
        // TODO: navigate(`/manual/15f/${f}`)
        timers.current.push(setTimeout(() => { setOpen(false); setLocking(false); }, 1000));
    };

    return (
        <div className="elev-page">
            <div className={`elev-panel ${open ? 'doors-open' : ''}`}>
                <div className="elev-display">
                    <span className="elev-range">15~20F</span>
                    <span className="elev-indicator" />
                    <span className="current-floor">{selected ? `>> ${selected}F` : '대기 중'}</span>
                </div>

                {/* 중앙 고정 정렬 (쏠림 해결) */}
                <div className="elev-buttons centered" style={{ '--cols': 6 }}>
                    {[15, 16, 17, 18, 19, 20].map(f => (
                        <button key={f} className="elev-btn" onClick={() => press(f)} disabled={locking} aria-label={`${f}층`}>
                            {f}
                        </button>
                    ))}
                </div>

                <div className="elev-controls" aria-hidden="true">
                    <button className="ctrl-btn">▲</button><button className="ctrl-btn">▼</button><button className="ctrl-btn alarm">●</button>
                </div>

                <div className="elev-doors" aria-hidden="true"><div className="door left" /><div className="door right" /></div>
            </div>

            <button className="back-link" onClick={() => navigate('/manual')}>← 매뉴얼 메인으로</button>
        </div>
    );
}
