import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Home from './pages/Home';
import HomeDetail from './pages/HomeDetail';
import Kontakt from './pages/Kontakt';
import KontaktDetail from './pages/KontaktDetail';
import Events from './pages/Events';
import EventsDetail from './pages/EventsDetail';
import Kurse from './pages/Kurse';
import KurseDetail from './pages/KurseDetail';
import Bilder from './pages/Bilder';
import BilderDetail from './pages/BilderDetail';
import Anfahrt from './pages/Anfahrt';
import AnfahrtDetail from './pages/AnfahrtDetail';
import Impressum from './pages/Impressum';
import ImpressumDetail from './pages/ImpressumDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Banner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-detail" element={<HomeDetail />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/kontakt-detail" element={<KontaktDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events-detail" element={<EventsDetail />} />
          <Route path="/kurse" element={<Kurse />} />
          <Route path="/kurse-detail" element={<KurseDetail />} />
          <Route path="/bilder" element={<Bilder />} />
          <Route path="/bilder-detail" element={<BilderDetail />} />
          <Route path="/anfahrt" element={<Anfahrt />} />
          <Route path="/anfahrt-detail" element={<AnfahrtDetail />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/impressum-detail" element={<ImpressumDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
