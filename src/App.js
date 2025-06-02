import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage';
import RoomPage from './pages/RoomPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import TermsPage from './pages/TermsPage';
import RentalsPage from './pages/RentalsPage';
import CulturalDishesPage from './pages/CulturalDishesPage';

import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage  />} />
          <Route path="/about-us" element={<AboutPage />} /> 
           <Route path="/room" element={<RoomPage />} />
           <Route path="/terms" element={<TermsPage />} />
           <Route path="/cultural-dishes" element={<CulturalDishesPage />} />
           <Route path="/vehicle-rentals" element={<RentalsPage />} />
           
           <Route path="/location" element={<LocationPage />} />
           <Route path="/gallery" element={<GalleryPage />} />
           <Route path="/contact" element={<ContactPage />} /> */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;