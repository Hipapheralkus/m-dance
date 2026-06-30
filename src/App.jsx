import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { ENABLED_FEATURES } from './config';
import './App.css';

const AboutUs = lazy(() => import('./pages/AboutUs.jsx'));
const Achievements = lazy(() => import('./pages/Achievements.jsx'));
const Trainers = lazy(() => import('./pages/Trainers.jsx'));
const Contacts = lazy(() => import('./pages/Contacts.jsx'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <div className="content">
          <Suspense fallback={<div className="route-fallback" aria-busy="true" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/o-nas" element={<AboutUs />} />
              {ENABLED_FEATURES.ACHIEVEMENTS && <Route path="/uspechy" element={<Achievements />} />}
              {ENABLED_FEATURES.TRAINERS && <Route path="/treneri" element={<Trainers />} />}
              {ENABLED_FEATURES.CONTACTS && <Route path="/kontakty" element={<Contacts />} />}
            </Routes>
          </Suspense>
        </div>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
    </Router>
  );
}

export default App;
