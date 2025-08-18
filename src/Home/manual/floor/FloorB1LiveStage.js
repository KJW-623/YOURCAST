import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function FloorB1LiveStage() {
    const navigate = useNavigate();

    return (
        <div className="elev-page">
            <div className="elev-panel" style={{ padding: '32px 24px' }}>
                <div className="elev-display">
                    <span className="elev-range">B1</span>
                    <span className="elev-indicator" />
                    <span className="current-floor">Live Stage</span>
                </div>

                <div className="manual-doc">
                    <h1 className="doc-title">라이브 스테이지</h1>

                    <div className="doc-section">
                        <p className="doc-p">1. 본 항목은 지하 스테이지에 관한 사항을 다룹니다.
                            <br/> 단, 귀하가 입장 시점에 해당 스테이지 내에서 식별 불가능한 인물을 발견한 경우, 1항에서 6항까지의 조항은 무의미하므로 즉시 7항으로 이동하십시오.</p>

                        <p className="doc-p">2. 지하 스테이지 로비 구역에서는 별도의 회수 대상이나 탐색 요소가 보고된 바 없습니다.
                            <br/> 2-1. 귀하는 입장 게이트를 통해 지하 라이브 스테이지 본구역으로 진입할 수 있습니다.</p>

                        <p className="doc-p">3. 귀하께서 입장하시는 시점에 타 인원이 존재하지 않는 경우, 해당 장소는 귀하가 인지하고 있는 통상 상태의 지하 라이브 스테이지로 간주됩니다.</p>

                        <p className="doc-p">3-1. 관객석 구역은 조도가 낮으며, 전 구간에서 외부 소음·인기척·기타 활동 징후가 감지되지 않습니다.</p>

                        <p className="doc-p">4. 스테이지 위는 통상적으로 비어 있으며, 향후 사용 대기 상태로 추정됩니다.</p>

                        <p className="doc-p">4-1. 드물게 스테이지 상부에 다음과 같은 집기가 배치되어 있는 경우가 있습니다.
                            <br/> - 중앙 부근: 길이 약 2m의 장방형 책상 1대
                            <br/> - 측면 구역: 의자 다수
                            <br/> 이들 용도는 현 시점에서 명확히 파악되지 않았으므로 불필요한 접촉을 삼가십시오.</p>

                        <p className="doc-p">4-1-1. 해당 집기는 특정 조건 충족 시에만 사용되는 것으로 추정되며, 발동 조건은 미확인 상태입니다</p>

                        <p className="doc-p">5. 지하 스테이지를 경유하여, 본 건물의 전혀 다른 구역으로 이행되는 사례가 보고되었습니다.
                            <br/> 5-1. 해당 이행 과정 자체에는 물리적 위해가 확인되지 않았으나, 도착 지점 주변 환경이 안전하다는 보장은 없습니다.
                            <br/> 5-2. 이행 직후 즉시 주변의 인원·구조물·조명 상태를 확인하시고, 위험이 감지될 경우 원 경로로 복귀할 방법을 확보하십시오.</p>

                        <p className="doc-p">6. 지하 스테이지 내부 구조는 간헐적으로 변경되는 경우가 보고되었습니다.
                            <br/> 6-1. 변경 시점은 외부에서 감지되지 않으며, 귀하의 위치 인식에도 지연이 발생할 수 있습니다.
                            <br/> 6-2. 구조 변경 후 기존 출입구가 소실·이동·폐쇄되는 사례가 있으니, 진입 직후 주변 동선을 숙지해 두십시오.</p>

                        <p className="doc-p">7. 지하 스테이지 진입 시, 무대 조명이 단일 스포트라이트만을 남기고 전부 소등되는 경우, 이하 조항을 즉시 참고하여 이행하십시오.</p>

                        <p className="doc-p"> 7-1. 스포트라이트는 무대 중앙을 고정적으로 비추며, 해당 영역 외의 시야 확보는 제한됩니다.</p>

                        <p className="doc-p">8. 인간의 형태로 보이지 않는 인원(이하 『지원자』)들과는 어떠한 교류도 하지 마십시오.</p>

                        <p className="doc-p"> 8-1. 일부 개체는 시선을 맞출 경우, 시야에 잔상·점멸 현상을 유발하는 것이 확인되었습니다.</p>

                        <p className="doc-p"> 8-2. 발화 내용을 해석하려 시도하지 마십시오. 장기 노출 시 청각 피로 및 인지 혼란 가능성이 보고되었습니다.</p>

                        <p className="doc-p">9. 만일 귀하가 위 인원군 사이에서 인간형 외형을 지닌 개체 발견 시, 다음의 지침을 따르십시오.</p>

                        <p className="doc-p"> 9-1. 귀하께서 발견한 개체가 인간의 신체 부위와 일치하지 않는 사항을 보유하고 있는지 파악하십시오. 해당 과정은 귀하께서 인식한 대상이 『지원자』 개체일 가능성을 상정하여, 반드시 3초 이내로 이행되어야 합니다.</p>

                        <p className="doc-p"> 9-2. 대상이 정말로 외형적 이상을 갖지 않는 『인간』 개체일 경우, 대상은 다음과 같은 외형을 띄고 있을 것입니다. 본 지침서는 이하의 개체를 『까마귀』로 명명합니다. 
                            <br/> - 애쉬핑크빛 머리카락과 녹안. 
                            <br/> - 눈밑과 목의 점. 
                            <br/> - 핏기 없는 어두운 피부.</p>
                    </div>
                </div>
            </div>

            <button className="back-link" onClick={() => navigate('/manual/b1/b1')}>
                ← 이전 위치로 돌아가기
            </button>
        </div>
    );
}
