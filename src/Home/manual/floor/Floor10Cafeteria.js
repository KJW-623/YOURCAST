import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor10Cafeteria() {
    const navigate = useNavigate();

    return (
        <div className="elev-page">
            <div className="elev-panel" style={{ padding: '32px 24px' }}>
                <div className="elev-display">
                    <span className="elev-range">10F · 사원식당</span>
                    <span className="elev-indicator" />
                </div>
                <article className="manual-doc">
                    <h1 className="doc-title">사원식당</h1>

                    <div className="doc-section">
                        <p className="doc-p">
                            1. 해당 공간 조사에는 직원용 출입카드의 소지가 권장됩니다. 출입증 보유 여부를 확인해 주십시오.
                            귀하께서 출입증을 소지하지 않은 상태였다고 하더라도 낮은 확률로 바지 주머니에서 출입증이 발견될 것입니다.
                        </p>

                        <p className="doc-p">
                            <span className="hub-strike">출입증이 없는 상태로 사원식당에 진입한 것으로 추정되는 직원 A가 아직까지 발견되지 않고 있음,
                            이후에 내부 조사한 직원 B는 노른자 부분이 A의 눈동자 색과 동일한 계란 프라이를 발견했음,
                            진짜 A의 눈동자인지 확실히 밝혀지지 않았으나 주의할 것.</span> <span>현재 2의 항목에 기반하여 출입증 없이도 진입이 가능함을 확인함.</span>
                            </p>
                    </div>
                    <br/>
                    <div className="doc-section">
                        <p className="doc-p">
                            2. 내부를 안전하게 조사하고 싶다면 귀하께는 두 가지의 선택지가 존재합니다.
                            음식을 주문하지 않고 진입할 경우에 대해서는 알려진 바가 없으므로,
                            이하 내용을 참고하여 귀하께 적절한 방법을 이용하여 주십시오.
                        </p>
                        <p className="doc-p">2-1. 직원용 출입카드 이용</p>
                        <p className="doc-p">
                            식사 전후로 바코드를 찍으면 직원임이 인식돼 한 달 뒤에 처리되는 방식이므로 귀하께서 당장 음식 값을
                            지불하실 필요는 없습니다. 특히나 귀하께서 식사가 제공되는 성주관에 거주 중일 경우는 더더욱 음식 값을
                            상정하실 필요가 없으나, 해당 사항은 일반 상식이 통할 때의 상황이므로 지금은 특수 개체 『셰프』가 불시에
                            『음식 값』을 요구할 것까지 고려해야 합니다. 따라서 가급적 저렴한 메뉴를 골라주십시오.
                        </p>
                        <p className="doc-p">2-1-1. 후술하겠으나 이곳에서의 음식 값은 단순히 엔화나 릿달러가 아닙니다...</p>
                        <p className="doc-p">2-1-2. 타인의 카드를 도용했을 경우의 상황에 대해서는 밝혀진 바가 없으니 각별히 주의하여 주십시오.</p>
                        <p className="doc-p">2-2. 식권 이용</p>
                        <p className="doc-p">
                            신체의 일부를 대가로 직원을 통하여 식권을 구매할 수 있습니다.
                            진열되어 있는 음식 모형 중 원하는 것을 가리키며 주문하면 직원이 식권을 내어주며 조리를 준비할 것입니다.
                            또한, 음식 값으로 당신의 『무언가』 가 요구됩니다.
                        </p>
                        <p className="doc-p">2-2-1. 해당 가격은 그들의 판단에 따라 임의로 선택됩니다.</p>
                        <p className="doc-p">2-2-2.</p>
                        <p className="doc-p">
                            2-2-3. 만약 해당 부위가 당신에게 꼭 필요한 신체부위로 판단된다면, 가격을 최대 2회까지 흥정할 수 있으나...
                        </p>
                        <p className="doc-p">
                            - 리즈링 직원 C의 경우, 고로케 값으로 손가락 2개를 요구당한 것은 과한 처사라며 직원과 오랜 시간
                            실랑이를 하였다는 증언이 나옴...
                        </p>
                    </div>
                    <br/>
                    <div className="doc-section">
                        <p className="doc-p">
                            3. 메뉴 선정에 있어서는 최대한 값싼 메뉴를 권장합니다. 값비싼 메뉴의 경우 요구되는 『음식 값』을 지불하기
                            어려워지므로 양해 바랍니다.
                        </p>
                        <p className="doc-p">또한 식당의 직원들은 당신이 식당 내에서 비명을 지를 상황을 달가워하지도 않을 것이므로 유의해 주십시오.</p>
                        <p className="doc-p">3-1. 특히 값비싼 일부 메뉴의 경우, 7~10층에서 사망한 인원의 유해 일부가 발견되는 상황이...</p>
                        <p className="doc-p">3-1-1. 만약 반드시 유해를 수집해야 하는 대상이 있을 경우...</p>
                    </div>
                    <br/>
                    <div className="doc-section">
                        <p className="doc-p">4. 일부 확률로 특수 개체가 출연합니다.</p>

                        <p className="doc-p">4-1. 『만담꾼』</p>
                        <p className="doc-p">남성, 신장 약 175cm, 갈색 염색모, 20대 중반 추정, 웃는 상.</p>
                        <p className="doc-p">해당 개체가 말을 걸어오며 합석을 제안할 수 있습니다...</p>
                        <p className="doc-p">4-1-2. 귀하의 일행이 2인 이상일 경우...</p>
                        <p className="doc-p">4-1-2. 귀하께서 단독으로 진입 후...</p>
                        <p className="doc-p">코즈프로 소속 아이돌 R군은 사원식당 앞을 배회하던 중...</p>

                        <p className="doc-p">4-2. 『셰프』</p>
                        <p className="doc-p">외관과 무관하게 흰 가운을 입고 있음</p>
                        <p className="doc-p">4-2.1.</p>
                        <p className="doc-p">4-2-2.</p>
                    </div>
                    <br/>
                    <div className="doc-section">
                        <p className="doc-p">
                            5. 식사를 마친 경우 귀하께서는 낮은 확률로 『카페 시나몬 무료 시식권』을 제공받을 수 있습니다.
                            해당 확률은 음식의 가격과 비례하는 것으로 추정됩니다.
                        </p>
                    </div>
                </article>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/9f/10')}>
                    ← 이전 위치로 돌아가기
                </button>
            </div>
        </div>
    );
}
