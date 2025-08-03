import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ManualMain.css';

const ManualMain = () => {
  const navigate = useNavigate();

  return (
    <div className="manualMain-container">
      <div className="image-wrapper">
        <img
          src={`${process.env.PUBLIC_URL}/ESbuilding_blue.png`}
          alt="ES Building"
          className="building-image"
        />

        {/* 1~5F */}
        <div className="button-wrapper left" style={{ top: '62.9%', left: '10%' }}>
          <div className="floor-button" onClick={() => navigate('/manual/1f')}>1~5 F</div>
        </div>

        {/* 6~8F */}
        <div className="button-wrapper left" style={{ top: '52.8%', left: '13%' }}>
          <div className="floor-button" onClick={() => navigate('/manual/6f')}>6~8 F</div>
        </div>

        {/* ??? */}
        <div className="button-wrapper left" style={{ top: '42.8%', left: '10%' }}>
          <div className="floor-button" onClick={() => navigate('/manual/6f')}> ■■■ </div>
        </div>

        {/* 9~12F */}
        <div className="button-wrapper right" style={{ top: '56%', left: '73%' }}>
          <div className="floor-button" onClick={() => navigate('/manual/9f')}>9~12 F</div>
        </div>

        {/* 15~20F */}
        <div className="button-wrapper right" style={{ top: '42.5%', left: '75%' }}>
          <div className="floor-button" onClick={() => navigate('/manual/15f')}>15~20 F</div>
        </div>

        {/* B1 */}
        <div className="button-wrapper left" style={{ top: '65.5%', left: '78%' }}>
          <div className="floor-button" onClick={() => navigate('/manual/b1')}> B1 </div>
        </div>

        {/* H */}
        <div className="button-wrapper left" style={{ top: '29%', left: '40%' }}>
          <div className="floor-button" onClick={() => navigate('/manual/H')}> H </div>
        </div>
      </div>
    </div>
  );
};

export default ManualMain;
