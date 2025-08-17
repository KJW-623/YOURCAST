import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor6to8() {
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
        timers.current.push(setTimeout(() => {
            if (f === 6) navigate('/manual/6f/6');
            else if (f === 7) navigate('/manual/6f/7');
            else if (f === 8) navigate('/manual/6f/8');
        }, 650));
        timers.current.push(setTimeout(() => { setOpen(false); setLocking(false); }, 1000));
    };

    return (
        <div className="elev-page">
            <div className={`elev-panel ${open ? 'doors-open' : ''}`}>
                <div className="elev-display">
                    <span className="elev-range">조심해...</span>
                    <span className="elev-indicator" />
                    <span className="current-floor">{selected ? `>> ${selected}F` : '대기 중'}</span>
                </div>

                {}
                <div className="elev-buttons centered" style={{ '--cols': 3 }}>
                    {[6, 7, 8].map(f => (
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
