import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import IntroRoute from './Intro/IntroRoute';
import Home from './Home/Home';
import ErrorPage from './Home/ErrorPage';

// ⬇️ 대소문자 일치 (파일명이 ProfileMain.js 라면 이렇게)
import ProfileMain from './Home/Profile/ProfileMain';
import ProfileDetail from './Home/Profile/ProfileDetail';

import ManualIntro from './Home/manual/ManualIntro';
import ManualMain from './Home/manual/ManualMain';

// ── Floor 메인 페이지들 ───────────────────────────
import Floor1to5 from './Home/manual/floor/Floor1to5';
import Floor6to8 from './Home/manual/floor/Floor6to8';
import Floor9to12 from './Home/manual/floor/Floor9to12';
import Floor15to20 from './Home/manual/floor/Floor15to20';
import FloorB1 from './Home/manual/floor/FloorB1';
import FloorH from './Home/manual/floor/FloorH';
import FloorMystery from './Home/manual/floor/FloorMystery';

// ── 1F 허브 & 세부 ───────────────────────────────
import Floor1Hub from './Home/manual/floor/Floor1Hub';
import Floor1Lobby from './Home/manual/floor/Floor1Lobby';
import Floor1Cafe from './Home/manual/floor/Floor1Cafe';

// ── 5F 허브 & 세부 ───────────────────────────────
import Floor5Hub from './Home/manual/floor/Floor5Hub';
import Floor5Learn from './Home/manual/floor/Floor5Learn';
import Floor5Library from './Home/manual/floor/Floor5Library';

// ── 6F 허브 & 세부 ───────────────────────────────
import Floor6Hub from './Home/manual/floor/Floor6Hub';
import Floor6Wardrobe from './Home/manual/floor/Floor6Wardrobe';

// ── 7F 허브 & 세부 ───────────────────────────────
import Floor7Hub from './Home/manual/floor/Floor7Hub';
import Floor7Clinic from './Home/manual/floor/Floor7Clinic';
import Floor7Office from './Home/manual/floor/Floor7Office';

// ── 8F 허브 & 세부 ───────────────────────────────
import Floor8Hub from './Home/manual/floor/Floor8Hub';
import Floor8Recording from './Home/manual/floor/Floor8Recording';
import Floor8Vocal from './Home/manual/floor/Floor8Vocal';
import Floor8Shower from './Home/manual/floor/Floor8Shower';
import Floor8Band from './Home/manual/floor/Floor8Band';
import Floor8MiniStudio from './Home/manual/floor/Floor8MiniStudio';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* 공통 */}
        <Route path="/" element={<IntroRoute />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<ProfileMain />} />
        <Route path="/profile/:name" element={<ProfileDetail />} />

        {/* 매뉴얼 메인 */}
        <Route path="/manual-intro" element={<ManualIntro />} />
        <Route path="/manual" element={<ManualMain />} />

        {/* ── 1~5F ───────────────────────────────── */}
        <Route path="/manual/1f" element={<Floor1to5 />} />

        {/* 1F: 허브 → (로비/카페) */}
        <Route path="/manual/1f/1" element={<Floor1Hub />} />
        <Route path="/manual/1f/1/lobby" element={<Floor1Lobby />} />
        <Route path="/manual/1f/1/cafe" element={<Floor1Cafe />} />

        {/* 5F: 허브 → (배움터/도서관) */}
        <Route path="/manual/1f/5" element={<Floor5Hub />} />
        <Route path="/manual/1f/5/learn" element={<Floor5Learn />} />
        <Route path="/manual/1f/5/library" element={<Floor5Library />} />

        {/* ⚠️ 2,3,4층: 미구현 → ErrorPage */}
        <Route path="/manual/1f/:floor" element={<ErrorPage />} />

        {/* ── 6~8F ───────────────────────────────── */}
        <Route path="/manual/6f" element={<Floor6to8 />} />

        {/* 6F */}
        <Route path="/manual/6f/6" element={<Floor6Hub />} />
        <Route path="/manual/6f/6/wardrobe" element={<Floor6Wardrobe />} />

        {/* 7F */}
        <Route path="/manual/6f/7" element={<Floor7Hub />} />
        <Route path="/manual/6f/7/office" element={<Floor7Office />} />
        <Route path="/manual/6f/7/clinic" element={<Floor7Clinic />} />

        {/* ✅ 호환용: 과거 경로로 들어오면 clinic으로 안내 */}
        <Route path="/manual/6f/7/infirmary" element={<Navigate to="/manual/6f/7/clinic" replace />} />

        {/* 8F */}
        <Route path="/manual/6f/8" element={<Floor8Hub />} />
        <Route path="/manual/6f/8/recording" element={<Floor8Recording />} />
        <Route path="/manual/6f/8/vocal" element={<Floor8Vocal />} />
        <Route path="/manual/6f/8/shower" element={<Floor8Shower />} />
        <Route path="/manual/6f/8/band" element={<Floor8Band />} />
        <Route path="/manual/6f/8/ministudio" element={<Floor8MiniStudio />} />

        {/* ── 기타 층들 ─────────────────────────── */}
        <Route path="/manual/9f" element={<Floor9to12 />} />
        <Route path="/manual/15f" element={<Floor15to20 />} />
        <Route path="/manual/b1" element={<FloorB1 />} />
        <Route path="/manual/h" element={<FloorH />} />
        {/* 경로 명확성을 원하면 /manual/mystery 로 바꾸는 것도 추천 */}
        <Route path="/manual/mis" element={<FloorMystery />} />

        {/* 마지막 와일드카드 */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
