import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor6Wardrobe() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel" style={{ padding: '32px 24px' }}>
                <div className="elev-display">
                    <span className="elev-range">6F · 의상룸</span>
                    <span className="elev-indicator" />
                </div>

                <article className="manual-doc">
                    <h1 className="doc-title">의상룸</h1>

                    <p className="doc-p">
                        현재 귀하께서 계신 의상실은 상시 개방되어 있는 구역입니다. 내부의 위협은 완전한 제거가 불가능하다고 판단되었으며, 따라서 본 문서는 최소한의 대응 요령만을 안내합니다.
                    </p>
                    <p className="doc-p">
                        본 구역은 본래 연습 및 무대 의상을 관리하기 위한 장소였으나 현재는 정상적인 사용이 불가능합니다. 내부 구조는 통상적인 의상실과 동일하게 보이나, 다음과 같은 현상이 지속적으로 보고되었습니다.
                    </p>

                    <p className="doc-p">
                        1. 본 시설의 의상의 대다수는 평범해 보이나, 특정 각도에서 관찰할 경우 인피와 동일한 질감을 갖는다는 보고가 있습니다. 시각적 착시는 아니며, 해당 의상은 조명이 변해도 동일한 인상을 줍니다.
                    </p>

                    <p className="doc-p">
                        1-1. 실제로 만질 경우 피부 온도와 유사한 열 및 수분이 감지되며, 장시간 접촉 시 심리적 불쾌감을 넘어 피부 표면의 감각 전이가 보고된 바 있습니다.
                    </p>
                    <p className="doc-p">
                        1-2. 마네킹 중 일부는 정상적인 자세와 다른 변형된 자세를 취하거나 일그러진 형태로 관찰됩니다. 이러한 현상은 의상의 주인이 괴이와 관련이 있을수록 높은 빈도로 발생한다고 추정되나, 정확한 상관관계는 파악되지 않았습니다.
                    </p>

                    <p className="doc-p">
                        변형된 마네킹은 고정된 물체처럼 보이나, 일부 관찰자에게 정신 착란을 일으키는 경우가 보고되었습니다. 해당 보고는 신빙성이 불명확하므로 주의 바랍니다.
                    </p>

                    <p className="doc-p">
                        2. 재봉틀 위에는 재봉틀이 존재합니다. 일부 확률로 간단한 재단 도구들, 작업이 완료되지 못한 작업물들이 있을 것이며, 책상 하단에는 서랍이 있을 것입니다.
                    </p>

                    <p className="doc-p">
                        3. 책상 서랍의 폭은 약 20cm이나, 가끔 내부가 무한히 깊게 보이는 경우가 확인됩니다. 이 경우, 내부를 살피면 드물게 『■■』의 육체 일부가 발견됩니다. 해당 육체는 인간과 동일한 비율을 가지고 있으나, 인간보다 훨씬 거대하기 때문에 발견 즉시 인식할 수 있습니다.
                    </p>

                    <p className="doc-p">
                        3-1. 육체의 사용처에 대해서는 본격적인 조사가 이루어지지 않았으므로 유의 바랍니다.
                    </p>

                    <p className="doc-p">
                        4. 원단 보관함 속 일부 헝겊의 내부에는 작은 매듭이 묶여 있으며, 『단서』로 보이는 무언가가 감춰져 있습니다. 그러나 현재까지 명확히 관측된 바는 없습니다.
                    </p>

                    <p className="doc-p">
                        매듭을 풀려는 시도는 권장되지 않습니다. 『단서』가 손을 공격한다는 기록이 있으며, 제대로 『단서』를 퇴치하지 못할 경우 상처 부위는 봉합이 불가능할 정도로 조직이 깨끗하게 절단됩니다.
                    </p>

                    <p className="doc-p">
                        5. 탈의실에 접근할 경우, 옷을 들고 들어가고 싶은 충동에 휩싸이는 경우가 있습니다. 해당 충동은 보고자 중 상당수에서 동일하게 발생하였습니다.
                    </p>

                    <p className="doc-p">
                        5-1. 마네킹에 걸린 임의의 의상을 들고 탈의실에 들어갈 경우, 갈아입는 과정의 기억은 발생하지 않으며, 결과적으로 의상이 자동으로 착용된 상태로 변합니다. 이때 원래 해당 의상을 입고 있던 마네킹은 인체와 유사한 촉감을 갖게 되며, 반대로 착용자의 신체는 마네킹으로 변형됩니다.
                    </p>

                    <p className="doc-p">
                        5-2. 마네킹에 걸린 옷을 다시 환의할 경우, 높은 확률로 해당 현상이 해소됨을 확인하였습니다.
                    </p>
                </article>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/6f/6')}>
                    ← 이전 위치로 돌아가기
                </button>
            </div>
        </div>
    );
}
