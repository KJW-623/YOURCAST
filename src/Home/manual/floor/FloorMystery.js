import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function FloorMystery() {
    const [selected, setSelected] = useState(null);
    const [open, setOpen] = useState(false);
    const [locking, setLocking] = useState(false);
    const [inputSeq, setInputSeq] = useState([]);     // 사용자가 누른 심볼 기록
    const [isWrong, setIsWrong] = useState(false);    // 틀렸을 때 패널 흔들림
    const timers = useRef([]);
    const navigate = useNavigate();

    // 버튼에 표시되는 심볼들
    const symbols = useMemo(
        () => ['■', '▒', 'Ξ', '†', '¤', '■', '▓', '#', '%', '◆'],
        []
    );

    // ✅ 정답 시퀀스(여기 원하는 순서로 바꾸면 됨)
    //   예: † → Ξ → % → ◆
    const SECRET = useMemo(() => ['†', 'Ξ', '%', '◆'], []);

    useEffect(() => {
        return () => {
            timers.current.forEach(clearTimeout);
            timers.current = [];
        };
    }, []);

    // 입력 초기화
    const resetInput = () => {
        setInputSeq([]);
        setSelected(null);
    };

    // 성공 처리: 문 열고 다음 페이지로 이동
    const succeed = () => {
        setLocking(true);
        setOpen(true);
        setSelected('ACCESS');
        timers.current.push(
            setTimeout(() => navigate('/manual/mystery/chamber'), 600), // ← 원하는 경로로 수정 가능
            setTimeout(() => {
                setOpen(false);
                setLocking(false);
                resetInput();
            }, 1200)
        );
    };

    // 실패 처리: 잠깐 흔들리고 초기화
    const fail = () => {
        setIsWrong(true);
        setLocking(true);
        timers.current.push(
            setTimeout(() => {
                setIsWrong(false);
                setLocking(false);
                resetInput();
            }, 800)
        );
    };

    // 버튼 누름
    const press = (i) => {
        if (locking) return;
        const sym = symbols[i % symbols.length];

        // 표시부 업데이트(분위기용)
        setSelected(sym);

        // 새 입력 시퀀스
        const nextSeq = [...inputSeq, sym];
        setInputSeq(nextSeq);

        // 1) prefix(부분 일치) 검사
        const prefixOk = nextSeq.every((v, idx) => v === SECRET[idx]);
        if (!prefixOk) return fail();

        // 2) 전부 일치하면 성공
        if (nextSeq.length === SECRET.length) return succeed();

        // 3) 아직 진행 중이면 잠깐 문 열리는 듯 효과만
        setOpen(true);
        timers.current.push(setTimeout(() => setOpen(false), 150));
    };

    return (
        <div className="elev-page">
            <div className={`elev-panel ${open ? 'doors-open' : ''} ${isWrong ? 'shake' : ''}`}>
                <div className="elev-display">
                    <span className="elev-range">???</span>
                    <span className="elev-indicator" />
                    <span className="current-floor">
                        {selected ? `>> ${selected}` : '대기 중'}
                    </span>
                </div>

                {/* 입력 진행상태(●○○○ 같은 점진 표시) */}
                <div className="progress-dots" aria-hidden="true" style={{ textAlign: 'center', margin: '10px 0' }}>
                    {Array.from({ length: SECRET.length }).map((_, idx) => (
                        <span key={idx} style={{ margin: '0 4px', opacity: idx < inputSeq.length ? 1 : 0.35 }}>
                            {idx < inputSeq.length ? '●' : '○'}
                        </span>
                    ))}
                </div>

                {/* 심볼 키패드 */}
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
                ← 이전 위치로 돌아가기
            </button>
        </div>
    );
}
