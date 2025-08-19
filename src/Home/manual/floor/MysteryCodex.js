import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MysteryCodex.css';

export default function MysteryCodex() {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 600);
        return () => clearTimeout(timer);
    }, []);

    const chapters = [
        {
            title: '一 ｜ 地下',
            sections: ['로비', '백스테이지', '라이브 스테이지']
        },
        {
            title: '二 ｜ 1階',
            sections: ['로비', '카페 시나몬']
        },
        {
            title: '三 ｜ 5階',
            sections: ['배움터', '대도구실']
        },
        {
            title: '四 ｜ 6階',
            sections: ['의상룸']
        },
        {
            title: '五 ｜ 7階',
            sections: ['NEW DIMENSION', '의무실']
        },
        {
            title: '六 ｜ 8階',
            sections: ['녹화부스', '보컬룸', '샤워룸', '연주스튜디오', '간이스튜디오']
        },
        {
            title: '七 ｜ 9階',
            sections: ['댄스룸 밀집구역']
        },
        {
            title: '八 ｜ 10階',
            sections: ['미팅룸', '사원식당']
        },
        {
            title: '九 ｜ 12階',
            sections: ['RHYTHM LINK', '공중정원']
        },
        {
            title: '十 ｜ 15階',
            sections: ['트레이닝룸', '스탠드 앞']
        },
        {
            title: '十一 ｜ 18階',
            sections: ['COSMIC PRODUCTION']
        },
        {
            title: '十二 ｜ 19階',
            sections: ['레스팅룸']
        },
        {
            title: '十三 ｜ 20階',
            sections: ['STARMAKER PRODUCTION', '응접실']
        },
        {
            title: '十四 ｜ 屋上',
            sections: ['헬리포트']
        }
    ];

    return (
        <div className="codex-wrap">
            <div className="crt">
                <h1 className="codex-title">⸸ 禁書錄 ⸸</h1>

                <div className={`codex-body ${visible ? 'show' : ''}`}>
                    {chapters.map((ch, idx) => (
                        <div key={idx} className="codex-chapter">
                            <h2>{ch.title}</h2>
                            <ul>
                                {ch.sections.map((sec, i) => (
                                    <li key={i}>{sec}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="codex-actions">
                    <button className="btn ghost" onClick={() => navigate('/manual/mystery/chamber')}>
                        ← 경고문으로 돌아가기
                    </button>
                    <button className="btn proceed" onClick={() => navigate('/manual/mystery/codex/read')}>
                        지침서 본문으로 진입 →
                    </button>
                </div>
            </div>
        </div>
    );
}
