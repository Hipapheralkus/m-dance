import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Achievements from './pages/Achievements.jsx';
import Trainers from './pages/Trainers.jsx';
import Contacts from './pages/Contacts.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import { ENABLED_FEATURES } from './config';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Added ScrollToTop component here */}
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            {ENABLED_FEATURES.ACHIEVEMENTS && <Route path="/uspechy" element={<Achievements />} />}
  {ENABLED_FEATURES.TRAINERS && <Route path="/treneri" element={<Trainers />} />}
  {ENABLED_FEATURES.CONTACTS && <Route path="/kontakty" element={<Contacts />} />}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;