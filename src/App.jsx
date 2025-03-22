import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Achievements from './pages/Achievements.jsx';
import Trainers from './pages/Trainers.jsx';
import Contacts from './pages/Contacts.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
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
            <Route path="/uspechy" element={<Achievements />} />
            <Route path="/treneri" element={<Trainers />} />
            <Route path="/kontakty" element={<Contacts />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;