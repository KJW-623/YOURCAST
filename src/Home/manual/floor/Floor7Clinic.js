import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor7Clinic() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel" style={{ padding: '32px 24px' }}>
                <div className="elev-display">
                    <span className="elev-range">7F · 의무실 지침서</span>
                    <span className="elev-indicator" />
                </div>

                <article className="manual-doc">
                    <h1 className="doc-title">의무실</h1>

                    <p className="doc-p">현재 귀하께서는 평소 의료종사자가 상주하는 의무실에 위치한 것으로 파악됩니다.</p>
                    <p className="doc-p">의무실에는 신규 의료종사자로 분류되나, 인간의 범주에 속하지 않는 괴이적 존재 ― 『치료사』라 명명된 개체가 존재합니다.</p>
                    <p className="doc-p">본 지침서는 해당 치료사에 대한 기술을 우선적으로 다룹니다.</p>

                    <p className="doc-p">1. 의무실에 진입한 인원에게 치료사는 환자의 존재 여부를 질문합니다.</p>

                    <p className="doc-p">1-1. 반드시 자신의 실제 상태에 부합하는 답변을 하십시오.</p>
                    <p className="doc-p">1-2. 답변과 귀하의 실제 상태가 불일치하는 경우, 귀하의 안전은 전혀 보장되지 않습니다.</p>
                    <p className="doc-p">1-3. 치료사는 환자 외 모든 존재를 불결한 것으로 간주하는 성향을 지니며, 낮은 확률로 스스로 환자를 만들어내는 사례가 보고되었습니다.</p>

                    <p className="doc-p">2. 치료사의 태도 및 반응</p>

                    <p className="doc-p">2-1. 부상 인원이 존재하며, 환자가 존재한다고 답한 경우 
                        <br/> 귀하의 부상은 치료 대상이 됩니다. 
                        <br/> 단, 반드시 어느 부위가 아프며 어떠한 방식의 치료를 원한다는 구체적 설명을 제시해야 합니다. 
                        <br/> 이를 소홀히 할 경우, 치료사의 임의 판단에 따라 치료가 진행됩니다.</p>

                    <p className="doc-p"> S군은 전신에 유리 파편이 박힌 듯한 상처를 보유한 채 본사 내실에 진입하였음. 다만 본인은 고통을 호소하거나 구체적인 부위에 대한 진술을 하지 않음.</p>

                    <p className="doc-p"> 내실 치료사는 자체적으로 부상을 파악하던 중, 좌측 손에 검지와 중지가 절단 흔적을 확인하였으며, 이를 근거로 ‘균형을 맞춘다’는 명목 하에 우측 손의 검지와 중지 또한 절단함. 절단 과정에서 출혈이나 염증 등 즉각적인 생리적 반응은 발견되지 않았음.</p>

                    <p className="doc-p">2-2. 부상 인원이 존재하나 환자가 아니라고 답하거나, 부상 인원이 존재하지 않는데 환자가 있다고 답한 경우 
                        <br/> 치료사는 극도의 분노를 표출합니다. 
                        <br/> 발화자는 즉시 침대에 고정되며, 강제 치료가 개시됩니다. 
                        <br/> 이 과정에서 귀하는 정신 착란 상태에 빠져 멀쩡한 부위에 대한 치료를 요구하게 되며, 매우 높은 확률로 불필요한 신체에 실제 손상이 가해집니다.</p>

                    <p className="doc-p">2-3. 부상이 없으며, 환자가 아니라고 답한 경우 
                        <br/> 극히 드문 행운으로 간주됩니다. 
                        <br/> 귀하는 단순히 의무실에서 추방되는 선에서 그칩니다. 
                        <br/> 단, 추방 이후 치료사의 태도나 재진입 가능성은 보장되지 않습니다.</p>

                    <p className="doc-p">3. 의료 행위 및 자원 관련 제한</p>

                    <p className="doc-p">3-1. 의무실 외부에서의 모든 의료 행위는 금지됩니다.</p>
                    <p className="doc-p">3-2. 치료사는 약품 및 기구의 반출에 극도로 민감하며, 적발될 경우 귀하의 안전은 보장되지 않습니다.</p>
                    <p className="doc-p">3-3. 적발 인원은 추후 행방을 확인할 수 없었으며, 적발되지 않고 무사히 비품을 빼돌린 인원의 추후 돌연 실종된 사건이 해당 건과 관계가 있는지 조사 중입니다.</p>

                    <p className="doc-p">4. 의무실 내부는 기본적 둘러보기만 허용됩니다.</p>

                    <p className="doc-p">4-1. 약장 개봉 등의 세부 조사는 『무례한 행위』로 간주됩니다.</p>
                    <p className="doc-p">해당 행위 적발 시, 치료사는 즉시 귀하를 의무실에서 추방합니다.</p>
                    <p className="doc-p">추방된 인원은 이후 의무실 재진입이 불가하다는 점을 반드시 유념하십시오.</p>

                    <p className="doc-p">5. 주방 인원의 재진입 시도 사례</p>

                    <p className="doc-p">5-1. 추방된 인원이 의무실에 재진입을 시도한 사례는 소수 보고되었으며, 모든 경우에서 치명적인 결과가 발생했습니다.</p>
                    <p className="doc-p">5-2. 문턱을 넘어서는 즉시, 치료사는 인원을 환자가 아닌 『불결한 침입자』로 인식합니다.</p>
                    <p className="doc-p">5-3. 침입자는 강제로 침대에 고정되며, 통상적 치료 절차가 아닌 『멸균 요법』 절차가 개시됩니다.</p>

                    <p className="doc-p">해당 치료는 귀하의 몸에 있는 모든 생명체의 박멸을 목표로 합니다. 이때의 생명체는 귀하의 몸을 숙주로 삼아 무의미하게 잔류하는 균뿐만 아니라, 신체의 안녕을 돕는 세포부터 귀하 본인의 목숨을 포합합니다.</p>

                    <p className="doc-p">5-3-1. 보고된 기록에 따르면, 해당 절차는 신체 부위의 순차적 제거와 동시에 내부 장기의 위치를 반전시키는 과정으로 구성되어 있었습니다.</p>
                    <p className="doc-p">5-3-2. 관측된 바에 따르면 피해자는 극심한 고통에 비명을 질렀고, 짧게 환자로 인정받는 듯 행동했으나, 해당 시점에서 피해자는 창자와 위장의 위치가 변경되어 있던 것으로 판단됩니다. 이어진 피해자의 영원한 침묵으로 인해 자세한 경위를 파악할 수 없습니다.</p>
                    <p className="doc-p">5-3-3. 이후 시신은 확인되지 않았으며, 방 내부에 보관된 사례 또한 보고되지 않았습니다.</p>

                    <p className="doc-p">5-4. 추방 조치가 내려진 대상은 반드시 의무실을 포기하고 다른 공간으로 이동하십시오.</p>
                </article>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/6f/7')}>
                    ← 이전 위치로 돌아가기
                </button>
            </div>
        </div>
    );
}
