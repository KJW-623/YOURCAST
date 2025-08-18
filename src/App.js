import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Intro
import IntroRoute from './Intro/IntroRoute';

// Common pages
import Home from './Home/Home';
import ErrorPage from './Home/ErrorPage';

// Profile
import ProfileMain from './Home/Profile/ProfileMain';
import ProfileDetail from './Home/Profile/ProfileDetail';

// Manual main
import ManualIntro from './Home/manual/ManualIntro';
import ManualMain from './Home/manual/ManualMain';

// Group pages
import Floor1to5 from './Home/manual/floor/Floor1to5';
import Floor6to8 from './Home/manual/floor/Floor6to8';
import Floor9to12 from './Home/manual/floor/Floor9to12';
import Floor15to20 from './Home/manual/floor/Floor15to20';
import FloorMystery from './Home/manual/floor/FloorMystery';

// 1F
import Floor1Hub from './Home/manual/floor/Floor1Hub';
import Floor1Lobby from './Home/manual/floor/Floor1Lobby';
import Floor1Cafe from './Home/manual/floor/Floor1Cafe';
import Floor5Hub from './Home/manual/floor/Floor5Hub';
import Floor5Learn from './Home/manual/floor/Floor5Learn';
import Floor5Library from './Home/manual/floor/Floor5Library';

// 6~8F
import Floor6Hub from './Home/manual/floor/Floor6Hub';
import Floor6Wardrobe from './Home/manual/floor/Floor6Wardrobe';
import Floor7Hub from './Home/manual/floor/Floor7Hub';
import Floor7Clinic from './Home/manual/floor/Floor7Clinic';
import Floor7Office from './Home/manual/floor/Floor7Office';
import Floor8Hub from './Home/manual/floor/Floor8Hub';
import Floor8Recording from './Home/manual/floor/Floor8Recording';
import Floor8Vocal from './Home/manual/floor/Floor8Vocal';
import Floor8Shower from './Home/manual/floor/Floor8Shower';
import Floor8Band from './Home/manual/floor/Floor8Band';
import Floor8MiniStudio from './Home/manual/floor/Floor8MiniStudio';

// B1
import FloorB1 from './Home/manual/floor/FloorB1';
import FloorB1Hub from './Home/manual/floor/FloorB1Hub';
import FloorB1Lobby from './Home/manual/floor/FloorB1Lobby';
import FloorB1LiveStage from './Home/manual/floor/FloorB1LiveStage';
import FloorB1Backstage from './Home/manual/floor/FloorB1Backstage';

// Rooftop
import FloorH from './Home/manual/floor/FloorH';
import FloorHHub from './Home/manual/floor/FloorHHub';
import FloorHHelipad from './Home/manual/floor/FloorHHelipad';

// 9~12F
import Floor9Hub from './Home/manual/floor/Floor9Hub';
import Floor9Dance from './Home/manual/floor/Floor9Dance';
import Floor10Hub from './Home/manual/floor/Floor10Hub';
import Floor10Meeting from './Home/manual/floor/Floor10Meeting';
import Floor10Cafeteria from './Home/manual/floor/Floor10Cafeteria';
import Floor12Hub from './Home/manual/floor/Floor12Hub';
import Floor12Office from './Home/manual/floor/Floor12Office';
import Floor12Garden from './Home/manual/floor/Floor12Garden';

