import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Home from './pages/Home';
import Kontakt from './pages/Kontakt';
import Events from './pages/Events';
import Kurse from './pages/Kurse';
import Bilder from './pages/Bilder';
import Anfahrt from './pages/Anfahrt';
import Impressum from './pages/Impressum';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Banner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/events" element={<Events />} />
          <Route path="/kurse" element={<Kurse />} />
          <Route path="/bilder" element={<Bilder />} />
          <Route path="/anfahrt" element={<Anfahrt />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
