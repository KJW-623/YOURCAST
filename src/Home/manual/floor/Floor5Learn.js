import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor5Learn() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel" style={{ padding: '32px 24px' }}>
                <div className="elev-display">
                    <span className="elev-range">5F · 배움터 지침서</span>
                    <span className="elev-indicator" />
                </div>

                <article className="manual-doc">
                    <h1 className="doc-title">배움터</h1>
                    <p className="doc-p">
                        현재 귀하께서 계신 배움터는 원인불명의 사유로 인하여 반복적으로 개방되는 구역입니다.
                        내부의 위협 제거는 불가능으로 판단되어, 최소한의 대응 요령만을 안내드립니다.
                    </p>

                    <section className="doc-section">
                        <h2>1. 구역 개요</h2>
                        <ul>
                            <li>
                                본래 아이돌의 단련을 위해 개방되던 공식 구역이었으나,
                                공간이 자체적으로 개방되며 내부 존재가 외부를 해하는 상황이 관측되었습니다.
                            </li>
                            <li>
                                현재는 <b>의도적 단련/자격 확인</b> 목적에 한해 개방되며,
                                완전 폐쇄 상태일 경우 내부는 <b>비정상적으로 고요</b>합니다.
                            </li>
                            <li>
                                귀하가 어떤 경로로 봉쇄된 배움터에 진입했는지는 불명입니다. 아래 지침을 따르십시오.
                            </li>
                        </ul>
                    </section>

                    <section className="doc-section">
                        <h2>2. 선택 규칙 (수락 / 거부)</h2>
                        <p className="doc-note">공간 중앙 바닥에 ‘수락’ / ‘거부’ 표식이 보일 수 있습니다.</p>
                        <ul>
                            <li>
                                <b>거부</b> 선택 시: 존재는 침입자를 쫓아내려 위협합니다.
                                외벽까지 밀쳐지는 등 <b>피해</b>가 있을 수 있으나, 비전투 인원에겐
                                그나마의 생존책입니다.
                            </li>
                            <li>
                                <b>수락</b> 선택 시: 즉시 대련 개시. 목검 1자루가 출현하며 선제 공격이 들어옵니다.
                                <b>3회의 대련 중 2회 이상 유효타</b>에 성공하면 이탈 가능.
                            </li>
                            <li>
                                허점을 <b>2회 초과</b>로 내주면 존재가 신체 일부를 절단해 ‘잉크’ 재료로 씁니다.
                                <i>(절단 부위에 목은 포함되지 않음)</i>
                            </li>
                            <li>싸우지 않거나 도주 시도 시, 존재는 침입자로 간주하고 추가 제압을 시도합니다.</li>
                            <li>
                                목검을 외부로 반출하려 하면 <b>재</b>가 되어 사라집니다. 반출 시도 금지.
                            </li>
                            <li>
                                아무 선택도 하지 않으면 존재가 먼저 접근해 시험을 강제합니다.
                            </li>
                            <li>
                                드물게 표식이 <b>천장</b>에 붙어있는 사례가 있습니다. 2인 이상 협력하여 접촉해
                                선택을 확정하십시오.
                            </li>
                            <li>
                                당신의 의지와 무관하게 손이 도검 쪽으로 향하거나, 강제 개시가 되는 현상이
                                보고되었습니다. <b>원인 불명, 조사 요망.</b>
                            </li>
                        </ul>
                    </section>

                    <section className="doc-section">
                        <h2>3. 강제 소환 시</h2>
                        <p>
                            진입 의도가 없는데 내부에 놓여 있었다면 존재에게 <b>강제로 불려온 것</b>으로 판단됩니다.
                            규칙은 동일하며, 가능한 한 빠르게 선택하십시오.
                        </p>
                        <p className="doc-warning">
                            문이 잠겨 있을 경우 ‘거부’로는 <b>나갈 수 없습니다</b>. 이때는 일방적으로 밀쳐지며
                            구타를 당할 수 있어 생존 확률은 0에 수렴합니다. <b>반드시 ‘수락’으로 대련</b>해야 합니다.
                        </p>
                    </section>

                    <section className="doc-section">
                        <h2>4. 패배 후 후유증</h2>
                        <ul>
                            <li>절단은 매우 정교하며 일정 혈액 확보 후 즉시 지혈, 치료/재건 무의미.</li>
                            <li>일부는 절단 부위를 움직이려는 충동, 환상통을 호소. 감각·재능·기억 상실 사례 보고.</li>
                        </ul>
                    </section>

                    <section className="doc-section">
                        <h2>5. 사례 요약</h2>
                        <ul>
                            <li>
                                외부인 A: 1승 2패 후 귀환, <b>오른팔 팔꿈치 이하 누락</b>. 수면 중 팔이
                                “상대 없는 시합”을 반복하듯 움직임. 현재 격리 중.
                            </li>
                            <li>
                                K: 관리 담당. ‘거부’ 상태였으나 문이 밖에서 잠겨 <b>문에 2회 충돌</b>.
                                목검을 강제로 쥐어준 뒤 자동 대련. 구타 흔적이 <b>세척 불가</b>, 이후 타인
                                근접 시 비자발적 긴장 반응.
                            </li>
                            <li>
                                T: ES 무관 외부인, 진입 경로 불명. 2패. 신체 절단은 없었으나
                                <b>왼손이 보호구와 유사 질감으로 경화</b>, 체온 상실. 잡은 물체를 검으로
                                오인하는 현상 반복.
                            </li>
                        </ul>
                    </section>
                </article>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/1f/5')}>← 이전 위치로 돌아가기</button>
            </div>
        </div>
    );
}
