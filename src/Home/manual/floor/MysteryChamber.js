import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MysteryChamber.css';

export default function MysteryChamber() {
    const navigate = useNavigate();
    const [step, setStep] = useState(0); // 경고 문장 점진 노출
    const [armed, setArmed] = useState(false); // ‘최종 경고’ 플래시 무장
    const timers = useRef([]);

    useEffect(() => {
        // 안내문 점진 노출
        const reveals = [700, 1400, 2100, 3000, 3900, 5200];
        reveals.forEach((ms, idx) => {
            timers.current.push(setTimeout(() => setStep(idx + 1), ms));
        });

        // 랜덤 글리치 플래시
        const arm = setInterval(() => setArmed(a => !a), 1300 + Math.random() * 900);
        timers.current.push(arm);

        // ESC로 뒤로 가기
        const onKey = (e) => { if (e.key === 'Escape') navigate(-1); };
        window.addEventListener('keydown', onKey);

        return () => {
            timers.current.forEach(clearTimeout);
            clearInterval(arm);
            timers.current = [];
            window.removeEventListener('keydown', onKey);
        };
    }, [navigate]);

    const proceed = () => {
        // 이 다음 심층 구역 경로가 정해지면 수정해서 연결하세요.
        navigate('/manual/mystery/codex', { replace: false });
    };

    return (
        <div className="chamber-wrap">
            <div className="crt">
                <div className="scanlines" aria-hidden="true" />
                <div className={`glitch-title ${armed ? 'armed' : ''}`}>
                    <span data-text="FINAL WARNING">FINAL WARNING</span>
                    <span data-text="FINAL WARNING" aria-hidden="true" />
                    <span data-text="FINAL WARNING" aria-hidden="true" />
                </div>

                <div className="panel-card">
                    <div className="panel-head">
                        <span className="lamp lamp-green" />
                        <span className="head-text">접근 승인됨</span>
                        <span className="lamp lamp-red" />
                    </div>

                    <ul className="edict">
                        <li className={step >= 1 ? 'show' : ''}>
                            <b>[1]</b> 본 구역 진입 시점부터 <em>시간 감각은 신뢰할 수 없습니다</em>.
                        </li>
                        <li className={step >= 2 ? 'show' : ''}>
                            <b>[2]</b> 뒤에서 들리는 발소리는 <em>당신의 것이 아닙니다</em>. 고개를 돌리지 마십시오.
                        </li>
                        <li className={step >= 3 ? 'show' : ''}>
                            <b>[3]</b> 엘리베이터 숫자판에 <em>존재하지 않는 층수</em>가 표시될 수 있습니다. 무시하십시오.
                        </li>
                        <li className={step >= 4 ? 'show' : ''}>
                            <b>[4]</b> CCTV에 당신이 두 번 기록되면, 더 가까운 쪽을 피해 <em>손을 들어 인사</em>하십시오.
                        </li>
                        <li className={step >= 5 ? 'show' : ''}>
                            <b>[5]</b> “도움”을 요청하는 음성은 <em>문이 열릴 때만</em> 들립니다. 닫혀 있을 땐 답하지 마십시오.
                        </li>
                        <li className={step >= 6 ? 'show final' : ''}>
                            <b>[6]</b> 마지막으로, <em>당신이 처음으로 선택한 심볼</em>을 잊지 마십시오. 나갈 때는 <u>역순</u>입니다.
                        </li>
                    </ul>

                    <div className="action-row">
                        <button className="btn ghost" onClick={() => navigate('/manual')}>
                            ← 돌아가기
                        </button>
                        <button
                            className={`btn proceed ${step >= 6 ? 'ready' : ''}`}
                            onClick={proceed}
                            disabled={step < 6}
                            aria-disabled={step < 6}
                            title={step < 6 ? '지침 로딩 중' : '지침 확인 완료, 계속'}
                        >
                            지침 확인, 계속 진행 →
                        </button>
                    </div>
                </div>

                <div className="ticker" aria-live="polite">
                    <span>ACCESS: CHAMBER-NULL — 통신 불안정 — 시야 왜곡 감지 — ESC: 뒤로</span>
                </div>
            </div>
        </div>
    );
}
