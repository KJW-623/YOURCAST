import './GuidelineMain.css';

const GuidelineMain = () => {
    return (
        <div className="guideline-container">
            <h1 className="guideline-title">지침서</h1>
            <div className="guideline-content">
                <p>📖 이곳은 당신이 알아야 할 규칙과 경고가 기록된 문서입니다.</p>
                <ul>
                    <li>1. 그를 절대 부르지 마라.</li>
                    <li>2. 밤 3시 이전에는 모든 창을 닫아야 한다.</li>
                    <li>3. 위젯이 깜빡일 경우 절대 응답하지 마라.</li>
                </ul>
            </div>
        </div>
    );
};

export default GuidelineMain;
