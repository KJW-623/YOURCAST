import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor7Office() {
    const navigate = useNavigate();

    return (
        <div className="elev-page">
            <div className="elev-panel" style={{ padding: '32px 24px' }}>
                <div className="elev-display">
                    <span className="elev-range">7F · 뉴디멘션 사무실</span>
                    <span className="elev-indicator" />
                </div>

                <article className="manual-doc">
                    <h1 className="doc-title">뉴디멘션 사무실</h1>
                    <p className="doc-p">
                        주간에는 일반 업무 공간이지만, 소등 후 <b>잔광</b>과 <b>저주파 소음</b> 보고가 있습니다.
                        일부 PC는 전원이 꺼진 상태에서 <b>팬만 회전</b>하는 증상이 관측됩니다.
                    </p>

                    <section className="doc-section">
                        <h2>1. 출입/이용</h2>
                        <ul>
                            <li>야간 출입 시 최소 2인 동행. CCTV 사각지대 체류 금지.</li>
                            <li>화면이 꺼져 있는데 <b>커서가 움직이면</b> 손을 키보드에서 떼고 전원 차단.</li>
                            <li>프린터가 자동 급지되면 용지를 확인하지 말고 덮개를 닫은 뒤 관리자 호출.</li>
                        </ul>
                    </section>

                    <section className="doc-section">
                        <h2>2. 책상/회의실</h2>
                        <ul>
                            <li>빈 회의실 마이크의 <b>빨간 LED</b>가 점등되면 입실 보류.</li>
                            <li>캘린더 보드에 기록되지 않은 회의가 표시되면 참석하지 마십시오.</li>
                        </ul>
                    </section>

                    <section className="doc-section">
                        <h2>3. 경고</h2>
                        <ul>
                            <li className="doc-warning">복도 끝 창문에 <b>반사상이 늦게 따라오면</b> 즉시 7F 출입구로 후퇴.</li>
                            <li>정전 시 창가 대신 내부 코어 쪽으로 대기, 휴대폰 플래시 사용 최소화.</li>
                        </ul>
                    </section>
                </article>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/6f/7')}>← 이전 위치로 돌아가기</button>
            </div>
        </div>
    );
}
