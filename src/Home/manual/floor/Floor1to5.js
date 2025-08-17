// src/Home/manual/floor/Floor1to5.js
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor1to5() {
    const [selected, setSelected] = useState(null);
    const [open, setOpen] = useState(false);
    const [locking, setLocking] = useState(false); // 중복 입력 방지
    const navigate = useNavigate();

    // ✅ JS 문법: 타입 제거
    const timers = useRef([]);
    const addTimer = (id) => {
        timers.current.push(id);
    };

    // 언마운트 시 타이머 정리
    useEffect(() => {
        return () => {
            timers.current.forEach((t) => clearTimeout(t));
            timers.current = [];
        };
    }, []);

    const go = (f) => {
        if (locking) return;
        setLocking(true);
        setSelected(f);
        setOpen(true);

        // 문 열림 연출 후 이동
        addTimer(setTimeout(() => {
            if (f === 1) navigate('/manual/1f/1');
            else if (f === 5) navigate('/manual/1f/5'); // 5F 허브(또는 상세)
            else navigate(`/manual/1f/${f}`); // 2,3,4층 -> ErrorPage 라우팅
        }, 650));

        // 문 닫힘 복구
        addTimer(setTimeout(() => {
            setOpen(false);
            setLocking(false);
        }, 1000));
    };

    const onKey = (e, f) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            go(f);
        }
    };

    return (
        <div className="elev-page">
            <div className={`elev-panel ${open ? 'doors-open' : ''}`}>
                <div className="elev-display" role="region" aria-label="1~5층 엘리베이터 패널">
                    <span className="elev-range">1~5F</span>
                    <span className="elev-indicator" />
                    <span className="current-floor" aria-live="polite">
                        {selected ? `>> ${selected}F` : '대기 중'}
                    </span>
                </div>

                <div className="elev-buttons">
                    {[1, 2, 3, 4, 5].map((f) => (
                        <button
                            key={f}
                            className="elev-btn"
                            onClick={() => go(f)}
                            onKeyDown={(e) => onKey(e, f)}
                            aria-label={`${f}층으로 이동`}
                            disabled={locking}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="elev-controls" aria-hidden="true">
                    <button className="ctrl-btn">▲</button>
                    <button className="ctrl-btn">▼</button>
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
