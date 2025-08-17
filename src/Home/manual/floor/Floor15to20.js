import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor15to20() {
    const [selected, setSelected] = useState(null);
    const [open, setOpen] = useState(false);
    const [locking, setLocking] = useState(false);

    // ⬇️ 버튼 사이즈/간격 상태 (자동 계산)
    const [btnSize, setBtnSize] = useState(72);
    const [btnGap, setBtnGap] = useState(18);

    const timers = useRef([]);
    const rowRef = useRef(null);
    const navigate = useNavigate();

    // 한 줄 유지되게 버튼 지름/간격 계산
    useEffect(() => {
        const COUNT = 6;
        const MAX = 76;
        const MID = 66;
        const MIN = 50;

        const recalc = () => {
            if (!rowRef.current) return;
            const w = rowRef.current.offsetWidth; // 패널 안, 버튼 줄의 실제 폭
            // 1차 시도: 기본 간격 18px
            let gap = 18;
            let size = Math.floor((w - gap * (COUNT - 1)) / COUNT);

            // 너무 크면 상한, 너무 작으면 간격을 12로 줄여 재계산
            size = Math.min(size, MAX);
            if (size < MID) {
                gap = 12;
                size = Math.floor((w - gap * (COUNT - 1)) / COUNT);
            }
            // 최솟값 보정
            size = Math.max(size, MIN);

            setBtnGap(gap);
            setBtnSize(size);
        };

        recalc();
        window.addEventListener('resize', recalc);
        return () => window.removeEventListener('resize', recalc);
    }, []);

    // 타이머 정리
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
                    <span className="elev-range">15~20F</span>
                    <span className="elev-indicator" />
                    <span className="current-floor">{selected ? `>> ${selected}F` : '대기 중'}</span>
                </div>

                {/* ✔ 한 줄 고정: nowrap + 폭에 맞춰 버튼 크기/간격 자동 계산 */}
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
