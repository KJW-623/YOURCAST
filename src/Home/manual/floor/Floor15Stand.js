import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor15Stand() {
    const navigate = useNavigate();
    return (
        <div className="elev-page">
            <div className="elev-panel" style={{ padding: '32px 24px' }}>
                <div className="elev-display">
                    <span className="elev-range">15F · Stand</span><span className="elev-indicator" />
                </div>

                <article className="manual-doc">
                    <h1 className="doc-title">스탠드 앞</h1>

                    <div className="doc-section">

                        <p className="doc-p">
                            스탠드 앞은 외형상으로는 짧은 휴식이나 대화를 위한 장소로 조성된 듯 보입니다.
                            낮은 조도의 조명, 부드러운 의자, 음료 디스펜서 등은 분명히 편안함을 연출하나, 이는 안도감을 미끼로 삼아 귀하를 무력화하는 함정으로도 작동합니다.
                        </p>

                        <p className="doc-p">1. 『스탠드 앞』은 기본적으로 어둡습니다. 조명은 항상 희미하게만 켜져 있어 주위를 명확히 식별하기 어렵습니다.</p>
                        <p className="doc-p">1-1. 시야가 닿지 않는 곳에서 움직임을 느끼는 경우가 많습니다. 그러나 시야 확보를 위해 라이트나 불빛을 비추는 것은 권장되지 않습니다. 강한 빛을 쐴 경우, ‘그것들’이 귀하의 존재를 인지하는 속도가 빨라지는 것으로 확인되었습니다.</p>
                        <p className="doc-p">시야 불량은 오히려 생존에 필요한 완충 장치일 수 있습니다. 귀하는 어둠을 불편해할 것이 아니라, 그것을 방패로 삼으십시오.</p>

                        <p className="doc-p">2. 공간 한쪽에는 음료 디스펜서가 놓여 있습니다. 이 장치는 겉보기에는 정상적인 상태로 작동하는 듯하나, 실제로는 거의 모든 경우에서 아무것도 나오지 않거나 맹물만 제공합니다.</p>
                        <p className="doc-p">2-1. 출력되는 것이 『물』임을 귀하께서 육안으로 판단할 수 있을 만큼 분명하다면, 마셔도 무방합니다. 지금까지의 사례에서 맹물은 특별한 부작용을 일으킨 적이 없습니다.</p>
                        <p className="doc-p">2-2. 그러나 낮은 확률로, 인체 일부로 보이는 고깃덩어리가 디스펜서로부터 떨어질 수 있습니다. 형태는 일정하지 않으며, 손가락, 귀, 내장 조각 등으로 보고되었습니다.</p>
                        <p className="doc-p">해당 고기는 뜨겁지도 차갑지도 않으며, 그저 방금 막 ‘잘려져 나온’ 것처럼 신선한 상태를 유지합니다.</p>
                        <p className="doc-p">2-2-1. 절대 섭취하지 마십시오. 섭취자의 사례는 존재하지 않으며, 이는 섭취 이후 기록이 남지 않았다는 뜻과 같습니다.</p>

                        <p className="doc-p">3. 분리수거함의 내부에는 종종 불길한 인형이 들어 있습니다.</p>
                        <p className="doc-p">3-1. 인형의 외형은 대체로 해진 천으로 구성되어 있으나, 이상하게도 귀하는 그것을 가지고 싶다는 충동을 받게 됩니다. 특히 다른 생존자가 근처에 있을 경우, 인형을 지참해 함께 가야 한다는 욕망이 강하게 발생합니다.</p>
                        <p className="doc-p">3-2. 결코 인형을 지참하지 마십시오. 그 인형은 사람과의 접촉 횟수에 따라 점차 변형됩니다. 처음에는 단순한 모양새를 띠지만, 여러 인원과 마주할수록 눈, 입, 손가락과 같은 인체적 특징을 모방하기 시작합니다.</p>
                        <p className="doc-p">변형이 일정 수준 이상 진행된 인형은 살아 있는 인간과의 구분이 어려워지며, 관측자의 말에 따르면 어느 순간 인형과 함께 있던 생존자가 흔적도 없이 사라진 경우가 보고되었습니다.</p>

                        <p className="doc-p">4. 『스탠드 앞』의 중심에는 소파가 있습니다. 이는 가장 ‘편안한 휴식처’처럼 보이지만, 현재는 그것들의 휴게 공간으로 점유되어 있습니다.</p>
                        <p className="doc-p">4-1. 소파에 접근하지 마십시오. 앉아 있는 존재는 인간과 유사한 실루엣을 띠지만, 빛이 스치면 인체의 골격이 잘못 꺾인 듯 뒤틀린 형태가 잠시 드러납니다.</p>
                        <p className="doc-p">그것들과 시선을 마주하지 마십시오. 응시하는 순간, 귀하의 호흡과 맥박은 그것들의 호흡 리듬에 동기화되며, 이후 귀하는 의식적으로 움직이기 힘든 감각을 느낄 것입니다.</p>
                        <p className="doc-p">4-2. 소파에 가까이 다가간 인원은 잠깐 쉬고 온다는 말을 남기고 앉은 후 생명 활동이 정지한 것으로 보입니다.</p>
                    </div>
                </article>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/15f/15')}>← 이전 위치로 돌아가기</button>
            </div>
        </div>
    );
}
