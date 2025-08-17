import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProfileDetail.css';


const TEAM_LOGOS = {
    fine: "fine.png",
    Trickstar: "Trickstar.png",
    유성대: "유성대.png",
    ALKALOID: "ALKALOID.png",
    Eden: "Eden.png",
    Valkyrie: "Valkyrie.png",
    Twink: "Twink.png",
    CrazyB: "CrazyB.png",
    UNDEAD: "UNDEAD.png",
    Rabits: "Rabits.png",
    홍월: "홍월.png",
    Knights: "Knights.png",
    Switch: "Switch.png",
    MaM: "MaM.png"
};

const TEAM_DATA = {
    /* ── 네가 넣어둔 TEAM_DATA 그대로 ── */
    fine: [
        { name: '텐쇼인 에이치', imageDefault: `${process.env.PUBLIC_URL}/standing/10101_텐쇼인 에이치(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/10101_텐쇼인 에이치(2).png` },
        { name: '히비키 와타루', imageDefault: `${process.env.PUBLIC_URL}/standing/10102_히비키 와타루(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/10102_히비키 와타루(2).png` },
        { name: '히메미야 토리', imageDefault: `${process.env.PUBLIC_URL}/standing/10103_히메미야 토리(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/10103_히메미야 토리(2).png` },
        { name: '후시미 유즈루', imageDefault: `${process.env.PUBLIC_URL}/standing/10104_후시미 유즈루(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/10104_후시미 유즈루(2).png` },
    ],
    Trickstar: [
        { name: '히다카 호쿠토', imageDefault: `${process.env.PUBLIC_URL}/standing/10201_히다카 호쿠토(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/10201_히다카 호쿠토(2).png` },
        { name: '아케호시 스바루', imageDefault: `${process.env.PUBLIC_URL}/standing/10202_아케호시 스바루(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/10202_아케호시 스바루(2).png` },
        { name: '유우키 마코토', imageDefault: `${process.env.PUBLIC_URL}/standing/10203_유우키 마코토(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/10203_유우키 마코토(2).png` },
        { name: '이사라 마오', imageDefault: `${process.env.PUBLIC_URL}/standing/10204_이사라 마오(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/10204_이사라 마오(2).png` },
    ],
    유성대: [
        { name: '모리사와 치아키', imageDefault: `${process.env.PUBLIC_URL}/standing/10301_모리사와 치아키(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/10301_모리사와 치아키(2).png` },
        { name: '신카이 카나타', imageDefault: `${process.env.PUBLIC_URL}/standing/10302_신카이 카나타(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/10302_신카이 카나타(2).png` },
        { name: '나구모 테토라', imageDefault: `${process.env.PUBLIC_URL}/standing/10303_나구모 테토라(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/10303_나구모 테토라(2).png` },
        { name: '타카미네 미도리', imageDefault: `${process.env.PUBLIC_URL}/standing/10304_타카미네 미도리(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/10304_타카미네 미도리(2).png` },
        { name: '센고쿠 시노부', imageDefault: `${process.env.PUBLIC_URL}/standing/10305_센고쿠 시노부(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/10305_센고쿠 시노부(2).png` },
    ],
    ALKALOID: [
        { name: '아마기 히이로', imageDefault: `${process.env.PUBLIC_URL}/standing/10401_아마기 히이로(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/10401_아마기 히이로(2).png` },
        { name: '시라토리 아이라', imageDefault: `${process.env.PUBLIC_URL}/standing/10402_시라토리 아이라(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/10402_시라토리 아이라(2).png` },
        { name: '아야세 마요이', imageDefault: `${process.env.PUBLIC_URL}/standing/10403_아야세 마요이(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/10403_아야세 마요이(2).png` },
        { name: '카제하야 타츠미', imageDefault: `${process.env.PUBLIC_URL}/standing/10404_카제하야 타츠미(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/10404_카제하야 타츠미(2).png` },
    ],
    Eden: [
        { name: '란 나기사', imageDefault: `${process.env.PUBLIC_URL}/standing/20101_란 나기사(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/20101_란 나기사(2).png` },
        { name: '토모에 히요리', imageDefault: `${process.env.PUBLIC_URL}/standing/20102_토모에 히요리(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/20102_토모에 히요리(2).png` },
        { name: '사에구사 이바라', imageDefault: `${process.env.PUBLIC_URL}/standing/20103_사에구사 이바라(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/20103_사에구사 이바라(2).png` },
        { name: '사자나미 쥰', imageDefault: `${process.env.PUBLIC_URL}/standing/20104_사자나미 쥰(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/20104_사자나미 쥰(2).png` },
    ],
    Valkyrie: [
        { name: '이츠키 슈', imageDefault: `${process.env.PUBLIC_URL}/standing/20201_이츠키 슈(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/20201_이츠키 슈(2).png` },
        { name: '카게히라 미카', imageDefault: `${process.env.PUBLIC_URL}/standing/20202_카게히라 미카(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/20202_카게히라 미카(2).png` },
    ],
    Twink: [
        { name: '아오이 히나타', imageDefault: `${process.env.PUBLIC_URL}/standing/20301_아오이 히나타(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/20301_아오이 히나타(2).png` },
        { name: '아오이 유우타', imageDefault: `${process.env.PUBLIC_URL}/standing/20302_아오이 유우타(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/20302_아오이 유우타(2).png` },
    ],
    CrazyB: [
        { name: '아마기 린네', imageDefault: `${process.env.PUBLIC_URL}/standing/20401_아마기 린네(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/20401_아마기 린네(2).png` },
        { name: 'HiMERU', imageDefault: `${process.env.PUBLIC_URL}/standing/20402_HiMERU(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/20402_HiMERU(2).png` },
        { name: '오우카와 코하쿠', imageDefault: `${process.env.PUBLIC_URL}/standing/20403_오우카와 코하쿠(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/20403_오우카와 코하쿠(2).png` },
        { name: '시이나 니키', imageDefault: `${process.env.PUBLIC_URL}/standing/20404_시이나 니키(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/20404_시이나 니키(2).png` },
    ],
    UNDEAD: [
        { name: '사쿠마 레이', imageDefault: `${process.env.PUBLIC_URL}/standing/30101_사쿠마 레이(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/30101_사쿠마 레이(2).png` },
        { name: '하카제 카오루', imageDefault: `${process.env.PUBLIC_URL}/standing/30102_하카제 카오루(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/30102_하카제 카오루(2).png` },
        { name: '오오가미 코가', imageDefault: `${process.env.PUBLIC_URL}/standing/30103_오오가미 코가(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/30103_오오가미 코가(2).png` },
        { name: '오토가리 아도니스', imageDefault: `${process.env.PUBLIC_URL}/standing/30104_오토가리 아도니스(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/30104_오토가리 아도니스(2).png` },
    ],
    Rabits: [
        { name: '마시로 토모야', imageDefault: `${process.env.PUBLIC_URL}/standing/30201_마시로  토모야(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/30201_마시로 토모야(2).png` },
        { name: '니토 나즈나', imageDefault: `${process.env.PUBLIC_URL}/standing/30202_니토 나즈나(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/30202_니토 나즈나(2).png` },
        { name: '텐마 미츠루', imageDefault: `${process.env.PUBLIC_URL}/standing/30203_텐마 미츠루(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/30203_텐마 미츠루(2).png` },
        { name: '시노 하지메', imageDefault: `${process.env.PUBLIC_URL}/standing/30204_시노 하지메(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/30204_시노 하지메(2).png` },
    ],
    홍월: [
        { name: '하스미 케이토', imageDefault: `${process.env.PUBLIC_URL}/standing/30301_하스미 케이토(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/30301_하스미 케이토(2).png` },
        { name: '키류 쿠로', imageDefault: `${process.env.PUBLIC_URL}/standing/30302_키류 쿠로(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/30302_키류 쿠로(2).png` },
        { name: '칸자키 소마', imageDefault: `${process.env.PUBLIC_URL}/standing/30303_칸자키 소마(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/30303_칸자키 소마(2).png` },
    ],
    Knights: [
        { name: '스오우 츠카사', imageDefault: `${process.env.PUBLIC_URL}/standing/40101_스오우 츠카사(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/40101_스오우 츠카사(2).png` },
        { name: '츠키나가 레오', imageDefault: `${process.env.PUBLIC_URL}/standing/40102_츠키나가 레오(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/40102_츠키나가 레오(2).png` },
        { name: '세나 이즈미', imageDefault: `${process.env.PUBLIC_URL}/standing/40103_세나 이즈미(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/40103_세나 이즈미(2).png` },
        { name: '사쿠마 리츠', imageDefault: `${process.env.PUBLIC_URL}/standing/40104_사쿠마 리츠(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/40104_사쿠마 리츠(2).png` },
        { name: '나루카미 아라시', imageDefault: `${process.env.PUBLIC_URL}/standing/40105_나루카미 아라시(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/40105_나루카미 아라시(2).png` },
    ],
    Switch: [
        { name: '사카사키 나츠메', imageDefault: `${process.env.PUBLIC_URL}/standing/40201_사카사키 나츠메(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/40201_사카사키 나츠메(2).png` },
        { name: '아오바 츠무기', imageDefault: `${process.env.PUBLIC_URL}/standing/40202_아오바 츠무기(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/40202_아오바 츠무기(2).png` },
        { name: '하루카와 소라', imageDefault: `${process.env.PUBLIC_URL}/standing/40203_하루카와 소라(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/40203_하루카와 소라(2).png` },
    ],
    MaM: [
        { name: '미케지마 마다라', imageDefault: `${process.env.PUBLIC_URL}/standing/40301_미케지마 마다라(1).png`, imageHover: `${process.env.PUBLIC_URL}/standing/40301_미케지마 마다라(2).png` },
    ],
};

