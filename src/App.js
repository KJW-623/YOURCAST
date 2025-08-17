import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Intro
import IntroRoute from './Intro/IntroRoute';

// Common pages
import Home from './Home/Home';
import ErrorPage from './Home/ErrorPage';

// Profile (PascalCase)
import ProfileMain from './Home/Profile/ProfileMain';
import ProfileDetail from './Home/Profile/ProfileDetail';

// Manual main
import ManualIntro from './Home/manual/ManualIntro';
import ManualMain from './Home/manual/ManualMain';

// ── Group pages ─────────────────────────────────
import Floor1to5 from './Home/manual/floor/Floor1to5';
import Floor6to8 from './Home/manual/floor/Floor6to8';
import Floor9to12 from './Home/manual/floor/Floor9to12';
import Floor15to20 from './Home/manual/floor/Floor15to20';
import FloorMystery from './Home/manual/floor/FloorMystery';

// ── 1F Hub & details ────────────────────────────
import Floor1Hub from './Home/manual/floor/Floor1Hub';
import Floor1Lobby from './Home/manual/floor/Floor1Lobby';
import Floor1Cafe from './Home/manual/floor/Floor1Cafe';

// ── 5F Hub & details ────────────────────────────
import Floor5Hub from './Home/manual/floor/Floor5Hub';
import Floor5Learn from './Home/manual/floor/Floor5Learn';
import Floor5Library from './Home/manual/floor/Floor5Library';

// ── 6F Hub & details ────────────────────────────
import Floor6Hub from './Home/manual/floor/Floor6Hub';
import Floor6Wardrobe from './Home/manual/floor/Floor6Wardrobe';

// ── 7F Hub & details ────────────────────────────
import Floor7Hub from './Home/manual/floor/Floor7Hub';
import Floor7Clinic from './Home/manual/floor/Floor7Clinic';
import Floor7Office from './Home/manual/floor/Floor7Office';

// ── 8F Hub & details ────────────────────────────
import Floor8Hub from './Home/manual/floor/Floor8Hub';
import Floor8Recording from './Home/manual/floor/Floor8Recording';
import Floor8Vocal from './Home/manual/floor/Floor8Vocal';
import Floor8Shower from './Home/manual/floor/Floor8Shower';
import Floor8Band from './Home/manual/floor/Floor8Band';
import Floor8MiniStudio from './Home/manual/floor/Floor8MiniStudio';

// ── B1: Elevator → Hub → Details ───────────────
import FloorB1 from './Home/manual/floor/FloorB1';               // 엘리베이터
import FloorB1Hub from './Home/manual/floor/FloorB1Hub';         // 허브
import FloorB1Lobby from './Home/manual/floor/FloorB1Lobby';
import FloorB1LiveStage from './Home/manual/floor/FloorB1LiveStage';
import FloorB1Backstage from './Home/manual/floor/FloorB1Backstage';

// ── H (Rooftop): Elevator → Hub → Helipad ──────
import FloorH from './Home/manual/floor/FloorH';                 // 엘리베이터
import FloorHHub from './Home/manual/floor/FloorHHub';           // 허브
import FloorHHelipad from './Home/manual/floor/FloorHHelipad';   // 상세

// ── 9~12F (요청사항 반영) ──────────────────────
import Floor9Hub from './Home/manual/floor/Floor9Hub';           // 9F 허브(댄스룸 1개)
import Floor9Dance from './Home/manual/floor/Floor9Dance';       // 9F 상세

import Floor10Hub from './Home/manual/floor/Floor10Hub';         // 10F 허브
import Floor10Meeting from './Home/manual/floor/Floor10Meeting';
import Floor10Cafeteria from './Home/manual/floor/Floor10Cafeteria';

