import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [time, setTime] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const update = () => {
            const now = new Date();
            const formatted = now.toLocaleTimeString('ko-KR', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            });
            setTime(formatted);
        };

        update();
        const timer = setInterval(update, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="home-container">
            <div className="creepy-clock">{time}</div>

            <div className="widget-grid">
                <div className="widget-card" onClick={() => navigate('/profile')}>
                    👥
                </div>
                <div className="widget-card" onClick={() => navigate('/guideline')}>📜</div>
            </div>
        </div>
    );
};

export default Home;
