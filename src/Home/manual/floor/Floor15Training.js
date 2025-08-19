import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor15Training() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel" style={{ padding: '32px 24px' }}>
                <div className="elev-display">
                    <span className="elev-range">15F · Training Room</span><span className="elev-indicator" />
                </div>
                <article className="manual-doc">
                    <h1 className="doc-title">트레이닝 룸</h1>

                    <div className="doc-section">

                        <p className="doc-p">
                            트레이닝룸은 겉보기에는 일반적인 체력 단련 공간과 크게 다르지 않으나, 내부 구조물의 일부는 귀하의 안전을 위협하는 장치로 작용합니다.
                        </p>
                        <p className="doc-p">
                            1. 트레이닝룸 내의 전등 스위치는 이미 고장 난 상태입니다. 불은 켜지지 않으며, 어떠한 방식으로도 내부 조명을 확보할 수 없습니다.
                        </p>
                        <p className="doc-p">1-1. 따라서 귀하는 극도의 어둠 속에서 기계와 기구를 식별해야 합니다. 이 과정에서 귀하의 청각 및 촉각에 의존하게 되는데, 이때 잘못된 접촉이 곧바로 치명적 위험으로 이어질 수 있습니다.</p>
                        <p className="doc-p">1-2. 바닥은 되도록 바라보지 마십시오. 보고에 따르면 바닥을 주시하거나, 넘어진 순간 시야와 동선이 아래로 쏠린 순간, 귀하는 이상 개체 『저승사자』와 마주칠 가능성이 극단적으로 높아집니다. 저승사자는 귀하에게 직접적인 신체 접촉을 가하지 않으나, 시선을 맞춘 경우 대상의 생존률에 유의미한 영향을 미치는 것으로 보입니다.</p>

                        <p className="doc-p">
                            2. 트레이닝룸 내부에는 일반적인 운동기구들이 배치되어 있습니다. 일반적인 상황에서는 트레이닝을 위한 도구로 활용되겠으나 현 시점에는 귀하의 단련에 도움이 되기보다 위협으로 작동할 가능성이 있습니다.
                        </p>
                        <p className="doc-p">2-1. </p>
                        <p className="doc-p">2-2. </p>
                        <p className="doc-p">2-2-1. </p>
                        <p className="doc-p">2-3. 아령은 종종 귀하가 쥔 손에서 미끄러져 바닥으로 구르며, 그 뒤를 따라가려는 귀하를 유인하는 듯한 행동을 보입니다. 쫓아가 주워서는 안 됩니다.</p>
                        <p className="doc-p">2-4. 귀하가 손으로 옮길 수 있는 분량의 아령이나 트레이닝 도구에 한해 소지 및 지참하셔도 무방합니다.</p>

                        <p className="doc-p">3. 트레이닝룸 내에서의 넘어짐은 단순한 부상으로 끝나지 않습니다.</p>
                        <p className="doc-p">3-1. 넘어지는 순간, 귀하의 시야는 바닥과 맞닿게 되고, 그곳에서 검은 형체가 귀하를 응시하고 있다는 것이 반복적으로 보고되었습니다.</p>
                        <p className="doc-p">3-2. </p>
                        <p className="doc-p">3-3. </p>

                        <p className="doc-p">4. 트레이닝룸에서 보고된 죽은 자의 행동 패턴은 산 자와 명확히 구분됩니다.</p>
                        <p className="doc-p">4-1. 그들은 어둠 속에서 천천히 움직이며, 종종 기구 위에 거꾸로 매달려 있거나, 바닥에 등을 대고 기어 다니는 모습이 관측되었습니다.</p>
                        <p className="doc-p">4-2. 죽은 자는 산 자와는 반대로 행동하기에 거꾸로 선 상태로 돌아다니기도 합니다. 이와 관련이 있는지는 알 수 없으나, 그들은 귀하께서 바닥을 살피지 않는다는 전제 하에 귀하를 건드리지 않을 것입니다.</p>
                    </div>
                </article>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/15f/15')}>← 이전 위치로 돌아가기</button>
            </div>
        </div>
    );
}
