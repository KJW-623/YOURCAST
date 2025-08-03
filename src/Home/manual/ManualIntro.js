import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ManualIntro.css';

const ManualIntro = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const enterTimeout = setTimeout(() => {
      setLoaded(true);
    }, 100);

    const navigateTimeout = setTimeout(() => {
      navigate('/manual');
    }, 3000);

    return () => {
      clearTimeout(enterTimeout);
      clearTimeout(navigateTimeout);
    };
  }, [navigate]);

  return (
    <div className={`manual-wrapper ${loaded ? 'loaded' : ''}`}>
      <div className="glitch-overlay"></div>
      <img
        src={`${process.env.PUBLIC_URL}/ESbuilding.png`}
        alt="creepy building"
        className="ESbuilding"
      />
    </div>
  );
};

export default ManualIntro;
