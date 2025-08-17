import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function FloorMystery() {
    const [selected, setSelected] = useState(null);
    const [open, setOpen] = useState(false);
    const [locking, setLocking] = useState(false);
    const timers = useRef([]);
    const navigate = useNavigate();

    const symbols = useMemo(() => ['■', '▒', 'Ξ', '†', '¤', '■', '▓', '#', '%', '◆'], []);

    useEffect(() => () => { timers.current.forEach(clearTimeout); }, []);

    const press = (i) => {
        if (locking) return;
        setLocking(true);
        setSelected(symbols[i % symbols.length]);
        setOpen(true);
        timers.current.push(setTimeout(() => { setOpen(false); setLocking(false); }, 1000));
    };

    return (
        <div className="elev-page">
            <div className={`elev-panel ${open ? 'doors-open' : ''}`}>
                <div className="elev-display">
                    <span className="elev-range">???</span>
                    <span className="elev-indicator" />
                    <span className="current-floor">{selected ? `>> ${selected}` : '대기 중'}</span>
                </div>

                {}
                <div className="elev-buttons centered" style={{ '--cols': 5 }}>
                    {Array.from({ length: 10 }).map((_, i) => (
                        <button
                            key={i}
                            className="elev-btn"
                            onClick={() => press(i)}
                            disabled={locking}
                            aria-label={`mystery-${i}`}
                            style={{ filter: i % 3 === 0 ? 'contrast(1.12)' : undefined }}
                        >
                            {symbols[i % symbols.length]}
                        </button>
                    ))}
                </div>

                <div className="elev-controls" aria-hidden="true">
                    <button className="ctrl-btn">▲</button><button className="ctrl-btn">▼</button><button className="ctrl-btn alarm">●</button>
                </div>

                <div className="elev-doors" aria-hidden="true"><div className="door left" /><div className="door right" /></div>
            </div>

            <button className="back-link" onClick={() => navigate('/manual')}>← 이전 위치로 돌아가기</button>
        </div>
    );
}
