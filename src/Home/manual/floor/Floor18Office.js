import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloorCommon.css';

export default function Floor18Office() {
    const navigate = useNavigate();
    return (
        <div className="elev-page restricted-page">
            <div className="elev-panel" style={{ padding: '32px 24px' }}>
                <div className="elev-display">
                    <span className="elev-range">18F · COSMIC PRODUCTION</span>
                    <span className="elev-indicator" />
                </div>
                <article className="manual-doc">
                    <h1 className="doc-title">COSMIC PRODUCTION 사무소</h1>

                    <p className="doc-p">
                        코즈믹 프로덕션(이하 ‘코즈프로’) 사무소는 겉보기에는 여러분이 기억하는 아이돌 사무소의 모습과 다르지 않습니다.
                        그러나 귀하가 이곳을 방문하는 순간, 몇 가지 예기치 못한 현상에 직면할 수 있습니다.
                        본 지침서는 그러한 현상들에 대한 최소한의 주의 사항을 기록한 것입니다.
                    </p>

                    <p className="doc-p">1. 코즈프로 사무소 진입 직후, 귀하는 편지가 날아드는 상황을 맞닥뜨릴 수 있습니다.</p>

                    <p className="doc-p">
                        이 편지들은 본래 안티 팬 등의 악성 및 협박 편지를 걸러내기 위해 회사가 검토한 뒤 아이돌에게 전달하는 용도였으나,
                        일부는 알 수 없는 이유로 이 공간에 남아 있습니다.
                    </p>

                    <p className="doc-p">1-1. 남겨진 협박 편지는 때때로 방문자를 향해 날아듭니다.
                        이때 맞으면 피가 흐르지는 않지만, 귀하의 심리 상태가 급격히 침식되는 사례가 확인되었습니다.
                    </p>

                    <p className="doc-p">1-2. 상세한 내용의 확인은 삼가십시오.</p>

                    <p className="doc-p">
                        1-2-1. 이미 확인했을 경우, 편지에 담긴 비난, 조롱 또는 협박의 논리에 귀하가 동조하지 않도록 각별히 주의해야 합니다.
                        동조하는 순간, 귀하는 아이돌이 아니라 편지를 쓴 자의 입장으로 이동할 위험이 있습니다.
                    </p>

                    <p className="doc-p">
                        이후에 대해서는 추가적인 조사가 이루어지지 않았기에 지침 작성이 불가하므로 작성을 임의 종료합니다.
                    </p>
                </article>
            </div>

            <button className="back-link" onClick={() => navigate('/manual/15f/18')}>← 이전 위치로 돌아가기</button>
        </div>
    );
}
