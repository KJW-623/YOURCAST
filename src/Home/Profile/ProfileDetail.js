import React from 'react';
import { useParams } from 'react-router-dom';
import './ProfileDetail.css';

const TEAM_DATA = {
    'fine': [
        { name: '텐쇼인 에이치', image: 'https://drive.google.com/uc?export=view&id=17NjnRK7n00JICv3a7eviLpINfKp8ccAw' },
        { name: '히비키 와타루', image: 'https://drive.google.com/uc?export=view&id=1zeq2yoSt6JUINh1ruEKRQB9rIT9FxuN7' },
        { name: '후시미 유즈루', image: 'https://drive.google.com/uc?export=view&id=1f1eoRQEiexvUXwFW3GH3yVtUBgErWUIN' },
        { name: '히메미야 토리', image: 'https://drive.google.com/uc?export=view&id=1EgVSp8_CuV9IUURbn9CvVmCOSBXWSItI' },
    ],
    'trickstar': [
        { name: '아케호시 스바루', image: 'https://drive.google.com/uc?export=view&id=FILE_ID2' },
        { name: '히다카 호쿠토', image: 'https://drive.google.com/uc?export=view&id=FILE_ID4' },
        { name: '유우키 마코토', image: 'https://drive.google.com/uc?export=view&id=FILE_ID5' },
        { name: '이사라 마오', image: 'https://drive.google.com/uc?export=view&id=FILE_ID5' },
    ],
    '유성대': [
        { name: '모리사와 치아키', image: 'https://drive.google.com/uc?export=view&id=FILE_ID3' },
        { name: '신카이 카나타', image: 'https://drive.google.com/uc?export=view&id=FILE_ID6' },
        { name: '나구모 테토라', image: 'https://drive.google.com/uc?export=view&id=FILE_ID7' },
        { name: '타카미네 미도리', image: 'https://drive.google.com/uc?export=view&id=FILE_ID6' },
        { name: '센고쿠 시노부', image: 'https://drive.google.com/uc?export=view&id=FILE_ID7' },
    ],
    '알칼로이드': [
        { name: '아마기 히이로', image: 'https://drive.google.com/uc?export=view&id=FILE_ID3' },
        { name: '시라토리 아이라', image: 'https://drive.google.com/uc?export=view&id=FILE_ID6' },
        { name: '카제하야 타츠미', image: 'https://drive.google.com/uc?export=view&id=FILE_ID7' },
        { name: '아야세 마요이', image: 'https://drive.google.com/uc?export=view&id=FILE_ID6' },
    ],
    'Eden': [
        { name: '란 나기사', image: 'https://drive.google.com/uc?export=view&id=FILE_ID3' },
        { name: '토모에 히요리', image: 'https://drive.google.com/uc?export=view&id=FILE_ID6' },
        { name: '사에구사 이바라', image: 'https://drive.google.com/uc?export=view&id=FILE_ID7' },
        { name: '사자나미 쥰', image: 'https://drive.google.com/uc?export=view&id=FILE_ID6' },
    ],
    '발키리': [
        { name: '이츠키 슈', image: 'https://drive.google.com/uc?export=view&id=FILE_ID3' },
        { name: '카게히라 미카', image: 'https://drive.google.com/uc?export=view&id=FILE_ID6' },
    ],

    '트윙크': [
        { name: '아오이 히나타', image: 'https://drive.google.com/uc?export=view&id=FILE_ID3' },
        { name: '아오이 유우타', image: 'https://drive.google.com/uc?export=view&id=FILE_ID6' },
    ],

    '크레이지비': [
        { name: '아마기 린네', image: 'https://drive.google.com/uc?export=view&id=FILE_ID3' },
        { name: 'HiMERU', image: 'https://drive.google.com/uc?export=view&id=FILE_ID6' },
        { name: '오우카와 코하쿠', image: 'https://drive.google.com/uc?export=view&id=FILE_ID3' },
        { name: '시이나 니키', image: 'https://drive.google.com/uc?export=view&id=FILE_ID6' },
    ],
    '언데드': [
        { name: '사쿠마 레이', image: 'https://drive.google.com/uc?export=view&id=FILE_ID3' },
        { name: '하카제 카오루', image: 'https://drive.google.com/uc?export=view&id=FILE_ID6' },
        { name: '오오가미 코가', image: 'https://drive.google.com/uc?export=view&id=FILE_ID3' },
        { name: '오토가리 아도니스', image: 'https://drive.google.com/uc?export=view&id=FILE_ID6' },
    ],
    '라빗츠': [
        { name: '마시로 토모야', image: 'https://drive.google.com/uc?export=view&id=FILE_ID3' },
        { name: '니토 나즈나', image: 'https://drive.google.com/uc?export=view&id=FILE_ID6' },
        { name: '시노 하지메', image: 'https://drive.google.com/uc?export=view&id=FILE_ID3' },
        { name: '텐마 미츠루', image: 'https://drive.google.com/uc?export=view&id=FILE_ID6' },
    ],
    '홍월': [
        { name: '하스미 케이토', image: 'https://drive.google.com/uc?export=view&id=FILE_ID3' },
        { name: '키류 쿠로', image: 'https://drive.google.com/uc?export=view&id=FILE_ID6' },
        { name: '칸자키 소마', image: 'https://drive.google.com/uc?export=view&id=FILE_ID3' },
    ],
    '나이츠': [
        { name: '스오우 츠카사', image: 'https://drive.google.com/uc?export=view&id=FILE_ID3' },
        { name: '츠키나가 레오', image: 'https://drive.google.com/uc?export=view&id=FILE_ID6' },
        { name: '세나 이즈미', image: 'https://drive.google.com/uc?export=view&id=FILE_ID7' },
        { name: '사쿠마 리츠', image: 'https://drive.google.com/uc?export=view&id=FILE_ID6' },
        { name: '나루카미 아라시', image: 'https://drive.google.com/uc?export=view&id=FILE_ID7' },
    ],
    '스위치': [
        { name: '사카사키 나츠메', image: 'https://drive.google.com/uc?export=view&id=FILE_ID3' },
        { name: '아오바 츠무기', image: 'https://drive.google.com/uc?export=view&id=FILE_ID6' },
        { name: '하루카와 소라', image: 'https://drive.google.com/uc?export=view&id=FILE_ID3' },
    ],
    '마무': [
        { name: '미케지마 마다라', image: 'https://drive.google.com/uc?export=view&id=FILE_ID3' },
    ],
    // 👉 필요한 인물별로 계속 추가
};

const ProfileDetail = () => {
    const { name } = useParams();
    const team = TEAM_DATA[name] || [];

    return (
        <div className="detail-wrapper">
            <h1 className="detail-title">{name}</h1>
            <div className="team-scroll">
                {team.map((member, idx) => (
                    <div key={idx} className="person-card">
                        <img src={member.image} alt={member.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfileDetail;
