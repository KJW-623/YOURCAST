import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './CodexReader.css';

/**
 * 코덱스 리더
 * - 좌/우 버튼, 키보드(←/→), 스와이프(터치)로 페이지 넘김
 * - 하단 챕터바(빠른 이동)
 * - 챕터(층) 내 섹션(장소) → 각 섹션의 페이지(문단/지침)
 * - 쿼리 파라미터로 진입: ?ch=0&sec=0&page=0 (없으면 0)
 */

export default function CodexReader() {
    const nav = useNavigate();
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const initialCh = Math.max(0, parseInt(params.get('ch') ?? '0', 10));
    const initialSec = Math.max(0, parseInt(params.get('sec') ?? '0', 10));
    const initialPage = Math.max(0, parseInt(params.get('page') ?? '0', 10));

    // ─────────────────────────────────────────────────────────────────────────────
    // 데이터(예시): 필요 시 이 구조에 실제 텍스트를 채워 넣으면 됨
    // chapters[].title → 층 타이틀, sections[].name → 장소, pages[] → 문단/지침
    const chapters = useMemo(() => ([
        {
            title: '一 ｜ B1',
            sections: [
                {
                    name: '로비',
                    pages: [
                        '복도 끝에서부터 일정한 간격의 발소리가 난다. 멈추면 같이 멈춘다.',
                        '접수대 표면엔 긁힌 흔적: “올라가지 마…” — 글씨는 계속 얕아진다.',
                        '엘리베이터 거울 속 네 모습과 너는 몇 프레임 어긋나 있다.',
                    ],
                },
                {
                    name: '백스테이지',
                    pages: [
                        '조명이 꺼져 있을 때만 보이는 경로 표시가 있다. 불을 끄면 문이 가까워진다.',
                        '도면상 창고는 2칸인데 실제론 3칸이다. 세 번째 칸은 다시 닫아두어라.',
                    ],
                },
                {
                    name: '라이브 스테이지',
                    pages: [
                        '관객석은 비어 있으나 무대 위 마이크가 호흡을 센다. “하나, 둘…”',
                        '무대 오르막의 발판 다섯째는 없는 것처럼 밟혀야 한다.',
                    ],
                },
            ],
        },
        {
            title: '二 ｜ 1F',
            sections: [
                {
                    name: '로비',
                    pages: [
                        '안내 데스크 위 명패의 이름은 네가 생각한 것과 다르다. 그 이름을 말하지 말 것.',
                        '입구 CCTV는 들어오는 사람만 기록한다. 나가는 장면은 없다.',
                    ],
                },
                {
                    name: '카페 시나몬',
                    pages: [
                        '메뉴판 마지막 줄이 깜빡인다. 보이는 대로 주문하지 말고, 네가 본 대로 주문하라.',
                        '컵 가장자리에 남은 흔적이 두 겹이면 너는 혼자가 아니다.',
                    ],
                },
            ],
        },
        {
            title: '三 ｜ 5F',
            sections: [
                {
                    name: '배움터',
                    pages: [
                        '칠판에는 아무것도 적히지 않았지만, 지워지는 소리가 난다.',
                        '뒤에서 누가 대답하면 질문을 바꿔라. 정답은 네가 정한다.',
                    ],
                },
                {
                    name: '대도구실',
                    pages: [
                        '문짝은 하나인데 경첩은 둘이다. 하나는 너를 위해 존재하지 않는다.',
                    ],
                },
            ],
        },
        {
            title: '四 ｜ 6F',
            sections: [
                { name: '의상룸', pages: ['옷걸이가 귓속말을 한다. “네가 고른 건 아니야.”'] },
            ],
        },
        {
            title: '五 ｜ 7F',
            sections: [
                { name: 'NEW DIMENSION', pages: ['창 없는 방에서만 빛이 새어 나온다.'] },
                { name: '의무실', pages: ['대기번호는 항상 네 앞이다. 그러나 불리면 뒤를 본다.'] },
            ],
        },
        {
            title: '六 ｜ 8F',
            sections: [
                { name: '녹화부스', pages: ['마이크 테스트 음성이 다시 녹음 위로 올라탄다.'] },
                { name: '보컬룸', pages: ['고음에서 유리가 웃는다. 네가 먼저 내려와라.'] },
                { name: '샤워룸', pages: ['서리 위 글자는 “여기”가 아니라 “거기”.'] },
                { name: '연주스튜디오', pages: ['박자가 맞아떨어지면 누군가 한 명은 사라진다.'] },
                { name: '간이스튜디오', pages: ['3분 이상 녹음된 것은 되감을 수 없다.'] },
            ],
        },
        {
            title: '七 ｜ 9F',
            sections: [{ name: '댄스룸 밀집구역', pages: ['거울 속 카운트가 한 박자 빠르다. 맞추지 마라.'] }],
        },
        {
            title: '八 ｜ 10F',
            sections: [
                { name: '미팅룸', pages: ['의자 개수는 사람 수보다 하나 많다. 남는 자리에 앉지 마라.'] },
                { name: '사원식당', pages: ['수저통은 너의 위치를 세고 있다. 짝이 맞으면 식사를 멈춰라.'] },
            ],
        },
        {
            title: '九 ｜ 12F',
            sections: [
                { name: 'RHYTHM LINK', pages: ['동시에 다른 층에서 음악이 들리면, 그건 같은 곡이 아니다.'] },
                { name: '공중정원', pages: ['발밑의 흙이 맥박을 가진다. 박자를 세지 마라.'] },
            ],
        },
        {
            title: '十 ｜ 15F',
            sections: [
                { name: '트레이닝룸', pages: ['러닝머신 속도는 네 심박과 협상한다. 네가 진다.'] },
                { name: '스탠드 앞', pages: ['불빛 아래 그림자가 버티면, 불을 끄고 기다려라.'] },
            ],
        },
        {
            title: '十一 ｜ 18F',
            sections: [{ name: 'COSMIC PRODUCTION', pages: ['빈 데스크에만 계약서가 놓인다. 빈 곳에 사인하지 마라.'] }],
        },
        {
            title: '十二 ｜ 19F',
            sections: [{ name: '레스팅룸', pages: ['잠이 먼저 오면 네가 아닌 것이 깨어난다.'] }],
        },
        {
            title: '十三 ｜ 20F',
            sections: [
                { name: 'STARMAKER PRODUCTION', pages: ['별자리 배치는 오늘 날짜와 다르다. 그것이 오늘이다.'] },
                { name: '응접실', pages: ['차가 식기 전에 대화가 먼저 식는다. 그때 떠나라.'] },
            ],
        },
        {
            title: '十四 ｜ H',
            sections: [{ name: '헬리포트', pages: ['소리가 먼저 이륙한다. 그 다음이 네 차례다.'] }],
        },
    ]), []);

    // ─────────────────────────────────────────────────────────────────────────────
    const [ch, setCh] = useState(Math.min(initialCh, chapters.length - 1));
    const [sec, setSec] = useState(Math.min(initialSec, chapters[Math.min(initialCh, chapters.length - 1)].sections.length - 1));
    const [page, setPage] = useState(initialPage);

    const pages = chapters[ch].sections[sec].pages;
    useEffect(() => {
        if (page > pages.length - 1) setPage(0);
    }, [ch, sec]); // eslint-disable-line

    // URL 동기화(선택): 새로고침해도 같은 위치로
    useEffect(() => {
        const sp = new URLSearchParams({ ch: String(ch), sec: String(sec), page: String(page) });
        window.history.replaceState(null, '', `?${sp.toString()}`);
    }, [ch, sec, page]);

    // ─────────────────────────────────────────────────────────────────────────────
    // 넘김 로직
    const next = () => {
        if (page < pages.length - 1) return setPage(page + 1);
        // 섹션 이동
        if (sec < chapters[ch].sections.length - 1) {
            setSec(sec + 1); setPage(0); return;
        }
        // 챕터 이동
        if (ch < chapters.length - 1) {
            setCh(ch + 1); setSec(0); setPage(0); return;
        }
    };

    const prev = () => {
        if (page > 0) return setPage(page - 1);
        if (sec > 0) {
            const prevSecPages = chapters[ch].sections[sec - 1].pages.length;
            setSec(sec - 1); setPage(prevSecPages - 1); return;
        }
        if (ch > 0) {
            const prevCh = ch - 1;
            const lastSec = chapters[prevCh].sections.length - 1;
            const lastPg = chapters[prevCh].sections[lastSec].pages.length - 1;
            setCh(prevCh); setSec(lastSec); setPage(lastPg); return;
        }
    };

    // 키보드 / 터치
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'Escape') nav('/manual/mystery/codex');
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [next, prev]); // eslint-disable-line

    const touchRef = useRef({ x: 0, t: 0 });
    const onTouchStart = (e) => { touchRef.current = { x: e.touches[0].clientX, t: Date.now() }; };
    const onTouchEnd = (e) => {
        const dx = e.changedTouches[0].clientX - touchRef.current.x;
        const dt = Date.now() - touchRef.current.t;
        if (dt < 600 && Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    };

    // 빠른 이동(하단 챕터바)
    const goChapter = (idx) => {
        setCh(idx); setSec(0); setPage(0);
    };

    // 섹션 빠른 이동(중앙 점프 드롭다운)
    const sectionJump = (i) => {
        setSec(i); setPage(0);
    };

    // ─────────────────────────────────────────────────────────────────────────────
    return (
        <div className="reader-wrap" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <div className="reader-frame">
                <div className="reader-head">
                    <button className="mini ghost" onClick={() => nav('/manual/mystery/codex')}>⟵ 목차</button>
                    <div className="crumb">
                        <span className="ch">{chapters[ch].title}</span>
                        <span className="sep">/</span>
                        <button className="sec" onClick={() => document.getElementById('sec-menu')?.showModal()}>
                            {chapters[ch].sections[sec].name}
                        </button>
                        <span className="sep">/</span>
                        <span className="pg">{page + 1} / {pages.length}</span>
                    </div>
                    <button className="mini" onClick={() => nav('/manual')}>지침서 메인</button>
                </div>

                {/* 섹션 점프 다이얼로그 */}
                <dialog id="sec-menu" className="sec-menu" onClick={(e) => e.target.id === 'sec-menu' && e.currentTarget.close()}>
                    <div className="sec-menu-body">
                        <h3>섹션 이동</h3>
                        <ul>
                            {chapters[ch].sections.map((s, i) => (
                                <li key={i}>
                                    <button onClick={() => { sectionJump(i); document.getElementById('sec-menu')?.close(); }}>
                                        {s.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <button className="mini ghost close" onClick={() => document.getElementById('sec-menu')?.close()}>닫기</button>
                    </div>
                </dialog>

                {/* 페이지 영역 */}
                <div className="page-stage" key={`${ch}-${sec}-${page}`}>
                    <article className="page turn-in">
                        <header>
                            <h1>{chapters[ch].title}</h1>
                            <h2>{chapters[ch].sections[sec].name}</h2>
                        </header>
                        <p>{pages[page]}</p>
                    </article>
                </div>

                {/* 컨트롤 */}
                <div className="controls">
                    <button className="nav-btn prev" onClick={prev} aria-label="이전 페이지">←</button>
                    <button className="nav-btn next" onClick={next} aria-label="다음 페이지">→</button>
                </div>

                {/* 하단 챕터 바 */}
                <div className="chapter-bar" role="tablist" aria-label="챕터 바로가기">
                    {chapters.map((c, i) => (
                        <button
                            key={c.title}
                            role="tab"
                            className={`chapter-chip ${i === ch ? 'active' : ''}`}
                            onClick={() => goChapter(i)}
                            title={c.title}
                        >
                            {c.title}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
