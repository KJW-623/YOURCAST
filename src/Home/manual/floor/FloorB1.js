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

    const press = () => {
        if (locking) return;
        setLocking(true);
        setSelected('B1');
        setOpen(true);
        timers.current.push(
            setTimeout(() => navigate('/manual/b1/b1'), 600),
            setTimeout(() => {
                setOpen(false);
                setLocking(false);
            }, 1200)
        );
    };

    return (
        <div className="elev-page">
            <div className={`elev-panel ${open ? 'doors-open' : ''}`}>
                <div className="elev-display">
                    <span className="elev-range">조심해...</span>
                    <span className="elev-indicator" />
                    <span className="current-floor">{selected ? `>> ${selected}` : '대기 중'}</span>
                </div>

                {}
                <div className="elev-buttons centered" style={{ '--cols': 1 }}>
                    <button
                        className="elev-btn"
                        onClick={press}
                        disabled={locking}
                        aria-label="B1"
                    >
                        B1
                    </button>
                </div>

                <div className="elev-controls" aria-hidden="true">
                    <button className="ctrl-btn up">▲</button>
                    <button className="ctrl-btn down">▼</button>
                    <button className="ctrl-btn alarm">●</button>
                </div>

                <div className="elev-doors" aria-hidden="true">
                    <div className="door left" />
                    <div className="door right" />
                </div>
            </div>

            <button className="back-link" onClick={() => navigate('/manual')}>
                ← 매뉴얼 메인으로
            </button>
        </div>
    );
}
