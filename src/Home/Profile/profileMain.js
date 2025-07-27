import React from 'react';
import './profileMain.css';
import { useNavigate } from 'react-router-dom';

const agencies = [
    {
        name: 'STARMAKER PRODUCTION',
        teams: [
            { name: 'fine', image: 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID1' },
            { name: 'trickstar', image: 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID2' },
            { name: '유성대', image: 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID3' },
            { name: '알칼로이드', image: 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID4' },
        ],
    },
    {
        name: 'COSMIC PRODUCTION',
        teams: [
            { name: 'Eden', image: 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID5' },
            { name: '발키리', image: 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID6' },
            { name: '트윙크', image: 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID7' },
            { name: '크레이지비', image: 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID8' },
        ],
    },
    {
        name: 'Rhythm Link',
        teams: [
            { name: '언데드', image: 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID9' },
            { name: '라빗츠', image: 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID10' },
            { name: '홍월', image: 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID11' },
        ],
    },
    {
        name: 'NEW DIMENSION',
        teams: [
            { name: '나이츠', image: 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID12' },
            { name: '스위치', image: 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID13' },
            { name: '마무', image: 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID14' },
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
