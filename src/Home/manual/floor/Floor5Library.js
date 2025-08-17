import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor5Library() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel" style={{ padding: '32px 24px' }}>
                <div className="elev-display">
                    <span className="elev-range">5F · 도서관 지침서</span>
                    <span className="elev-indicator" />
                </div>

                <article className="manual-doc">
                    <h1 className="doc-title">
                        <span className="hub-strike">대도구실</span>
                        <span className="hub-white">도서관</span>
                    </h1>

                    <p className="doc-p">
                        현재 귀하가 계신 대도구실은 본래 촬영 및 무대를 위한 도구들이 모여 있는 평범한 도구 보관실이었습니다.
                        이 공간 역시 모종의 사유로 인하여 변이되어 있는 상태이며, 알려진 정보가 극히 적습니다.
                        내부의 위험 요소 역시 제거가 불가능한 것으로 판단되는 바, 해당 지침서는 최소한의 대응 요령만을 안내드립니다.
                    </p>

                    <div className="doc-section">
                        <p>
                            1. 해당 공간은 ES 내에 존재하는 대도구실입니다. 현재는 이 공간을 괴이가 장악했습니다.
                            해당 괴이는 자신의 본래 영역이던 도서관을 대도구실에 구현한 상태이며,
                            괴이는 이 공간을 대도구실이 아닌 도서관으로 명명할 것입니다.
                        </p>
                        <p>1-1. 출입문은 처음에는 잠겨 있습니다만, 출입문 앞에 붙어 있는 안내문을 읽으면 문이 열리는 것으로 확인되었습니다.</p>
                    </div>

                    <div className="doc-section">
                        <p>2. 출입문 앞에 흰 안내문이 붙어 있다면 반드시 내용을 숙지하십시오.</p>
                        <p>2-1. 안내문의 내용 일부는 인간의 언어가 아닌 것으로 추측됩니다. 이는 읽는 이에게 하여금 ‘들어가고 싶다’ 라는 강박을 심어주는 것으로 파악됩니다.</p>
                        <p>2-2. 인간임을 포기한 채 무력하게 탐구당하고 싶지 않다면 해당 공간에 진입하지 않는 것을 권고합니다.</p>
                        <p>2-3. 귀하가 해당 공간에 진입하는 것을 선택할 시에는 귀하의 안전을 보장할 수 없습니다. 혹 일행이 문을 여는 것을 선택한다면 억지로라도 그 선택을 철회하게 해주십시오.</p>
                        <p>2-4. 낮은 확률로, 문이 멋대로 열려 공간 자체가 앞에 서있는 이를 비정상적인 중력으로 빨아들이는 경우가 있습니다. 이 경우, 귀하의 무운을 빕니다.</p>
                    </div>

                    <div className="doc-section">
                        <p>
                            3. 변이가 진행된 내부는 기존의 공간과는 완전히 다른 공간입니다. 유럽의 교회나 성당에서 볼 수 있는 스테인드 글라스로
                            장식된 고딕풍의 내부나 책장 등을 확인한 바, 도서관으로 추측됩니다.
                        </p>
                        <p>3-1. 도서관 내의 모든 도서는 절대로 그 주인의 허락 없이 손대거나 열람하지 마십시오.</p>
                        <p>
                            3-1-1. 간혹 도서 열람 시 그 표지가 기이하리만치 괴상하다는 것을 파악할 수 있습니다.
                            그것을 자세히 들여다보지 마시오. 인간의 신체 조직을 발견할 수 있습니다. 지금까지 발견된 부위:
                            손톱, 머리카락, 손가락, 안구, 그 외 열람 불가.
                        </p>
                        <p>
                            3-2. 장내 보관된 도서는 기본적으로 심각한 인지 왜곡이 발생하는 것으로 판단됩니다.
                            부득이하게 책을 열람했을 경우 최대한 빠르게 도서에서부터 멀리 떨어지십시오.
                            그것만이 귀하를 온전히 지킬 방법입니다.
                            <span className="danger-quote"> 그러니까 말했잖아요? 인간에게 별로 좋을 건 못 된다고.</span>
                        </p>
                    </div>

                    <div className="doc-section">
                        <p>
                            4. 다수의 증언에 따르자면 내부에 존재하는 개체는 단 하나뿐이며, 귀하와 다를 바 없는 완전한 『인간』의 외형을 하고 있습니다.
                            본 지침서는 이하의 개체를 『제비』라 명명합니다.
                        </p>
                        <p>- 애쉬블루색 단발머리. 적안, 노란색 동공.</p>
                        <p>
                            4-1. 『제비』는 언제나 자신이 연구할 만한 가치가 있는 대상을 찾고 있는 것으로 보입니다.
                            도서관에 들어온 인간 중 가장 자신의 흥미를 유발시키는 이를 『연구감』으로 선정하는 것으로 보이나,
                            상세한 기준은 불명이므로 언제나 그것의 흥미를 끌지 않도록 유의하십시오.
                        </p>
                        <p>
                            4-1-1. 다수의 직원이 도서관에 진입하였을 때, 『연구감』을 제외한 전원이 생존하여 귀환하였습니다.
                            다만, 그 이후의 영향에 대해서는 밝혀진 바 없으므로 진입 시 각별히 주의하십시오.
                        </p>
                    </div>

                    <div className="doc-section">
                        <p>5. 도서를 함부로 외부에 반출하지 마십시오.</p>
                    </div>
                </article>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/1f/5')}>
                    ← 이전 위치로 돌아가기
                </button>
            </div>
        </div>
    );
}
