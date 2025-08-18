import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor1Cafe() {
    const navigate = useNavigate();

    return (
        <div className="elev-page">
            <div className="elev-panel" style={{ padding: '32px 24px' }}>
                <div className="elev-display">
                    <span className="elev-range">1F · 카페 시나몬 지침서</span>
                    <span className="elev-indicator" />
                </div>

                <article className="manual-doc">
                    <h1 className="doc-title">카페 시나몬</h1>

                    <p className="doc-p">1. 카페 시나몬은 로비의 항목에서 기록된 『의식체』가 접근하지 못하는 구역입니다. 특별히 준수해야 할 규정이 존재하지 않으므로, 자유롭게 휴식을 취하십시오.</p>

                    <p className="doc-p">2. 카페 시나몬의 신메뉴는 특별한 효력을 갖는 것으로 나타납니다.</p>
                    <br/>
                    <p className="doc-p">상세한 효력과 가격은 다음과 같습니다.</p>
                    <br/>
                    <p className="doc-p">Holy Angel's 크레이프 
                        <br/> 밀크 크레이프 케이크와 솜사탕 
                        <br/> 효과: 정신력 스탯 1 회복, 망상의 완화 
                        <br/> 가격: 어린 시절(만 10세가 되기까지) 순수하게 웃은 모든 기억 소거. (되돌릴 수 없으며, 해당 기억의 빈 자리에 하얀 노이즈가 생김.)</p>

                    <p className="doc-p">치즈 HAPPY STREAM 
                        <br/> 치즈볼과 감자튀김 
                        <br/> 효과: 2일간 근력 스탯 +1, 비무장 상태에서의 보너스 다이스 +1 
                        <br/> 가격: 3일간 자신이 하는 모든 감정 표현에 불안감을 느끼게 됨</p>

                    <p className="doc-p">언리미티드☆딸기 
                        <br/> 휘핑크림이 올라간 딸기 라떼 
                        <br/> 효과: 2일간 관찰력 스탯 +2. 
                        <br/> 가격: 2일간 자아 감각 약화, 현실감 상실.</p>

                    <p className="doc-p">Kiss of 레몬에이드 
                        <br/> 블루 레몬 에이드 
                        <br/> 효과: 민첩 스탯 +1, 민첩 판정 재굴림 1회 기회 
                        <br/> 가격: 희망과 절망 중 무작위로 선택된 감정을 3일간 갖지 못함.</p>

                    <p className="doc-p">Awakening 초코 
                        <br/> 휘핑크림이 올라간 초코 라떼 
                        <br/> 효과: 체력 1칸 회복, 정신 스탯 0시 자동 1로 회복 (1회) 
                        <br/> 가격: 인생의 목표로 삼은 것의 완전한 망각</p>

                    <p className="doc-p">오늘 밤 요거트의 저택에서 
                        <br/> 라즈베리 요거트 케이크 
                        <br/> 효과: 정신 스탯 2 회복 
                        <br/> 가격: 비공석 캐릭터 중 가장 소중한 인물의 목소리에 대한 기억. (이름과 얼굴은 기억하나, 목소리는 영원히 잊게 됨. 이후에 목소리를 듣더라도 그 대상의 목소리를 구분하지 못함.)</p>

                    <p className="doc-p">하트 프리즘 크레페 
                        <br/> 초코 바나나 크레이프 
                        <br/> 효과: 섭취 후 어떤 판정이든 실패 시 재굴림 1회 가능 
                        <br/> 가격: 심장이 외부 존재의 손에 쥐어짐 (즉시 발동. 심장이 쥐어짜지는 격통으로 체력 -1. 이후 2일 동안 강한 두근거림 및 원인 모를 강박 지속.)</p>

                    <p className="doc-p">손끝의 캐모마일 허니 
                        <br/> 캐모마일 티 
                        <br/> 효과: 공포 및 공황을 비롯한 광기 즉시 회복 
                        <br/> 가격: '손끝의 온기' 상실, 누군가 닿을 때마다 지나치게 차갑게 느껴짐. 사람과 닿는 상황을 꺼리게 됨.</p>

                    <p className="doc-p">까망베르는 취향대로 
                        <br/> 까망베르 치즈 케이크 
                        <br/> 효과: 체력 1칸 회복, 출혈·독 등 지속성 체력 저하 1일간 정지 
                        <br/> 가격: 가장 좋아하던 맛의 미각 상실. 이후 해당 음식을 먹어도 모두 까망베르 케이크 맛으로 느껴짐.</p>

                    <p className="doc-p">멜티♡파르페 
                        <br/> 당근 젤리가 올라간 사과향 파르페 
                        <br/> 효과: 관찰 +1, 민첩 +1 (3시간), 1회 비밀 간파 
                        <br/> 가격: 공간에 함께 있는 모두에게 자신의 비밀이 눈에 보이는 형태로 드러남. (해당 캐릭터의 비밀이 뭔지는 개인 시스템으로 직접 물어볼 것. 단, 정말로 비밀이 없는 순수한 캐릭터일 경우 『비밀이 없다』는 사실이 공개됨.)</p>

                    <p className="doc-p">레드벨벳 색 약속 
                        <br/> 레드벨벳 케이크 
                        <br/> 효과: 정신 +1, 섭취 시점에 특정 M/NPC를 생각하면 떠올려진 쪽은 섭취 당사자에게 리얼타임 1시간 동안 맹목적 충성. 
                        <br/> 가격: 공석 캐릭터 중 가장 가까운 캐릭터의 사망을 확신하며, 본인이 죽였다고 착각하게 됨.</p>

                    <p className="doc-p">Voice of 소다 
                        <br/> 휘핑크림이 올라간 소다에이드 
                        <br/> 효과: 정신 +1, 비공석 캐릭터 상대로 설득 자동 성공 1회 (MPC 포함) 
                        <br/> 가격: 5일간 목소리를 빼앗김, 속삭이는 톤 이외의 소통 불가.</p>

                    <p className="doc-p">에메랄드 메론소다 
                        <br/> 휘핑크림이 올라간 메론 소다 
                        <br/> 효과: 행운 +1, 체력이 0이 되어 사망 시 1의 체력으로 부활. 
                        <br/> 가격: 기억과 기록 모두에서 당신이 태어난 사실이 없는 것이 됨. 모두가 당신의 생일을 잊으며, 존재의 의의를 완벽히 말소. (영구 적용)</p>

                    <p className="doc-p">너의 아메리카노 Be Ambitious!! 
                        <br/> 아이스 아메리카노 
                        <br/> 효과: 정신력 1 회복, 당일 조사 중 정신 롤 보너스 다이스 
                        <br/> 가격: 야망 또는 열망 중 하나의 소실 (어떤 목표든 무의미하게 느껴지게 됨)</p>

                    <p className="doc-p">No 모히또 yet 
                        <br/> 그린 민트 모히또 
                        <br/> 효과: 민첩 +1, 체력 +1 
                        <br/> 가격: 대상자의 비공석 캐릭터 중 소중한 캐릭터 한 명이 대상자를 5일간 잊음.</p>
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