const ProfileDetail = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const team = TEAM_DATA[name] || [];

    const goBackOrMain = () => {
        if (window.history.length > 1) navigate(-1);
        else navigate('/profileMain');
    };

    return (
        <div className="detail-wrapper">
            {/* 팀 로고 이미지 (파일명 매칭된 경우만 출력) */}
            {TEAM_LOGOS[name] && (
                <img
                    src={`${process.env.PUBLIC_URL}/logoFile/${TEAM_LOGOS[name]}`}
                    alt={name}
                    className="team-title-image"
                />
            )}

            {/* 멤버 카드 목록 */}
            <div className="team-scroll">
                {team.map((member, idx) => (
                    <HoverImageCard key={idx} member={member} />
                ))}
            </div>

            {/* ── 멤버 카드 바로 아래: 엘리베이터 홈 버튼(프로필 메인과 동일한 모양) ── */}
            <div className="elev-home-wrap" aria-hidden="false">
                <button
                    className="elev-home-btn"
                    onClick={goBackOrMain}
                    aria-label="이전 위치로 돌아가기"
                >
                    <span className="elev-dot" aria-hidden="true"></span>
                    <span className="elev-label">이전 위치로 돌아가기</span>
                </button>
            </div>
        </div>
    );
};

// 🔽 멤버 hover 시 이미지 변경 컴포넌트
const HoverImageCard = ({ member }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="person-card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={hovered ? member.imageHover : member.imageDefault} alt={member.name} />
        </div>
    );
};

export default ProfileDetail;
