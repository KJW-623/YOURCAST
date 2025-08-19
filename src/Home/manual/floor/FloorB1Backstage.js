import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function FloorB1Backstage() {
    const navigate = useNavigate();

    return (
        <div className="elev-page">
            <div className="elev-panel" style={{ padding: '32px 24px' }}>
                <div className="elev-display">
                    <span className="elev-range">B1 · 백스테이지 지침서</span>
                    <span className="elev-indicator" />
                </div>

                <article className="manual-doc">
                    <h1 className="doc-title">백스테이지</h1>

                    <p className="doc-p">
                        1. 비상구를 열면 즉시 느껴지는 불길한 기운이 보고되었습니다.
                        이는 단순한 심리적 반응이 아닌, 공간 자체의 이질적인 위화감으로 해석됩니다.
                    </p>

                    <p className="doc-p">
                        1-1. 해당 공간에서의 직접적인 위험 요소가 확인된 것은 최근의 일이므로,
                        해당 건이 이례적인 사례였을 상황에 대한 논의가 진행 중입니다.
                    </p>

                    <p className="doc-p">
                        1-2. 현재까지의 관찰 결과, 백스테이지는 지하에서 옥상까지 이어지는 독립적 통로로 기능하며,
                        통상적 경로를 우회하여 빠르게 층간 이동이 가능합니다.
                    </p>

                    <p className="doc-p">
                        1-3. 비상 탈출로로서의 기능도 이론상 가능하나,
                        내부의 공간적 안정성이 시시각각 변화하는 것이 보고되었으므로 맹목적 신뢰는 지양하십시오.
                    </p>

                    <p className="doc-p">
                        2. 백스테이지가 극단의 소유에 놓인 이래, 공간의 성질은 즉시 변화하였음이 확인되었습니다.
                    </p>

                    <p className="doc-p">
                        2-1. 본 상황의 위험도는 수직적으로 상승하며,
                        단순 이동 통로가 아닌 극단 전용의 무대 뒤 통로로 변모합니다.
                    </p>

                    <p className="doc-p">
                        2-2. 극단 소유 시, 귀하가 해당 공간에 발을 들이는 행위는 곧 『무단 출입』으로 간주됩니다.
                        이는 극단의 관계자가 아닌 인원에게 곧바로 위협을 가하는 요인으로 작용합니다.
                    </p>

                    <p className="doc-p">
                        2-3. 공식적으로는 『관계자 외 출입 금지』 표지가 확인되며,
                        여기서 말하는 ‘관계자’란 전적으로 극단과 연을 맺은 인원만을 의미합니다.
                    </p>

                    <p className="doc-p">
                        3. 극단 소유 하에서 백스테이지의 가장 위험한 특성은 공간적 변이입니다.
                    </p>

                    <p className="doc-p">
                        3-1. 이 시점에서 통로는 단순히 건물 내 특정 층과 층을 연결하는 물리적 경로가 아니게 됩니다.
                    </p>

                    <p className="doc-p">
                        3-2. 공간 이동이 단순한 ‘순간이동’이 아닌,
                        극단의 연출 행위처럼 연속된 장면 전환의 형태로 이루어집니다.
                    </p>

                    <p className="doc-p">3-3. 다만 그 도착지는 보장되지 않습니다.</p>

                    <p className="doc-p">
                        3-4. 『입구도 출구도 없는 공간』에 떨어질 경우,
                        귀하에게 주어진 천명이 짧기를 기도하십시오.
                    </p>
                </article>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
                <button className="back-link" onClick={() => navigate('/manual/b1/b1')}>
                    ← 이전 위치로 돌아가기
                </button>
            </div>
        </div>
    );
}
