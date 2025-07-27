import React from 'react';
import './profileMain.css';
import { useNavigate } from 'react-router-dom';

const agencies = [
    {
        name: 'STARMAKER PRODUCTION',
        teams: [
            { name: 'fine', image: `${process.env.PUBLIC_URL}/logoFile/10100_fine.png` },
            { name: 'trickstar', image: `${process.env.PUBLIC_URL}/logoFile/10200_Trickstar.png` },
            { name: '유성대', image: `${process.env.PUBLIC_URL}/logoFile/10300_유성대.png` },
            { name: '알칼로이드', image: `${process.env.PUBLIC_URL}/logoFile/10400_ALKALOID.png` },
        ],
    },
    {
        name: 'COSMIC PRODUCTION',
        teams: [
            { name: 'Eden', image: `${process.env.PUBLIC_URL}/logoFile/20100_Eden.png` },
            { name: '발키리', image: `${process.env.PUBLIC_URL}/logoFile/20200_Valkyrie.png` },
            { name: '트윙크', image: `${process.env.PUBLIC_URL}/logoFile/20300_2wink.png` },
            { name: '크레이지비', image: `${process.env.PUBLIC_URL}/logoFile/20400_CrazyB.png` },
        ],
    },
    {
        name: 'Rhythm Link',
        teams: [
            { name: '언데드', image: `${process.env.PUBLIC_URL}/logoFile/30100_UNDEAD.png` },
            { name: '라빗츠', image: `${process.env.PUBLIC_URL}/logoFile/30200_Rabits.png` },
            { name: '홍월', image: `${process.env.PUBLIC_URL}/logoFile/30300_홍월.png` },
        ],
    },
    {
        name: 'NEW DIMENSION',
        teams: [
            { name: '나이츠', image: `${process.env.PUBLIC_URL}/logoFile/40100_Knights.png` },
            { name: '스위치', image: `${process.env.PUBLIC_URL}/logoFile/40200_Switch.png` },
            { name: '마무', image:  `${process.env.PUBLIC_URL}/logoFile/40300_MaM.png` },
        ],
    },
];

const ProfileMain = () => {
    const navigate = useNavigate();

    return (
        <div className="profile-container">
            <h1 className="creepy-title">CHARACTER LIST</h1>

            {agencies.map((agency, idx) => (
                <div key={idx} className="agency-block">
                    <h2 className="agency-name">{agency.name}</h2>

                    <div className="card-grid">
                        {agency.teams.map((member, mIdx) => (
                            <div
                                key={mIdx}
                                className="profile-card"
                                onClick={() => navigate(`/profile/${member.name}`)}
                            >
                                <img src={member.image} alt={member.name} className="profile-image" />
                                <span className="profile-name">{member.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProfileMain;
