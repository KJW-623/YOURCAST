import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor5Library() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel" style={{ padding: '32px 24px' }}>
                <div className="elev-display">
                    <span className="elev-range">5F · 대도구실도서관 지침서</span>
                    <span className="elev-indicator" />
                </div>

                <article className="manual-doc">
                    <h1 className="doc-title">대도구실도서관</h1>
                    <p className="doc-p">
                        본래 촬영 및 무대용 도구 보관실이었으나, 현재 <b>괴이</b>에 의해 <b>도서관</b>으로 구현된
                        변이 상태입니다. 내부 위험의 제거는 불가능으로 판단됩니다. 최소한의 대응 요령만 안내합니다.
                    </p>

                    <section className="doc-section">
                        <h2>1. 출입</h2>
                        <ul>
                            <li>
                                출입문은 초기에 잠겨 있으나, <b>문 앞 안내문을 읽으면</b> 열립니다.
                                <span className="doc-note">흰 안내문이 있다면 반드시 내용을 숙지하십시오.</span>
                            </li>
                            <li>
                                안내문 일부는 인간의 언어가 아니며, 읽는 이에게 <b>진입 강박</b>을 유발합니다.
                                강박을 느낄 경우 <b>진입을 중단</b>하십시오.
                            </li>
                            <li>
                                낮은 확률로 문이 스스로 열려 <b>비정상 중력</b>으로 빨아들이는 경우가 있습니다.
                                이 경우 안전 보장 불가.
                            </li>
                        </ul>
                    </section>

                    <section className="doc-section">
                        <h2>2. 내부 양상</h2>
                        <p>고딕풍 스테인드글라스, 책장 등으로 미루어 <b>도서관</b>으로 추정됩니다.</p>
                        <ul>
                            <li className="doc-warning">
                                모든 도서는 <b>주인의 허락 없이 접촉/열람 금지</b>.
                            </li>
                            <li>
                                표지가 기괴하게 느껴질 수 있으며, 자세히 들여다보면 <b>인간 조직</b>이 관찰되기도 합니다.
                                (손톱, 머리카락, 손가락, 안구 등)
                            </li>
                            <li>
                                도서 열람 시 <b>심각한 인지 왜곡</b>이 발생. 부득이 열람했다면 즉시 최대한 멀어지십시오.
                            </li>
                        </ul>
                    </section>

                    <section className="doc-section">
                        <h2>3. 내부 개체 ‘제비’</h2>
                        <p>
                            다수의 증언에 따르면 내부 개체는 하나이며, 외형은 인간과 동일합니다.
                            본 지침서는 이하의 개체를 <b>‘제비’</b>라 명명합니다.
                        </p>
                        <ul>
                            <li>특징: 애쉬블루 단발, 적안, 노란 동공.</li>
                            <li>
                                ‘제비’는 <b>연구할 대상</b>을 항상 찾고 있으며, 진입 인원 중 가장 흥미로운 한 명을
                                <b>‘연구감’</b>으로 선정합니다(기준 불명).
                            </li>
                            <li>
                                다수가 진입했을 때 ‘연구감’을 제외한 인원은 생존 귀환하였으나, 이후 영향은 불명입니다.
                            </li>
                        </ul>
                    </section>

                    <section className="doc-section">
                        <h2>4. 금지 & 권고</h2>
                        <ul>
                            <li><b>도서 반출 금지.</b></li>
                            <li>
                                ‘제비’의 흥미를 끌지 않도록 <b>시선/행동 최소화</b>. 소리·속삭임·장시간 응시는 피하십시오.
                            </li>
                            <li>이상 감각(속삭임, 시야왜곡, 반사통) 발생 시 즉시 후퇴.</li>
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
