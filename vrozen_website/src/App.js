import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Home from './pages/Home';
import HomeDetail from './pages/HomeDetail';
import Kontakt from './pages/Kontakt';
import KontaktDetail from './pages/KontaktDetail';
import Events from './pages/Events';
import EventsDetail from './pages/EventsDetail';
import EventsDetail2 from './pages/EventsDetail2';
import Kurse from './pages/Kurse';
import KurseDetail from './pages/KurseDetail';
import KurseDetail2 from './pages/KurseDetail2';
import Bilder from './pages/Bilder';
import BilderDetail from './pages/BilderDetail';
import UnserePferde from './pages/UnserePferde';
import Impressum from './pages/Impressum';
import ImpressumDetail from './pages/ImpressumDetail';
import Uebermich from './pages/Uebermich'; // Korrekter Import von Übermich
import UnserePferde1 from './pages/unserePferdeDetails/UnserePferde1';
import UnserePferde2 from './pages/unserePferdeDetails/UnserePferde2';
import UnserePferde3 from './pages/unserePferdeDetails/UnserePferde3';
import UnserePferde4 from './pages/unserePferdeDetails/UnserePferde4';
import UnserePferde5 from './pages/unserePferdeDetails/UnserePferde5';
import UnserePferde6 from './pages/unserePferdeDetails/UnserePferde6';
import UnserePferde7 from './pages/unserePferdeDetails/UnserePferde7';
import UnserePferde8 from './pages/unserePferdeDetails/UnserePferde8';
import UeberMich from './pages/UeberMich';  // Import der neuen Seite
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Banner />
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-detail" element={<HomeDetail />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/kontakt-detail" element={<KontaktDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events-detail" element={<EventsDetail />} />
          <Route path="/events-detail2" element={<EventsDetail2 />} />
          <Route path="/kurse" element={<Kurse />} />
          <Route path="/kurse-detail" element={<KurseDetail />} />
          <Route path="/kurse-detail2" element={<KurseDetail2 />} />
          <Route path="/bilder" element={<Bilder />} />
          <Route path="/bilder-detail" element={<BilderDetail />} />
          <Route path="/unsere-pferde" element={<UnserePferde />} />
          <Route path="/unsere-pferde1" element={<UnserePferde1 />} />
          <Route path="/unsere-pferde2" element={<UnserePferde2 />} />
          <Route path="/unsere-pferde3" element={<UnserePferde3 />} />
          <Route path="/unsere-pferde4" element={<UnserePferde4 />} />
          <Route path="/unsere-pferde5" element={<UnserePferde5 />} />
          <Route path="/unsere-pferde6" element={<UnserePferde6 />} />
          <Route path="/unsere-pferde7" element={<UnserePferde7 />} />
          <Route path="/unsere-pferde8" element={<UnserePferde8 />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/impressum-detail" element={<ImpressumDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
