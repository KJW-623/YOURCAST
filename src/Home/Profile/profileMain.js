import React from 'react';
import './profileMain.css';
import { useNavigate } from 'react-router-dom';

const agencies = [
    {
        name: 'STARMAKER PRODUCTION',
        teams: [
            { name: 'fine', image: `${process.env.PUBLIC_URL}/logoFile/fine.png` },
            { name: 'Trickstar', image: `${process.env.PUBLIC_URL}/logoFile/Trickstar.png` },
            { name: '유성대', image: `${process.env.PUBLIC_URL}/logoFile/유성대.png` },
            { name: 'ALKALOID', image: `${process.env.PUBLIC_URL}/logoFile/ALKALOID.png` },
        ],
    },
    {
        name: 'COSMIC PRODUCTION',
        teams: [
            { name: 'Eden', image: `${process.env.PUBLIC_URL}/logoFile/Eden.png` },
            { name: 'Valkyrie', image: `${process.env.PUBLIC_URL}/logoFile/Valkyrie.png` },
            { name: 'Twink', image: `${process.env.PUBLIC_URL}/logoFile/Twink.png` },
            { name: 'CrazyB', image: `${process.env.PUBLIC_URL}/logoFile/CrazyB.png` },
        ],
    },
    {
        name: 'Rhythm Link',
        teams: [
            { name: 'UNDEAD', image: `${process.env.PUBLIC_URL}/logoFile/UNDEAD.png` },
            { name: 'Rabits', image: `${process.env.PUBLIC_URL}/logoFile/Rabits.png` },
            { name: '홍월', image: `${process.env.PUBLIC_URL}/logoFile/홍월.png` },
        ],
    },
    {
        name: 'NEW DIMENSION',
        teams: [
            { name: 'Knights', image: `${process.env.PUBLIC_URL}/logoFile/Knights.png` },
            { name: 'Switch', image: `${process.env.PUBLIC_URL}/logoFile/Switch.png` },
            { name: 'MaM', image:  `${process.env.PUBLIC_URL}/logoFile/MaM.png` },
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
