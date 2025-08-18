import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor1Lobby() {
    const navigate = useNavigate();

    return (
        <div className="elev-page">
            <div className="elev-panel" style={{ padding: '32px 24px' }}>
                <div className="elev-display">
                    <span className="elev-range">1F · 로비 지침서</span>
                    <span className="elev-indicator" />
                </div>

                <article className="manual-doc">
                    <h1 className="doc-title">로비</h1>

                    <p className="doc-p">1. 로비 내부에는 거무죽죽한 색의 기체와 같은 형상이 홀을 부유하는 것이 관찰됩니다. 해당 개체는 임시로 『의식체』라 명명되며, 기체의 색상 변화를 통해 감정 상태를 표현하는 것으로 파악됩니다.</p>

                    <p className="doc-p">1-1. 의식체는 특정 조건을 충족하지 않는 한 귀하를 친절하게 대할 것입니다. 그러나 이들의 친절은 귀하께서 생각하는 친절의 의미와 일치하지 않음을 매 순간 명심하십시오.</p>

                    <p className="doc-p">1-2. 일부 의식체는 인간의 형태를 취하려는 강한 욕구를 보입니다. 이는 대상을 모방하려는 성질에서 비롯되며, 해당 시도 자체가 위험을 수반합니다.</p>

                    <p className="doc-p">2. 의식체의 물음에 절대 긍정적 대답을 내리지 마십시오.</p>

                    <p className="doc-p">2-1. 긍정 응답 시, 의식체는 즉시 귀하의 기억을 읽고, 귀하와 외형적으로 동일하나 경계가 흐린 “유령상”으로 변모합니다.</p>

                    <p className="doc-p">2-2. 해당 의식체는 ‘보답’을 명목으로 도움을 제시하나, 이 도움은 귀하의 이해와는 불일치하는 방식으로 실현됩니다.</p>

                    <p className="doc-p">2-2-1. 일반적으로 질문 1회당 도움 1회라는 교환 구조가 성립됩니다.</p>

                    <p className="doc-p">2-2-2. 『죽은 자를 되살려달라』는 요구를 제시할 경우, 되살아나는 것은 단지 피상적 외형에 불과한 괴이(怪異)의 존재, 혹은 싸늘히 식은 시체가 귀하 앞에 배달되는 결과로 이어집니다.</p>

                    <p className="doc-p">2-2-3. 『죽은 자』가 비교적 온전하게 사망하여 사체의 모든 신체부위가 온건하게 보존된 인물이었을 경우, 드물게 괴이의 자체적인 기준으로 재단되고 토막내져 운반되는 경우가 있습니다. 이는 괴이가 베푸는 『친절』로, 자신의 구강 구조에 맟추어 식사하기 좋은 크기로 대접하는 것입니다. </p>

                    <p className="doc-p">그의 친절을 무시하지 마십시오. 그리고 희생자의 신체부위가 귀하의 『한 입』 안에 들어가도록 절단되었기를 기도하십시오.</p>

                    <p className="doc-p">3. 의식체와의 직접적 접촉은 금지됩니다.</p>

                    <p className="doc-p">3-1. 일부 개체는 『접촉』을 대수롭지 않게 여기나, 특정 개체는 극단적 적대 반응을 보입니다.</p>

                    <p className="doc-p">3-2. 접촉 후 의식체의 색이 짙은 검정에 근접할수록, 해당 개체가 귀하의 행위에 강한 불쾌감을 표출한 것입니다.</p>

                    <p className="doc-p">3-2-1. 색이 암흑에 가까워진 경우, 곧바로 사망에 도달할 가능성이 있으므로 각별한 주의를 요합니다.</p>

                    <p className="doc-p">4. 출입문을 통한 외부 진출은 절대 금지됩니다.</p>

                    <p className="doc-p">4-1. 출입문을 넘어선 순간, 귀하는 인간으로서 수용 불가능한 정보와 장면을 직면하게 되며, 다수 사례에서 즉각적인 정신 붕괴가 발생했습니다.</p>

                    <p className="doc-p">4-2. 일부 사례는 스스로 목을 꺾어 사망에 이르는 극단적 반응을 보였습니다. 이는 방어 기제라 추정되나, 귀하에게 동일한 결과가 반복되지 않는다는 보장은 없습니다.</p>

                    <p className="doc-p">5. 의식체의 색상은 그들의 기분 상태 및 위협도를 반영합니다. 반드시 관찰을 통해 위험도를 판별하십시오.</p>

                    <p className="doc-p">5-1. 반투명한 회색 : 무관심. 인식하지 못했거나 관심을 두지 않은 상태. 조용히 이동 시 안전합니다.</p>

                    <p className="doc-p">5-2. 희미한 청색 : 탐색. 인간에 주목한 상태. 장시간 노출될 경우 감정 유출이나 사고가 발생할 가능성이 있습니다. 가급적 빠르게 자리를 피하십시오.</p>

                    <p className="doc-p">5-3. 불투명한 회색 혹은 연한 적색 : 유희. 인간을 시험하거나 모방하려는 단계. 응답하거나 반응하면 대가가 요구됩니다. 가급적 대화를 삼가며, 최대한 공손하게 돌려보내십시오.</p>

                    <p className="doc-p">5-4. 선명한 자주색 : 분노. 위협 단계. 접촉 시 즉각적인 생명 중단 사례가 다수 보고되었습니다. 다른 층계나 카페 시나몬으로 이동할 때까지 호흡을 완벽히 참으십시오.</p>

                    <p className="doc-p">5-5. 검은색에 가까운 암흑색 : 절정. 격노 상태. 의식체는 귀하의 심장 박동을 직접 추적합니다. 해당 지침서는 더 이상 의미가 없습니다.</p>

                    <p className="doc-p">자유롭게 행동하십시오.</p>

                    <p className="doc-p">６. 본 지침서를 확인한 귀하는 이미 로비 위험 구역에 진입한 상태입니다.</p>

                    <p className="doc-p">6-1. 모든 수단을 동원하여 의식체와의 불필요한 상호작용을 차단하십시오.</p>

                    <p className="doc-p">6-2. 생존을 위해 필요한 경우에 한하여만 이동을 권장합니다.</p>

                    <p className="doc-p">6-3. 본 절차는 일반적 권고가 아니며, 긴급 상황에서의 불가피한 최후의 선택임을 다시 한번 명심하십시오.</p>
                </article>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/1f/1')}>
                    ← 이전 위치로 돌아가기
                </button>
            </div>
        </div>
    );
}
