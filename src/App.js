import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroRoute from './Intro/IntroRoute';
import Home from './Home/Home';
import ErrorPage from './Home/ErrorPage';
import ProfileMain from './Home/Profile/profileMain';
import ProfileDetail from './Home/Profile/ProfileDetail';
import GuidelineMain from './Home/Guideline/GuidelineMain';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<IntroRoute />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/profile" element={<ProfileMain />} />
        <Route path="/profile/:name" element={<ProfileDetail />} />
        <Route path="/guideline" element={<GuidelineMain />} />
      </Routes>
    </Router>
  );
}

export default App;
