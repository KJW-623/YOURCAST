import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor15to20() {
    const [selected, setSelected] = useState(null);
    const [open, setOpen] = useState(false);
    const [locking, setLocking] = useState(false);

    const [btnSize, setBtnSize] = useState(72);
    const [btnGap, setBtnGap] = useState(18);

    const timers = useRef([]);
    const rowRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const COUNT = 6;
        const MAX = 76;
        const MID = 66;
        const MIN = 50;

        const recalc = () => {
            if (!rowRef.current) return;
            const w = rowRef.current.offsetWidth; 
            let gap = 18;
            let size = Math.floor((w - gap * (COUNT - 1)) / COUNT);

            size = Math.min(size, MAX);
            if (size < MID) {
                gap = 12;
                size = Math.floor((w - gap * (COUNT - 1)) / COUNT);
            }

            size = Math.max(size, MIN);

            setBtnGap(gap);
            setBtnSize(size);
        };

        recalc();
        window.addEventListener('resize', recalc);
        return () => window.removeEventListener('resize', recalc);
    }, []);

    useEffect(() => () => {
        timers.current.forEach(clearTimeout);
        timers.current = [];
    }, []);

    const press = (f) => {
        if (locking) return;
        setLocking(true);
        setSelected(f);
        setOpen(true);
        timers.current.push(
            setTimeout(() => navigate(`/manual/15f/${f}`), 600),
            setTimeout(() => { setOpen(false); setLocking(false); }, 1200)
        );
    };

    const onKeyDown = (e, f) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            press(f);
        }
    };

    return (
        <div className="elev-page">
            <div className={`elev-panel ${open ? 'doors-open' : ''}`} style={{ padding: '30px 36px 32px' }}>
                <div className="elev-display">
                    <span className="elev-range">조심해...</span>
                    <span className="elev-indicator" />
                    <span className="current-floor">{selected ? `>> ${selected}F` : '대기 중'}</span>
                </div>

                {}
                <div
                    ref={rowRef}
                    className="elev-buttons centered"
                    style={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        justifyContent: 'center',
                        gap: `${btnGap}px`,
                        width: '100%',
                        maxWidth: '100%'
                    }}
                >
                    {[15, 16, 17, 18, 19, 20].map((f) => (
                        <button
                            key={f}
                            className="elev-btn"
                            style={{ width: btnSize, height: btnSize }}
                            onClick={() => press(f)}
                            onKeyDown={(e) => onKeyDown(e, f)}
                            disabled={locking}
                            aria-label={`${f}층`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="elev-controls" aria-hidden="true" style={{ marginTop: 12 }}>
                    <button className="ctrl-btn">▲</button>
                    <button className="ctrl-btn">▼</button>
                    <button className="ctrl-btn alarm">●</button>
                </div>

                <div className="elev-doors" aria-hidden="true">
                    <div className="door left" /><div className="door right" />
                </div>
            </div>

            <button className="back-link" onClick={() => navigate('/manual')}>← 매뉴얼 메인으로</button>
        </div>
    );
}
