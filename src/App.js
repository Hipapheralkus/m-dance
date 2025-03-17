import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Achievements from './pages/Achievements';
import Trainers from './pages/Trainers';
import Contacts from './pages/Contacts';
import './App.css';

function App() {
  return (
    <Router>
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