// 15~20F (UPDATED)
import Floor15Hub from './Home/manual/floor/Floor15Hub';
import Floor15Training from './Home/manual/floor/Floor15Training';
import Floor15Stand from './Home/manual/floor/Floor15Stand';
import Floor18Hub from './Home/manual/floor/Floor18Hub';
import Floor18Office from './Home/manual/floor/Floor18Office';
import Floor19Hub from './Home/manual/floor/Floor19Hub';
import Floor19Resting from './Home/manual/floor/Floor19Resting';
import Floor20Hub from './Home/manual/floor/Floor20Hub';
import Floor20Office from './Home/manual/floor/Floor20Office';
import Floor20Reception from './Home/manual/floor/Floor20Reception';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* Intro / Common */}
        <Route path="/" element={<IntroRoute />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<ProfileMain />} />
        <Route path="/profile/:name" element={<ProfileDetail />} />

        {/* Manual */}
        <Route path="/manual-intro" element={<ManualIntro />} />
        <Route path="/manual" element={<ManualMain />} />

        {/* 1~5F */}
        <Route path="/manual/1f" element={<Floor1to5 />} />
        <Route path="/manual/1f/1" element={<Floor1Hub />} />
        <Route path="/manual/1f/1/lobby" element={<Floor1Lobby />} />
        <Route path="/manual/1f/1/cafe" element={<Floor1Cafe />} />
        <Route path="/manual/1f/5" element={<Floor5Hub />} />
        <Route path="/manual/1f/5/learn" element={<Floor5Learn />} />
        <Route path="/manual/1f/5/library" element={<Floor5Library />} />
        <Route path="/manual/1f/:floor" element={<ErrorPage />} />

        {/* 6~8F */}
        <Route path="/manual/6f" element={<Floor6to8 />} />
        <Route path="/manual/6f/6" element={<Floor6Hub />} />
        <Route path="/manual/6f/6/wardrobe" element={<Floor6Wardrobe />} />
        <Route path="/manual/6f/7" element={<Floor7Hub />} />
        <Route path="/manual/6f/7/office" element={<Floor7Office />} />
        <Route path="/manual/6f/7/clinic" element={<Floor7Clinic />} />
        <Route path="/manual/6f/7/infirmary" element={<Navigate to="/manual/6f/7/clinic" replace />} />
        <Route path="/manual/6f/8" element={<Floor8Hub />} />
        <Route path="/manual/6f/8/recording" element={<Floor8Recording />} />
        <Route path="/manual/6f/8/vocal" element={<Floor8Vocal />} />
        <Route path="/manual/6f/8/shower" element={<Floor8Shower />} />
        <Route path="/manual/6f/8/band" element={<Floor8Band />} />
        <Route path="/manual/6f/8/ministudio" element={<Floor8MiniStudio />} />

        {/* 9~12F */}
        <Route path="/manual/9f" element={<Floor9to12 />} />
        <Route path="/manual/9f/9" element={<Floor9Hub />} />
        <Route path="/manual/9f/9/dance" element={<Floor9Dance />} />
        <Route path="/manual/9f/10" element={<Floor10Hub />} />
        <Route path="/manual/9f/10/meeting" element={<Floor10Meeting />} />
        <Route path="/manual/9f/10/cafeteria" element={<Floor10Cafeteria />} />
        <Route path="/manual/9f/11" element={<ErrorPage />} />
        <Route path="/manual/9f/11/*" element={<ErrorPage />} />
        <Route path="/manual/9f/12" element={<Floor12Hub />} />
        <Route path="/manual/9f/12/office" element={<Floor12Office />} />
        <Route path="/manual/9f/12/garden" element={<Floor12Garden />} />

        {/* 15~20F */}
        <Route path="/manual/15f" element={<Floor15to20 />} />

        {/* 15F: 허브 → (트레이닝 룸 / 스탠드 앞) */}
        <Route path="/manual/15f/15" element={<Floor15Hub />} />
        <Route path="/manual/15f/15/training" element={<Floor15Training />} />
        <Route path="/manual/15f/15/stand" element={<Floor15Stand />} />

        {/* 16F / 17F → Error */}
        <Route path="/manual/15f/16" element={<ErrorPage />} />
        <Route path="/manual/15f/16/*" element={<ErrorPage />} />
        <Route path="/manual/15f/17" element={<ErrorPage />} />
        <Route path="/manual/15f/17/*" element={<ErrorPage />} />

        {/* 18F: COSMIC PRODUCTION 사무실 */}
        <Route path="/manual/15f/18" element={<Floor18Hub />} />
        <Route path="/manual/15f/18/office" element={<Floor18Office />} />

        {/* 19F: 레스팅룸 */}
        <Route path="/manual/15f/19" element={<Floor19Hub />} />
        <Route path="/manual/15f/19/resting" element={<Floor19Resting />} />

        {/* 20F: STARMAKER 사무실 / 응접실 */}
        <Route path="/manual/15f/20" element={<Floor20Hub />} />
        <Route path="/manual/15f/20/office" element={<Floor20Office />} />
        <Route path="/manual/15f/20/reception" element={<Floor20Reception />} />

        {/* Rooftop / B1 / 기타 */}
        <Route path="/manual/h" element={<FloorH />} />
        <Route path="/manual/h/h" element={<FloorHHub />} />
        <Route path="/manual/h/h/helipad" element={<FloorHHelipad />} />
        <Route path="/manual/mystery" element={<FloorMystery />} />

        <Route path="/manual/b1" element={<FloorB1 />} />
        <Route path="/manual/b1/b1" element={<FloorB1Hub />} />
        <Route path="/manual/b1/b1/lobby" element={<FloorB1Lobby />} />
        <Route path="/manual/b1/b1/livestage" element={<FloorB1LiveStage />} />
        <Route path="/manual/b1/b1/backstage" element={<FloorB1Backstage />} />
        <Route path="/manual/b1/lobby" element={<Navigate to="/manual/b1/b1/lobby" replace />} />
        <Route path="/manual/b1/livestage" element={<Navigate to="/manual/b1/b1/livestage" replace />} />
        <Route path="/manual/b1/backstage" element={<Navigate to="/manual/b1/b1/backstage" replace />} />

        {/* 마지막 */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