import Floor12Hub from './Home/manual/floor/Floor12Hub';         // 12F 허브(사무실+정원)
import Floor12Office from './Home/manual/floor/Floor12Office';   // 12F 상세: 사무실
import Floor12Garden from './Home/manual/floor/Floor12Garden';   // 12F 상세: 정원

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* Intro / Common */}
        <Route path="/" element={<IntroRoute />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<ProfileMain />} />
        <Route path="/profile/:name" element={<ProfileDetail />} />

        {/* Manual main */}
        <Route path="/manual-intro" element={<ManualIntro />} />
        <Route path="/manual" element={<ManualMain />} />

        {/* ── 1~5F 그룹 ───────────────────────── */}
        <Route path="/manual/1f" element={<Floor1to5 />} />

        {/* 1F: Hub → (Lobby/Cafe) */}
        <Route path="/manual/1f/1" element={<Floor1Hub />} />
        <Route path="/manual/1f/1/lobby" element={<Floor1Lobby />} />
        <Route path="/manual/1f/1/cafe" element={<Floor1Cafe />} />

        {/* 5F: Hub → (Learn/Library) */}
        <Route path="/manual/1f/5" element={<Floor5Hub />} />
        <Route path="/manual/1f/5/learn" element={<Floor5Learn />} />
        <Route path="/manual/1f/5/library" element={<Floor5Library />} />

        {/* 2,3,4층: 미구현 */}
        <Route path="/manual/1f/:floor" element={<ErrorPage />} />

        {/* ── 6~8F 그룹 ───────────────────────── */}
        <Route path="/manual/6f" element={<Floor6to8 />} />

        {/* 6F */}
        <Route path="/manual/6f/6" element={<Floor6Hub />} />
        <Route path="/manual/6f/6/wardrobe" element={<Floor6Wardrobe />} />

        {/* 7F */}
        <Route path="/manual/6f/7" element={<Floor7Hub />} />
        <Route path="/manual/6f/7/office" element={<Floor7Office />} />
        <Route path="/manual/6f/7/clinic" element={<Floor7Clinic />} />
        {/* 인퍼머리 과거 경로 호환 */}
        <Route path="/manual/6f/7/infirmary" element={<Navigate to="/manual/6f/7/clinic" replace />} />

        {/* 8F */}
        <Route path="/manual/6f/8" element={<Floor8Hub />} />
        <Route path="/manual/6f/8/recording" element={<Floor8Recording />} />
        <Route path="/manual/6f/8/vocal" element={<Floor8Vocal />} />
        <Route path="/manual/6f/8/shower" element={<Floor8Shower />} />
        <Route path="/manual/6f/8/band" element={<Floor8Band />} />
        <Route path="/manual/6f/8/ministudio" element={<Floor8MiniStudio />} />

        {/* ── 9~12F 그룹 ──────────────────────── */}
        <Route path="/manual/9f" element={<Floor9to12 />} />

        {/* 9F: 허브(카드 1개) → 댄스룸 */}
        <Route path="/manual/9f/9" element={<Floor9Hub />} />
        <Route path="/manual/9f/9/dance" element={<Floor9Dance />} />

        {/* 10F: 허브 → (미팅룸/사원식당) */}
        <Route path="/manual/9f/10" element={<Floor10Hub />} />
        <Route path="/manual/9f/10/meeting" element={<Floor10Meeting />} />
        <Route path="/manual/9f/10/cafeteria" element={<Floor10Cafeteria />} />

        {/* 11F: 에러 페이지로 연결 */}
        <Route path="/manual/9f/11" element={<ErrorPage />} />
        <Route path="/manual/9f/11/*" element={<ErrorPage />} />

        {/* 12F: 허브 → (사무실/정원) */}
        <Route path="/manual/9f/12" element={<Floor12Hub />} />
        <Route path="/manual/9f/12/office" element={<Floor12Office />} />
        <Route path="/manual/9f/12/garden" element={<Floor12Garden />} />

        {/* ── 15~20F 그룹 / H / Mystery ───────── */}
        <Route path="/manual/15f" element={<Floor15to20 />} />
        {/* Rooftop */}
        <Route path="/manual/h" element={<FloorH />} />
        <Route path="/manual/h/h" element={<FloorHHub />} />
        <Route path="/manual/h/h/helipad" element={<FloorHHelipad />} />
        {/* Mystery */}
        <Route path="/manual/mis" element={<FloorMystery />} />

        {/* ── B1: 엘리베이터 → 허브 → 상세 ────── */}
        <Route path="/manual/b1" element={<FloorB1 />} />
        <Route path="/manual/b1/b1" element={<FloorB1Hub />} />
        <Route path="/manual/b1/b1/lobby" element={<FloorB1Lobby />} />
        <Route path="/manual/b1/b1/livestage" element={<FloorB1LiveStage />} />
        <Route path="/manual/b1/b1/backstage" element={<FloorB1Backstage />} />
        {/* 레거시 호환 */}
        <Route path="/manual/b1/lobby" element={<Navigate to="/manual/b1/b1/lobby" replace />} />
        <Route path="/manual/b1/livestage" element={<Navigate to="/manual/b1/b1/livestage" replace />} />
        <Route path="/manual/b1/backstage" element={<Navigate to="/manual/b1/b1/backstage" replace />} />

        {/* 마지막 와일드카드 */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
